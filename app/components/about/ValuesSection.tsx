import type { LucideIcon } from "lucide-react";
import {
  Star,
  Heart,
  Users,
  Clock3,
  Handshake,
} from "lucide-react";

type CompanyValue = {
  icon: LucideIcon;
  title: string;
  points: string[];
};

const values: CompanyValue[] = [
  {
    icon: Star,
    title: "LEVEL UP",
    points: [
      "Explore & Elevate",
      "Innovate & Grow",
      "Excel with Challenges",
      "Go the Extra Mile",
    ],
  },
  {
    icon: Heart,
    title: "DEEP CARE",
    points: [
      "Show Empathy & Be There",
      "Foster a Collaborative & Inclusive Environment",
      "Be Accessible & Approachable",
      "Support for a Cause",
    ],
  },
  {
    icon: Users,
    title: "FUTURE TOGETHER",
    points: [
      "Stay Current with Technology",
      "Value Diverse Perspectives",
      "Communicate Transparently",
      "Elevate Expertise to Leadership",
    ],
  },
  {
    icon: Clock3,
    title: "EMBRACE THE EXPERIENCE",
    points: [
      "Own Your Impact",
      "Learn, Adapt & Evolve",
      "Passion & Enthusiasm Always",
      "Inspire Through Actions",
    ],
  },
  {
    icon: Handshake,
    title: "VALUE PARTNERSHIPS",
    points: [
      "Drive Shared Success Consistently",
      "Enhance Experience Continuously",
      "Deliver on Expectations Sincerely",
      "Build Lasting Loyalty",
    ],
  },
];

export default function ValuesSection() {
  return (
    <section
      aria-labelledby="company-values-heading"
      className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <header className="mb-8 sm:mb-10">
          <p className="mb-3 font-Dm_Sans text-xs font-bold uppercase tracking-[0.2em] text-[#2E66FF] sm:text-[13px] sm:tracking-[0.25em]">
            WHAT WE STAND FOR
          </p>

          <h2
            id="company-values-heading"
            className="font-playfair text-3xl font-bold leading-tight text-[#111827] sm:text-4xl lg:text-[48px]"
          >
            OUR <span className="text-[#2E66FF]">VALUES.</span>
          </h2>

          <p className="mt-4 max-w-2xl font-Dm_Sans text-sm leading-6 text-[#6B7280] sm:text-base sm:leading-7">
            The principles that shape how we work, build trust, and deliver
            meaningful results.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5">
          {values.map(({ icon: Icon, title, points }) => (
            <article
              key={title}
              className="flex h-full min-w-0 flex-col rounded-2xl border border-[#E5E7EB] bg-white p-5 transition-colors duration-300 hover:border-[#60A5FA] hover:shadow-[0_12px_28px_rgba(26,79,214,0.12)] motion-reduce:transition-none sm:p-6"
            >
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#DBEAFE]">
                <Icon
                  size={23}
                  strokeWidth={2}
                  className="text-[#2563EB]"
                  aria-hidden="true"
                />
              </div>

              <h3 className="mb-4 min-h-10 break-words font-playfair text-base font-bold leading-snug text-[#0B1120]">
                {title}
              </h3>

              <ul className="flex flex-1 flex-col gap-3">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex min-w-0 items-start gap-2 font-Dm_Sans text-sm leading-5 text-[#475569]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                    />
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}