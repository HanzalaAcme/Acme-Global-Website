"use client";

import Image from "next/image";

export default function GlobalOffices() {
  return (
    <section className="bg-[#FAF8F3] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-20">
          Connect with one of our <span className="text-blue-600">global offices</span>
        </h2>

        <div className="flex flex-col gap-24">

          {/* INDIA */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Image
              src="/media/acmeglobal.png"
              alt="India"
              width={700}
              height={450}
              className="rounded-xl w-full object-cover"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Hyderabad, India</h3>
              <p className="font-semibold mb-3">ACME Global Hub</p>

              <p className="font-semibold">Address</p>
              <p className="text-gray-600 mb-4">
                504 & 506, 4th Floor, KTC Illumination, HITEC City Madhapur,
                Hyderabad, Telangana, India
              </p>

              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+91 4040117942</p>
            </div>
          </div>

          {/* BAHRAIN */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Manama, Bahrain</h3>
              <p className="font-semibold mb-3">
                Almoayyed Computers Middle East
              </p>

              <p className="font-semibold">Address</p>
              <p className="text-gray-600 mb-4">
                Refinery Road No. 3501, Area 635, Yard 75, Ma'ameer,
                P.O. Box 26259, Manama, Kingdom of Bahrain
              </p>

              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">
                +973 77996640 <br />
                +973 33601101
              </p>
            </div>

            {/* Image */}
            <Image
              src="/media/ACME.jpg"
              alt="Bahrain"
              width={700}
              height={450}
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* KUWAIT */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <Image
              src="/media/ACME kuwait.jpg"
              alt="Kuwait"
              width={700}
              height={450}
              className="rounded-xl w-full object-cover"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Kuwait City, Kuwait</h3>
              <p className="font-semibold mb-3">
                Alghanim and Almoayyed Computer Solutions
              </p>

              <p className="font-semibold">Address</p>
              <p className="text-gray-600 mb-4">
                Al Hamra Business Tower, 31st Floor, Al Shuhada Street,
                Sharq, Kuwait City, Kuwait
              </p>

              <p className="font-semibold">Phone</p>
              <p className="text-gray-200">+965 98839566</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}