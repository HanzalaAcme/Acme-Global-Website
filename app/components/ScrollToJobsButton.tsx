"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ScrollToJobsButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {

  const pathname = usePathname();

  const router = useRouter();

  const handleScroll = () => {

    // IF ALREADY ON CAREERS PAGE
    if (pathname === "/careers") {

      const section = document.getElementById("open-positions");

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    } else {

      // NAVIGATE FIRST
      router.push("/careers");

      // WAIT FOR PAGE LOAD
      setTimeout(() => {

        const section = document.getElementById("open-positions");

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }

      }, 300);
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={className}
    >
      {children}
    </button>
  );
}