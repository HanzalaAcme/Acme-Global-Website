import {
  SESClient,
} from "@aws-sdk/client-ses";

const sesConfig: ConstructorParameters<typeof SESClient>[0] = {
  region: process.env.AWS_REGION,
};

if (
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY
) {
  sesConfig.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };
}

export const ses = new SESClient(sesConfig);