import {
  SendEmailCommand,
} from "@aws-sdk/client-ses";

import { getSESClient }
from "./ses";

type SendEmailProps = {

  to: string;

  subject: string;

  html: string;

  from?: string;

  replyTo?: string;
};

export async function sendEmail({

  to,

  subject,

  html,

  from,

  replyTo,

}: SendEmailProps) {

  const command =
    new SendEmailCommand({

      Source:

        from ||

        process.env
          .HR_EMAIL!,

      Destination: {

        ToAddresses: [to],
      },


          ReplyToAddresses:
      replyTo
        ? [replyTo]
        : undefined,

      Message: {

        Subject: {

          Data: subject,
        },

        Body: {

          Html: {

            Data: html,
          },
        },
      },
    });

  const ses = getSESClient();
  return await ses.send(
    command
  );
}