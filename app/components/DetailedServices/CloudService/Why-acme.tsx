"use client";

import Image from "next/image";
import { CheckCircle, Star, Check } from "lucide-react";

const points = [
  "Strategic cloud advisory aligned to business goals",
  "Seamless migration from on-premise to cloud",
  "Multi-cloud and hybrid cloud architecture expertise",
  "24x7 managed cloud operations and support",
  "Security, governance, backup & disaster recovery",
  "Cost optimization and performance management",
  "Industry-specific solutions for BFSI, Retail, Healthcare, Manufacturing & Government",
  "Faster time-to-value with scalable cloud transformation programs",
];

export default function WhyChooseAcme() {
  return (
    <section className="bg-[#F4F6FB] py-[100px] px-6 lg:px-20 relative overflow-hidden">

      {/* RIGHT SIDE GRADIENT */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] 
        bg-[radial-gradient(circle_at_100%_20%,rgba(0,180,255,0.25),transparent_60%)]">
      </div>

      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[60px] items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="w-full h-[520px] rounded-[24px] overflow-hidden">
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
          <div className="flex items-center gap-2 text-[#2E66FF] text-[12px] tracking-[2px] uppercase mb-4">
            <Star className="w-4 h-4" />
            <span>Why Corporate Clients Choose ACME Global </span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-[38px] font-extrabold text-[#0B1120] mb-10">
            Why Corporate Clients Choose {""}
            <span className="text-[#2E66FF]">ACME Global?</span>
          </h2>

         {/* POINTS */}
      <div className="flex flex-col gap-3">

        {points.map((item, i) => (
          <div
            key={i}
            className="
              group

              flex
              items-start
              gap-4

              bg-white
              border border-[#E8EEF9]

              rounded-[16px]

              px-5
              py-4

              transition-all
              duration-300

              hover:border-[#1A4FD6]
              hover:bg-[#F8FBFF]
              hover:shadow-[0_10px_30px_rgba(26,79,214,0.10)]
            "
          >

            {/* ICON BOX */}
            <div
              className="
                w-9
                h-9

                rounded-[10px]

                bg-[#1A4FD6]/10

                flex
                items-center
                justify-center

                shrink-0

                transition-all
                duration-300

                group-hover:bg-[#1A4FD6]/15
              "
            >

              <Check
                className="
                  w-4
                  h-4

                  text-[#1A4FD6]
                  stroke-[3]
                "
              />

            </div>

            {/* TEXT */}
            <p
              className="
                text-[#2C3550]

                text-[14px]
                leading-[24px]

                pt-[6px]
              "
            >
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