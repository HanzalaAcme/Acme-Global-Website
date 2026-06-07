import {
  PutObjectCommand,
} from "@aws-sdk/client-s3";

import { s3 }
from "./s3";

export async function uploadToS3(

  file: File,

  folder: string
) {

  const bytes =
    await file.arrayBuffer();

  const buffer =
    Buffer.from(bytes);

  const fileName =
    `${Date.now()}-${file.name}`;

  // S3 OBJECT KEY

  const key =
    `${folder}/${fileName}`;

  await s3.send(

    new PutObjectCommand({

      Bucket:
        process.env
          .AWS_BUCKET_NAME!,

      Key: key,

      Body: buffer,

      ContentType:
        file.type,
    })
  );

  // RETURN ONLY KEY

  return key;
}