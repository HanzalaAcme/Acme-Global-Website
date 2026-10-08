"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur rounded-xl p-6 md:p-8 overflow-hidden">

        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="Full Name" className="input" />
          <input placeholder="Company Name" className="input" />
          <input placeholder="Phone Number" className="input" />
          <input placeholder="Email" className="input" />
        </div>

        <textarea
  placeholder="Write Message"
  className="
    input
    mt-6
    w-full
    min-h-[140px]
    resize-none
  "
/>

        <button
  type="submit"
  className="
    mt-6
    w-full
    sm:w-auto
    min-h-[48px]
    bg-blue-500
    hover:bg-blue-600
    text-white
    font-medium
    px-8
    py-3
    rounded-lg
    transition-colors
    duration-200
    flex
    items-center
    justify-center
  "
>
  Send Message
</button>

      </div>
    </section>
  );
}