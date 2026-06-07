import { NextResponse }
from "next/server";

import { prisma }
from "@/lib/prisma";

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

    return NextResponse.json({

      success: true,

      data: partner,
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