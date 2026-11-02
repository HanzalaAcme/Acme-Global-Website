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

  // START POINT
  const start =
    firstPara.offsetTop - navbarHeight;

  // ARTICLE DIMENSIONS
  const articleTop =
    article.offsetTop;

  const articleHeight =
    article.offsetHeight;

  // FULL ARTICLE BOTTOM
  const articleBottom =
    articleTop + articleHeight;

  // END ONLY AFTER ARTICLE FULLY PASSES VIEWPORT
  const end =
    articleBottom - 300;

  /* PROGRESS */

  if (scrollY <= start) {

    setProgress(0);

  } else if (scrollY >= end) {

    setProgress(100);

  } else {

    const percent =
      ((scrollY - start) / (end - start)) * 100;

    setProgress(percent);
  }

  /* ACTIVE SECTION */

  let current = "introduction";

  elements.forEach((el) => {

    if (
      scrollY >= el.offsetTop - 140
    ) {

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
      <progress
        className="blog-reading-progress fixed top-[72px] left-0 z-50"
        value={progress}
        max={100}
        aria-label="Article reading progress"
      />

       
    </>
  );
}
