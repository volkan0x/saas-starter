import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
import { config } from 'dotenv';
import { join } from 'path';

// Load .env.local
config({ path: join(process.cwd(), '.env.local') });

async function testConnection() {
  console.log('🔍 Testing R2 connection...\n');
  
  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  const bucketName = process.env.R2_BUCKET_NAME;
  const publicUrl = process.env.R2_PUBLIC_URL;
  
  console.log('📋 Configuration:');
  console.log(`   Account ID: ${accountId ? '✅ Set' : '❌ Missing'}`);
  console.log(`   Access Key ID: ${accessKeyId ? '✅ Set (' + accessKeyId.slice(0,8) + '...)' : '❌ Missing'}`);
  console.log(`   Secret Access Key: ${secretAccessKey ? '✅ Set' : '❌ Missing'}`);
  console.log(`   Bucket Name: ${bucketName || '❌ Missing'}`);
  console.log(`   Public URL: ${publicUrl || '❌ Missing'}`);
  console.log('');
  
  if (!accountId || !accessKeyId || !secretAccessKey) {
    console.error('❌ Missing required credentials!');
    process.exit(1);
  }
  
  const client = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
  
  try {
    const response = await client.send(new ListBucketsCommand({}));
    console.log('✅ Connection successful!');
    console.log('📦 Available buckets:', response.Buckets?.map(b => b.Name).join(', ') || 'None');
  } catch (error: any) {
    console.error('❌ Connection failed:', error.message);
    if (error.message.includes('InvalidAccessKeyId')) {
      console.error('   → Access Key ID is invalid');
    } else if (error.message.includes('SignatureDoesNotMatch')) {
      console.error('   → Secret Access Key is invalid');
    }
  }
}

testConnection();
