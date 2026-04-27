"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Blogs() {
  const blogs = [
    {
      image: "/media/About us1.jpg",
      title: "The Power of Team Collaboration in Driving Digital Innovation",
    },
    {
      image: "/media/Pic_6.jpg",
      title: "Why Cloud Adoption Is Essential for Modern Enterprises",
    },
    {
      image: "/media/blog1.jpg",
      title: "Inside the Mind of a Software Developer: Coding the Future",
    },
  ];

  return (
    <section className="py-20 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl font-extrabold mb-14 text-gray-900">
          Latest{" "}
          <span className="text-blue-600">Blogs & Insights</span>
        </h2>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white border border-gray-500 rounded-xl p-4 text-left 
                         shadow-sm hover:shadow-lg transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-relaxed">
                {blog.title}
              </h3>

              {/* READ MORE */}
              <button className="flex items-center text-blue-600 font-semibold hover:gap-2 gap-1 transition-all duration-300">
                Read more <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}