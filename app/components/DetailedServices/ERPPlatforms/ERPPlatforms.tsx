"use client";

import Image from "next/image";

import {
  Layers3,
} from "lucide-react";

const platforms = [
  {
    title: "Oracle Fusion",

    subtitle:
      "Enterprise-grade cloud ERP for finance, HCM, procurement, and supply chain",

    description:
      "Oracle Fusion Cloud Applications deliver a complete, integrated suite for enterprise finance, human capital management, procurement, and supply chain. Built for scale, compliance, and continuous innovation.",

    logo: "/media/partners/OCI.png",
  },

  {
    title: "Dynamics 365",

    subtitle:
      "Unified ERP & CRM with deep Microsoft ecosystem integration",

    description:
      "Microsoft Dynamics 365 unifies ERP and CRM capabilities into a single platform, seamlessly integrated with Microsoft 365, Power Platform, Azure, and Teams — enabling intelligent business processes at every level.",

    logo: "/media/partners/MSDynamics 365.png",
  },

  {
    title: "SAP Solutions",

    subtitle:
      "Scalable enterprise platforms for complex operations",

    description:
      "SAP provides robust enterprise resource planning for organizations with complex, multi-entity, or multinational operations. ACME Global delivers SAP implementation, migration, integration, and managed services across the GCC.",

    logo: "/media/partners/SAP.png",
  },

  {
    title: "PACT ERP",

    subtitle:
      "Agile, cost-effective ERP for mid-market businesses",

    description:
      "PACT ERP is a flexible, cost-effective solution purpose-built for mid-market organizations. It covers finance, HR, payroll, procurement, and operations — with rapid deployment and strong GCC regional alignment.",

    logo: "/media/partners/Pact.png",
  },
];

export default function ERPPlatformExpertise() {
  return (
    <section
      className="
        relative

        bg-[#030B1F]

        py-16 md:py-24 lg:py-20

        px-5 sm:px-6 lg:px-10

        overflow-hidden
      "
    >


      {/* GLOW */}
      <div
        className="
          absolute

          left-0 top-0

          w-[650px]
          h-[700px]

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.18),transparent_55%)]

          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1450px] mx-auto">

        {/* EYEBROW */}
        <div className="flex items-center justify-center gap-3 mb-5">

          <Layers3
            className="
              w-4 h-4

              text-[#7AAFFF]
            "
          />

          <span
            className="
              uppercase

              tracking-[0.18em]

              text-[11px]
              md:text-[12px]

              font-bold

              text-[#7AAFFF]
            "
          >
            DEEP PLATFORM KNOWLEDGE
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center

            font-playfair

            text-white

            text-[36px]
            sm:text-[52px]
            lg:text-[40px]

            leading-[1.05]

            font-bold
          "
        >
          Platform{" "}

          <span className="text-[#7AAFFF]">
            Expertise
          </span>
        </h2>

        {/* GRID */}
        <div
          className="
            mt-10

            grid
            lg:grid-cols-2

            gap-6
          "
        >

          {platforms.map((platform, index) => (

            <div
              key={index}

              className="
                group

                rounded-[24px]

                border border-white/10

                bg-[rgba(20,28,50,0.88)]

                overflow-hidden

                transition-all duration-300 ease-out

                hover:border-[#7AAFFF]/35

                hover:translate-x-[4px]

                hover:shadow-[0_18px_45px_rgba(122,175,255,0.12)]
              "
            >

              {/* TOP */}
              <div
                className="
                  px-7 md:px-7
                  py-4

                  flex items-start gap-5
                "
              >

                {/* LOGO */}
                <div
                  className="
                    w-[64px]
                    h-[64px]

                    rounded-2xl

                    bg-white/20

                    border border-white/10

                    flex items-center justify-center

                    shrink-0
                  "
                >

                  <Image
                    src={platform.logo}
                    alt={platform.title}
                    width={55}
                    height={55}
                    className="object-contain"
                  />

                </div>

                {/* CONTENT */}
                <div className="flex-1">

                  <h3
                    className="
                      font-playfair

                      text-white

                      text-[26px]
                      md:text-[24px]

                      leading-[1.1]

                      font-bold
                    "
                  >
                    {platform.title}
                  </h3>

                  <p
                    className="
                      mt-4

                      text-white/55

                      text-[15px]
                      md:text-[15px]

                      leading-[25px]
                    "
                  >
                    {platform.subtitle}
                  </p>

                </div>

              </div>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-white/10" />

              {/* BOTTOM */}
              <div
                className="
                  px-7 md:px-7
                  py-7 md:py-4
                "
              >

                <p
                  className="
                    text-white/60

                    text-[15px]
                    md:text-[15px]

                    leading-[25px]
                  "
                >
                  {platform.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}