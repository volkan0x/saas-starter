import { put } from '@vercel/blob';
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative } from 'path';

const MEDIA_EXTENSIONS = [
  '.webm', '.mp4', '.mov', '.avi', '.mkv',
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.ico'
];

interface UploadResult {
  localPath: string;
  blobUrl: string;
  size: number;
}

function getAllMediaFiles(dir: string, files: string[] = []): string[] {
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    
    // Skip node_modules, .next, .git
    if (item === 'node_modules' || item === '.next' || item === '.git') continue;
    
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
  
  console.log(`⬆️  Uploading: ${relativePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  
  // Vercel Blob requires 'access' - your store must be configured as 'public' in Vercel Dashboard
  const blob = await put(relativePath, fileBuffer, {
    access: 'public',
    addRandomSuffix: false,
  });
  
  console.log(`✅ Uploaded: ${blob.url}`);
  
  return {
    localPath: relativePath,
    blobUrl: blob.url,
    size: stat.size,
  };
}

async function main() {
  const rootDir = process.cwd();
  const publicDir = join(rootDir, 'public');
  
  console.log('🔍 Finding media files...\n');
  
  // Only scan public directory
  const mediaFiles = getAllMediaFiles(publicDir);
  
  console.log(`📁 Found ${mediaFiles.length} media files\n`);
  
  const results: UploadResult[] = [];
  let totalSize = 0;
  
  for (const file of mediaFiles) {
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
    acc[`/${r.localPath}`] = r.blobUrl;
    return acc;
  }, {} as Record<string, string>);
  
  writeFileSync(
    join(rootDir, 'blob-urls.json'),
    JSON.stringify(mapping, null, 2)
  );
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Uploaded ${results.length} files`);
  console.log(`📦 Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📄 URL mapping saved to blob-urls.json`);
}

main().catch(console.error);
