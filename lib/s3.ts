import { S3Client }
from "@aws-sdk/client-s3";

const s3Config: ConstructorParameters<typeof S3Client>[0] = {
  region: process.env.AWS_REGION,
};

if (
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY
) {
  s3Config.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
}

export const s3 = new S3Client(s3Config);