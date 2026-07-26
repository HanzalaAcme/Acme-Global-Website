"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

interface Blog {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
}

export default function RelatedBlogs({
  currentSlug,
}: {
  currentSlug: string;
}) {

  const [blogs, setBlogs] =
    useState<Blog[]>([]);

  useEffect(() => {

    async function fetchBlogs() {

      try {

        const res = await fetch(
          `/api/wordpress/posts/?categories=1&per_page=4&_embed`
        );

        const data = await res.json();

        // REMOVE CURRENT BLOG
        const filtered = data
            .filter((post: Blog) => post.slug !== currentSlug )
            .slice(0, 3);

        setBlogs(filtered);

      } catch (error) {

        console.error(error);
      }
    }

    fetchBlogs();

  }, [currentSlug]);

  return (

    <section className=" pl-10 bg-[#f3f4f6] py-10">

      {/* HEADING */}
      <div className="mb-10">

        <h2
          className="
            text-3xl
            font-bold
            text-[#0B1120]
          "
        >
          More from our Blog
        </h2>

       

      </div>

      {/* GRID */}
      <div
        className="
          grid
          md:grid-cols-3
          gap-8
        "
      >

        {blogs.map((blog) => (

          <Link
            key={blog.id}
            href={`/blogs/${blog.slug}`}
          >

            <div
              className="
                group
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-200

                hover:border-[#2563EB]

                transition-all
                duration-300

                hover:shadow-[0_12px_30px_rgba(37,99,235,0.15)]
              "
            >

              {/* IMAGE */}
              <div
                className="
                  h-52
                  overflow-hidden
                "
              >

                <img
                  src={
                    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/media/fallback-blog.jpg"
                  }

                  alt={blog.title.rendered.replace(/<[^>]+>/g, "")}

                  className="
                    w-full
                    h-full
                    object-cover

                    transition-transform
                    duration-500

                    group-hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[#0B1120]
                    leading-relaxed
                    mb-3

                    line-clamp-2
                  "
                >
                  {blog.title.rendered.replace(/<[^>]+>/g, "")}
                </h3>

               {/* <div
                  className="
                    text-sm
                    text-gray-500
                    leading-7

                    line-clamp-3
                  "

                  dangerouslySetInnerHTML={{
                    __html:
                      blog.excerpt,
                  }}
                /> */}

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}