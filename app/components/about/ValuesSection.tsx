import {
  Star,
  Heart,
  Users,
  Clock3,
  CircleCheck,
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
      "Learn, Unlearn & Learn",
      "Passion & Enthusiasm Always",
      "Inspire through Actions",
    ],
  },
  {
    icon: CircleCheck,
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
    <section className="bg-white py-[80px] px-5 md:px-8 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Section Heading */}
        <div className="mb-10">
          <p className="font-Dm_Sans text-[13px] font-bold tracking-[0.25em] text-[#2563EB] uppercase mb-3">
            WHAT WE STAND FOR
          </p>

          <h2 className="font-playfair text-[42px] md:text-[48px] font-bold leading-tight text-[#111827]">
            OUR <span className="text-[#2563EB]">VALUES.</span>
          </h2>

          <p className="font-Dm_Sans mt-4 text-[16px] leading-7 text-[#6B7280]">
            Five principles that guide every decision, interaction and solution
            we deliver.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="
                  bg-white
                  border border-[#E5E7EB]
                  rounded-[16px]
                  p-6
                  min-h-[300px]
                  hover:border-[#3B82F6]
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-[56px]
                    h-[56px]
                    rounded-[14px]
                    bg-[#DBEAFE]
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                >
                  <Icon
                    size={25}
                    strokeWidth={2}
                    className="text-[#2563EB]"
                  />
                </div>

                {/* Value Title */}
                <h3
                  className="
                    font-playfair
                    text-[20px]
                    font-bold
                    leading-tight
                    text-[#0b1120]
                    mb-5
                  "
                >
                  {value.title}
                </h3>

                {/* Value Points */}
                <div className="space-y-3">
                  {value.points.map((point) => (
                    <div
                      key={point}
                      className="
                        flex
                        items-center
                        gap-2
                        font-Dm_Sans
                        text-[12px]
                        leading-5
                        text-[#475569]
                      "
                    >
                      {/* Black Dot */}
                      <span className="text-black text-[8px] flex-shrink-0 ">
                        ●
                      </span>

                      {/* Point Text */}
                      <span
                        className={
                          point ===
                          "Foster a Collaborative & Inclusive Environment"
                            ? "whitespace-normal"
                            : "whitespace-nowrap"
                        }
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}