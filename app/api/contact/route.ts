import { NextResponse } from "next/server";
import { transporter } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // EMAIL FORMAT VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address",
        },
        { status: 400 }
      );
    }

    // SEND EMAIL
    await transporter.sendMail({
      from: `"ACME Global Website" <${process.env.EMAIL_USER}>`,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Contact Form Submission from ${firstName} ${lastName}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">

          <h2 style="color:#1A4FD6;">
            New Contact Form Submission
          </h2>

          <table style="border-collapse: collapse; width: 100%;">

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <strong>First Name</strong>
              </td>

              <td style="padding:10px; border:1px solid #ddd;">
                ${firstName}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <strong>Last Name</strong>
              </td>

              <td style="padding:10px; border:1px solid #ddd;">
                ${lastName}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <strong>Email</strong>
              </td>

              <td style="padding:10px; border:1px solid #ddd;">
                ${email}
              </td>
            </tr>

            <tr>
              <td style="padding:10px; border:1px solid #ddd;">
                <strong>Phone</strong>
              </td>

              <td style="padding:10px; border:1px solid #ddd;">
                ${phone}
              </td>
            </tr>

          </table>

          <div style="margin-top:20px;">
            <h3>Message</h3>

            <p style="line-height:28px; color:#444;">
              ${message}
            </p>
          </div>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.error("CONTACT FORM ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}