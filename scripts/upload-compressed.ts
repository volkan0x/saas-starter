import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { readFileSync } from 'fs';
import { lookup } from 'mime-types';
import { config } from 'dotenv';
import { join } from 'path';

config({ path: join(process.cwd(), '.env.local') });

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!
  }
});

const files = [
  'Burger.mp4',
  'Gallerima_1.mp4',
  'Gallerima_3.mp4',
  'downloaded_video.mp4',
  'final_video.mp4',
  'gallerima3.mp4',
  'influencer_video.mp4',
  'video1feedbird_first13sec.mp4',
  'vimeo-video-original.mp4'
];

async function uploadAll() {
  for (const file of files) {
    const buf = readFileSync(`public/${file}`);
    await client.send(new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME || 'ajans99-media',
      Key: file,
      Body: buf,
      ContentType: lookup(file) || 'video/mp4',
      CacheControl: 'public, max-age=31536000, immutable'
    }));
    console.log('✅', file, `(${(buf.length/1024/1024).toFixed(1)}MB)`);
  }
  console.log('\n🎉 Tüm sıkıştırılmış videolar yüklendi!');
}

uploadAll();
