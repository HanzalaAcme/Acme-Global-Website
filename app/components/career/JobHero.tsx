import Link from "next/link";
import { Globe } from "lucide-react";

type Props = {
  title: string;
  date: string;
  type: string;
  mode: string;
};

export default function JobHero({ title, date, type, mode }: Props) {
  return (
    <section className="w-full min-h-[480px] bg-[#07142A] pt-[72px] 
        flex items-center justify-center overflow-hidden
        relative
        before:absolute before:inset-0
        before:bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
        before:bg-[size:60px_60px]
        before:opacity-40
        before:pointer-events-none
        ">


      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* TOP LINE */}
        <div className="flex justify-center items-center gap-3 text-sm text-gray-300 mb-4">
          <span>ACME Global</span>
          <span className="opacity-50">|</span>

          {type && (
            <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-xs border border-teal-400/20  ">
              {type}
            </span>
          )}
        </div>

        {/* TITLE */}
        <h1
          className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {/* META */}
        <div className="flex justify-center items-center gap-4 text-gray-300 mb-8 text-sm">

          {mode && (
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>{mode}</span>
            </div>
          )}

          <span className="opacity-50">•</span>

          <div>Posted on {date}</div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 flex-wrap mb-10">

          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold shadow-lg">
            Apply Now
          </button>

          <Link href="/careers">
            <button className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition cursor-pointer">
              ← View All Roles
            </button>
          </Link>

        </div>

        {/* BREADCRUMB */}
        <div className="flex justify-center items-center gap-2 text-sm text-gray-400">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <span>›</span>

          <Link href="/careers" className="hover:text-white transition">
            Careers
          </Link>

          <span>›</span>

          <span className="text-gray-300">
            {title.replace(/<[^>]+>/g, "")}
          </span>

        </div>

      </div>
    </section>
  );
}