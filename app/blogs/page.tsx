"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const POSTS_PER_PAGE = 9;

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/hanzala1387-xzjqf.wordpress.com/posts/?category=blogs`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);

        const total = Math.ceil(data.found / POSTS_PER_PAGE);
        setTotalPages(total);
      });
  }, [page]);

  return (
    <section className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h1 className="text-center text-[42px] font-playfair font-bold mb-14">
          Our <span className="text-[#2E66FF]">Blogs</span>
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {posts.map((post: any) => (
            <Link key={post.ID} href={`/blogs/${post.slug}`}>

              <div className="group bg-white rounded-xl overflow-hidden border 
                hover:shadow-xl transition-all duration-300 cursor-pointer">

                {/* IMAGE */}
                <div className="relative w-full h-[200px] overflow-hidden">
                  <Image
                    src={post.featured_image || "/fallback.jpg"} 
                    alt="blog"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col gap-3">

                  {/* TITLE */}
                  <h3
                    className="font-semibold text-[16px] leading-[24px] text-[#0B1120]"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />

                  {/* READ MORE */}
                  <div className="flex items-center gap-2 text-[#2E66FF] text-[14px] font-medium">

                    <span>Read more</span>

                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-12">

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" }); 
              }}
              className={`px-4 py-2 rounded-md border text-sm font-medium transition
                ${page === i + 1
                  ? "bg-[#2E66FF] text-white border-[#2E66FF]"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {i + 1}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}