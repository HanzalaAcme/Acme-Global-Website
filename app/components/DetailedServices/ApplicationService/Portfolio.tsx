"use client";

import { BriefcaseBusiness } from "lucide-react";

const services = [
  {
    title: "ERP Consulting & Roadmap Planning",
    desc: "Align technology with business objectives and future growth plans.",
  },
  {
    title: "Implementation & Rollouts",
    desc: "New ERP deployments with structured governance and rapid adoption.",
  },
  {
    title: "Migration & Upgrade Services",
    desc: "Legacy ERP modernization, version upgrades, and cloud transitions.",
  },
  {
    title: "Application Managed Services (AMS)",
    desc: "24x7 support, incident management, enhancements, and SLA-based operations.",
  },
  {
    title: "Integration Services",
    desc: "Connect ERP with HRMS, banking, CRM, eCommerce, BI, and third-party systems.",
  },
  {
    title: "Customization & Extensions",
    desc: "Tailored workflows, reports, modules, and user experiences.",
  },
  {
    title: "Analytics & Reporting",
    desc: "KPI dashboards, financial reporting, and operational intelligence.",
  },
];

export default function ApplicationServicesPortfolio() {
  return (
    <section className="relative bg-[#020B24] overflow-hidden py-20 md:py-20 px-6 lg:px-10">


      {/* GLOW */}
      <div
        className="
          absolute
          left-0
          bottom-0

          w-[450px]
          h-[450px]

          bg-[radial-gradient(circle,rgba(0,200,180,0.15),transparent_70%)]

          blur-3xl
        "
      />

      <div className="relative z-10 max-w-[1350px] mx-auto">

        {/* TAG */}
        <div className="flex items-center gap-3 mb-6">

          
            <BriefcaseBusiness className="w-4 h-4 text-[#00C8B4]" />
          

          <span
            className="
              text-[#00C8B4]

              uppercase
              tracking-[0.1em]

              text-[12px]
              font-bold
            "
          >
            Enterprise Application Services
          </span>

        </div>

        {/* HEADING */}
        <h2
          className="
            font-playfair

            text-white

            text-[38px]
            md:text-[42px]

            leading-[1.05]

            font-bold

            max-w-[800px]

            mb-16
          "
        >
          ACME Global Hub Application <br />

          <span className="text-[#00D5C0]">
            Services Portfolio
          </span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-6">

          {services.map((item, index) => (

            <div
              key={index}

              className="
                group

                rounded-[28px]

                border border-white/10

                bg-white/[0.04]

                backdrop-blur-sm

                p-7

                hover:border-[#00C8B4]/30
                hover:bg-white/[0.06]

                transition-all duration-300

                hover:translate-x-[4px]
                hover:shadow-[0_18px_50px_rgba(0,209,178,0.10)]
              "
            >

              {/* TITLE */}
              <div className="flex items-start gap-4 mb-5">

                <div
                  className="
                    w-3 h-3 rounded-full
                    bg-[#00D5C0]

                    mt-2

                    shrink-0
                  "
                />

                <h3
                  className="
                    text-white

                    font-playfair

                    text-[16px]

                    leading-[1.3]

                    font-bold
                  "
                >
                  {item.title}
                </h3>

              </div>

              {/* DESC */}
              <p
                className="
                  text-white/55

                  text-[14px]

                  leading-[30px]
                "
              >
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}