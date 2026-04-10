import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const file = fs.readFileSync('/Users/volfcan/ajans99/public/Blockchain.webm');
console.log('Dosya boyutu:', (file.length / 1024).toFixed(1) + 'KB');

async function upload() {
  await client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: 'Blockchain.webm',
    Body: file,
    ContentType: 'video/webm',
  }));
  console.log('✅ Blockchain.webm R2\'ye yüklendi!');
  console.log('URL: https://pub-d7ec1a8fa14f4570abdeff8e1cb2012e.r2.dev/Blockchain.webm');
}

upload().catch(err => {
  console.log('❌ Yükleme başarısız:', err.message);
});
