import { NextResponse } from "next/server";

import { createClient } from "@supabase/supabase-js";
import { transporter } from "@/lib/mail";

const supabase =
  createClient(

    process.env
      .NEXT_PUBLIC_SUPABASE_URL!,

    process.env
      .SUPABASE_SERVICE_ROLE_KEY!
  );

// ========================================
// CLOUDINARY UPLOAD FUNCTION
// ========================================

async function uploadToCloudinary(
  file: File,
  folder: string
) {

  const bytes =
    await file.arrayBuffer();

  const buffer =
    Buffer.from(bytes);

  const formData =
    new FormData();

  formData.append(
    "file",

    new Blob([buffer]),

    file.name
  );

  formData.append(
    "upload_preset",

    process.env
      .CLOUDINARY_UPLOAD_PRESET!
  );

  formData.append(
    "folder",

    folder
  );

  const res =
    await fetch(

      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/auto/upload`,

      {
        method: "POST",

        body: formData,
      }
    );

  const data =
    await res.json();

  if (!res.ok) {

    console.log(
      "CLOUDINARY ERROR:",
      data
    );

    throw new Error(
      "File upload failed"
    );
  }

  return data.secure_url;
}

// ========================================
// POST API
// ========================================

export async function POST(
  req: Request
) {

  try {

    const formData =
      await req.formData();

    // ========================================
    // TEXT FIELDS
    // ========================================

    const legal_company_name =
      formData.get(
        "legal_company_name"
      ) as string;

    const trade_name =
      formData.get(
        "trade_name"
      ) as string;

    const website_url =
      formData.get(
        "website_url"
      ) as string;

    const year_established =
      formData.get(
        "year_established"
      ) as string;

    const headquarters_location =
      formData.get(
        "headquarters_location"
      ) as string;

    const number_of_employees =
      formData.get(
        "number_of_employees"
      ) as string;

    const annual_revenue =
      formData.get(
        "annual_revenue"
      ) as string;

    const company_overview =
      formData.get(
        "company_overview"
      ) as string;

    // ========================================
    // PRIMARY CONTACT
    // ========================================

    const contact_person_name =
      formData.get(
        "contact_person_name"
      ) as string;

    const designation =
      formData.get(
        "designation"
      ) as string;

    const email_address =
      formData.get(
        "email_address"
      ) as string;

    const mobile_number =
      formData.get(
        "mobile_number"
      ) as string;

    const linkedin_profile =
      formData.get(
        "linkedin_profile"
      ) as string;

    // ========================================
    // ADDRESS
    // ========================================

    const street_address =
      formData.get(
        "street_address"
      ) as string;

    const city =
      formData.get(
        "city"
      ) as string;

    const state_province =
      formData.get(
        "state_province"
      ) as string;

    const country =
      formData.get(
        "country"
      ) as string;

    const postal_code =
      formData.get(
        "postal_code"
      ) as string;

    // ========================================
    // CORPORATE
    // ========================================

    const company_registration_number =
      formData.get(
        "company_registration_number"
      ) as string;

    const tax_vat_gst_number =
      formData.get(
        "tax_vat_gst_number"
      ) as string;

    const duns_number =
      formData.get(
        "duns_number"
      ) as string;

    const certifications =
      formData.get(
        "certifications"
      ) as string;

    // ========================================
    // PARTNERSHIP
    // ========================================

    const partnership_type =
      formData.get(
        "partnership_type"
      ) as string;

    const products_services =
      formData.get(
        "products_services"
      ) as string;

    const target_industries =
      formData.get(
        "target_industries"
      ) as string;

    const geographic_markets =
      formData.get(
        "geographic_markets"
      ) as string;

    const key_technology_partnerships =
      formData.get(
        "key_technology_partnerships"
      ) as string;

    // ========================================
    // DECLARATION
    // ========================================

    const authorized_signatory_name =
      formData.get(
        "authorized_signatory_name"
      ) as string;

    const authorized_designation =
      formData.get(
        "authorized_designation"
      ) as string;

    const reference_clients =
      formData.get(
        "reference_clients"
      ) as string;

    // ========================================
    // FILES
    // ========================================

    const companyProfile =
      formData.get(
        "company_profile"
      ) as File;

    const capabilityPresentation =
      formData.get(
        "capability_presentation"
      ) as File;

    const certificationsDocument =
      formData.get(
        "certifications_document"
      ) as File;

    const signature =
      formData.get(
        "signature_url"
      ) as File;

    const companySeal =
      formData.get(
        "company_seal_url"
      ) as File;

    // ========================================
    // VALIDATION
    // ========================================

    if (
      !legal_company_name ||
      !trade_name ||
      !website_url ||
      !year_established ||
      !headquarters_location ||
      !number_of_employees ||
      !contact_person_name ||
      !designation ||
      !email_address ||
      !mobile_number ||
      !linkedin_profile ||
      !street_address ||
      !city ||
      !state_province ||
      !country ||
      !postal_code ||
      !company_registration_number ||
      !tax_vat_gst_number ||
      !partnership_type ||
      !products_services ||
      !target_industries ||
      !geographic_markets ||
      !key_technology_partnerships ||
      !authorized_signatory_name ||
      !authorized_designation ||
      !companyProfile ||
      !capabilityPresentation ||
      !certificationsDocument ||
      !signature
    ) {

      return NextResponse.json(
        {
          error:
            "Please fill all required fields",
        },

        {
          status: 400,
        }
      );
    }

    // ========================================
    // CLOUDINARY UPLOADS
    // ========================================

    const company_profile_url =
      await uploadToCloudinary(
        companyProfile,
        "partners/company-profile"
      );

    const capability_presentation_url =
      await uploadToCloudinary(
        capabilityPresentation,
        "partners/capability"
      );

    const certifications_document_url =
      await uploadToCloudinary(
        certificationsDocument,
        "partners/certifications"
      );

    const signature_url =
      await uploadToCloudinary(
        signature,
        "partners/signatures"
      );

    let company_seal_url =
      "";

    if (
      companySeal &&
      companySeal.size > 0
    ) {

      company_seal_url =
        await uploadToCloudinary(
          companySeal,
          "partners/seals"
        );
    }

    // ========================================
    // INSERT INTO SUPABASE
    // ========================================

    const { error } =
      await supabase
        .from(
          "partner_applications"
        )
        .insert([
          {

            legal_company_name,

            trade_name,

            website_url,

            year_established,

            headquarters_location,

            number_of_employees,

            annual_revenue,

            company_overview,

            contact_person_name,

            designation,

            email_address,

            mobile_number,

            linkedin_profile,

            street_address,

            city,

            state_province,

            country,

            postal_code,

            company_registration_number,

            tax_vat_gst_number,

            duns_number,

            certifications,

            partnership_type,

            products_services,

            target_industries,

            geographic_markets,

            key_technology_partnerships,

            company_profile_url,

            capability_presentation_url,

            certifications_document_url,

            reference_clients,

            authorized_signatory_name,

            authorized_designation,

            signature_url,

            company_seal_url,
          },
        ]);

    if (error) {

      console.log(
        "SUPABASE ERROR:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Database insert failed",
        },

        {
          status: 500,
        }
      );
    }

    // ========================================
// SEND EMAIL NOTIFICATION
// ========================================

await transporter.sendMail({

  from:
    process.env.EMAIL_USER,

  to:
    process.env.EMAIL_USER,

  subject:
    `New Partner Application - ${legal_company_name}`,

  html: `

    <div style="
      font-family: Arial;
      padding: 20px;
      color: #111827;
    ">

      <h2 style="
        color: #1A4FD6;
        margin-bottom: 20px;
      ">
        New Partner Registration Submitted
      </h2>

      <table
        cellpadding="10"
        cellspacing="0"
        border="1"
        style="
          border-collapse: collapse;
          width: 100%;
        "
      >

        <tr>
          <td><strong>Legal Company Name</strong></td>
          <td>${legal_company_name}</td>
        </tr>

        <tr>
          <td><strong>Trade Name</strong></td>
          <td>${trade_name}</td>
        </tr>

        <tr>
          <td><strong>Website</strong></td>
          <td>${website_url}</td>
        </tr>

        <tr>
          <td><strong>Year Established</strong></td>
          <td>${year_established}</td>
        </tr>

        <tr>
          <td><strong>Headquarters</strong></td>
          <td>${headquarters_location}</td>
        </tr>

        <tr>
          <td><strong>Employees</strong></td>
          <td>${number_of_employees}</td>
        </tr>

        <tr>
          <td><strong>Annual Revenue</strong></td>
          <td>${annual_revenue}</td>
        </tr>

        <tr>
          <td><strong>Contact Person</strong></td>
          <td>${contact_person_name}</td>
        </tr>

        <tr>
          <td><strong>Designation</strong></td>
          <td>${designation}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${email_address}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${mobile_number}</td>
        </tr>

        <tr>
          <td><strong>LinkedIn</strong></td>
          <td>${linkedin_profile}</td>
        </tr>

        <tr>
          <td><strong>Address</strong></td>
          <td>
            ${street_address},
            ${city},
            ${state_province},
            ${country},
            ${postal_code}
          </td>
        </tr>

        <tr>
          <td><strong>Company Registration</strong></td>
          <td>${company_registration_number}</td>
        </tr>

        <tr>
          <td><strong>GST / VAT</strong></td>
          <td>${tax_vat_gst_number}</td>
        </tr>

        <tr>
          <td><strong>DUNS Number</strong></td>
          <td>${duns_number}</td>
        </tr>

        <tr>
          <td><strong>Certifications</strong></td>
          <td>${certifications}</td>
        </tr>

        <tr>
          <td><strong>Partnership Type</strong></td>
          <td>${partnership_type}</td>
        </tr>

        <tr>
          <td><strong>Products / Services</strong></td>
          <td>${products_services}</td>
        </tr>

        <tr>
          <td><strong>Target Industries</strong></td>
          <td>${target_industries}</td>
        </tr>

        <tr>
          <td><strong>Geographic Markets</strong></td>
          <td>${geographic_markets}</td>
        </tr>

        <tr>
          <td><strong>Technology Partnerships</strong></td>
          <td>${key_technology_partnerships}</td>
        </tr>

        <tr>
          <td><strong>Authorized Signatory</strong></td>
          <td>${authorized_signatory_name}</td>
        </tr>

        <tr>
          <td><strong>Designation</strong></td>
          <td>${authorized_designation}</td>
        </tr>

      </table>

      <h3 style="
        margin-top: 30px;
      ">
        Uploaded Documents
      </h3>

      <ul>

        <li>
          <a href="${company_profile_url}">
            Company Profile
          </a>
        </li>

        <li>
          <a href="${capability_presentation_url}">
            Capability Presentation
          </a>
        </li>

        <li>
          <a href="${certifications_document_url}">
            Certifications
          </a>
        </li>

        <li>
          <a href="${signature_url}">
            Signature
          </a>
        </li>

        ${
          company_seal_url
          ? `
            <li>
              <a href="${company_seal_url}">
                Company Seal
              </a>
            </li>
          `
          : ""
        }

      </ul>

    </div>
  `,

  attachments: [

  {
    filename:
      companyProfile.name,

    content:
      Buffer.from(
        await companyProfile.arrayBuffer()
      ),
  },

  {
    filename:
      capabilityPresentation.name,

    content:
      Buffer.from(
        await capabilityPresentation.arrayBuffer()
      ),
  },

  {
    filename:
      certificationsDocument.name,

    content:
      Buffer.from(
        await certificationsDocument.arrayBuffer()
      ),
  },

  {
    filename:
      signature.name,

    content:
      Buffer.from(
        await signature.arrayBuffer()
      ),
  },

  ...(companySeal &&
  companySeal.size > 0
    ? [
        {
          filename:
            companySeal.name,

          content:
            Buffer.from(
              await companySeal.arrayBuffer()
            ),
        },
      ]
    : []),
],
});

    // ========================================
    // SUCCESS
    // ========================================

    return NextResponse.json(
      {
        success: true,
      }
    );

  } catch (err: any) {

    console.log(
      "PARTNER API ERROR:",
      err
    );

    return NextResponse.json(
      {
        error:
          err.message ||
          "Something went wrong",
      },

      {
        status: 500,
      }
    );
  }
}