"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, Shield, ShieldCheck, Star } from "lucide-react";

const data = [
  {
    title: "Enterprise-Grade Expertise",
    desc: "Vendor-certified professionals with deep experience across cloud cybersecurity, and enterprise technologies.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Flexible Service Models",
    desc: "Subscription-based, project-based, or hybrid delivery model designed to adapt as your business grows.",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: "End-to-End Ownership",
    desc: "From onboarding to continuous optimization, we manage the complete service lifecycle with accountability.",
    icon: <Code className="w-6 h-6" />,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#030B1F] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[80px] items-center">

        {/* LEFT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center text-[#00B89C] text-[12px] font-bold uppercase mb-6 gap-2">
            <Star className="w-5 h-5 text-[#00B89C]" />
            <span>Why Choose ACME Global Hub</span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-white text-[35px] font-extrabold max-w-[600px]">
            Designed for Scale.{" "}
            <span className="font-playfair text-[#6EA8FF] italic font-extrabold">
              Built on Trust.
            </span>
          </h2>

          {/* CARDS */}
          <div className="mt-10 flex flex-col gap-3">

            {data.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="group relative bg-[#0B132B] border border-[#1C274C] rounded-2xl p-6 flex gap-5 cursor-pointer transition-all duration-300"
              >
                {/* HOVER BG */}
                <div className="absolute inset-0 bg-[#1A4FD6]/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

                {/* ICON */}
                <div className="relative z-10 w-[50px] h-[50px] rounded-xl bg-[#16204A] flex items-center justify-center text-white">
                  {typeof item.icon === 'string' ? (
                    <Image src={item.icon} alt="" width={20} height={20} />
                  ) : (
                    item.icon
                  )}
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <h3 className="text-[#FFFFFF] font-semibold text-[15px]">
                    {item.title}
                  </h3>

                  <p className="text-[#FFFFFF]/50 text-[13px] mt-2 leading-[22px] max-w-[420px]">
                    {item.desc}
                  </p>
                </div>

                {/* BORDER HOVER */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#1A4FD6] transition-all duration-300"></div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-[520px] rounded-[28px] overflow-hidden"
        >
          <Image
            src="/media/Why_acme.avif"
            alt="why"
            width={700}
            height={520}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}