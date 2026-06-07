import { NextResponse }
from "next/server";

import { prisma }
from "@/lib/prisma";

export async function GET() {

  try {

    const applications =
      await prisma.application.findMany({

        orderBy: {
          created_at: "desc",
        },
      });

    return NextResponse.json({

      success: true,

      data: applications,
    });

  } catch (err) {

    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },

      {
        status: 500,
      }
    );
  }
}