import { db } from "@/lib/db";
import cloudinary from "@/lib/cloudinary";
import { transporter } from "@/lib/mail";
import { NextResponse } from "next/server";
import { Readable } from "stream";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const role = data.get("role") as string;
    const file = data.get("resume") as File;

    // VALIDATION
    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" });
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({
        success: false,
        message: "Only PDF, DOC, DOCX files allowed",
      });
    }

    // FILE SIZE LIMIT (5MB recommended)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({
        success: false,
        message: "File too large (max 5MB)",
      });
    }

    // BUFFER (SAFE FOR ATTACHMENT + UPLOAD)
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // OPTIONAL: Upload to Cloudinary (backup)
    const upload: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          resource_type: "raw",
          folder: "resumes",
          public_id: `${Date.now()}-${file.name}`,
        },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );

      Readable.from(buffer).pipe(stream);
    });

    const resumeUrl = upload.secure_url; // stored for future use

    // SAVE TO MYSQL
    await db.query(
      "INSERT INTO applications (name, email, phone, role, resume_url) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, role, resumeUrl]
    );

    // SEND EMAIL WITH ATTACHMENT
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Job Application",
      html: `
        <h2>New Job Application</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Role:</b> ${role}</p>

        <p style="margin-top:10px;">
          📎 Resume is attached with this email.
        </p>
      `,
      attachments: [
        {
          filename: file.name,     // original filename
          content: buffer,         // actual file buffer
          contentType: file.type,  // ensures correct format
        },
      ],
    });

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    return NextResponse.json({ success: false });
  }
}