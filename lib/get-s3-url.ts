import {
  GetObjectCommand,
} from "@aws-sdk/client-s3";

import {
  getSignedUrl,
} from "@aws-sdk/s3-request-presigner";

import { getS3Client }
from "./s3";

export async function getS3FileUrl(
  key: string
) {

  const command =
    new GetObjectCommand({

      Bucket:
        process.env
          .AWS_BUCKET_NAME!,

      Key: key,
    });

  const signedUrl =
    await getSignedUrl(

      getS3Client(),

      command,

      {
        expiresIn: 60 *60 * 24, // 1 day
      }
    );

  return signedUrl;
}