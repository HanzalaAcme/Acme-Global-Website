"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      image: "/media/Blog1.avif",
      title: "The Power of Team Collaboration in Driving Digital Innovation",
    },
    {
      image: "/media/Blog2.avif",
      title: "Why Cloud Adoption Is Essential for Modern Enterprises",
    },
    {
      image: "/media/Blog3.avif",
      title: "Inside the Mind of a Software Developer: Coding the Future",
    },
  ];

  return (
    <section className="py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="font-playfair text-[35px] font-extrabold mb-14 px-6 text-[#0B1120]">
          Latest{" "}
          <span className="text-[#2E66FF]">Blogs & Insights</span>
        </h2>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 px-6 gap-8">

          {blogs.map((blog, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white border border-gray-200 rounded-xl 
                          overflow-hidden
                          shadow-sm transition-all duration-300 cursor-pointer

                          hover:border-[#1A4FD6]
                          hover:shadow-[0_12px_30px_rgba(26,79,214,0.25)]"
              >

                {/* IMAGE */}
                <div className="w-full h-52 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover 
                              transition-transform duration-500 ease-in-out
                              group-hover:scale-105"
                  />
                </div>

                {/* CONTENT (WITH PADDING) */}
                <div className="p-4">

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                    {blog.title}
                  </h3>

                  {/* READ MORE */}
                  <button className="flex items-center text-blue-600 font-semibold gap-1">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </div>

              </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}