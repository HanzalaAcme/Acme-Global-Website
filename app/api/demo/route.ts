import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const data = await req.formData();

    /* =========================
       FORM DATA
    ========================= */

    const name =
      (data.get("name") as string) || "";

    const company =
      (data.get("company") as string) || "";

    const phone =
      (data.get("phone") as string) || "";

    const email =
      (data.get("email") as string) || "";

    const requirements =
      (data.get("requirements") as string) || "";

    // MULTIPLE SERVICES
    const services =
      data.getAll("services") as string[];

    /* =========================
       VALIDATION
    ========================= */

    if (
      !name ||
      !company ||
      !email
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
        `"ACME Global Demo" <${process.env.EMAIL_USER}>`,

      to:
        process.env.EMAIL_USER,

      replyTo: email,

      subject:
        `New Demo Request — ${company}`,

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
            New Demo Request
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

        
            </tr>

          </table>

          ${
            requirements
              ? `
            <div style="margin-top: 30px;">

              <h3
                style="
                  margin-bottom: 12px;
                  color: #111827;
                "
              >
                Requirements / Notes
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
          `
              : ""
          }

          <p
            style="
              margin-top: 32px;
              color: #6B7280;
              font-size: 14px;
            "
          >
            This request was submitted from the ACME Global demo page.
          </p>

        </div>
      `,
    });

    /* =========================
       SUCCESS
    ========================= */

    return NextResponse.json({
      success: true,
      message:
        "Demo request submitted successfully.",
    });

  } catch (error) {

    console.error(
      "DEMO FORM ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}