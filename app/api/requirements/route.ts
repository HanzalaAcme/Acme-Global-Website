import { transporter } from "@/lib/mail";

import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const data =
      await req.formData();

    /* =========================
       EXTRACT DATA
    ========================= */

    const serviceType =
      (data.get("serviceType") as string) || "";

    const name =
      (data.get("name") as string) || "";

    const email =
      (data.get("email") as string) || "";

    const phone =
      (data.get("phone") as string) || "";

    const company =
      (data.get("company") as string) || "";

    const requirements =
      (data.get("requirements") as string) || "";

    /* =========================
       VALIDATION
    ========================= */

    if (
      !serviceType ||
      !name ||
      !email ||
      !company ||
      !requirements
    ) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    /* =========================
       SEND EMAIL
    ========================= */

    await transporter.sendMail({

      from:
        `"ACME Requirements" <${process.env.EMAIL_USER}>`,

      to:
        process.env.EMAIL_USER,

      replyTo: email,

      subject:
        `New Requirement — ${serviceType}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            padding: 20px;
            color: #111827;
          "
        >

          <h2
            style="
              color: #1A4FD6;
              margin-bottom: 24px;
            "
          >
            New Service Requirement
          </h2>

          <table
            style="
              border-collapse: collapse;
              width: 100%;
            "
          >

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                  width: 180px;
                "
              >
                Service
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${serviceType}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                "
              >
                Name
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${name}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                "
              >
                Company
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${company}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                "
              >
                Email
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${email}
              </td>
            </tr>

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                "
              >
                Phone
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${phone || "Not provided"}
              </td>
            </tr>

          </table>

          <div style="margin-top: 30px;">

            <h3
              style="
                margin-bottom: 12px;
                color: #111827;
              "
            >
              Requirements
            </h3>

            <p
              style="
                line-height: 28px;
                color: #4B5563;
              "
            >
              ${requirements}
            </p>

          </div>

        </div>
      `,
    });

    /* =========================
       SUCCESS
    ========================= */

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(
      "REQUIREMENTS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to submit request.",
      },
      { status: 500 }
    );
  }
}