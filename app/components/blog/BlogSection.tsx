"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";

interface Blog {
  ID: number;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
}

export default function Blogs() {

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {

    async function fetchBlogs() {

      try {

        const res = await fetch(
          "https://public-api.wordpress.com/rest/v1.1/sites/acmeglobal3.wordpress.com/posts/?category=blogs&number=3"
        );

        const data = await res.json();

        setBlogs(data.posts);

      } catch (error) {

        console.error(
          "BLOG FETCH ERROR:",
          error
        );
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
            Blogs & Insights
          </span>
        </h2>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 px-6 gap-8">

          {blogs.map((blog, index) => (

            <Link
              key={blog.ID}
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

                className="group bg-white border border-gray-200 rounded-xl
                          overflow-hidden
                          shadow-sm transition-all duration-300 cursor-pointer

                          hover:border-[#1A4FD6]
                          hover:shadow-[0_12px_30px_rgba(26,79,214,0.25)]"
              >

                {/* IMAGE */}
                <div className="w-full h-52 overflow-hidden">

                  <img
                    src={
                      blog.featured_image ||
                      "/media/fallback-blog.jpg"
                    }

                    alt={blog.title}

                    className="w-full h-full object-cover
                              transition-transform duration-500 ease-in-out
                              group-hover:scale-105"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed line-clamp-2">

                    {blog.title}

                  </h3>

                 

                  {/* READ MORE */}
                  <button className="flex items-center text-blue-600 font-semibold gap-1">

                    Read more

                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </motion.div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}