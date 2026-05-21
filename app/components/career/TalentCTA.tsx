"use client";

import { useState } from "react";
import Link from "next/link";


export default function TalentCTA() {

  return (
    <>
      {/* SECTION */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto bg-[#F4F6FB] border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="flex-1">
            <h2 className="font-playfair text-[24px] md:text-[32px] leading-[1.3] font-bold text-[#0B1120]">
              Didn't Find the Role You're Looking For? We'd Still Love to Hear From Talented People.
            </h2>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block w-[1px] h-32 bg-gray-300"></div>

          {/* RIGHT */}
          <div className="flex-1">
            <p className="text-gray-600 leading-7 mb-6">
              Even if the perfect role isn't listed today, we're always open
              to meeting talented people. Share your interests and strengths
              with us, and we'll reach out when the right opportunity comes along.
            </p>

            <Link
  href="/careers/genapply"

  className="
    inline-flex
    items-center
    justify-center

    px-7
    py-3.5

    rounded-xl

    bg-[#1A4FD6]

    text-white
    font-semibold

    hover:bg-[#2E66FF]

    transition-all
    duration-300

    shadow-lg
    hover:shadow-xl
  "
>
  Submit Your Profile
</Link>
          </div>
        </div>
      </section>

    </>
  );
}