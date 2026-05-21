"use client";

import {
  Check,
  ChevronRight,
} from "lucide-react";

const benefits = [
  "Increase employee productivity and operational efficiency",
  "Deliver faster and more personalized customer service",
  "Reduce manual effort and processing costs",
  "Improve forecasting and decision-making",
  "Strengthen compliance and risk management",
  "Accelerate innovation and competitive advantage",
];

const whyChoose = [
  "End-to-end AI consulting, implementation, and managed services",
  "Expertise across AWS, Azure, Google Cloud, and OCI",
  "Strong integration capabilities with ERP, CRM, and collaboration platforms",
  "Industry-focused solutions for BFSI, Retail, Healthcare, Manufacturing, and Government",
  "Secure and responsible AI frameworks aligned with enterprise requirements",
];

export default function BusinessBenefitsWhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#020B2D] py-20 lg:py-20">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(0,212,170,0.14),transparent_70%)] blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[2px] text-[#00D4AA]">
              <Check className="h-4 w-4" />
              Business Benefits
            </div>

            <h2 className="font-playfair text-[40px] font-bold leading-tight text-white lg:text-[36px]">
              Business{" "}
              <span className="text-[#00D4AA]">
                Benefits
              </span>
            </h2>

            <div className="mt-10 space-y-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-5 rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-3 transition-all duration-300 hover:translate-x-[4px] hover:border-[#00D4AA]/50 hover:shadow-[0_0_30px_rgba(0,212,170,0.18)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00D4AA]/15">
                    <Check className="h-5 w-5 text-[#00D4AA]" />
                  </div>

                  <p className="text-[15px] leading-[28px] text-white/90 lg:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute left-[-28px] top-0 hidden h-full w-px bg-white/10 lg:block" />

            <div className="mb-4 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[2px] text-[#5B8CFF]">
              <div className="flex h-4 w-4 items-center justify-center rounded-full border border-[#5B8CFF]">
                <div className="h-1.5 w-1.5 rounded-full bg-[#5B8CFF]" />
              </div>

              Why Choose ACME Global Hub
            </div>

            <h2 className="font-playfair text-[40px] font-bold leading-tight text-white lg:text-[36px]">
              Why Choose{" "}
              <span className="text-[#5B8CFF]">
                ACME Global Hub
              </span>
            </h2>

            <div className="mt-10 space-y-4">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 rounded-[24px] border border-white/10 bg-white/[0.04] px-6 py-4 transition-all duration-300 hover:translate-x-[4px] hover:border-[#2563EB]/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.18)]"
                >
                  <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-xl bg-[#2563EB]/15">
                    <ChevronRight className="h-5 w-5 text-[#5B8CFF]" />
                  </div>

                  <p className="text-[15px] leading-[28px] text-white/90 lg:text-[16px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}