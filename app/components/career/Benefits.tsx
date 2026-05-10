import { Shield, Activity, Briefcase, Users, Star } from "lucide-react";

type Benefit = {
  title: string;
  desc: string;
};

export default function Benefits({ items = [] }: { items?: Benefit[] }) {
  const icons = [Shield, Activity, Briefcase, Users];

  if (!items.length) return null; // ✅ avoid crash

  return (
    <div className="mt-16">
      <h2 className="font-playfair text-[#0B1120] text-[24px] font-bold mb-6 flex items-center gap-2">
        <Star className="text-blue-500" />
        Benefits
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];

          return (
            <div
              key={i}
              className="bg-[#F4F6FB] p-6 rounded-xl border hover:shadow-md transition"
            >
              <div className="flex gap-4">

                {/* ICON */}
                <div className="p-3 bg-blue-100 rounded-lg h-12 w-12 flex items-center justify-center">
                  <Icon className="text-blue-600 w-5 h-5" />
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.title || "Benefit"}
                  </h4>

                  {item.desc && (
                    <p className="text-gray-600 text-sm">
                      {item.desc}
                    </p>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}