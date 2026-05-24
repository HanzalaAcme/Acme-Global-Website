import { NextResponse } from "next/server";

import { createClient }
from "@supabase/supabase-js";

import { transporter }
from "@/lib/mail";

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

    const body =
      await req.json();

    const {
      id,
      status,
      notes,
      interview_date,
      interview_link,
    } = body;

    // ========================================
    // GET CANDIDATE
    // ========================================

    const {
      data: candidate,
      error: fetchError,
    } =
      await supabase

        .from("applications")

        .select("*")

        .eq("id", id)

        .single();

    if (
      fetchError ||
      !candidate
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Candidate not found",
        },

        {
          status: 404,
        }
      );
    }

    // ========================================
    // UPDATE APPLICATION
    // ========================================

    const { error } =
      await supabase

        .from("applications")

        .update({

          status,

          notes,

          interview_date,

          interview_link,
        })

        .eq("id", id);

    if (error) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Failed to update",
        },

        {
          status: 500,
        }
      );
    }

    // ========================================
    // SEND INTERVIEW EMAIL
    // ========================================

    if (
      status ===
        "interview scheduled" &&

      interview_date &&

      interview_link
    ) {

      const formattedDate =
        new Date(
          interview_date
        ).toLocaleString(
          "en-IN",
          {

            dateStyle: "full",

            timeStyle: "short",
          }
        );

      await transporter.sendMail({

        from:
          `"ACME Global HR" <${process.env.EMAIL_USER}>`,

        to:
          candidate.email,

        subject:
          `Interview Scheduled – ${candidate.role || "Application"} | ACME Global`,

        html: `

          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="
              color: #1A4FD6;
              margin-bottom: 20px;
            ">
              Interview Scheduled
            </h2>

            <p>
              Dear
              <strong>
                ${candidate.full_name}
              </strong>,
            </p>

            <p style="
              line-height: 28px;
            ">
              Thank you for applying at
              ACME Global.

              We are pleased to inform
              you that your interview
              has been scheduled.
            </p>

            <div style="
              background: #F8FAFC;
              border-radius: 16px;
              padding: 20px;
              margin-top: 25px;
            ">

              <p>
                <strong>
                  Position:
                </strong>
                ${candidate.role}
              </p>

              <p>
                <strong>
                  Interview Date:
                </strong>
                ${formattedDate}
              </p>

              <p>
                <strong>
                  Meeting Link:
                </strong>
              </p>

              <a
                href="${interview_link}"
                style="
                  color: #1A4FD6;
                  word-break: break-all;
                "
              >
                ${interview_link}
              </a>

            </div>

            <p style="
              margin-top: 30px;
              line-height: 28px;
            ">
              Please join the meeting
              5–10 minutes before the
              scheduled time.
            </p>

            <p style="
              margin-top: 30px;
            ">
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `,
      });
    }

    return NextResponse.json({
      success: true,
    });

  } catch (err) {

    console.log(err);

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