import { S3Client, PutObjectCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative, extname } from 'path';
import { lookup } from 'mime-types';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: join(process.cwd(), '.env.local') });

const MEDIA_EXTENSIONS = [
  '.webm', '.mp4', '.mov', '.avi', '.mkv',
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'
];

interface UploadResult {
  localPath: string;
  r2Url: string;
  size: number;
}

// R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID!;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID!;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY!;
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME || 'ajans99-media';
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL!; // Your custom domain or R2.dev URL

// Create S3 client for R2
const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

function getAllMediaFiles(dir: string, files: string[] = []): string[] {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    
    // Skip certain directories
    if (item === 'node_modules' || item === '.next' || item === '.git' || 
        item === 'compressed' || item === '.temp-compressed') continue;
    
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllMediaFiles(fullPath, files);
    } else {
      const ext = item.substring(item.lastIndexOf('.')).toLowerCase();
      if (MEDIA_EXTENSIONS.includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  
  return files;
}

async function uploadFile(filePath: string, rootDir: string): Promise<UploadResult> {
  const relativePath = relative(rootDir, filePath);
  const fileBuffer = readFileSync(filePath);
  const stat = statSync(filePath);
  const contentType = lookup(filePath) || 'application/octet-stream';
  
  console.log(`⬆️  Uploading: ${relativePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: relativePath,
    Body: fileBuffer,
    ContentType: contentType,
    // Enable caching for better performance
    CacheControl: 'public, max-age=31536000, immutable',
  });
  
  await r2Client.send(command);
  
  const r2Url = `${R2_PUBLIC_URL}/${relativePath}`;
  console.log(`✅ Uploaded: ${r2Url}`);
  
  return {
    localPath: relativePath,
    r2Url,
    size: stat.size,
  };
}

async function listExistingFiles(): Promise<Set<string>> {
  const existingFiles = new Set<string>();
  
  try {
    let continuationToken: string | undefined;
    
    do {
      const command = new ListObjectsV2Command({
        Bucket: R2_BUCKET_NAME,
        ContinuationToken: continuationToken,
      });
      
      const response = await r2Client.send(command);
      
      if (response.Contents) {
        for (const obj of response.Contents) {
          if (obj.Key) {
            existingFiles.add(obj.Key);
          }
        }
      }
      
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);
    
  } catch (error) {
    console.log('⚠️  Could not list existing files (bucket may be empty)');
  }
  
  return existingFiles;
}

async function main() {
  const args = process.argv.slice(2);
  const skipExisting = !args.includes('--force');
  
  // Validate environment variables
  if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_PUBLIC_URL) {
    console.error('❌ Missing required environment variables:');
    console.error('   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_PUBLIC_URL');
    console.error('\nPlease add them to your .env.local file:');
    console.error(`
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=ajans99-media
R2_PUBLIC_URL=https://your-bucket.your-account.r2.dev
`);
    process.exit(1);
  }
  
  const rootDir = process.cwd();
  const publicDir = join(rootDir, 'public');
  
  console.log('🌩️  Cloudflare R2 Media Upload\n');
  console.log('='.repeat(50));
  console.log(`📦 Bucket: ${R2_BUCKET_NAME}`);
  console.log(`🌐 Public URL: ${R2_PUBLIC_URL}\n`);
  
  // Get existing files to skip
  let existingFiles = new Set<string>();
  if (skipExisting) {
    console.log('🔍 Checking existing files...');
    existingFiles = await listExistingFiles();
    console.log(`📁 Found ${existingFiles.size} existing files in R2\n`);
  }
  
  console.log('🔍 Finding local media files...\n');
  
  const mediaFiles = getAllMediaFiles(publicDir);
  
  console.log(`📁 Found ${mediaFiles.length} local media files\n`);
  
  const results: UploadResult[] = [];
  let totalSize = 0;
  let skippedCount = 0;
  
  for (const file of mediaFiles) {
    const relativePath = relative(publicDir, file);
    
    // Skip if already exists
    if (skipExisting && existingFiles.has(relativePath)) {
      console.log(`⏭️  Skipping (exists): ${relativePath}`);
      skippedCount++;
      continue;
    }
    
    try {
      const result = await uploadFile(file, publicDir);
      results.push(result);
      totalSize += result.size;
    } catch (error) {
      console.error(`❌ Failed to upload ${file}:`, error);
    }
  }
  
  // Save mapping file
  const mapping = results.reduce((acc, r) => {
    acc[`/${r.localPath}`] = r.r2Url;
    return acc;
  }, {} as Record<string, string>);
  
  // Load existing mapping and merge
  let existingMapping: Record<string, string> = {};
  try {
    existingMapping = JSON.parse(readFileSync(join(rootDir, 'r2-urls.json'), 'utf-8'));
  } catch {}
  
  const finalMapping = { ...existingMapping, ...mapping };
  
  writeFileSync(
    join(rootDir, 'r2-urls.json'),
    JSON.stringify(finalMapping, null, 2)
  );
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Uploaded ${results.length} files`);
  console.log(`⏭️  Skipped ${skippedCount} existing files`);
  console.log(`📦 Total uploaded: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📄 URL mapping saved to r2-urls.json`);
  console.log('\n💡 Update your media-urls.ts with the R2 base URL:');
  console.log(`   const R2_BASE = "${R2_PUBLIC_URL}";`);
}

main().catch(console.error);
