import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// .env.local dosyasını yükle
dotenv.config({ path: ".env.local" });

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const BUCKET = process.env.R2_BUCKET_NAME || "ajans99";
const PUBLIC_DIR = "/Users/volfcan/scripts/ajans99/public";

// Sıkıştırılmış videoları yükle
const videos = [
  "gallerima3.mp4",
  "downloaded_video.mp4",
  "vimeo-video-original.mp4",
  "Gallerima_1.mp4",
  "Gallerima_3.mp4",
  "influencer_video.mp4",
  "Burger.mp4",
  "video1feedbird_first13sec.mp4",
  "final_video.mp4"
];

async function uploadFile(fileName: string) {
  const filePath = path.join(PUBLIC_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${fileName} bulunamadı, atlanıyor`);
    return;
  }

  const file = fs.readFileSync(filePath);
  const sizeInMB = (file.length / 1024 / 1024).toFixed(1);
  
  const key = `video/${fileName}`;
  
  try {
    await client.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: file,
      ContentType: "video/mp4",
    }));
    console.log(`✅ ${fileName} (${sizeInMB}MB) yüklendi → ${key}`);
  } catch (error) {
    console.error(`❌ ${fileName} yüklenemedi:`, error);
  }
}

async function main() {
  console.log("🚀 Videoları R2'ye yüklüyorum...\n");
  
  for (const video of videos) {
    await uploadFile(video);
  }
  
  console.log("\n✨ Tamamlandı!");
}

main();
