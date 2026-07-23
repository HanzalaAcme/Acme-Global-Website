import { S3Client } from "@aws-sdk/client-s3";

export function getS3Client() {
  const config: ConstructorParameters<typeof S3Client>[0] = {
    region: process.env.AWS_REGION,
  };

  if (
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY
  ) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };
  }

  return new S3Client(config);
}