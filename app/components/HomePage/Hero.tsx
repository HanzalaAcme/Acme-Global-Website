"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0B1120] min-h-screen flex items-center px-6 lg:px-20 relative overflow-hidden">

      <div className="pt-[72px] grid lg:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto pl-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-playfair text-[#FFFFFF] font-extrabold text-[54px] leading-tight">
            Transform Your Business with{" "}
            <span className="text-[#7AADFF] text-extrabold">
              Complete XaaS Solutions
            </span>
          </h1>

          <p className=" text-[#FFFFFF]/60 mt-6 max-w-lg text-[17px] leading-[30px]">
            Unlock unlimited potential with our comprehensive <br />
            Everything-as-a-Service platform that revolutionizes how <br />
            you operate, scale, and succeed
          </p>

          <button className=" mt-6 bg-[#1A4FD6] text-[#FFFFFF] px-6 py-3 rounded-lg hover:bg-blue-700">
            Explore Solutions
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <Image
            src="/media/Image 1 (720x720px).png"  // 👉 put in public folder
            alt="hero"
            width={600}
            height={500}
            className="rounded-xl opacity-80"
          />
        </motion.div>

      </div>
    </section>
  );
}