"use client";

import Image from "next/image";

import {
  PanelsTopLeft,
  BarChart3,
  FileText,
  Boxes,
  Zap,
  Code,
} from "lucide-react";

const solutions = [
  {
    icon: <Code className="w-5 h-5 text-[#2E66FF]" />,
    title: "Microsoft Power Apps",
    desc: "Rapid low-code custom applications",
  },
  {
    icon: <Zap className="w-5 h-5 text-[#2E66FF]" />,
    title: "Microsoft Power Automate",
    desc: "Workflow automation and approvals",
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-[#2E66FF]" />,
    title: "Microsoft Power BI",
    desc: "Executive dashboards and real-time analytics",
  },
  {
    icon: <FileText className="w-5 h-5 text-[#2E66FF]" />,
    title: "Microsoft SharePoint",
    desc: "Document management, intranet, collaboration portals",
  },
];

export default function BeyondERP() {
  return (
    <section className="bg-[#F5F7FC] py-20 md:py-20 px-6 lg:px-10">

      <div className="max-w-[1350px] mx-auto">

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative">

            <div
              className="
                relative

                overflow-hidden

                rounded-[34px]

                aspect-[1.05/1]
              "
            >

              <Image
                src="/media/Application_ERP.png"
                alt="ERP"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* TAG */}
            <div className="flex items-center gap-3 mb-6">

              
                <PanelsTopLeft className="w-4 h-4 text-[#2E66FF]" />
              

              <span
                className="
                  uppercase
                  tracking-[0.18em]

                  text-[12px]
                  font-bold

                  text-[#2E66FF]
                "
              >
                Beyond ERP
              </span>

            </div>

            {/* HEADING */}
            <h2
              className="
                font-playfair

                text-[#0B1120]

                text-[34px]
                md:text-[40px]

                leading-[1.08]

                font-bold

                mb-7
              "
            >
              Intelligent Digital{" "}

              <span className="text-[#3B63FF]">
                 Workplace Solutions
              </span>
            </h2>

            {/* TEXT */}
            <p
              className="
                text-[#5E6E90]

                text-[15px]

                leading-[25px]

                mb-10
              "
            >
              To extend ERP value and automate workflows,
              ACME Global Hub also enables modern business
              productivity solutions including:
            </p>

            {/* CARDS */}
            <div className="space-y-5">

              {solutions.map((item, index) => (

                <div
                  key={index}

                 className="
                    bg-white

                    rounded-[22px]

                    border border-[#E7ECF5]

                    px-5
                    py-4

                    flex items-start gap-4

                    hover:border-[#2E66FF]/30

                    transition-all duration-300
                    "
                >

                  <div
                    className="
                      w-14 h-14

                      rounded-2xl

                      bg-[#F1F5FF]

                      flex items-center justify-center

                      shrink-0
                    "
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h3
                      className="
                        text-[#0B1120]

                        font-bold

                        text-[18px]

                        font-playfair

                        mb-1
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-[#64748B]

                        text-[15px]

                        leading-[28px]
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* BOTTOM NOTE */}
            <div
              className="
                mt-7

                rounded-[24px]

                border-l-[5px]
                border-[#00C8B4]

                bg-[#EAF8F6]

                px-6
                py-6
              "
            >

              <p
                className="
                  text-[#5E6E90]

                  text-[15px]

                  leading-[32px]
                "
              >
                These solutions help organizations digitize
                manual processes, improve visibility, and
                increase employee productivity.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}