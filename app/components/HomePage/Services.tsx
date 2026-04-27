"use client";

import { services } from "@/lib/services";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section className="py-20 bg-[#F4F6FA]">
      
      <div className="max-w-[1200px] mx-auto px-[64px]">

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[40px] font-bold text-[#0B1120] mb-12">
          End-to-End Digital Services for{" "}
          <span className="text-[#2E66FF]">Modern Enterprises</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[18px] gap-y-[18px]">

          {services.map((s, i) => (
            <Link key={i} href={`/services/${s.slug}`}>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[22px] 
                  px-5 py-6 h-full
                  border border-[#E6EAF2]
                  shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  hover:bg-gradient-to-r hover:from-[#155DFC] hover:to-[#4F8CFF]
                  transition-all duration-300 cursor-pointer flex flex-col h-full"
              >

                {/* ICON */}
                <div className="w-11 h-11 rounded-[12px] bg-[#1A4FD6]/10 
                  flex items-center justify-center mb-4
                  group-hover:bg-white/10 transition">

                  <div className="text-[#155DFC] group-hover:text-white">
                    {s.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-[16px] font-semibold text-[#0B1120] 
                  group-hover:text-white mb-2">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[13px] text-[#6B7280] 
                  group-hover:text-white/90 leading-[20px] mb-4">
                  {s.desc}
                </p>

                {/* EXPLORE */}
                <div className="flex items-center gap-2 text-[#155DFC] 
                  group-hover:text-white text-[13px] font-medium">

                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}