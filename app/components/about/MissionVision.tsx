"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {Sun, Star} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#F4F6FB] py-[100px] px-6 lg:px-20">

      {/* TOP LABEL */}
      <div className="flex justify-center items-center font-semibold gap-2 text-[#2E66FF] text-[13px] tracking-[1px] uppercase mb-4">
        <Sun className="w-5 h-5" />
        <span>Our Approach</span>
      </div>

      {/* HEADING */}
      <h2 className="text-center font-playfair text-[40px] font-extrabold leading-[1.2] font-bold mb-16">
        <span className="text-[#0B1120]">Securing Digital Trust, </span>
        <span className="text-[#2E66FF]">
          Empowering Your Business Future
        </span>
      </h2>

      {/* MAIN GRID */}
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-[80px] items-center">

        {/* LEFT → CARDS */}
        <div className="flex flex-col gap-6">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
            className="group bg-white border border-[#E6EAF2] rounded-[20px] 
            p-6 flex gap-5 cursor-pointer
            hover:border-[#1A4FD6] 
            hover:shadow-[0_10px_25px_rgba(26,79,214,0.15)]
            transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-[56px] h-[56px] rounded-xl bg-[#1A4FD6]/10 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-[#1A4FD6]" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="font-playfair text-[18px] font-bold text-[#0B1120]">
                Our Mission
              </h3>

              <p className="text-[14px] text-[#5E6E90] mt-2 leading-[24px] max-w-[420px]">
                Our mission is to provide best-in-class innovative solutions 
                that meet client objectives and their business requirements
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ x: 8 }}
            transition={{ duration: 0.2 }}
            className="group bg-white border border-[#E6EAF2] rounded-[20px] 
            p-6 flex gap-5 cursor-pointer
            hover:border-[#1A4FD6] 
            hover:shadow-[0_10px_25px_rgba(26,79,214,0.15)]
            transition-all duration-300"
          >
            {/* ICON */}
            <div className="w-[56px] h-[56px] rounded-xl bg-[#1A4FD6]/10 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 text-[#1A4FD6]" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="font-playfair text-[18px] font-bold text-[#0B1120]">
                Our Vision
              </h3>

              <p className="text-[14px] text-[#5E6E90] mt-2 leading-[24px] max-w-[420px]">
                To be the regional leader by setting benchmarks for superior quality products, innovative services, long term partnerships and customer satisfaction.
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT → IMAGE */}
        <div className="w-full h-[420px] rounded-[28px] overflow-hidden">
          <Image
            src="/media/MissionVision.jpeg"
            alt="mission"
            width={600}
            height={420}
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}