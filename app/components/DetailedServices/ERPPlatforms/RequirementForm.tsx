"use client";

import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

type Props = {
  serviceType: string;
};

export default function RequirementsFormERP({
serviceType,
}: Props) {

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    setSuccess(false);

    const formData =
      new FormData(e.target);

    try {

      const res = await fetch(
        "/api/requirements",
        {
          method: "POST",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (data.success) {

        setSuccess(true);

        e.target.reset();

      } else {

        setError(
          data.message ||
          "Something went wrong."
        );
      }

    } catch (err) {

      setError(
        "Failed to submit request."
      );
    }

    setLoading(false);
  };

  return (
    <section
     id="req-form"
      className="
        py-[90px]
        px-6
        lg:px-20

        bg-[#F5F7FB]
      "
    >

      <div
        className="
          max-w-[1200px]
          mx-auto
        "
      >

        <div
          className="
            bg-white

            border
            border-[#E5EAF3]

            rounded-[32px]

            shadow-[0_10px_40px_rgba(0,0,0,0.04)]

            overflow-hidden
          "
        >

          <div
            className="
              grid
              lg:grid-cols-2
            "
          >

            {/* LEFT */}
            <div
              className="
                bg-[#07142A]

                p-10
                lg:p-14

                relative
                overflow-hidden
              "
            >

              {/* GRID BG */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-10

                  bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]

                  bg-[size:50px_50px]
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute
                  top-0
                  left-0

                  w-[400px]
                  h-[400px]

                  bg-[radial-gradient(circle_at_0%_0%,rgba(0,180,255,0.22),transparent_45%)]
                "
              />

              <div className="relative z-10">

                {/* LABEL */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    px-4
                    py-2

                    rounded-full

                    bg-[#1A4FD6]/15

                    border
                    border-[#1A4FD6]/30

                    text-[#7AADFF]
                    text-sm

                    mb-8
                  "
                >

                  <ShieldCheck className="w-4 h-4" />

                  Enterprise Requirement Form

                </div>

                {/* HEADING */}
                <h2
                  className="
                    font-playfair

                    text-white

                    text-[40px]
                    leading-[1.15]

                    font-bold

                    mb-6
                  "
                >
                  Tell Us About Your{" "}
                  <span className="text-[#7AADFF] italic">
                    Requirements
                  </span>
                </h2>

                {/* TEXT */}
                <p
                  className="
                    text-white/70

                    leading-[30px]

                    text-[16px]

                    max-w-[500px]
                  "
                >
                  Share your business goals, infrastructure,
                  and technical requirements. Our experts
                  will reach out with a tailored enterprise solution.
                </p>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div
              className="
                p-8
                lg:p-14
              "
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* SUCCESS */}
                {success && (

                  <div
                    className="
                      rounded-2xl

                      border
                      border-green-200

                      bg-green-50

                      px-5
                      py-4

                      animate-in
                      fade-in
                      duration-500
                    "
                  >

                    <div className="flex gap-3">

                      <CheckCircle2
                        className="
                          text-green-600
                          w-6
                          h-6
                          shrink-0
                        "
                      />

                      <div>

                        <h4
                          className="
                            text-[#0B1120]
                            font-semibold
                            mb-1
                          "
                        >
                          Requirement Submitted
                        </h4>

                        <p
                          className="
                            text-[#5E6E90]
                            text-sm
                            leading-[24px]
                          "
                        >
                          Our enterprise solutions team
                          will contact you shortly.
                        </p>

                      </div>

                    </div>

                  </div>
                )}

                {/* ERROR */}
                {error && (

                  <div
                    className="
                      rounded-2xl

                      border
                      border-red-200

                      bg-red-50

                      px-5
                      py-4

                      text-red-600
                      text-sm
                    "
                  >
                    {error}
                  </div>
                )}

                {/* SERVICE TYPE */}
                <input
                  type="hidden"
                  name="serviceType"
                  value={serviceType}
                />

                {/* NAME */}
                <div>

                  <label
                    className="
                      block
                      text-[#0B1120]
                      font-semibold
                      mb-3
                    "
                  >
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"

                    className="
                      w-full

                      bg-[#F7F9FD]

                      border
                      border-[#E4EAF5]

                      rounded-2xl

                      px-5
                      py-4

                      outline-none

                      text-[#0B1120]
                      placeholder:text-[#9BA8C0]

                      transition-all
                      duration-300

                      focus:border-[#1A4FD6]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-5">

                  <div>

                    <label
                      className="
                        block
                        text-[#0B1120]
                        font-semibold
                        mb-3
                      "
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"

                      className="
                        w-full

                        bg-[#F7F9FD]

                        border
                        border-[#E4EAF5]

                        rounded-2xl

                        px-5
                        py-4

                        outline-none

                        text-[#0B1120]
                        placeholder:text-[#9BA8C0]

                        transition-all
                        duration-300

                        focus:border-[#1A4FD6]
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />

                  </div>

                  <div>

                    <label
                      className="
                        block
                        text-[#0B1120]
                        font-semibold
                        mb-3
                      "
                    >
                      Phone Number
                    </label>

                    <input
                      type="text"
                      name="phone"
                      placeholder="+91 9876543210"

                      className="
                        w-full

                        bg-[#F7F9FD]

                        border
                        border-[#E4EAF5]

                        rounded-2xl

                        px-5
                        py-4

                        outline-none

                        text-[#0B1120]
                        placeholder:text-[#9BA8C0]

                        transition-all
                        duration-300

                        focus:border-[#1A4FD6]
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />

                  </div>

                </div>

                {/* COMPANY */}
                <div>

                  <label
                    className="
                      block
                      text-[#0B1120]
                      font-semibold
                      mb-3
                    "
                  >
                    Company Name *
                  </label>

                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Your organisation"

                    className="
                      w-full

                      bg-[#F7F9FD]

                      border
                      border-[#E4EAF5]

                      rounded-2xl

                      px-5
                      py-4

                      outline-none

                      text-[#0B1120]
                      placeholder:text-[#9BA8C0]

                      transition-all
                      duration-300

                      focus:border-[#1A4FD6]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                </div>

                {/* REQUIREMENTS */}
                <div>

                  <label
                    className="
                      block
                      text-[#0B1120]
                      font-semibold
                      mb-3
                    "
                  >
                    Requirements *
                  </label>

                  <textarea
                    rows={5}
                    name="requirements"
                    required

                    placeholder="Describe your current infrastructure,
                      challenges, goals, timelines, or
                      technical requirements...
                    "

                    className="
                      w-full

                      bg-[#F7F9FD]

                      border
                      border-[#E4EAF5]

                      rounded-[24px]

                      px-5
                      py-5

                      outline-none
                      resize-none

                      text-[#0B1120]
                      placeholder:text-[#9BA8C0]

                      transition-all
                      duration-300

                      focus:border-[#1A4FD6]
                      focus:ring-4
                      focus:ring-blue-100
                    "
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}

                  className="
                    w-full

                    bg-[#1A4FD6]
                    hover:bg-[#2E66FF]

                    text-white
                    font-semibold

                    py-5

                    rounded-2xl

                    flex
                    items-center
                    justify-center
                    gap-3

                    transition-all
                    duration-300

                    disabled:opacity-70

                    shadow-[0_10px_30px_rgba(26,79,214,0.22)]
                    hover:shadow-[0_16px_40px_rgba(26,79,214,0.3)]
                  "
                >

                  {loading
                    ? "Submitting Request..."
                    : "Submit Requirements"}

                  {!loading && (
                    <ArrowRight className="w-5 h-5" />
                  )}

                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}