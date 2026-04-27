"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Shield } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="bg-[#f5f6f8] py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGES */}
        <div className="relative w-full h-[520px]">

          {/* BIG IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 top-0 w-[340px] h-[340px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/media/About_us1.avif"
              alt="about"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* SMALL OVERLAY IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-0 left-[40%] w-[285px] h-[260px] rounded-2xl overflow-hidden border-[4px] border-white shadow-xl"
          >
            <Image
              src="/media/About_us2.avif"
              alt="about"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TOP LABEL */}
          <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-4">
          
            <Shield className="w-5 h-5 text-blue-600 text-[12px] uppercase" />
            <span>WHAT WE DO</span>
          </div>

          {/* HEADING */}
          <h2 className="font-playfair text-[35px] leading-[1.2] font-bold text-gray-900">
            Enabling Agile, Secure, and
          </h2>

          <h2 className="font-playfair text-[35px] leading-[1.2] font-bold text-blue-600 mt-2">
            Future-Ready Enterprises
          </h2>

          {/* DESCRIPTION */}
          <p className="font-Dm_Sans text-[#5E6E90] text-Regular mt-6 text-[16px] leading-[28px] max-w-xl">
            ACME Global is a prominent Cloud Service Provider, Managed 
            Service Provider and Resource Outsourcing Partner, offering 
            transformational solutions across different market verticals. 
            Our primary lines of business include: Cloud, Application, 
            Cybersecurity & Managed IT Services, amongst many others. 
            With our comprehensive portfolio of service offerings, 
            we efficiently address enterprise-wide technology needs 
            by providing one-stop solutions, from strategy to execution.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 text-Regular text-[#0B1120] text-[14px] leading-[24px]">

            {/* ITEM */}
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Everything-as-a-Service (XaaS) delivery</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Cloud-first and security-driven architecture</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Flexible pricing with scalable service plans</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[#00B89C]/12 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#00B89C]" />
              </div>
              <p>Global delivery backed by regional expertise</p>
            </div>

          </div>

          {/* BUTTON */}
          <button className="mt-10 bg-[#1A4FD6] hover:bg-[#2E66FF] text-[#FFFFFF] px-6 py-3 rounded-xl shadow-lg transition">
            Learn More About Us
          </button>

        </div>

      </div>
    </section>
  );
}