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

    // NEXT 15/16 FIX
    const { id } =
      await context.params;

    const application =
      await prisma.application.findUnique({

        where: {
          id,
        },
      });

    if (!application) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Application not found",
        },

        {
          status: 404,
        }
      );
    }

    return NextResponse.json({

      success: true,

      data: application,
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