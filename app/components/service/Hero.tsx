"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[450px]">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/media/Service_Hero.jpg')" }}
      ></div>

      {/* OVERLAY (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-8">
          Solutions That Power <br />
          Your Growth
        </h1>
        <p className="text-medium text-xl">
          Smart technology services designed to transform <br />
          operations and unlock sustainable growth.
        </p>
      </div>

    </section>
  );
}