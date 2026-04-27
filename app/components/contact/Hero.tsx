"use client";

export default function HeroSection() {
  return (
    <section className="bg-[#1E3A5F] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch.</h1>
          <p className="text-gray-300">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </div>

        <img
          src="/media/contact-hero.jpg"
          alt="Contact"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}