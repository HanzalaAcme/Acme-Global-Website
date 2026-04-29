"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const points = [
  "Multi-Vendor Expertise across leading cybersecurity platforms",
  "Cloud-Native & Zero Trust Security Approach",
  "24/7 SOC & Managed Security Services",
  "Proven Experience across GCC industries (BFSI, Healthcare, Enterprise)",
  "Integrated Security across Cloud, Network, Endpoint & Applications",
];

export default function WhyAcme() {
  return (
    <section className="bg-[#0B1120] py-[100px] px-6 lg:px-20 relative overflow-hidden">

      {/* RIGHT SIDE GRADIENT */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] 
        bg-[radial-gradient(circle_at_100%_20%,rgba(0,180,255,0.25),transparent_60%)]">
      </div>

      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[60px] items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="w-full h-[420px] rounded-[24px] overflow-hidden">
          <Image
            src="/media/Partner.jpeg"   
            alt="why acme"
            width={600}
            height={420}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-2 text-[#00D1B2] text-[12px] tracking-[2px] uppercase mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>Why ACME Global?</span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-[42px] font-bold text-white mb-10">
            Why <span className="text-[#00D1B2]">ACME Global?</span>
          </h2>

          {/* POINTS */}
          <div className="flex flex-col gap-5">

            {points.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 
                bg-white/5 border border-white/10 
                rounded-[16px] px-6 py-5
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#00D1B2]
                hover:shadow-[0_10px_30px_rgba(0,209,178,0.15)]"
              >

                {/* DOT */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D1B2] shrink-0"></div>

                {/* TEXT */}
                <p className="text-white/80 text-[15px]">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}