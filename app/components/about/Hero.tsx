"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    //<section className="relative bg-[#07142A] pt-[72px] min-h-[520px] overflow-hidden">
       <section className="w-full min-h-[480px] bg-[#07142A] pt-[72px] 
        flex items-center justify-center overflow-hidden
        relative
        before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        before:bg-[size:60px_60px]
        before:opacity-40
        before:pointer-events-none
        ">

      {/* LEFT GLOW GRADIENT */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] z-0
        bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.28),transparent_40%)]">
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-20 h-full flex items-center">

        <div className="grid lg:grid-cols-2 gap-[80px] items-center w-full">

          {/* LEFT CONTENT */}
          <div className="text-white">

            <h1 className="font-playfair text-[48px] leading-[1.1] font-bold mb-6">
              About ACME Global
            </h1>

            <p className="text-[18px] text-white/70 leading-[32px] max-w-[520px] mb-8">
              We empower clients with world-class technology <br />
              services, and solutions
            </p>

            {/* BREADCRUMB */}
            <div className="text-sm text-white/60 flex items-center gap-2">
              {/*<span className="hover:text-white cursor-pointer">Home</span>*/}
              <Link href="/" className="hover:text-white cursor-pointer">Home</Link>
              <span>/</span>
              <span className="text-[#ffffff]/42">About Us</span>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <div className="w-[520px] h-[280px] relative rounded-md overflow-hidden">
              <Image
                src="/media/hero.jpeg" // replace with your image
                alt="about"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}