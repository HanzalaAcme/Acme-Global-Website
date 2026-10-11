
import {
  Star,
  Heart,
  Users,
  Clock3,
  Handshake,
} from "lucide-react";

const values = [
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
      "Own your Impact",
      "Learn, Adapt & Evolve",
      "Passion & Enthusiasm Always",
      "Inspire through Actions",
    ],
  },
  {
    icon: Handshake,
    title: "VALUE PARTNERSHIPS",
    points: [
      "Drive Shared Success Consistently",
      "Enhance Experience Continuously",
      "Deliver On Expectations Sincerely",
      "Forever Loyalty",
    ],
  },
];

export default function ValuesSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-5 md:px-8 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px] min-w-0">
        {/* Section Heading */}
        <div className="mb-10 min-w-0">
          <p className="mb-3 font-Dm_Sans text-[13px] font-bold tracking-[0.25em] text-[#2563EB] uppercase">
            WHAT WE STAND FOR
          </p>

          <h2 className="font-playfair text-4xl md:text-[48px] font-bold leading-tight text-[#111827]">
            OUR <span className="text-[#2563EB]">VALUES.</span>
          </h2>

          <p className="mt-4 max-w-full font-Dm_Sans text-base leading-7 text-[#6B7280]">
            Five principles that guide every decision, interaction and solution
            we deliver.
          </p>
        </div>

        {/* Responsive Values Grid */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="flex h-full min-w-0 flex-col rounded-2xl border border-[#E5E7EB] bg-white p-4 transition-all duration-300 hover:border-[#60A5FA] hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[14px] bg-[#DBEAFE]">
                  <Icon
                    size={23}
                    strokeWidth={2}
                    className="text-[#2563EB]"
                    aria-hidden="true"
                  />
                </div>

                {/* Value Title */}
                <h3 className="mb-5 min-w-0 max-w-full break-words [overflow-wrap:anywhere] font-playfair text-base font-bold leading-tight text-[#0B1120]">
                  {value.title}
                </h3>

                {/* Value Points */}
                <ul className="flex min-w-0 flex-1 flex-col gap-3">
                  {value.points.map((point) => (
                    <li
                      key={point}
                      className="flex min-w-0 items-start gap-2 font-Dm_Sans text-[13px] leading-5 text-[#475569]"
                    >
                      <span
                        className="mt-0 shrink-0 text-[7px] leading-5 text-black"
                        aria-hidden="true"
                      >
                        ●
                      </span>

                      <span className="min-w-0 flex-1 break-words [overflow-wrap:anywhere]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
