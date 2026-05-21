import { Suspense } from "react";


import ApplicationForm from "@/app/components/career/ApplicationForm";

export default function ApplyPage() {

  return (

    <main className="bg-[#F5F7FB] min-h-screen py-[120px] px-6">

      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">

          <p className="text-[#1A4FD6] uppercase tracking-[2px] text-sm font-semibold mb-4">
            Careers at ACME Global
          </p>

          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-[#0B1120] mb-6">
            Submit Your Profile
          </h1>

          <p className="text-[#5E6E90] leading-[30px] max-w-[700px] mx-auto">
            Share your profile and resume. Our recruitment team will connect with you for relevant opportunities.
          </p>

        </div>

        {/* FORM */}
        <Suspense fallback={<div />}>
          <ApplicationForm />
          
        </Suspense>

      </div>

    </main>
  );
}