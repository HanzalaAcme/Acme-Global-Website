"use client";

import { useState } from "react";
import ApplicationModal from "./ApplicationModal";

export default function TalentCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* SECTION */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto bg-[#F4F6FB] border rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="flex-1">
            <h2 className="font-playfair text-[24px] md:text-[32px] leading-[1.3] font-extrabold text-[#0B1120]">
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

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl text-white font-medium shadow-lg"
            >
              Apply Here →
            </button>
          </div>
        </div>
      </section>

      {/* FORM MODAL */}
      {open && <ApplicationModal onClose={() => setOpen(false)} />}
    </>
  );
}