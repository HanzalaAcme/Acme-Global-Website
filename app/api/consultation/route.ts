import { NextResponse } from "next/server";

import { transporter } from "@/lib/mail";

export async function POST(req: Request) {

  try {

    const data = await req.formData();

    const full_name =
      data.get("full_name") as string;

    const company =
      data.get("company") as string;

    const email =
      data.get("email") as string;

    const phone =
      data.get("phone") as string;

    const service_type =
      data.get("service_type") as string;

    const requirements =
      data.get("requirements") as string;

    /* VALIDATION */
    if (
      !full_name ||
      !company ||
      !email ||
      !phone ||
      !service_type
    ) {

      return NextResponse.json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    /* SEND EMAIL */
    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      replyTo: email,

      subject: `New Consultation Request - ${service_type}`,

      html: `
        <div style="font-family:Arial;padding:20px">

          <h2>New Consultation Request</h2>

          <p>
            <strong>Full Name:</strong>
            ${full_name}
          </p>

          <p>
            <strong>Company Name:</strong>
            ${company}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone}
          </p>

          <p>
            <strong>Service Type:</strong>
            ${service_type}
          </p>

          <p>
            <strong>Requirements:</strong>
          </p>

          <p>
            ${requirements || "-"}
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(
      "CONSULTATION ERROR:",
      error
    );

    return NextResponse.json({
      success: false,
      message: "Failed to send consultation request.",
    });
  }
}