"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[450px] bg-[#1E3A5F] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full relative">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-16 text-white z-10">
          <div className="flex flex-col justify-center flex-grow">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
              About Us
            </h1>
            <p className="text-lg text-blue-100 max-w-md leading-relaxed text-balance">
              Discover our story, our mission, and the passionate team driving our global success forward.
            </p>
          </div>

          {/* Breadcrumb - down part */}
          <div className="text-sm font-medium tracking-wide text-blue-200 flex items-center gap-2">
            <span className="hover:text-white transition-colors cursor-pointer">HOME</span>
            <span className="text-blue-400">/</span>
            <span className="text-white">ABOUT US</span>
          </div>
        </div>

        {/* Right Side: Image touching bottom */}
        <div className="w-full md:w-1/2 flex items-end justify-center md:justify-end h-full">
          <div className="relative w-full max-w-[500px] h-[350px] lg:h-[450px]">
            <Image
              src="/media/AboutUs.png"
              alt="About Us Hero"
              fill
              className="object-cover object-right rounded-t-2xl shadow-2xl"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}