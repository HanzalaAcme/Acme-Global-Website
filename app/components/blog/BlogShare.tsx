"use client";

import {
  FaLinkedinIn,
  FaXTwitter,
  FaLink
} from "react-icons/fa6";

import { SITE_URL } from "@/lib/wordpress";

export default function BlogShare({
  slug,
}: {
  slug: string;
}) {

  const shareUrl =
    `${SITE_URL}/blogs/${slug}`;

  const copyLink = async () => {

    try {

      await navigator.clipboard.writeText(
        shareUrl
      );

    } catch (err) {

      console.error(err);
    }
  };

  const buttonStyles = `
    w-11
    h-11

    rounded-xl

    border border-[#DCE7FF]

    bg-white

    flex
    items-center
    justify-center

    text-[#5E6E90]

    hover:bg-[#2563EB]
    hover:text-white
    hover:border-[#2563EB]

    transition-all
    duration-300
    cursor-pointer
  `;

  return (

    <div className="flex items-center gap-4 mt-4">

      {/* SHARE TEXT */}
      <h4
        className="
          text-gray-500
          font-bold
          text-[13px]
          tracking-[0.15em]
          whitespace-nowrap
        "
      >
        SHARE:
      </h4>

      {/* ICONS */}
      <div className="flex items-center gap-3">

        {/* LINKEDIN */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            shareUrl
          )}`}

          target="_blank"
          rel="noopener noreferrer"

          className={buttonStyles}
        >
          <FaLinkedinIn className="w-4 h-4" />
        </a>

        {/* TWITTER / X */}
       {/* <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            shareUrl
          )}`}

          target="_blank"
          rel="noopener noreferrer"

          className={buttonStyles}
        >
          <FaXTwitter className="w-4 h-4" />
        </a> */}

        {/* COPY LINK */}
        <button
          onClick={copyLink}

          className={buttonStyles}
        >
          <FaLink className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
}