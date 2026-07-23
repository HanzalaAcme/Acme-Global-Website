"use client";

import React, {
  useEffect,
  useState,
} from "react";

import Link
from "next/link";

import Image
from "next/image";

import Blog
from "@/app/components/blog/Hero";

import { getWordPressApi } from "@/lib/wordpress";

export default function BlogsClient() {

  const [posts, setPosts] =
    useState<any[]>([]);

  const [page, setPage] =
    useState(1);

  const [loading, setLoading] =
    useState(true);

  const [totalPages, setTotalPages] =
    useState(1);

  const POSTS_PER_PAGE = 9;

  useEffect(() => {

    fetchBlogs();

  }, [page]);

  const fetchBlogs =
    async () => {

      try {

        setLoading(true);

        const res =
          await fetch(

            `${getWordPressApi()}/posts?categories=1&per_page=${POSTS_PER_PAGE}&page=${page}&_embed`
          );

        const data =
          await res.json();

        setPosts(
          data || []
        );

        const totalPages = Number(res.headers.get("X-WP-TotalPages") || 1);

setTotalPages(totalPages);

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);
      }
    };

  return (

    <>

      {/* HERO */}
      <Blog />

      <section
        id="blogs"

        className="
          py-20
          px-10

          bg-[#F8FAFC]

          min-h-screen
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* LOADING */}
          {loading ? (

            <div
              className="
                flex
                justify-center

                py-20
              "
            >

              <div
                className="
                  text-[#1A4FD6]

                  text-lg

                  font-medium
                "
              >
                Loading Blogs...
              </div>

            </div>

          ) : (

            <>

              {/* GRID */}
              <div
                className="
                  grid

                  md:grid-cols-2
                  lg:grid-cols-3

                  gap-6
                "
              >

                {posts.map(
                  (post: any) => (

                    <Link
                      key={post.id}

                      href={`/blogs/${post.slug}`}
                    >

                      <article
                        className="
                          group

                          bg-white

                          rounded-2xl

                          overflow-hidden

                          border
                          border-[#E8EEF9]

                          hover:shadow-xl

                          hover:-translate-y-1

                          transition-all
                          duration-300

                          cursor-pointer

                          h-full
                        "
                      >

                        {/* IMAGE */}
                        <div
                          className="
                            relative

                            w-full

                            h-[220px]

                            overflow-hidden
                          "
                        >

                          <Image
                            src={
                              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                              "/fallback.jpg"
                            }

                            alt={post.title.rendered.replace(
                              /<[^>]+>/g,
                              ""
                            )}

                            fill

                            sizes="
                              (max-width:768px)
                              100vw,

                              (max-width:1200px)
                              50vw,

                              33vw
                            "

                            className="
                              object-cover

                              group-hover:scale-105

                              transition-transform
                              duration-500
                            "
                          />

                        </div>

                        {/* CONTENT */}
                        <div
                          className="
                            p-6

                            flex
                            flex-col

                            gap-4
                          "
                        >

                          {/* TITLE */}
                          <h3
                            className="
                              font-bold

                              text-[16px]

                              leading-[30px]

                              text-[#0B1120]

                              line-clamp-2

                              min-h-[60px]
                            "

                            dangerouslySetInnerHTML={{
                              __html:
                                post.title.rendered.replace(
                                  /<[^>]+>/g,
                                  ""
                                ),
                            }}
                          />

                          

                          {/* READ MORE */}
                          <div
                            className="
                              flex
                              items-center

                              gap-2

                              text-[#2E66FF]

                              text-[14px]

                              font-bold

                              mt-auto
                            "
                          >

                            <span>
                              Read More
                            </span>

                            <span
                              className="
                                transition-transform

                                group-hover:translate-x-1
                              "
                            >
                              →
                            </span>

                          </div>

                        </div>

                      </article>

                    </Link>

                  )
                )}

              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (

                <div
                  className="
                    flex
                    flex-wrap

                    justify-center

                    gap-3

                    mt-14
                  "
                >

                  {/* PREV */}
                  <button
                    disabled={page === 1}

                    onClick={() => {

                      setPage(
                        (prev) =>
                          prev - 1
                      );

                      window.scrollTo({
                        top: 0,
                        behavior:
                          "smooth",
                      });
                    }}

                    className="
                      h-[45px]

                      px-5

                      rounded-xl

                      border
                      border-[#E8EEF9]

                      bg-white

                      text-sm
                      text-gray-600

                      font-medium

                      disabled:opacity-40

                      hover:border-[#1A4FD6]

                      transition-all
                      cursor-pointer
                    "
                  >
                    Prev
                  </button>

                  {/* NUMBERS */}
                  {Array.from(
                    {
                      length:
                        totalPages,
                    },

                    (_, i) => (

                      <button
                        key={i}

                        onClick={() => {

                          setPage(
                            i + 1
                          );

                          window.scrollTo({
                            top: 0,

                            behavior:
                              "smooth",
                          });
                        }}

                        className={`
                          h-[45px]
                          min-w-[44px]

                          px-4

                          rounded-xl

                          text-sm
                          font-semibold

                          transition-all
                          cursor-pointer

                          ${
                            page ===
                            i + 1

                              ? "bg-[#1A4FD6] text-white"

                              : `
                                bg-white
                                text-[#0B1120]

                                border
                                border-[#E8EEF9]

                                hover:border-[#1A4FD6]
                              `
                          }
                        `}
                      >
                        {i + 1}
                      </button>

                    )
                  )}

                  {/* NEXT */}
                  <button
                    disabled={
                      page ===
                      totalPages
                    }

                    onClick={() => {

                      setPage(
                        (prev) =>
                          prev + 1
                      );

                      window.scrollTo({
                        top: 0,
                        behavior:
                          "smooth",
                      });
                    }}

                    className="
                      h-[45px]

                      px-5

                      rounded-xl

                      border
                      border-[#E8EEF9]

                      bg-white

                      text-sm
                      text-gray-600

                      font-medium

                      disabled:opacity-40

                      hover:border-[#1A4FD6]

                      transition-all
                      cursor-pointer
                    "
                  >
                    Next
                  </button>

                </div>

              )}

            </>

          )}

        </div>

      </section>

    </>
  );
}