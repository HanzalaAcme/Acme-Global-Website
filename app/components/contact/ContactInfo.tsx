"use client";

import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { useState } from "react";

export default function ContactSection() {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    const formData =
      new FormData(e.target);

    const payload = {

      firstName:
        formData.get("firstName"),

      lastName:
        formData.get("lastName"),

      phone:
        formData.get("phone"),

      email:
        formData.get("email"),

      message:
        formData.get("message"),
    };

    try {

      const res = await fetch(
        "/api/contact",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify(payload),
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setSuccess(
          "Your message has been sent successfully."
        );

        e.target.reset();

      } else {

        setError(
          data.message ||
          "Failed to send message."
        );
      }

    } catch {

      setError(
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (

    <section
      className="
        bg-[#FFFFFF]

        py-[80px]

        px-5
        sm:px-6
        lg:px-20

        overflow-hidden
      "
    >

      {/* TOP */}
      <div className="text-center mb-10">

        <div
          className="
            flex
            items-center
            justify-center

            gap-2

            mb-4
          "
        >

          <Phone
            className="
              w-5
              h-5

              text-[#2E66FF]
            "
          />

          <span
            className="
              text-[#2E66FF]

              text-[13px]

              font-bold

              uppercase

              tracking-[1px]
            "
          >
            Contact Us
          </span>

        </div>

        <h2
          className="
            font-playfair

            text-[30px]
            sm:text-[34px]
            lg:text-[36px]

            leading-[1.2]

            font-extrabold

            text-[#0B1120]

            mt-4
          "
        >
          Do you have any questions?
          <br />

          <span className="text-[#2E66FF]">
            Ask us anytime
          </span>

        </h2>

      </div>

      <div
        className="
          max-w-[1100px]

          mx-auto

          relative
        "
      >

        {/* TOP CARD */}
        <div
          className="
            relative
            z-10

            mb-[-260px]
            md:mb-[-80px]
          "
        >

          <div
            className="
              rounded-[18px]

              px-6
              md:px-10

              py-8

              shadow-xl

              flex

              flex-col
              md:flex-row

              justify-between

              items-center

              gap-8
              md:gap-0
            "
            style={{
              background:
                "linear-gradient(30deg, #1A4FD6 0%, #0EA5E9 60%, #06B6D4 100%)",
            }}
          >

            {/* ITEM 1 */}
            <div
              className="
                flex
                flex-col

                items-center

                text-center

                text-white

                w-full
                md:w-1/3
              "
            >

              <div
                className="
                  w-[70px]
                  h-[70px]

                  bg-white

                  rounded-full

                  flex
                  items-center
                  justify-center

                  mb-4

                  shrink-0
                "
              >

                <Phone
                  className="
                    text-[#1A4FD6]

                    w-8
                    h-8
                  "
                />

              </div>

              <h3
                className="
                  font-playfair

                  font-semibold

                  text-[18px]
                "
              >
                Contact Us
              </h3>

              <p
                className="
                  text-[14px]

                  mt-2

                  opacity-90
                "
              >
                +91 4040117942
              </p>

            </div>

            {/* DIVIDER */}
            <div
              className="
                hidden
                md:block

                w-[1px]
                h-[100px]

                bg-white/30
              "
            />

            {/* ITEM 2 */}
            <div
              className="
                flex
                flex-col

                items-center

                text-center

                text-white

                w-full
                md:w-1/3
              "
            >

              <div
                className="
                  w-[70px]
                  h-[70px]

                  bg-white

                  rounded-full

                  flex
                  items-center
                  justify-center

                  mb-4
                "
              >

                <Mail
                  className="
                    text-[#1A4FD6]

                    w-8
                    h-8
                  "
                />

              </div>

              <h3
                className="
                  font-playfair

                  font-semibold

                  text-[18px]
                "
              >
                Email Us
              </h3>

              <p
                className="
                  text-[14px]

                  mt-2

                  opacity-90

                  break-all
                  sm:break-normal
                "
              >
                sales@acmeglobal.tech
              </p>

            </div>

            {/* DIVIDER */}
            <div
              className="
                hidden
                md:block

                w-[1px]
                h-[100px]

                bg-white/30
              "
            />

            {/* ITEM 3 */}
            <div
              className="
                flex
                flex-col

                items-center

                text-center

                text-white

                w-full
                md:w-1/3
              "
            >

              <div
                className="
                  w-[70px]
                  h-[70px]

                  bg-white

                  rounded-full

                  flex
                  items-center
                  justify-center

                  mb-4
                "
              >

                <MapPin
                  className="
                    text-[#1A4FD6]

                    w-8
                    h-8
                  "
                />

              </div>

              <h3
                className="
                  font-playfair

                  font-semibold

                  text-[18px]
                "
              >
                Our Location
              </h3>

              <p
                className="
                  text-[14px]

                  mt-2

                  opacity-90

                  leading-[22px]

                  max-w-[260px]
                "
              >
                504 & 506, 4th Floor,
                KTC Illumination,
                Madhapur, Hyderabad,
                Telangana, India
              </p>

            </div>

          </div>

        </div>

        {/* FORM SECTION */}
        <div
          className="
            relative

            rounded-[18px]

            overflow-hidden
          "
        >

          <Image
            src="/media/Form_Bg.jpg"

            alt="contact"

            width={1200}
            height={600}

            sizes="
              (max-width: 768px) 100vw,
              1200px
            "

            className="
              w-full

              h-[760px]
              md:h-[520px]

              object-cover
            "
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0

              bg-black/60
            "
          />

          {/* FORM */}
          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center

              px-5
              sm:px-6

              pt-[300px]
              md:pt-[80px]
            "
          >

            <form
              onSubmit={handleSubmit}

              className="
                w-full

                max-w-[900px]
              "
            >

              {/* INPUTS */}
              <div
                className="
                  grid

                  grid-cols-1
                  md:grid-cols-2

                  gap-5
                  md:gap-6

                  mb-6
                "
              >

                {[
                  {
                    name: "firstName",
                    type: "text",
                    placeholder:
                      "First Name *",
                  },

                  {
                    name: "lastName",
                    type: "text",
                    placeholder:
                      "Last Name *",
                  },

                  {
                    name: "phone",
                    type: "text",
                    placeholder:
                      "Phone Number *",
                  },

                  {
                    name: "email",
                    type: "email",
                    placeholder:
                      "E-mail *",
                  },
                ].map((field, i) => (

                  <input
                    key={i}

                    name={field.name}

                    type={field.type}

                    required

                    placeholder={
                      field.placeholder
                    }

                    className="
                      w-full

                      px-5
                      py-3

                      rounded-lg

                      bg-white

                      text-black

                      placeholder-gray-500

                      outline-none

                      border
                      border-transparent

                      transition-all
                      duration-300

                      focus:border-[#2E66FF]

                      focus:ring-4
                      focus:ring-[#2E66FF]/10
                    "
                  />

                ))}

              </div>

              {/* MESSAGE */}
              <textarea
                name="message"

                required

                rows={4}

                placeholder="
                  Write Message *
                "

                className="
                  w-full

                  px-5
                  py-3

                  rounded-lg

                  bg-white

                  text-black

                  placeholder-gray-500

                  outline-none

                  border
                  border-transparent

                  transition-all
                  duration-300

                  focus:border-[#2E66FF]

                  focus:ring-4
                  focus:ring-[#2E66FF]/10

                  mb-6
                "
              />

              {/* BUTTON */}
              <div className="flex justify-center">

                <button
                  type="submit"

                  disabled={loading}

                  className="
                    px-8
                    py-3

                    rounded-lg

                    text-white

                    font-medium

                    hover:scale-[1.03]

                    transition-all
                    duration-300

                    disabled:opacity-70
                    disabled:cursor-not-allowed

                    cursor-pointer
                  "
                  style={{
                    background:
                      "linear-gradient(30deg, #1A4FD6 0%, #0EA5E9 60%, #06B6D4 100%)",
                  }}
                >

                  {loading
                    ? "Sending..."
                    : "Send Message"}

                </button>

              </div>

              {/* SUCCESS */}
              {success && (

                <p
                  className="
                    text-green-400

                    text-center

                    mt-4
                  "
                >
                  {success}
                </p>

              )}

              {/* ERROR */}
              {error && (

                <p
                  className="
                    text-red-400

                    text-center

                    mt-4
                  "
                >
                  {error}
                </p>

              )}

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}