import { SESClient } from "@aws-sdk/client-ses";

export function getSESClient() {
  const config: ConstructorParameters<typeof SESClient>[0] = {
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

  return new SESClient(config);
}