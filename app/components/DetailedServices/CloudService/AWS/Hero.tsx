"use client";

import Link from "next/link";

export default function AWSHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#07142A]

        pt-[110px]
        pb-[60px]

        min-h-[420px]

        flex
        items-center
        justify-center

        before:absolute
        before:inset-0

        before:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]

        before:bg-[size:60px_60px]

        before:opacity-40
        before:pointer-events-none
      "
    >

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-0
          top-0

          w-[600px]
          h-[600px]

          z-0

          bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,255,0.28),transparent_40%)]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          w-full

          max-w-[1300px]
          mx-auto

          px-6
          lg:px-20

          flex
          justify-center
        "
      >

        {/* CENTER CONTENT */}
        <div
          className="
            text-center

            max-w-[820px]

            flex
            flex-col
            items-center
          "
        >

          {/* EYEBROW */}
          <div
            className="
              flex
              items-center
              gap-3

              mb-6
            "
          >

            <span
              className="
                w-2.5
                h-2.5

                rounded-full

                bg-[#00B89C]

                animate-pulse
              "
            />

            <span
              className="
                text-[11px]
                sm:text-[12px]

                tracking-[1.5px]

                text-[#00B89C]

                font-bold
                uppercase
              "
            >
              Personalized walkthrough
            </span>

          </div>

          {/* HEADING */}
          <h1
            className="
              font-playfair

              text-white

              text-[42px]
              sm:text-[54px]
              lg:text-[64px]

              leading-[1.1]

              font-extrabold

              mb-6
            "
          >

            Request a{" "}

            <span
              className="
                text-[#7AADFF]
                italic
              "
            >
              Demo
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-[15px]
              sm:text-[16px]

              text-white/70

              leading-[30px]
              sm:leading-[32px]

              max-w-[700px]

              mb-10
            "
          >
            See exactly how ACME Global Hub can transform your
            IT operations. Book a personalized demo with one of
            our enterprise solutions experts.
          </p>

          {/* BREADCRUMB */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              text-sm

              text-white/60
            "
          >

            <Link
              href="/"
              className="
                hover:text-white
                transition-colors
                duration-300
              "
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white/40">
              Request a Demo
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}