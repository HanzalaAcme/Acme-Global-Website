"use client";

import { useEffect, useState } from "react";

type Heading = {
  id: string;
  text: string;
};

export default function BlogEnhancements() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = Array.from(
      article.querySelectorAll("h2, h3")
    ) as HTMLElement[];

    // Assign IDs to headings
    const mapped = elements.map((el) => {
      const id = el.innerText
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")
        .toLowerCase();

      el.id = id;

      return { id, text: el.innerText };
    });

    //  FIRST PARAGRAPH = INTRODUCTION
    const firstPara = article.querySelector("p") as HTMLElement;

    if (firstPara) {
      firstPara.id = "introduction";
    }

    //  Inject Introduction at top
    setHeadings([
      { id: "introduction", text: "Introduction" },
      ...mapped,
    ]);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarHeight = 72;

      if (!firstPara) return;

      const start = firstPara.offsetTop - navbarHeight;

      const articleBottom =
        article.offsetTop + article.offsetHeight;

      const end = articleBottom - window.innerHeight;

      //  Progress Logic
      if (scrollY < start) {
        setProgress(0);
      } else if (scrollY > end) {
        setProgress(100);
      } else {
        const percent = ((scrollY - start) / (end - start)) * 100;
        setProgress(percent);
      }

      //  Active Section
      let current = "introduction";

      if (scrollY >= start) {
        current = "introduction";
      }

      elements.forEach((el) => {
        if (scrollY >= el.offsetTop - 140) {
          current = el.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-[72px] left-0 w-full h-[3px] z-50 bg-white">
        <div
          className="h-full bg-blue-600 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* TOC */}
      <div className="sticky top-28 bg-[#F4F6FB] rounded-xl p-6 border shadow-sm">
        <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-4">
          TABLE OF CONTENTS
        </h3>

        <ul className="space-y-2">
          {headings.map((h) => {
            const isActive = activeId === h.id;

            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`group flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-gray-500 hover:bg-white hover:text-blue-600"
                    }
                  `}
                >
                  {/* Arrow */}
                  <span
                    className={`text-xs transition-all duration-200
                      ${
                        isActive
                          ? "text-blue-600"
                          : "text-blue-300 group-hover:text-blue-600"
                      }
                    `}
                  >
                    →
                  </span>

                  <span>{h.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}