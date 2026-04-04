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

// Yüklenecek yeni dosyalar
const files = [
  { name: "TheKreatif.webm", type: "video/webm" },
  { name: "TheKreatif2.webm", type: "video/webm" },
  { name: "AradiginFirma.webm", type: "video/webm" },
  { name: "Paparinho.webm", type: "video/webm" },
  { name: "TheKreatif.webp", type: "image/webp" },
  { name: "TheKreatif2.webp", type: "image/webp" },
  { name: "AradiginFirma.webp", type: "image/webp" },
  { name: "Paparinho.webp", type: "image/webp" },
];

async function uploadFile(fileName: string, contentType: string) {
  const filePath = path.join(PUBLIC_DIR, fileName);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${fileName} bulunamadı, atlanıyor`);
    return;
  }

  const file = fs.readFileSync(filePath);
  const sizeInKB = (file.length / 1024).toFixed(1);
  const sizeDisplay = file.length > 1024 * 1024 
    ? `${(file.length / 1024 / 1024).toFixed(1)}MB` 
    : `${sizeInKB}KB`;
  
  try {
    await client.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: fileName,
      Body: file,
      ContentType: contentType,
    }));
    console.log(`✅ ${fileName} (${sizeDisplay}) yüklendi`);
  } catch (error) {
    console.error(`❌ ${fileName} yüklenemedi:`, error);
  }
}

async function main() {
  console.log("🚀 Yeni videoları R2'ye yüklüyorum...\n");
  
  for (const file of files) {
    await uploadFile(file.name, file.type);
  }
  
  console.log("\n✨ Tamamlandı!");
  console.log("\n📋 R2 URL'leri:");
  const BASE = "https://pub-d7ec1a8fa14f4570abdeff8e1cb2012e.r2.dev";
  for (const file of files) {
    console.log(`  ${file.name}: ${BASE}/${file.name}`);
  }
}

main();
