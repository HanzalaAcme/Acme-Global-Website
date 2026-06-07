import { NextResponse }
from "next/server";

import { prisma }
from "@/lib/prisma";

export async function GET() {

  try {

    const partners =
      await prisma.partnerApplication.findMany({

        orderBy: {
          created_at: "desc",
        },
      });

    return NextResponse.json({

      success: true,

      data: partners,
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