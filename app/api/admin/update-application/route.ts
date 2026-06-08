import { NextResponse }
from "next/server";

import { prisma }
from "@/lib/prisma";

import { transporter }
from "@/lib/mail";

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
    // VALIDATION
    // ========================================

    if (!id) {

      return NextResponse.json(

        {
          success: false,

          message:
            "Application ID missing",
        },

        {
          status: 400,
        }
      );
    }

    // ========================================
    // GET APPLICATION
    // ========================================

    const candidate =
      await prisma.application.findUnique({

        where: {
          id,
        },
      });

    if (!candidate) {

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

    const updatedCandidate =
      await prisma.application.update({

        where: {
          id,
        },

        data: {

          status,

          notes:
            notes || null,

          interview_date:
            interview_date
              ? new Date(
                  interview_date
                )
              : null,

          interview_link:
            interview_link || null,
        },
      });

    // ========================================
    // SEND INTERVIEW EMAIL
    // ========================================

    const shouldSendInterviewMail =

      interview_date &&
      interview_link &&
      (
        status ===
          "interview scheduled" ||

        status ===
          "interviewed"
      );

    if (
      shouldSendInterviewMail
    ) {

      const formattedDate =
        new Date(
          interview_date
        ).toLocaleString(
          "en-IN",

          {
            dateStyle: "full",

            timeStyle: "short",

            timeZone:
              "Asia/Kolkata",
          }
        );

      await transporter.sendMail({

        from:
          `"ACME Global Hub HR" <${process.env.HR_EMAIL}>`,

        to:
          candidate.email,

        subject:
          `Interview Scheduled – ${candidate.role || "Application"} | ACME Global Hub`,

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
              ACME Global Hub.

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

    // ========================================
    // SUCCESS
    // ========================================

    return NextResponse.json({

      success: true,

      data:
        updatedCandidate,
    });

  } catch (err) {

    console.log(
      "UPDATE APPLICATION ERROR:",
      err
    );

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