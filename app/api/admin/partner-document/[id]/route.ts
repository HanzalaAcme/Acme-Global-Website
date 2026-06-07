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

    // GET QUERY PARAM

    const { searchParams } =
      new URL(req.url);

    const type =
      searchParams.get("type");

    // GET PARTNER

    const partner =
      await prisma.partnerApplication.findUnique({

        where: {
          id,
        },
      });

    if (!partner) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Partner not found",
        },

        {
          status: 404,
        }
      );
    }

    // DETERMINE FILE KEY

    let fileKey = "";

    switch (type) {

      case "company-profile":

        fileKey =
          partner.company_profile_url || "";

        break;

      case "capability":

        fileKey =
          partner.capability_presentation_url || "";

        break;

      case "certifications":

        fileKey =
          partner.certifications_document_url || "";

        break;

      case "signature":

        fileKey =
          partner.signature_url || "";

        break;

      case "seal":

        fileKey =
          partner.company_seal_url || "";

        break;

      default:

        return NextResponse.json(

          {
            success: false,

            message:
              "Invalid document type",
          },

          {
            status: 400,
          }
        );
    }

    if (!fileKey) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Document not found",
        },

        {
          status: 404,
        }
      );
    }

    // GENERATE TEMP URL

    const signedUrl =
      await getS3FileUrl(
        fileKey
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