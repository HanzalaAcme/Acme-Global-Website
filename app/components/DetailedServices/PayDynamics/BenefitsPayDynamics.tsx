"use client";

import {
  Check,
  CircleDot,
} from "lucide-react";

const benefits = [
  "Significantly reduce payroll processing time",
  "Minimize manual errors and rework",
  "Strengthen controls and auditability",
  "Improve visibility into payroll operations",
  "Ensure consistent and reliable salary disbursement",
];

const tags = [
  "Complex Payrolls",
  "Audit-Ready",
  "Error Reduction",
  "Scalable",
  "Automated",
];

export default function BusinessBenefitsWhyPayDynamics() {
  return (
    <section className="bg-[#F4F6FB] py-20 lg:py-20">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* LEFT SIDE */}
          <div>
            {/* LABEL */}
            <div className="mb-5 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#4F7CFF]">
              <Check className="h-4 w-4" />
              Faster, Cleaner, Fully In Control
            </div>

            {/* HEADING */}
            <h2 className="font-playfair text-[42px] font-bold leading-tight text-[#0B1120] lg:text-[40px]">
              Business{" "}
              <span className="text-[#00C9A7]">
                Benefits
              </span>
            </h2>

            {/* BENEFITS */}
            <div className="mt-8 space-y-5">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-[20px] border border-[#E5EAF4] bg-white px-4 py-2 transition-all duration-300 hover:translate-x-[4px] hover:border-[#00C9A7]/40 hover:shadow-[0_0_35px_rgba(0,201,167,0.14)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#00C9A7]/12">
                    <Check className="h-4 w-4 text-[#00C9A7]" />
                  </div>

                  <p className="text-[17px] font-medium leading-[30px] text-[#111827]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative overflow-hidden rounded-[36px] border border-[#132B61] bg-[#020B2D] p-8 transition-all duration-300 hover:translate-x-[4px] hover:border-[#2563EB]/50 hover:shadow-[0_0_45px_rgba(37,99,235,0.16)] lg:p-10">
            {/* Glow */}
            <div className="absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.24),transparent_70%)] blur-3xl" />

            {/* CONTENT */}
            <div className="relative z-10">
              {/* LABEL */}
              <div className="mb-6 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#00D4AA]">
                <CircleDot className="h-4 w-4" />
                Precision At Every Cycle
              </div>

              {/* TITLE */}
              <h2 className="font-playfair text-[42px] font-bold leading-tight text-white lg:text-[40px]">
                Why{" "}
                <span className="text-[#00D4AA]">
                  PayDynamics
                </span>
              </h2>

              {/* LINE */}
              <div className="mt-6 h-[3px] w-14 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#2563EB]" />

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-[620px] text-[16px] leading-[30px] text-white/65">
                PayDynamics is ideal for organizations processing complex payrolls and seeking greater efficiency, control, and accuracy. It delivers a streamlined payroll operation that scales with business growth.
              </p>

              {/* TAGS */}
              <div className="mt-8 flex flex-wrap gap-3">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="rounded-[20px] border border-white/10 bg-white/[0.04] px-3 py-3 text-[14px] font-medium tracking-[1px] text-white/70 transition-all duration-300 hover:translate-x-[4px] hover:border-[#2563EB]/40 hover:shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}