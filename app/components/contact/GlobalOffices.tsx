"use client";

import Image from "next/image";

export default function GlobalOffices() {
  return (
    <section className="bg-[#F7F6F2] py-[96px] px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto">

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[40px] leading-tight font-semibold text-[#0B1120] mb-[80px]">
          Connect with one of{" "}
          <span className="text-[#2E66FF]">our global offices</span>
        </h2>

        <div className="flex flex-col gap-[80px]">

          {/* INDIA */}
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">

            {/* IMAGE */}
            <div className="w-full h-[320px] lg:h-[360px] rounded-[20px] overflow-hidden">
              <Image
                src="/media/acmeglobal.png"
                alt="India Office"
                width={700}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="max-w-[420px]">
              <h3 className="font-playfair text-[28px] font-semibold text-[#0B1120] mb-3">
                Hyderabad, India
              </h3>

              <p className="text-[16px] font-semibold text-[#0B1120] mb-6">
                ACME Global Hub
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Address
              </p>

              <p className="text-[14px] text-[#4B5C7A] leading-[24px] mb-6">
                504 & 506, 4th Floor, KTC Illumination, HITEC City Madhapur,
                Hyderabad, Telangana, India
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Phone
              </p>

              <p className="text-[14px] text-[#4B5C7A]">
                +91 4040117942
              </p>
            </div>
          </div>

          {/* BAHRAIN */}
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">

            {/* CONTENT */}
            <div className="max-w-[420px]">
              <h3 className="font-playfair text-[28px] font-semibold text-[#0B1120] mb-3">
                Manama, Bahrain
              </h3>

              <p className="text-[16px] font-semibold text-[#0B1120] mb-6">
                Almoayyed Computers Middle East
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Address
              </p>

              <p className="text-[14px] text-[#4B5C7A] leading-[24px] mb-6">
                Refinery Road No. 3501, Area 635, Yard 75, Ma'ameer,
                P.O. Box 26259, Manama, Kingdom of Bahrain
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Phone
              </p>

              <p className="text-[14px] text-[#4B5C7A]">
                +973 77996640 <br />
                +973 33601101
              </p>
            </div>

            {/* IMAGE */}
            <div className="w-full h-[320px] lg:h-[360px] rounded-[20px] overflow-hidden">
              <Image
                src="/media/ACME.jpg"
                alt="Bahrain Office"
                width={700}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* KUWAIT */}
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">

            {/* IMAGE */}
            <div className="w-full h-[320px] lg:h-[360px] rounded-[20px] overflow-hidden">
              <Image
                src="/media/ACME kuwait.jpg"
                alt="Kuwait Office"
                width={700}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="max-w-[420px]">
              <h3 className="font-playfair text-[28px] font-semibold text-[#0B1120] mb-3">
                Kuwait City, Kuwait
              </h3>

              <p className="text-[16px] font-semibold text-[#0B1120] mb-6">
                Alghanim and Almoayyed Computer Solutions
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Address
              </p>

              <p className="text-[14px] text-[#4B5C7A] leading-[24px] mb-6">
                Al Hamra Business Tower, 31st Floor, Al Shuhada Street,
                Sharq, Kuwait City, Kuwait
              </p>

              <p className="text-[11px] tracking-[1.5px] text-[#6B7280] uppercase mb-2">
                Phone
              </p>

              <p className="text-[14px] text-[#4B5C7A]">
                +965 98839566
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}