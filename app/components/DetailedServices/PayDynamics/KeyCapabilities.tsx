"use client";

import {
  Layers3,
} from "lucide-react";

const capabilities = [
  {
    id: "01",
    title: "End-to-End Payroll Automation",
  },
  {
    id: "02",
    title: "Workflow-Based Approvals",
  },
  {
    id: "03",
    title: "Advanced Exception Handling",
  },
  {
    id: "04",
    title: "Smart Record Management",
  },
  {
    id: "05",
    title: "Real-Time Duplication and Validation Checks",
  },
  {
    id: "06",
    title: "Comprehensive Tracking and Monitoring",
  },
  {
    id: "07",
    title: "Automated Email Alerts and Notifications",
  },
];

export default function KeyCapabilities() {
  return (
    <section className="relative overflow-hidden bg-[#020B2D] py-20 lg:py-16">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(0,212,170,0.12),transparent_70%)] blur-3xl" />

      <div className="absolute right-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-10">
        {/* LABEL */}
        <div className="mb-3 flex items-center justify-center gap-2 text-[13px] font-semibold uppercase tracking-[1.5x] text-[#00D4AA]">
          <Layers3 className="h-4 w-4" />
          Key Capabilities
        </div>

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[42px] font-bold leading-tight text-white lg:text-[40px]">
          Key{" "}
          <span className="text-[#00D4AA]">
            Capabilities
          </span>
        </h2>

        {/* GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-4 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:translate-x-[4px] hover:border-[#00D4AA]/40 hover:shadow-[0_0_35px_rgba(0,212,170,0.14)] min-h-[120px] flex flex-col justify-between"
            >
              {/* NUMBER */}
              <span className="text-[12px] font-bold tracking-[1px] text-[#00D4AA]/75">
                {item.id}
              </span>

              {/* TITLE */}
              <h3 className="mt-2 font-playfair text-[30px] font-bold leading-[20px] text-white lg:text-[14px]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}