"use client";

import {
  Layers3,
} from "lucide-react";

const platforms = [
  {
    logo: "ORACLE",
    title: "Oracle Fusion Cloud Applications",
    desc: "A modern enterprise suite for finance, procurement, HR, supply chain, and performance management.",
    bullets: [
      "Finance & Accounting",
      "HCM & Payroll",
      "EPM & Planning",
      
      "Supply Chain & Inventory",
      "Procurement & Supplier Management",
      "Workflow Automation",
    ],
    color: "#D24726",
  },

  {
    logo: "MS",
    title: "Microsoft Dynamics 365",
    desc: "Intelligent business applications that unify CRM and ERP with Microsoft ecosystem advantages.",
    bullets: [
      "Finance & Operations",
      "Business Central",
      "Field Service",
      "Sales & Customer Service",
      "HR & Talent Management",
      "AI-driven insights",
    ],
    color: "#0078D4",
  },

  {
    logo: "SAP",
    title: "SAP ERP Solutions",
    desc: "Trusted enterprise platforms built for complex operations and global scale.",
    bullets: [
      "Finance & Controlling",
      "HR & Workforce Solutions",
      "Procurement",
      "Supply Chain Management",
      "Manufacturing & Production",
      "Analytics & Reporting",
    ],
    color: "#008FD3",
  },

  {
    logo: "PACT",
    title: "PACT Business Solutions ERP",
    desc: "A cost-effective and feature-rich ERP platform for mid-sized organizations.",
    bullets: [
      "Finance & Accounting",
      "Payroll & HR",
      "Project Costing",
      "Inventory & Distribution",
      "CRM",
      "Multi-entity operations",
    ],
    color: "#3B63FF",
  },
];

export default function ERPPlatforms() {
  return (
    <section className="bg-[#F8FAFD] py-20 md:py-28 px-6 lg:px-20">

      <div className="max-w-[1400px] mx-auto">

        {/* TAG */}
        <div className="flex justify-center mb-5">

          <div className="flex items-center gap-3">

            
              <Layers3 className="w-4 h-4 text-[#2E66FF]" />
            

            <span
              className="
                uppercase
                tracking-[0.18em]

                text-[12px]
                font-bold

                text-[#2E66FF]
              "
            >
              Leading ERP & Business Platforms We Support
            </span>

          </div>

        </div>

        {/* HEADING */}
        <h2
          className="
            text-center

            font-playfair

            text-[#0B1120]

            text-[36px]
            md:text-[42px]

            leading-[1.08]

            font-bold

            max-w-[1000px]

            mx-auto

            mb-16
          "
        >
          Leading ERP & Business Platforms{" "}

          <span className="text-[#3B63FF]">
            We Support
          </span>
        </h2>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-7">

          {platforms.map((item, index) => (

            <div
              key={index}

              className="
                bg-white

                rounded-[34px]

                border border-[#E5EAF4]

                p-7 md:p-8

                hover:border-[#2E66FF]/20

                transition-all duration-300
              "
            >

              {/* TOP */}
              <div className="flex items-start gap-5">

                {/* LOGO */}
                <div
                  className="
                    w-20 h-20

                    rounded-2xl

                    border border-[#E8EDF6]

                    bg-[#F8FAFD]

                    flex items-center justify-center

                    text-[18px]
                    font-black

                    shrink-0
                  "
                  style={{
                    color: item.color,
                  }}
                >
                  {item.logo}
                </div>

                {/* CONTENT */}
                <div>

                  <h3
                    className="
                      text-[#0B1120]

                      font-playfair

                      text-[20px]

                      leading-[1.2]

                      font-bold

                      mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      text-[#64748B]

                      text-[14px]

                      leading-[20px]
                    "
                  >
                    {item.desc}
                  </p>

                </div>

              </div>

              {/* LINE */}
              <div className="h-[1px] bg-[#E8EDF6] my-4"></div>

              {/* KEY */}
              <p
                className="
                  text-[#3B63FF]

                  uppercase

                  tracking-[0.12em]

                  text-[13px]

                  font-bold

                  mb-5
                "
              >
                Key Capabilities
              </p>

              {/* BULLETS */}
              <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6">

                {item.bullets.map((bullet, i) => (

                  <div
                    key={i}

                    className="
                      flex
                      items-start
                      gap-2
                    "
                  >

                    <div
                      className="
                        w-2.5 h-2.5 rounded-full

                        mt-2

                        shrink-0
                      "
                      style={{
                        background: item.color,
                      }}
                    />

                    <p
                      className="
                        text-[#334155]

                        text-[14px]

                        leading-[28px]
                      "
                    >
                      {bullet}
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