"use client";

import Image from "next/image";
import { CheckCircle, Check } from "lucide-react";

const points = [
  "Proactive monitoring and rapid incident response",
  "Multi-cloud management across AWS, Azure, OCI & GCP",
  "Reduced IT operational costs and internal workload",
  "Improved uptime, availability, and user experience",
  "Centralized governance, reporting, and compliance",
  "Scalable support aligned to business growth",
  "Expert engineers with cloud, network, and security skills",
];

export default function WhyChooseAcme() {
  return (
    <section className="bg-[#0B1120] py-[100px] px-6 lg:px-20 relative overflow-hidden">

      {/* RIGHT SIDE GRADIENT */}
      <div className="absolute right-0 top-0 w-[600px] h-[600px] 
        bg-[radial-gradient(circle_at_100%_20%,rgba(0,180,255,0.25),transparent_60%)]">
      </div>

      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[60px] items-center relative z-10">

        {/* LEFT IMAGE */}
        <div className="w-full h-[400px] rounded-[24px] overflow-hidden">
          <Image
            src="/media/RIM_Diff.jpg"   
            alt="why acme"
            width={600}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-2 text-[#00D1B2] text-[12px] tracking-[1x] uppercase mb-4">
            <CheckCircle className="w-4 h-4" />
            <span>The Difference Is In The Details</span>
          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[40px]

              leading-[1.15]

              font-bold

              text-white

              mb-6
            "
          >
            Why Corporate Clients Choose{" "}

            <span className="text-[#00D1B2]">
              ACME Global Hub RIM Services
            </span>
          </h2>

          {/* POINTS */}
          <div className="flex flex-col gap-3">

            {points.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 
                bg-white/5 border border-white/10 
                rounded-[16px] px-6 py-3
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#00D1B2]
                hover:shadow-[0_10px_30px_rgba(0,209,178,0.15)]"
              >

                {/* DOT */}
                
                <div
                    className="
                      w-10 h-10
                      md:w-8 md:h-8

                      rounded-[10px]

                      bg-[#00B89C]/22

                      flex items-center justify-center

                      shrink-0
                    "
                  >
                    <Check className="w-5 h-5 text-[#00B89C]" />
                  </div>

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