"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star, Sun, CircleCheckBig } from "lucide-react";

const data = [
  {
    title: "Enhanced Service Delivery",
    desc: "Collaborating with trusted partners to deliver integrated, reliable, and high-quality services across our entire solutions ecosystem.",
    icon: <CircleCheckBig className="w-6 h-6" />,
  },
  {
    title: "Access to Advanced Technology",
    desc: "Leveraging partner technologies to deliver innovative, future-ready solutions that accelerate digital transformation for our clients.",
    icon: <Sun className="w-6 h-6" />,
  },
  {
    title: "Greater Client Value",
    desc: "Combining expertise and capabilities to provide scalable solutions that maximise value and long-term success for every client we serve.",
    icon: <Star className="w-6 h-6" />,
  },
];

export default function WhyPartnership() {
  return (
    <section className="bg-[#FFFFFF] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-[80px] items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[520px] rounded-[28px] overflow-hidden"
        >
          <Image
            src="/media/Partner.jpeg"
            alt="partnership"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>

          {/* LABEL */}
          <div className="flex items-center gap-2 text-[#2E66FF] text-[13px] font-semibold mb-4 tracking-[1px] uppercase">
            <Clock className="w-4 h-4" />
            <span>Why Our Partnership Matters</span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-[38px] leading-[1.2] font-semibold text-[#0B1120]">
            Why Our Partnership
          </h2>

          <h2 className="font-playfair text-[38px] leading-[1.2] font-semibold text-[#2E66FF] mt-1">
            Matters
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[#5E6E90] mt-6 text-[16px] leading-[28px] max-w-[520px]">
            Our strategic technology alliances are the foundation of every solution we deliver. 
            By partnering with industry-leading vendors, we extend our capabilities, accelerate delivery, 
            and ensure our clients always have access to the best available technology.
          </p>

          {/* CARDS */}
          <div className="mt-10 flex flex-col gap-4">

            {data.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8, y: -2 }}  
                transition={{ duration: 0.2 }}
                className="group relative bg-[#F4F6FB] border border-[#1A4FD6]/10 rounded-2xl 
                px-5 py-4 flex gap-4 cursor-pointer 
                transition-all duration-300

                hover:border-[#1A4FD6]
                hover:shadow-[0_10px_30px_rgba(26,79,214,0.15)]  
                "
              >

                {/* ICON */}
                <div className="w-[46px] h-[46px] rounded-xl bg-[#1A4FD6]/10 
                flex items-center justify-center text-[#1A4FD6] flex-shrink-0">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-playfair text-[#0B1120] font-semibold text-[16px]">
                    {item.title}
                  </h3>

                  <p className="text-[#5E6E90] text-[14px] mt-1.5 leading-[22px] max-w-[420px]">
                    {item.desc}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}