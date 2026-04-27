"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionVision() {
  return (
    <section className="bg-gray-100 w-full py-12 px-6">

      {/* Title */}
      <div className="flex items-center justify-center gap-4 mb-8 text-gray-800">
        <Image src="/media/approach.png" alt="Approach" width={40} height={40} />
        <h2 className="text-xl font-bold">Our Approach</h2>
      </div>

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-800">
          Securing Digital Trust,
        </h1>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-600">
          Empowering Your Business Future
        </h1>
      </div>

      {/* Main Wrapper */}
      <div className="relative max-w-6xl mx-auto min-h-[500px] flex items-center justify-end">

        {/* Image (RIGHT SIDE & SMALLER) */}
        <div className="overflow-hidden">
          <Image
            src="/media/2.jpg"
            alt="Mission Vision"
            width={600}
            height={620}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Cards Wrapper */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-8 px-4 md:px-0 z-10 w-full max-w-[95%] lg:max-w-none">

          {/* Mission Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden bg-white rounded-lg shadow-2xl p-8 flex items-center cursor-pointer w-full lg:w-[620px] lg:h-[130px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#155DFC] to-[#51A2FF]
        translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-in-out z-0"></div>

            <div className="relative z-10 flex gap-8 items-center w-full">
              <div className="shrink-0">
                <Image src="/media/Mision_pic1 (1).png" alt="Mission" width={90} height={90} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-white transition mb-3">
                  Our Mission
                </h3>
                <p className="text-base text-gray-600 group-hover:text-white transition leading-relaxed">
                  Our mission is to provide best-in-class innovative solutions that meet client
                  objectives and their business requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden bg-white rounded-lg shadow-2xl p-8 flex items-center cursor-pointer w-full lg:w-[620px] lg:h-[130px]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#155DFC] to-[#51A2FF]
        translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-in-out z-0"></div>

            <div className="relative z-10 flex gap-8 items-center w-full">
              <div className="shrink-0">
                <Image src="/media/Vision_pic1.png" alt="Vision" width={90} height={90} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-white transition mb-3">
                  Our Vision
                </h3>
                <p className="text-base text-gray-600 group-hover:text-white transition leading-relaxed">
                  To be the regional leader by setting benchmarks for superior quality products,
                  innovative services, long term partnerships and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}