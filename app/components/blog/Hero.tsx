"use client";

import Link from "next/link";

export default function BlogHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#07142A]

        pt-[110px]
        pb-[80px]

        md:pt-[120px]
        md:pb-[60px]
      "
    >

      {/* GRID BACKGROUND */}
      <div
        className="
          absolute inset-0 z-0

          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]

          bg-[size:60px_60px]

          opacity-40
        "
      />

      {/* LEFT BLUE GLOW */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-80px]

          h-[500px]
          w-[500px]

          rounded-full

          bg-[radial-gradient(circle,rgba(46,102,255,0.22)_0%,rgba(46,102,255,0.10)_28%,transparent_72%)]

          blur-3xl

          z-0
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative z-10

          max-w-[1280px]
          mx-auto

          px-6
          sm:px-8
          lg:px-16
          xl:px-20
        "
      >

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-y-14
            lg:gap-x-24

            items-center
          "
        >

          {/* LEFT SIDE */}
          <div className="text-white">

            {/* SMALL LABEL */}
            <p
              className="
                uppercase
                tracking-[2px]

                text-[#7AADFF]

                text-[12px]
                sm:text-[13px]

                font-semibold

                mb-3
              "
            >
              The ACME GLOBAL HUB
            </p>

            {/* TITLE */}
            <h1
              className="
                font-playfair
                italic
                font-bold

                text-[#7AADFF]

                leading-[0.95]

                text-[48px]
                sm:text-[64px]
                md:text-[72px]

                mb-10
              "
            >
              Blogs
            </h1>

            {/* BREADCRUMB */}
            <div
              className="
                flex
                items-center
                gap-2

                text-[14px]
                sm:text-[14px]

                text-white/60
              "
            >

              <Link
                href="/"
                className="
                  transition-colors
                  duration-300

                  hover:text-white
                "
              >
                Home
              </Link>

              <span className="text-white/30">/</span>

              <span className="text-white/40">
                Blogs
              </span>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              relative

              lg:pl-16
            "
          >

            {/* VERTICAL DIVIDER */}
            <div
              className="
                hidden
                lg:block

                absolute
                left-0
                top-1/2
                -translate-y-1/2

                h-[180px]
                w-px

                bg-white/20
              "
            />

            {/* TEXT */}
            <div
              className="
                max-w-[580px]
              "
            >

              <p
                className="
                  text-[#FFFFFF]/65

                  text-[14px]
                  sm:text-[15px]
                  lg:text-[18px]

                  leading-[1.5]
                  lg:leading-[1.45]

                  font-light
                "
              >
                Expert insights, technology trends, and practical thinking from the ACME Global Hub team helping enterprises across the GCC stay ahead in cloud, security, AI, and beyond.
                
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}