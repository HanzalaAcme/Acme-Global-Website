import { NextResponse }
from "next/server";

import { prisma }
from "@/lib/prisma";

import { getS3FileUrl }
from "@/lib/get-s3-url";

export async function GET(

  req: Request,

  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {

  try {

    const { id } =
      await context.params;

    // GET APPLICATION

    const application =
      await prisma.application.findUnique({

        where: {
          id,
        },
      });

    if (
      !application ||
      !application.resume_url
    ) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Resume not found",
        },

        {
          status: 404,
        }
      );
    }

    // GENERATE TEMPORARY URL

    const signedUrl =
      await getS3FileUrl(

        application.resume_url
      );

    return NextResponse.json({

      success: true,

      url: signedUrl,
    });

  } catch (err) {

    console.log(err);

    return NextResponse.json(

      {
        success: false,

        message:
          "Something went wrong",
      },

      {
        status: 500,
      }
    );
  }
}