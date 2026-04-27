"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What is Everything-as-a-Service (XaaS)?",
    a: "XaaS delivers any IT capability — software, infrastructure, platforms, or services — on a subscription basis. It replaces large capital expenditures with predictable operating costs and gives your team instant access to enterprise-grade tools that scale with your business.",
  },
  {
    q: "Do you provide customized enterprise solutions?",
    a: "Yes. Every engagement starts with a discovery workshop to understand your specific challenges, existing stack, and growth roadmap. We design a tailored service bundle that fits your organization's needs and budget.",
  },
  {
    q: "Can services scale with business growth?",
    a: "Scalability is core to our XaaS model. You can expand or reduce service tiers, add new capabilities, or shift delivery models without renegotiating large contracts.",
  },
  {
    q: "Do you support regional and global operations?",
    a: "Yes. We operate delivery centers across India, Bahrain, and Kuwait, giving us the regional compliance knowledge and language capabilities to serve clients across South Asia, the Middle East, and beyond.",
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