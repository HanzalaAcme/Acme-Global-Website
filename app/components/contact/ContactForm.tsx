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
      <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur rounded-xl p-8">

        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="First Name" className="input" />
          <input placeholder="Last Name" className="input" />
          <input placeholder="Phone Number" className="input" />
          <input placeholder="Email" className="input" />
        </div>

        <textarea
          placeholder="Write Message"
          className="input mt-6 w-full"
        />

        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">
          Send Message
        </button>

      </div>
    </section>
  );
}