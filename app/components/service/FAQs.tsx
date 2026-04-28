"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What does ACME Global offer?",
    a: "ACME Global is a Cloud Service Provider, Managed Service Provider, and Resource Outsourcing Partner. We deliver end-to-end enterprise IT services — from cloud infrastructure and cybersecurity to ERP platforms, staff augmentation, and proprietary SaaS products — through a scalable XaaS delivery model.",
  },
  {
    q: "How do you tailor solutions to our business needs?",
    a: "We begin every engagement with a discovery and assessment phase to understand your technology landscape, business objectives, and constraints. Based on this, we design a tailored delivery model — subscription, project-based, or hybrid — with clear SLAs and measurable outcomes.",
  },
  {
    q: "Do you provide support after project implementation?",
    a: "Yes. Our managed services and continuous support offerings ensure that every implementation is backed by ongoing monitoring, optimisation, and helpdesk support. We manage the full service lifecycle — from strategy through to day-two operations.",
  },
  {
    q: "How do your services improve business performance?",
    a: "Our XaaS delivery model converts capital expenditure into predictable operational costs, accelerates time-to-value for technology investments, and provides access to specialised skills on demand — enabling your organisation to respond faster, operate leaner, and scale with confidence.",
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
        <div className="w-full h-[500px] rounded-[28px] overflow-hidden">
          <Image
            src="/media/FAQ.jpeg"
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
                    className="w-full flex justify-between items-center px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-[14px] font-medium text-[#111827]">
                      {item.q}
                    </span>

                    <div
                    className={`w-6 h-6 flex items-center justify-center text-[#2563EB] 
                    transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${isOpen ? "rotate-45 scale-110" : "rotate-0 scale-100"}`}
>
                     <span className="text-2xl leading-none">+</span>
                    </div>
                  </button>

                  {/* ANSWER (HEIGHT ANIMATION EXACT) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[180px] px-6 pb-5" : "max-h-0 px-6"
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