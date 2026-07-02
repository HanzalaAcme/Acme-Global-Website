CREATE TABLE IF NOT EXISTS "Contact" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Application" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "full_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT,
    "job_id" TEXT,
    "experience" TEXT,
    "location" TEXT,
    "linkedin_url" TEXT,
    "cover_letter" TEXT,
    "resume_url" TEXT,
    "status" TEXT NOT NULL DEFAULT 'new',
    "notes" TEXT,
    "interview_date" TIMESTAMP(3),
    "interview_link" TEXT,
    "recruiter_name" TEXT,
    "recruiter_email" TEXT,
    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "PartnerApplication" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'new',
    "reviewed_by" TEXT,
    "comments" TEXT,
    "legal_company_name" TEXT NOT NULL,
    "trade_name" TEXT NOT NULL,
    "website_url" TEXT NOT NULL,
    "year_established" TEXT NOT NULL,
    "headquarters_location" TEXT NOT NULL,
    "number_of_employees" TEXT NOT NULL,
    "annual_revenue" TEXT,
    "company_overview" TEXT,
    "contact_person_name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "mobile_number" TEXT NOT NULL,
    "linkedin_profile" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state_province" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "company_registration_number" TEXT NOT NULL,
    "tax_vat_gst_number" TEXT NOT NULL,
    "duns_number" TEXT,
    "certifications" TEXT,
    "partnership_type" TEXT NOT NULL,
    "products_services" TEXT NOT NULL,
    "target_industries" TEXT NOT NULL,
    "geographic_markets" TEXT NOT NULL,
    "key_technology_partnerships" TEXT NOT NULL,
    "company_profile_url" TEXT NOT NULL,
    "capability_presentation_url" TEXT NOT NULL,
    "certifications_document_url" TEXT NOT NULL,
    "reference_clients" TEXT,
    "authorized_signatory_name" TEXT NOT NULL,
    "authorized_designation" TEXT NOT NULL,
    "signature_url" TEXT NOT NULL,
    "company_seal_url" TEXT,
    CONSTRAINT "PartnerApplication_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'admin',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "Admin_email_key" ON "Admin"("email");
