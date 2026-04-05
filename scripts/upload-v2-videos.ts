import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as fs from "fs";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

const files = [
  { name: "TheKreatif_v2.webm", type: "video/webm" },
  { name: "TheKreatif2_v2.webm", type: "video/webm" },
  { name: "AradiginFirma_v2.webm", type: "video/webm" },
];

async function upload(fileName: string, contentType: string) {
  const file = fs.readFileSync(`public/${fileName}`);
  const sizeInMB = (file.length / 1024 / 1024).toFixed(1);
  
  await client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: fileName,
    Body: file,
    ContentType: contentType,
  }));
  console.log(`✅ ${fileName} (${sizeInMB}MB) yüklendi`);
}

async function main() {
  console.log("🚀 Cache-bust videoları yüklüyorum...\n");
  for (const f of files) {
    await upload(f.name, f.type);
  }
  console.log("\n✨ Tamamlandı!");
}

main();
