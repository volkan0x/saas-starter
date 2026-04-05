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

async function main() {
  const file = fs.readFileSync("public/Paparinho_v2.webm");
  console.log(`Paparinho_v2.webm boyut: ${(file.length / 1024 / 1024).toFixed(2)}MB`);

  await client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: "Paparinho_v2.webm",
    Body: file,
    ContentType: "video/webm",
  }));
  console.log("✅ Paparinho_v2.webm R2'ye yüklendi");
}

main();
