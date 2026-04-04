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
  const file = fs.readFileSync("public/arsa_compressed.webp");
  await client.send(new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME || "bozkurt",
    Key: "arsa_compressed.webp",
    Body: file,
    ContentType: "image/webp",
  }));
  console.log("✅ arsa_compressed.webp R2'ye yüklendi");
}

main();
