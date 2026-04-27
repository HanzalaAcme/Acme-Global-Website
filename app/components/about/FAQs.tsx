"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What does ACME Global do?",
    a: "ACME Global is a Cloud Service Provider, Managed Service Provider, and Resource Outsourcing Partner. We deliver transformational technology solutions across cloud, application services, cybersecurity, managed IT, and staffing — covering the full enterprise technology lifecycle.",
  },
  {
    q: "What industries does ACME Global serve?",
    a: "We serve enterprises across a wide range of verticals including finance, healthcare, retail, government, and technology. Our flexible XaaS delivery model is designed to adapt to the regulatory and operational requirements of each sector.",
  },
  {
    q: "How is ACME Global different from other service providers?",
    a: "We offer a true one-stop XaaS portfolio — from cloud and security to ERP and talent — with regional delivery expertise across India, Bahrain, and Kuwait. Our end-to-end ownership model means we stay accountable from strategy through to ongoing operations.",
  },
  {
    q: "How does ACME Global support long-term business growth?",
    a: "Through subscription-based, scalable service models that grow with your business. We provide continuous optimization, proactive managed services, and strategic advisory — ensuring your technology investments deliver value over the long term.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F4F6FB] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[60px] items-center">

        {/* LEFT IMAGE */}
        <div className="w-full h-[520px] rounded-[28px] overflow-hidden">
          <Image
            src="/media/FAQ Image.png"
            alt="faq"
            width={650}
            height={520}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-2 text-[#2563EB] text-[13px] tracking-[2px] uppercase mb-4">
            <span>◎</span>
            <span>Frequently Asked Questions</span>
          </div>

          {/* HEADING */}
          <h1 className="font-playfair text-[38px] font-bold text-[#0B1120]">
            Everything You Need to Know
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#5E6E90] mt-4 max-w-[528px] leading-[26px]">
            Find answers to common questions about our services, delivery models, and enterprise support.
          </p>

          {/* FAQ LIST */}
          <div className="mt-8 flex flex-col gap-4">

            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-[16px] border transition-all duration-300 ${isOpen
                    ? "border-[#2563EB] bg-white"
                    : "border-[#E5E7EB] bg-[#F8FAFC]"
                    }`}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="text-[14px] font-medium text-[#111827]">
                      {item.q}
                    </span>

                    <span className="text-xl text-[#2563EB]">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {/* ANSWER (HEIGHT ANIMATION EXACT) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[180px] px-6 pb-5" : "max-h-0 px-6"
                      }`}
                  >
                    <p className="text-[14px] leading-[24px] text-[#6B7280]">
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