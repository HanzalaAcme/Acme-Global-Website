"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Blog {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(
          "/api/wordpress/posts?categories=1&per_page=3&_embed",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
            cache: "no-store",
          }
        );

        console.log("Blog API Status:", res.status);
        console.log(
          "Blog API Content-Type:",
          res.headers.get("content-type")
        );

        // Read response as text first
        const text = await res.text();

        console.log("Blog API Response:", text);

        // API returned an error
        if (!res.ok) {
          console.error(
            `Blog API failed with status ${res.status}`
          );
          setBlogs([]);
          return;
        }

        // Check whether response is actually JSON
        const contentType = res.headers.get("content-type") || "";

        if (!contentType.includes("application/json")) {
          console.error(
            "Blog API did not return JSON.",
            text.substring(0, 300)
          );
          setBlogs([]);
          return;
        }

        const data = JSON.parse(text);

        // Make sure response is an array
        if (!Array.isArray(data)) {
          console.error("Expected blog array but received:", data);
          setBlogs([]);
          return;
        }

        setBlogs(data);
      } catch (error) {
        console.error("BLOG FETCH ERROR:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <section className="py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="font-playfair text-[35px] font-extrabold mb-14 px-6 text-[#0B1120]">
          Latest{" "}
          <span className="text-[#2E66FF]">
            Blogs &amp; Insights
          </span>
        </h2>

        {/* LOADING */}
        {loading && (
          <div className="px-6 text-gray-500">
            Loading blogs...
          </div>
        )}

        {/* NO BLOGS */}
        {!loading && blogs.length === 0 && (
          <div className="px-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
              <p className="text-gray-600">
                No blogs available at the moment.
              </p>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        {!loading && blogs.length > 0 && (
          <div className="grid md:grid-cols-3 px-6 gap-8">
            {blogs.map((blog, index) => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.slug}`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    group
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    overflow-hidden
                    shadow-sm
                    transition-all
                    duration-300
                    cursor-pointer
                    hover:border-[#1A4FD6]
                    hover:shadow-[0_12px_30px_rgba(26,79,214,0.25)]
                  "
                >

                  {/* IMAGE */}
                  <div className="w-full h-52 overflow-hidden">
                    <img
                      src={
                        blog._embedded?.[
                          "wp:featuredmedia"
                        ]?.[0]?.source_url ||
                        "/media/fallback-blog.jpg"
                      }
                      alt={
                        blog.title?.rendered ||
                        "Blog image"
                      }
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-500
                        ease-in-out
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">

                    {/* TITLE */}
                    <h3 className="
                      text-lg
                      font-semibold
                      text-gray-900
                      mb-4
                      leading-relaxed
                      line-clamp-2
                    ">
                      {blog.title?.rendered}
                    </h3>

                    {/* READ MORE */}
                    <span className="
                      flex
                      items-center
                      text-blue-600
                      font-semibold
                      gap-1
                    ">
                      Read more

                      <ArrowRight
                        className="
                          w-4
                          h-4
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </span>

                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}