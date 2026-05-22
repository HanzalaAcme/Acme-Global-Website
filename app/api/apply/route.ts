import cloudinary from "@/lib/cloudinary";

import { transporter } from "@/lib/mail";

import { NextResponse } from "next/server";

import { Readable } from "stream";

import { createClient }
from "@supabase/supabase-js";

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

    /* FORM DATA */

    const application_type =
      (data.get(
        "application_type"
      ) as string) || "generic";

    const job_slug =
      (data.get(
        "job_slug"
      ) as string) || "";

    const role =
      (data.get(
        "role"
      ) as string) || "";

    const full_name =
      (data.get(
        "full_name"
      ) as string) || "";

    const email =
      (data.get(
        "email"
      ) as string) || "";

    const phone =
      (data.get(
        "phone"
      ) as string) || "";

    const location =
      (data.get(
        "location"
      ) as string) || "";

    const experience =
      (data.get(
        "experience"
      ) as string) || "";

    const linkedin =
      (data.get(
        "linkedin"
      ) as string) || "";

    const comments =
      (data.get(
        "comments"
      ) as string) || "";

    const file =
      data.get("resume") as File;

    /* REQUIRED VALIDATION */

    if (
      !full_name ||
      !email ||
      !phone ||
      !role ||
      !location ||
      !file
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

    /* FILE VALIDATION */

    const allowedTypes = [

      "application/pdf",

      "application/msword",

      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Only PDF, DOC, DOCX files are allowed.",
        },

        { status: 400 }
      );
    }

    /* FILE SIZE */

    if (
      file.size >
      5 * 1024 * 1024
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "File size too large. Max 5MB allowed.",
        },

        { status: 400 }
      );
    }

    /* FILE BUFFER */

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    /* CLOUDINARY UPLOAD */

    let resumeUrl = "";

    try {

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
                    "applications/resumes",

                  public_id:
                    `${Date.now()}-${file.name}`,
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

      resumeUrl =
        upload.secure_url;

    } catch (
      cloudinaryError
    ) {

      console.error(
        "Cloudinary Upload Error:",
        cloudinaryError
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "Resume upload failed.",
        },

        { status: 500 }
      );
    }

    /* SAVE TO SUPABASE */

    const {
      error: dbError,
    } = await supabase

      .from("applications")

      .insert([
        {
          application_type,

          job_slug,

          role,

          full_name,

          email,

          phone,

          location,

          experience,

          linkedin,

          comments,

          resume_url:
            resumeUrl,

          status: "new",
        },
      ]);

    if (dbError) {

      console.error(
        "SUPABASE ERROR:",
        dbError
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "Database error.",
        },

        { status: 500 }
      );
    }

    /* SEND EMAIL */

    await transporter.sendMail({

      from:
        `"ACME Global Careers" <${process.env.EMAIL_USER}>`,

      to:
        process.env.HR_EMAIL,

      replyTo: email,

      subject:
        `New Application — ${role}`,

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
              margin-bottom: 20px;
            "
          >
            New Candidate Application
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
                Application Type
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${application_type}
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
                ${full_name}
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
                ${phone}
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
                Role
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${role}
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
                Location
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${location}
              </td>
            </tr>

            ${
              experience
                ? `
              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #E5E7EB;
                    font-weight: bold;
                  "
                >
                  Experience
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #E5E7EB;
                  "
                >
                  ${experience}
                </td>
              </tr>
            `
                : ""
            }

            ${
              linkedin
                ? `
              <tr>
                <td
                  style="
                    padding: 12px;
                    border: 1px solid #E5E7EB;
                    font-weight: bold;
                  "
                >
                  LinkedIn
                </td>

                <td
                  style="
                    padding: 12px;
                    border: 1px solid #E5E7EB;
                  "
                >
                  ${linkedin}
                </td>
              </tr>
            `
                : ""
            }

          </table>

          ${
            comments
              ? `
            <div style="margin-top: 28px;">

              <h3
                style="
                  margin-bottom: 12px;
                "
              >
                Comments
              </h3>

              <p
                style="
                  line-height: 28px;
                  color: #4B5563;
                "
              >
                ${comments}
              </p>

            </div>
          `
              : ""
          }

          <p
            style="
              margin-top: 28px;
              color: #6B7280;
            "
          >
            📎 Resume attached with this email.
          </p>

        </div>
      `,

      attachments: [
        {
          filename:
            file.name,

          content:
            buffer,

          contentType:
            file.type,
        },
      ],
    });

    /* SUCCESS */

    return NextResponse.json({

      success: true,

      message:
        "Application submitted successfully.",
    });

  } catch (err) {

    console.error(
      "APPLY ERROR:",
      err
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