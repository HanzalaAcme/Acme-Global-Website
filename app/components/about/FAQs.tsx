"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does ACME Global Hub do?",
    a: "ACME Global is a Cloud Service Provider, Managed Service Provider, and Resource Outsourcing Partner. We deliver transformational technology solutions across cloud, application services, cybersecurity, managed IT, and staffing — covering the full enterprise technology lifecycle.",
  },
  {
    q: "What industries does ACME Global Hub serve?",
    a: "We serve enterprises across a wide range of verticals including finance, healthcare, retail, government, and technology. Our flexible XaaS delivery model is designed to adapt to the regulatory and operational requirements of each sector.",
  },
  {
    q: "How is ACME Global Hub different from other service providers?",
    a: "We offer a true one-stop XaaS portfolio — from cloud and security to ERP and talent — with regional delivery expertise across India, Bahrain, and Kuwait. Our end-to-end ownership model means we stay accountable from strategy through to ongoing operations.",
  },
  {
    q: "How does ACME Global Hub support long-term business growth?",
    a: "Through subscription-based, scalable service models that grow with your business. We provide continuous optimization, proactive managed services, and strategic advisory — ensuring your technology investments deliver value over the long term.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="
        relative

        bg-[#F4F6FB]

        py-16
        md:py-24
        lg:py-28

        px-5
        sm:px-6
        lg:px-10

        overflow-hidden
      "
    >

      <div
        className="
          max-w-[1400px]
          mx-auto

          grid
          lg:grid-cols-2

          gap-12
          lg:gap-20

          items-center
        "
      >

        {/* LEFT IMAGE */}
        <div
          className="
            relative

            w-full

            rounded-[28px]

            overflow-hidden
          "
        >

          {/* IMAGE GLOW */}
          <div
            className="
              absolute

              inset-0

              z-0

              blur-[90px]

              bg-[radial-gradient(circle,rgba(37,99,235,0.18),transparent_65%)]

              pointer-events-none
            "
          />

          {/* IMAGE WRAPPER */}
          <div
            className="
              relative

              w-full

              min-h-[380px]
              sm:min-h-[480px]
              lg:min-h-[550px]

              rounded-[28px]

              overflow-hidden
            "
          >

            <Image
              src="/media/FAQ.jpg"
              alt="FAQ"

              fill

              priority

              className="
                object-cover

                rounded-[28px]
              "
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full">

          {/* LABEL */}
          <div
            className="
              flex items-center gap-3

              text-[#2563EB]

              text-[11px]
              md:text-[12px]

              tracking-[0.18em]

              uppercase

              font-bold

              mb-5
            "
          >

            <span className="text-[14px]">
              ◎
            </span>

            <span>
              Frequently Asked Questions
            </span>

          </div>

          {/* HEADING */}
          <h2
            className="
              font-playfair

              text-[#0B1120]

              text-[36px]
              sm:text-[48px]
              lg:text-[58px]

              leading-[1.08]

              font-bold
            "
          >
            Everything You{" "}

            <span className="text-[#2563EB]">
              Need to Know
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#5E6E90]

              mt-5

              max-w-[620px]

              text-[15px]
              md:text-[16px]

              leading-[30px]
            "
          >
            Find answers to common questions about our services,
            delivery models, and enterprise support.
          </p>

          {/* FAQ LIST */}
          <div
            className="
              mt-8

              flex flex-col

              gap-4
            "
          >

            {faqs.map((item, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}

                  className={`
                    rounded-[20px]

                    border

                    overflow-hidden

                    transition-all duration-300 ease-out

                    ${
                      isOpen
                        ? `
                          border-[#2563EB]/25
                          bg-white
                          shadow-[0_14px_40px_rgba(37,99,235,0.08)]
                        `
                        : `
                          border-[#E5E7EB]
                          bg-[#F8FAFC]

                          hover:border-[#2563EB]/20
                          hover:bg-white
                        `
                    }
                  `}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}

                    className="
                      w-full

                      flex items-center justify-between

                      gap-5

                      px-5
                      sm:px-6

                      py-5

                      text-left

                      cursor-pointer
                    "
                  >

                    <span
                      className="
                        text-[15px]
                        sm:text-[16px]

                        leading-[28px]

                        font-semibold

                        text-[#111827]
                      "
                    >
                      {item.q}
                    </span>

                    {/* ICON */}
                    <div
                      className={`
                        shrink-0

                        w-9
                        h-9

                        rounded-full

                        flex items-center justify-center

                        transition-all duration-300

                        ${
                          isOpen
                            ? `
                              bg-[#2563EB]
                              text-white
                              rotate-45
                            `
                            : `
                              bg-[#EEF4FF]
                              text-[#2563EB]
                            `
                        }
                      `}
                    >

                      <Plus className="w-4 h-4" />

                    </div>

                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                      overflow-hidden

                      transition-all duration-500 ease-in-out

                      ${
                        isOpen
                          ? `
                            max-h-[260px]

                            px-5 sm:px-6

                            pb-6
                          `
                          : `
                            max-h-0

                            px-5 sm:px-6
                          `
                      }
                    `}
                  >

                    <p
                      className="
                        text-[14px]
                        sm:text-[15px]

                        leading-[28px]

                        text-[#6B7280]
                      "
                    >
                      {item.a}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}