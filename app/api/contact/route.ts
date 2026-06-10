import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

import { sendEmail } from "@/lib/send-email";

export async function POST(
  req: Request
) {

  try {

    const body =
      await req.json();

    const {
      firstName,
      lastName,
      phone,
      email,
      message,
    } = body;

    // VALIDATION

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !message
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "All fields are required",
        },

        {
          status: 400,
        }
      );
    }

    // EMAIL VALIDATION

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(email)
    ) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Invalid email address.",
        },

        {
          status: 400,
        }
      );
    }

    // INSERT INTO DATABASE

    const contact =
      await prisma.contact.create({

        data: {

          first_name:
            firstName,

          last_name:
            lastName,

          phone,

          email,

          message,
        },
      });

    // ========================================
    // SEND EMAIL VIA AWS SES
    // ========================================

    await sendEmail({

      from:
     `"ACME Global Hub Contact" <${process.env.HR_EMAIL}>`,

      to:
        process.env
          .HR_EMAIL!,


      subject:
        `New Contact Form Submission from ${firstName} ${lastName}`,

      html: `

        <div style="
          font-family: Arial, sans-serif;
          padding: 20px;
          color: #111827;
        ">

          <h2 style="
            color:#1A4FD6;
            margin-bottom:20px;
          ">
            New Contact Form Submission
          </h2>

          <table
            style="
              border-collapse: collapse;
              width: 100%;
            "
          >

            <tr>
              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                <strong>First Name</strong>
              </td>

              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                ${firstName}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                <strong>Last Name</strong>
              </td>

              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                ${lastName}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                <strong>Email</strong>
              </td>

              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                <strong>Phone</strong>
              </td>

              <td style="
                padding:10px;
                border:1px solid #ddd;
              ">
                ${phone}
              </td>
            </tr>

          </table>

          <div style="margin-top:20px;">

            <h3>
              Message
            </h3>

            <p style="
              line-height:28px;
              color:#444;
            ">
              ${message}
            </p>

          </div>

        </div>
      `,
    });

    // SUCCESS

    return NextResponse.json({

      success: true,

      contact,

      message:
        "Thank you for reaching out! We have received your message and will get back to you shortly.",
    });

  } catch (error) {

    console.error(
      "CONTACT FORM ERROR:",
      error
    );

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