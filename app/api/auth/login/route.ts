import { NextResponse }
from "next/server";

import bcrypt
from "bcryptjs";

import jwt
from "jsonwebtoken";

import { prisma }
from "@/lib/prisma";

export async function POST(
  req: Request
) {

  try {

    const {
      email,
      password,
    } =
      await req.json();

    const admin =
      await prisma.admin.findUnique({

        where: {
          email,
        },
      });

      

    if (!admin) {

      return NextResponse.json(

        {
          success: false,
          message:
            "Invalid credentials",
        },

        {
          status: 401,
        }
      );
    }

    const validPassword =
      await bcrypt.compare(

        password,

        admin.password
      );

    if (!validPassword) {

      return NextResponse.json(

        {
          success: false,
          message:
            "Invalid credentials",
        },

        {
          status: 401,
        }
      );
    }

    const token =
      jwt.sign(

        {

          adminId:
            admin.id,

          email:
            admin.email,

          role:
            admin.role,
        },

        process.env
          .JWT_SECRET!,
         {
          expiresIn: "1d",
         } 

      );

    const response =
      NextResponse.json({

        success: true,
      });

      response.cookies.set(

      "admin_token",

      token,

      {

        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite:
          "strict",

        path: "/",
      }
    );

    return response;

  } catch {

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