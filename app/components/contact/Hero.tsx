"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {

  return (

    <section
      className="
        w-full

        min-h-[430px]

        bg-[#07142A]

        pt-[72px]

        flex
        items-center
        justify-center

        overflow-hidden

        relative

        before:absolute
        before:inset-0

        before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]

        before:bg-[size:60px_60px]

        before:opacity-40

        before:pointer-events-none
      "
    >

      {/* LEFT GLOW GRADIENT */}
      <div
        className="
          absolute
          left-0
          top-0

          w-[600px]
          h-[600px]

          z-0

          bg-[radial-gradient(circle_at_0%_35%,rgba(0,180,255,0.28),transparent_28%)]

          pointer-events-none
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-0
          bottom-0

          w-[450px]
          h-[450px]

          z-0

          bg-[radial-gradient(circle_at_100%_100%,rgba(46,102,255,0.18),transparent_38%)]

          pointer-events-none
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

          h-full

          flex
          items-center
        "
      >

        <div
          className="
            grid

            lg:grid-cols-2

            gap-[50px]
            lg:gap-[80px]

            items-center

            w-full
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              text-white

              text-center
              lg:text-left
            "
          >

            <h1
              className="
                font-playfair

                text-[38px]
                sm:text-[42px]
                lg:text-[48px]

                leading-[1.1]

                font-bold

                mb-6
              "
            >
              Get in Touch
            </h1>

            <p
              className="
                text-[16px]
                sm:text-[18px]

                text-white/70

                leading-[30px]
                sm:leading-[32px]

                max-w-[520px]

                mx-auto
                lg:mx-0

                mb-8
              "
            >
              Have a question or want to explore how ACME Global Hub can support your business? Drop us a message and one of our specialists will be in touch.
            </p>

            {/* BREADCRUMB */}
            <div
              className="
                text-sm

                text-white/40

                flex
                items-center

                justify-center
                lg:justify-start

                gap-2
              "
            >

              <Link
                href="/"

                className="
                  hover:text-white

                  transition-colors
                  duration-300

                  cursor-pointer
                "
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-white/60">
                Contact Us
              </span>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              flex

              justify-center
              lg:justify-end
            "
          >

            <div
              className="
                relative

                w-full
                max-w-[500px]

                h-[220px]
                sm:h-[260px]
                lg:h-[200px]

                rounded-md

                overflow-hidden

                border
                border-white/10

                shadow-[0_15px_50px_rgba(0,0,0,0.35)]
              "
            >

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0

                  z-10

                  bg-gradient-to-tr
                  from-[#07142A]/25
                  via-transparent
                  to-[#1A4FD6]/15
                "
              />

              <Image
                src="/media/ContactUs_Hero.jpg"

                alt="contact"

                fill

                priority

                sizes="
                  (max-width: 768px) 100vw,
                  520px
                "

                className="
                  object-cover

                  transition-transform
                  duration-700

                  hover:scale-[1.03]
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}