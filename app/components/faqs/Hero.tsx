"use client";

import { Search, ChevronRight, CircleDot } from "lucide-react";
import Link from "next/link";

interface FAQHeroProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function FAQHero({
  searchQuery,
  setSearchQuery,
}: FAQHeroProps) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#030B23]
        py-[110px]
        lg:py-[120px]
      "
    >
        {/* GRID BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          opacity-[0.08]

          bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)]

          bg-[size:60px_60px]

          pointer-events-none
        "
      />

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        {/* LEFT BLUE GLOW */}
        <div
          className="
            absolute
            left-[-200px]
            top-[10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#2563EB]/25
            blur-[140px]
          "
        />

        {/* RIGHT TEAL GLOW */}
        <div
          className="
            absolute
            right-[-180px]
            top-[5%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#00D5C7]/15
            blur-[150px]
          "
        />

        {/* CENTER BLUE GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#3563FF]/10
            blur-[120px]
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-[1200px]
          flex-col
          items-center
          px-6
          text-center
        "
      >
        {/* TOP LABEL */}
        <div
          className="
            mb-8
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#00D5C7]/30
            bg-[#00D5C7]/10
            px-5
            py-3
            text-[12px]
            font-semibold
            uppercase
            tracking-[2px]
            text-[#00D5C7]
            backdrop-blur-md
            lg:text-[13px]
          "
        >
          <CircleDot className="h-4 w-4" />
          Frequently Asked Questions
        </div>

        {/* MAIN HEADING */}
        <h1
          className="
            font-playfair
            text-[52px]
            font-extrabold
            leading-[1.05]
            text-white
            sm:text-[64px]
            lg:text-[48px]
          "
        >
          Got Questions?
        </h1>

        <h2
          className="
            mt-2
            font-playfair
            text-[48px]
            italic
            leading-[1]
            font-bold
            text-[#6D95FF]
            sm:text-[58px]
            lg:text-[52px]
          "
        >
          We Have Answers.
        </h2>

        {/* UNDERLINE */}
        <div
          className="
            mt-7
            h-[4px]
            w-[72px]
            rounded-full
            bg-gradient-to-r
            from-[#00D5C7]
            to-[#2563EB]
          "
        />

        {/* DESCRIPTION */}
        <p
          className="
            mt-8
            max-w-[600px]
            text-[16px]
            leading-[34px]
            text-[#9CA3AF]
            lg:text-[16px]
          "
        >
          Everything you need to know about ACME Global Hub
          services, platforms, and how we work with enterprises
          across the GCC.
        </p>

        {/* SEARCH BAR */}
        <div
          className="
            mt-10
            w-full
            max-w-[600px]
          "
        >
          <div
            className="
              group
              flex
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-white/8
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[#00D5C7]/40
              hover:shadow-[0_0_40px_rgba(0,213,199,0.15)]
            "
          >
            {/* INPUT WRAPPER */}
            <div
              className="
                flex
                flex-1
                items-center
                gap-4
                px-5
                lg:px-7
              "
            >
              <Search className="h-5 w-5 text-[#9CA3AF]" />

              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                className="
                  h-[50px]
                  w-full
                  bg-transparent
                  text-[15px]
                  text-white
                  outline-none
                  placeholder:text-[#7A8193]
                  lg:text-[16px]
                "
              />
            </div>

            {/* SEARCH BUTTON */}
            <button
              className="
                flex
                min-w-[100px]
                items-center
                justify-center
                gap-2
                bg-[#11C5B5]
                px-6
                text-[15px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#0FB3A5]
                lg:min-w-[150px]
                lg:text-[18px]
                cursor-pointer
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* BREADCRUMB */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            text-[14px]
            text-white/40
            lg:text-[16px]
          "
        >
          <Link
                href="/"

                className="
                  hover:text-white
                  transition-colors
                "
              >
                Home
              </Link>

          <span>/</span>

          <span className="text-white/60">
            Frequently Asked Questions
          </span>
        </div>
      </div>
    </section>
  );
}