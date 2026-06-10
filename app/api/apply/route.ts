import { sendEmail } from "@/lib/send-email";

import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

import { uploadToS3 }
from "@/lib/upload-to-s3";

import { getS3FileUrl }
from "@/lib/get-s3-url";



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

      const job_id=
      (data.get(
        "job_id"
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
      !job_id ||
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

    /* EMAIL VALIDATION */

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

    /* FILE SIZE VALIDATION */

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

    /* AWS S3 UPLOAD */

        let resumeUrl = "";

        try {

          resumeUrl =
            await uploadToS3(

              file,

              "applications/resumes"
            );

        } catch (s3Error) {

          console.error(
            "S3 Upload Error:",
            s3Error
          );

          return NextResponse.json(

            {
              success: false,

              message:
                "Resume upload failed.",
            },

            {
              status: 500,
            }
          );
        }

    /* SAVE TO AWS RDS VIA PRISMA */

    const resumePreviewUrl =
       await getS3FileUrl(
    resumeUrl
  );


    const application =
      await prisma.application.create({

        data: {

          full_name,

          email,

          phone,

          role,

          job_id,

          location,

          experience,

          linkedin_url:
            linkedin,

          cover_letter:
            comments,

          resume_url:
            resumeUrl,

          status: "new",
        },
      });

    /* SEND EMAIL */

    await sendEmail({

      from:
        `"ACME Global Hub Careers" <${process.env.HR_EMAIL}>`,

      to:
        process.env.HR_EMAIL!,

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
                Job ID
              </td>

              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                "
              >
                ${job_id}
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

            <tr>
              <td
                style="
                  padding: 12px;
                  border: 1px solid #E5E7EB;
                  font-weight: bold;
                "
              >
                Linkedin
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

          </table>

          ${
            comments
              ? `
              <div style="margin-top:28px;">
                <h3>Comments</h3>

                <p
                  style="
                    line-height:28px;
                    color:#4B5563;
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
              margin-top:28px;
              color:#6B7280;
            "
          >
            📎 Resume attached with this email.
          </p>

           <p>

      <a
        href="${resumePreviewUrl}"
        target="_blank"
        style="
          background:#1A4FD6;
          color:white;
          padding:12px 20px;
          text-decoration:none;
          border-radius:8px;
        "
      >

        View Resume

      </a>

    </p>

        </div>
      `,

      
    });

    /* SUCCESS */

    return NextResponse.json({

      success: true,

      application,

      message:
        "Application submitted successfully.",
    });

  } catch (error) {

    console.error(
      "APPLY ERROR:",
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