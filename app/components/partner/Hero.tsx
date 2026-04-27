import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[450px] bg-[#1E3A5F] flex items-center justify-center overflow-hidden">
      {/*<section className="w-full h-[450px] bg-[#1E3A5F] 
        flex items-center justify-center overflow-hidden
        relative
        before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        before:bg-[size:40px_40px]
        before:opacity-40
        before:pointer-events-none
        ">*/}
      <div className="max-w-7xl w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between h-full relative">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-16 text-white z-10">
          <div className="flex flex-col justify-center flex-grow">

            <div className="flex items-center gap-3 mb-4">
  
             {/* BLINKING DOT */}
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>

              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Our Strategic Partners
              </h1>
              </div>

           {/* <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight">
              Our Strategic Partners
            </h1>  */}

            <p className="text-lg text-blue-100 max-w-md leading-relaxed text-balance">
              We collaborate with industry leaders to deliver exceptional value and innovative solutions worldwide.
            </p>
          </div>

          {/* Breadcrumb - down part */}
          <div className="text-sm font-medium tracking-wide text-blue-200 flex items-center gap-2">
            <span className="text-white transition-colors cursor-pointer">HOME</span>
            <span className="text-white ">/</span>
            <span className="text-white">PARTNERS</span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full h-[450px] md:w-1/2 flex items-center justify-center md:justify-end h-full py-12">
          <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            <Image
              src="/media/Partner_Hero.jpg"
              alt="Partners"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}