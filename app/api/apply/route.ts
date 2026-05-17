import { db } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {

  try {

    const data = await req.formData();

    /* FORM DATA */

    // BASIC FORM
    const basicName =
      (data.get("name") as string) || "";

    // DETAILED FORM
    const firstName =
      (data.get("firstName") as string) || "";

    const lastName =
      (data.get("lastName") as string) || "";

    // MERGED NAME
    const fullName =
      `${firstName} ${lastName}`.trim();

    const name =
      fullName || basicName;

    const email =
      (data.get("email") as string) || "";

    const phone =
      (data.get("phone") as string) || "";

    const role =
      (data.get("role") as string) || "";

    const experience =
      (data.get("experience") as string) || "";

    const message =
      (data.get("message") as string) || "";

    const file =
      data.get("resume") as File;

    /* REQUIRED VALIDATION */

    if (
      !name ||
      !email ||
      !phone ||
      !role ||
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

    if (!allowedTypes.includes(file.type)) {

      return NextResponse.json(
        {
          success: false,
          message:
            "Only PDF, DOC, DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    /* FILE SIZE VALIDATION 5MB MAX */

    if (file.size > 5 * 1024 * 1024) {

      return NextResponse.json(
        {
          success: false,
          message:
            "File size too large. Max size is 5MB.",
        },
        { status: 400 }
      );
    }

    /* FILE BUFFER */

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    /* CLOUDINARY BACKUP */

    let resumeUrl = "";

    try {

      const upload: any =
        await new Promise(
          (resolve, reject) => {

            const stream =
              cloudinary.uploader.upload_stream(
                {
                  resource_type: "raw",

                  folder: "resumes",

                  public_id:
                    `${Date.now()}-${file.name}`,
                },

                (err, result) => {

                  if (err) reject(err);
                  else resolve(result);
                }
              );

            Readable
              .from(buffer)
              .pipe(stream);
          }
        );

      resumeUrl = upload.secure_url;

    } catch (cloudinaryError) {

      console.error(
        "Cloudinary Upload Error:",
        cloudinaryError
      );

      // continue even if cloudinary fails
    }

    /* MYSQL SAVE OPTIONAL */

    try {

      // Uncomment if DB is connected

      /*
      await db.query(
        `
          INSERT INTO applications
          (
            name,
            email,
            phone,
            role,
            experience,
            message,
            resume_url
          )
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [
          name,
          email,
          phone,
          role,
          experience,
          message,
          resumeUrl,
        ]
      );
      */

    } catch (dbError) {

      console.error(
        "Database Error:",
        dbError
      );

      // continue even if DB fails
    }

    /* SEND EMAIL */

    await transporter.sendMail({

      from:
        `"ACME Global Careers" <${process.env.EMAIL_USER}>`,

      to:
        process.env.HR_EMAIL,

      replyTo: email,

      subject:
        `New Job Application — ${role}`,

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
            New Job Application
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

          </table>

          ${
            message
              ? `
            <div style="margin-top: 28px;">

              <h3
                style="
                  margin-bottom: 12px;
                "
              >
                Cover Letter / Message
              </h3>

              <p
                style="
                  line-height: 28px;
                  color: #4B5563;
                "
              >
                ${message}
              </p>

            </div>
          `
              : ""
          }

          ${
            resumeUrl
              ? `
            <div style="margin-top: 28px;">

              <a
                href="${resumeUrl}"
                target="_blank"
                style="
                  display: inline-block;
                  padding: 12px 18px;
                  background: #1A4FD6;
                  color: white;
                  text-decoration: none;
                  border-radius: 8px;
                  font-weight: 600;
                "
              >
                View Resume Backup
              </a>

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
          filename: file.name,

          content: buffer,

          contentType: file.type,
        },
      ],
    });

    /* SUCCESS RESPONSE */

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