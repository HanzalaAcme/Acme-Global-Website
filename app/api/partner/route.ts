import { NextResponse }
from "next/server";

import { createClient }
from "@supabase/supabase-js";

import { transporter }
from "@/lib/mail";

import cloudinary from "@/lib/cloudinary";

import { Readable } from "stream";

const supabase =
  createClient(

    process.env
      .NEXT_PUBLIC_SUPABASE_URL!,

    process.env
      .SUPABASE_SERVICE_ROLE_KEY!
  );

export async function POST(
  req: Request
) {

  try {

    const data =
      await req.formData();

    const company_name =
      data.get(
        "company_name"
      ) as string;

    const contact_person =
      data.get(
        "contact_person"
      ) as string;

    const email =
      data.get(
        "email"
      ) as string;

    const phone =
      data.get(
        "phone"
      ) as string;

    const country =
      data.get(
        "country"
      ) as string;

    const website =
      data.get(
        "website"
      ) as string;

    const partnership_type =
      data.get(
        "partnership_type"
      ) as string;

    const message =
      data.get(
        "message"
      ) as string;

      const company_overview =
  data.get(
    "company_overview"
  ) as string;

const brochure =
  data.get(
    "brochure"
  ) as File;

    // VALIDATION
    if (
      !company_name ||
      !contact_person ||
      !email ||
      !phone ||
      !country ||
      !partnership_type ||
      !company_overview ||
      !brochure
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


//cloudinary upload
            let brochure_url = "";

if (
  brochure &&
  brochure.size > 0
) {

  const bytes =
    await brochure.arrayBuffer();

  const buffer =
    Buffer.from(bytes);

  const upload: any =
    await new Promise(
      (
        resolve,
        reject
      ) => {

        const stream =
          cloudinary.uploader.upload_stream(

            {
              resource_type: "raw",

              folder:
                "partners/brochures",

              public_id:
                `${Date.now()}-${brochure.name}`,
            },

            (
              err,
              result
            ) => {

              if (err)
                reject(err);

              else
                resolve(result);
            }
          );

        Readable
          .from(buffer)
          .pipe(stream);
      }
    );

  brochure_url =
    upload.secure_url;
}
    

    // SAVE TO SUPABASE
    const {
      error,
    } = await supabase

      .from(
        "partner_applications"
      )

      .insert([
        {
          company_name,

          contact_person,

          email,

          phone,

          country,

          website,

          partnership_type,

          company_overview,

          brochure_url,

          status: "new",
        },
      ]);

    if (error) {

      console.error(error);

      return NextResponse.json(
        {
          success: false,

          message:
            error.message,
        },

        { status: 500 }
      );
    }

    // SEND EMAIL
    await transporter.sendMail({

      from:
        `"ACME Global Partners" <${process.env.EMAIL_USER}>`,

      to:
        process.env.HR_EMAIL,

      replyTo: email,

      subject:
        `New Partner Request — ${company_name}`,

            html: `
  <div
    style="
      font-family: Arial, sans-serif;
      color: #111827;
      padding: 24px;
    "
  >

    <h2
      style="
        color: #1A4FD6;
        margin-bottom: 24px;
      "
    >
      New Partnership Inquiry
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
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
            width:220px;
          "
        >
          Company Name
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${company_name}
        </td>
      </tr>

      <tr>
        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
          "
        >
          Contact Person
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${contact_person}
        </td>
      </tr>

      <tr>
        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
          "
        >
          Business Email
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${email}
        </td>
      </tr>

      <tr>
        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
          "
        >
          Phone Number
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${phone}
        </td>
      </tr>

      <tr>
        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
          "
        >
          Headquarters Location
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${country}
        </td>
      </tr>

      ${
        website
          ? `
        <tr>
          <td
            style="
              border:1px solid #E5E7EB;
              padding:12px;
              font-weight:bold;
            "
          >
            Website
          </td>

          <td
            style="
              border:1px solid #E5E7EB;
              padding:12px;
            "
          >
            ${website}
          </td>
        </tr>
      `
          : ""
      }

      <tr>
        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
            font-weight:bold;
          "
        >
          Partnership Interest
        </td>

        <td
          style="
            border:1px solid #E5E7EB;
            padding:12px;
          "
        >
          ${partnership_type}
        </td>
      </tr>

    </table>

    ${
      company_overview
        ? `
      <div style="margin-top:32px;">

        <h3
          style="
            margin-bottom:14px;
            color:#0B1120;
          "
        >
          Company Overview
        </h3>

        <div
          style="
            background:#F8FAFC;
            border:1px solid #E5E7EB;
            border-radius:12px;
            padding:18px;
            line-height:28px;
            color:#4B5563;
          "
        >
          ${company_overview}
        </div>

      </div>
    `
        : ""
    }

    ${
      brochure_url
        ? `
      <div style="margin-top:30px;">

        <h3
          style="
            margin-bottom:12px;
            color:#0B1120;
          "
        >
          Company Brochure
        </h3>

        <a
          href="${brochure_url}"

          style="
            display:inline-block;
            padding:12px 18px;
            background:#1A4FD6;
            color:white;
            text-decoration:none;
            border-radius:10px;
            font-weight:600;
          "
        >
          View Uploaded Brochure
        </a>

      </div>
    `
        : ""
    }

  </div>
`,
              attachments:
  brochure &&
  brochure.size > 0
    ? [
        {
          filename:
            brochure.name,

          content:
            Buffer.from(
              await brochure.arrayBuffer()
            ),

          contentType:
            brochure.type,
        },
      ]
    : [],
        

        
    });

    return NextResponse.json({

      success: true,
    });

  } catch (err) {

    console.error(err);

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong.",
      },

      { status: 500 }
    );
  }
}