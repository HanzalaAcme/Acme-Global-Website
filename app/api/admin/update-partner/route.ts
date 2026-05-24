import { NextResponse }
from "next/server";

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
      reviewed_by,
      comments,
    } = body;

    // ========================================
    // VALIDATION
    // ========================================

    if (!id) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Partner ID missing",
        },

        {
          status: 400,
        }
      );
    }

    // ========================================
    // GET PARTNER
    // ========================================

    const {
      data: partner,
      error: fetchError,
    } =
      await supabase

        .from(
          "partner_applications"
        )

        .select("*")

        .eq("id", id)

        .single();

    if (
      fetchError ||
      !partner
    ) {

      return NextResponse.json(
        {
          success: false,

          message:
            "Partner not found",
        },

        {
          status: 404,
        }
      );
    }

    // ========================================
    // UPDATE DATABASE
    // ========================================

    const { error } =
      await supabase

        .from(
          "partner_applications"
        )

        .update({

          status,

          reviewed_by:
            reviewed_by || null,

          comments:
            comments || null,
        })

        .eq("id", id);

    if (error) {

      console.log(
        "PARTNER ATS ERROR:",
        error
      );

      return NextResponse.json(
        {
          success: false,

          message:
            error.message,
        },

        {
          status: 500,
        }
      );
    }

    // ========================================
    // APPROVAL EMAIL
    // ========================================

    if (status === "approved") {

      await transporter.sendMail({

        from:
          `"ACME Global Partnerships" <${process.env.EMAIL_USER}>`,

        to:
          partner.email_address,

        subject:
          "Partnership Application Approved | ACME Global Hub",

        html: `

          <div style="
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="
              color: #1A4FD6;
              margin-bottom: 25px;
            ">
              Partnership Approved
            </h2>

            <p>
              Dear
              <strong>
                ${partner.contact_person_name}
              </strong>,
            </p>

            <p style="
              line-height: 28px;
              margin-top: 20px;
            ">
              We are pleased to inform you
              that your partnership application
              submitted on behalf of
              <strong>
                ${partner.legal_company_name}
              </strong>
              has been approved by
              ACME Global Hub.
            </p>

            <div style="
              background: #F8FAFC;
              border-radius: 16px;
              padding: 24px;
              margin-top: 30px;
            ">

              <p>
                <strong>
                  Partnership Type:
                </strong>
                ${partner.partnership_type}
              </p>

              <p>
                <strong>
                  Headquarters:
                </strong>
                ${partner.headquarters_location}
              </p>

              <p>
                <strong>
                  Reviewed By:
                </strong>
                ${reviewed_by || "ACME Global Team"}
              </p>

            </div>

            ${
              comments

                ? `

                <div style="
                  margin-top: 30px;
                ">

                  <h3>
                    Additional Notes
                  </h3>

                  <p style="
                    line-height: 28px;
                    color: #4B5563;
                  ">
                    ${comments}
                  </p>

                </div>

              `

                : ""
            }

            <p style="
              margin-top: 35px;
              line-height: 28px;
            ">
              Our partnerships team
              will connect with you shortly
              regarding next steps,
              onboarding and collaboration.
            </p>

            <p style="
              margin-top: 35px;
            ">
              Regards,<br />
              Partnerships Team<br />
              ACME Global Hub
            </p>

          </div>
        `,
      });
    }

    // ========================================
    // REJECTION EMAIL
    // ========================================

    if (status === "rejected") {

      await transporter.sendMail({

        from:
          `"ACME Global Partnerships" <${process.env.EMAIL_USER}>`,

        to:
          partner.email_address,

        subject:
          "Partnership Application Update | ACME Global Hub",

        html: `

          <div style="
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #111827;
          ">

            <h2 style="
              color: #DC2626;
              margin-bottom: 25px;
            ">
              Partnership Application Update
            </h2>

            <p>
              Dear
              <strong>
                ${partner.contact_person_name}
              </strong>,
            </p>

            <p style="
              line-height: 28px;
              margin-top: 20px;
            ">
              Thank you for your interest
              in partnering with
              ACME Global Hub.
            </p>

            <p style="
              line-height: 28px;
            ">
              After careful evaluation,
              we regret to inform you that
              your partnership application
              has not been approved
              at this time.
            </p>

            ${
              comments

                ? `

                <div style="
                  background: #F8FAFC;
                  border-radius: 16px;
                  padding: 24px;
                  margin-top: 30px;
                ">

                  <h3>
                    Reviewer Notes
                  </h3>

                  <p style="
                    line-height: 28px;
                    color: #4B5563;
                  ">
                    ${comments}
                  </p>

                </div>

              `

                : ""
            }

            <p style="
              margin-top: 35px;
              line-height: 28px;
            ">
              We sincerely appreciate
              the time and effort invested
              in your submission and
              encourage future collaboration
              opportunities.
            </p>

            <p style="
              margin-top: 35px;
            ">
              Regards,<br />
              Partnerships Team<br />
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
    });

  } catch (err) {

    console.log(
      "PARTNER ATS API ERROR:",
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