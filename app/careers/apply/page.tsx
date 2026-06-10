export const metadata = {
  title: "Careers - ACME Global Hub",
};
import { Suspense } from "react";

import ApplyForm from "@/app/components/career/ApplyForm";

export default function ApplyPage() {

  return (

    <main className="bg-[#F5F7FB] min-h-screen py-[120px] px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[#1A4FD6] uppercase tracking-[2px] text-sm font-semibold mb-4">
            Careers at ACME Global Hub
          </p>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
            Submit Your Application
          </h1>

          <p className="text-[#5E6E90] leading-[30px] max-w-[700px] mx-auto">
            Complete the application form below and upload your resume.
            Our recruitment team will review your profile and contact you if shortlisted.
          </p>

        </div>

        {/* FORM */}
        <Suspense fallback={<div />}>
          <ApplyForm />
          
        </Suspense>

      </div>

    </main>
  );
}