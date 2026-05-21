"use client";

import Image from "next/image";
import {
  Layers3,
} from "lucide-react";

const platforms = [
  {
    title: "Microsoft AI",
    logo: "/media/Copilot_AI.png",
    points: [
      "Microsoft Copilot for Microsoft 365",
      "Microsoft Azure AI",
      "Microsoft Power Platform",
    ],
    color: "bg-[#0078D4]",
  },
  {
    title: "Amazon Web Services AI",
    logo: "/media/AmazonQ.webp",
    points: [
      "Amazon Bedrock",
      "Amazon SageMaker",
      "Amazon Q",
    ],
    color: "bg-[#FF9900]",
  },
  {
    title: "Google Cloud AI",
    logo: "/media/Gemini.jpg",
    points: [
      "Vertex AI",
      "Gemini",
    ],
    color: "bg-[#4285F4]",
  },
  {
    title: "Oracle AI",
    logo: "/media/partners/OCI.png",
    points: [
      "Oracle Cloud Infrastructure AI Services",
      "Oracle Fusion Applications",
    ],
    color: "bg-[#E14C3A]",
  },
];

export default function LeadingPlatforms() {
  return (
    <section className="bg-[#F4F6FB] py-20 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* LABEL */}
        <div className="mb-5 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#4F7CFF]">
          <Layers3 className="h-4 w-4" />
          BUILT ON WORLD-CLASS TECHNOLOGY
        </div>

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[40px] font-bold leading-tight text-[#0B1120] lg:text-[40px]">
          Leading Platforms{" "}
          <span className="text-[#4F7CFF]">
            We Support
          </span>
        </h2>

        {/* GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[24px] border border-[#E3E8F5] bg-white transition-all duration-300 hover:translate-x-[4px] hover:border-[#2563EB]/40 hover:shadow-[0_0_35px_rgba(37,99,235,0.10)]"
            >
              {/* TOP */}
              <div className="flex items-center gap-5 border-b border-[#EDF1F7] px-8 py-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#E8ECF5] bg-[#F8FAFC]">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>

                <h3 className="font-playfair text-[22px] font-bold text-[#111827] lg:text-[24px]">
                  {item.title}
                </h3>
              </div>

              {/* LIST */}
              <div className="space-y-4 px-8 py-4">
                {item.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                    />

                    <p className="text-[16px] leading-[15px] text-[#62708F] lg:text-[16px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}