import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";

import { transporter } from "@/lib/mail";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

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
    } = await supabase
      .from("applications")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !candidate) {

      return NextResponse.json(
        {
          success: false,
          message: "Candidate not found",
        },
        {
          status: 404,
        }
      );
    }

    // ========================================
    // UPDATE APPLICATION
    // ========================================

    const { error } = await supabase
      .from("applications")
      .update({
        status,
        notes,
        interview_date,
        interview_link,
        status_updated_at: new Date(),
      })
      .eq("id", id);

    if (error) {

      return NextResponse.json(
        {
          success: false,
          message: "Failed to update application",
        },
        {
          status: 500,
        }
      );
    }

    // ========================================
    // EMAIL TEMPLATE VARIABLES
    // ========================================

    let subject = "";
    let html = "";

    const candidateName =
      candidate.full_name || "Candidate";

    const role =
      candidate.role || "Application";

    // ========================================
    // FORMAT DATE
    // ========================================
let formattedDate = "";

if (interview_date) {

  const date =
    new Date(interview_date);

  const day =
    date.toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
      }
    );

  const fullDate =
    date.toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  const time =
    date.toLocaleTimeString(
      "en-IN",
      {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }
    );

  formattedDate =
    `${day}, ${fullDate} at ${time}`;
}

    // ========================================
    // STATUS BASED EMAILS
    // ========================================

    switch (status) {

      // ========================================
      // REVIEWING
      // ========================================

      case "reviewing":

        subject =
          `Application Under Review | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#1A4FD6;">
              Application Under Review
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              Thank you for applying for the
              <strong>${role}</strong> position
              at ACME Global Hub.

              Your profile is currently under
              review by our recruitment team.
            </p>

            <p style="line-height:28px;">
              We appreciate your interest and
              will update you regarding the
              next steps soon.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // SHORTLISTED
      // ========================================

      case "shortlisted":

        subject =
          `You Have Been Shortlisted | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#1A4FD6;">
              Congratulations!
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              We are pleased to inform you that
              you have been shortlisted for the
              <strong>${role}</strong> position
              at ACME Global Hub.
            </p>

            <p style="line-height:28px;">
              Our HR team will contact you soon
              regarding the next stages of the
              recruitment process.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // INTERVIEW SCHEDULED
      // ========================================

      case "interview scheduled":

        if (!interview_date || !interview_link) {

          return NextResponse.json(
            {
              success: false,
              message:
                "Interview date and link are required",
            },
            {
              status: 400,
            }
          );
        }

        subject =
          `Interview Scheduled | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#1A4FD6;">
              Interview Scheduled
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              Your interview for the
              <strong>${role}</strong> position
              has been scheduled.
            </p>

            <div style="
              background:#F8FAFC;
              padding:20px;
              border-radius:16px;
              margin-top:20px;
            ">

              <p>
                <strong>Date & Time:</strong>
                ${formattedDate}
              </p>

              <p>
                <strong>Meeting Link:</strong>
              </p>

              <a
                href="${interview_link}"
                style="
                  color:#1A4FD6;
                  word-break:break-all;
                "
              >
                ${interview_link}
              </a>

            </div>

            <p style="margin-top:25px;">
              Please join the meeting
              5–10 minutes before the
              scheduled time.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // INTERVIEW CANCELLED
      // ========================================

      case "interview cancelled":

        subject =
          `Interview Update | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#DC2626;">
              Interview Cancelled
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              We would like to inform you that
              the scheduled interview for the
              <strong>${role}</strong> position
              has been cancelled/rescheduled.
            </p>

            <p style="line-height:28px;">
              Our HR team will reach out to you
              shortly with further updates.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // INTERVIEWED
      // ========================================

      case "interviewed":

        subject =
          `Interview Completed | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#1A4FD6;">
              Interview Completed
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              Thank you for attending the
              interview for the
              <strong>${role}</strong> position.
            </p>

            <p style="line-height:28px;">
              Our team is currently reviewing
              your interview feedback and will
              update you shortly.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // SELECTED
      // ========================================

      case "selected":

        subject =
          `Congratulations! You Have Been Selected`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#16A34A;">
              Congratulations!
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              We are delighted to inform you
              that you have been selected for
              the <strong>${role}</strong>
              position at ACME Global Hub.
            </p>

            <p style="line-height:28px;">
              Our HR team will contact you soon
              regarding the onboarding process
              and further formalities.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // HIRED
      // ========================================

      case "hired":

        subject =
          `Welcome to ACME Global Hub`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#16A34A;">
              Welcome Aboard!
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              Congratulations on being hired
              for the
              <strong>${role}</strong> position
              at ACME Global Hub.
            </p>

            <p style="line-height:28px;">
              We are excited to have you join
              our organization and wish you a
              successful journey ahead.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      // ========================================
      // REJECTED
      // ========================================

      case "rejected":

        subject =
          `Application Update | ${role}`;

        html = `
          <div style="
            font-family: Arial;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="color:#DC2626;">
              Application Update
            </h2>

            <p>
              Dear <strong>${candidateName}</strong>,
            </p>

            <p style="line-height:28px;">
              Thank you for your interest in
              the <strong>${role}</strong>
              position at ACME Global Hub.
            </p>

            <p style="line-height:28px;">
              After careful consideration,
              we regret to inform you that
              your application has not been
              selected for the next stage.
            </p>

            <p style="line-height:28px;">
              We truly appreciate your time
              and effort and wish you success
              in your future endeavors.
            </p>

            <br />

            <p>
              Regards,<br />
              HR Team<br />
              ACME Global Hub
            </p>

          </div>
        `;

        break;

      default:
        break;
    }

    // ========================================
    // SEND EMAIL
    // ========================================

    if (subject && html) {

      await transporter.sendMail({

        from:
          `"ACME Global Hub HR" <${process.env.EMAIL_USER}>`,

        replyTo:
          process.env.HR_EMAIL,

        to:
          candidate.email,

        subject,

        html,
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
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}