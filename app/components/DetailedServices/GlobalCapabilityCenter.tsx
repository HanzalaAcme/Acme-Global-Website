"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Code2, Layers, Smartphone, Globe, Cloud, Shield } from "lucide-react";

export default function GlobalCapability() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-gray-900 overflow-hidden">
        
      {/* ===================== HERO ===================== */}
      <section
    className="relative bg-cover bg-top bg-no-repeat h-[100vh] flex items-center justify-right px-6 lg:px-90 text-center"
    style={{ backgroundImage: "url('/media/Pic_1.jpg')" }}
  >
        {/*  <Image
            src="/media/Pic_6.jpg"
            alt="Application Development"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />*/}
          <div className="absolute inset-0 " />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Transform Your Ideas into <br />
            <span className="text-indigo-300">Powerful Applications</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            We design and build digital products that deliver results — scalable,
            secure, and user-focused.
          </p>
        </motion.div>
      </section>

      {/* ===================== OVERVIEW ===================== */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-indigo-700 mb-6">
              Why Choose Our Application Services?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We deliver end-to-end application development services that combine
              innovation, design, and technology. Our focus is to help your
              business grow through seamless digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether it's a startup MVP or enterprise-grade system, our team
              builds robust, scalable, and secure applications that users love to
              use and businesses rely on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/media/Pic.jpg"
              alt="Team collaboration"
              width={600}
              height={400}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-indigo-700 mb-4"
          >
            Our Core Capabilities
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the full spectrum of our application development expertise —
            from design to deployment.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            {
              icon: <Code2 className="w-12 h-12 text-indigo-600" />,
              title: "Custom Software Development",
              desc: "Tailor-made applications designed specifically to meet your business needs and objectives.",
            },
            {
              icon: <Layers className="w-12 h-12 text-indigo-600" />,
              title: "Full Stack Engineering",
              desc: "Seamless integration of frontend, backend, and databases for a unified experience.",
            },
            {
              icon: <Smartphone className="w-12 h-12 text-indigo-600" />,
              title: "Cross-Platform Apps",
              desc: "Deliver native-like performance across web, Android, and iOS with modern frameworks.",
            },
            {
              icon: <Cloud className="w-12 h-12 text-indigo-600" />,
              title: "Cloud Integration",
              desc: "Deploy and scale effortlessly using AWS, Azure, or GCP cloud environments.",
            },
            {
              icon: <Globe className="w-12 h-12 text-indigo-600" />,
              title: "API & Microservices",
              desc: "Modular, maintainable, and easily extensible architectures for faster iteration.",
            },
            {
              icon: <Shield className="w-12 h-12 text-indigo-600" />,
              title: "App Security & Compliance",
              desc: "Built-in data protection and compliance for a secure user experience.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center border border-indigo-100"
            >
              <div className="flex justify-center mb-5">{f.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative py-15 text-center text-white bg-indigo-700 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Bring Your App Vision to Life?
          </h2>
          <p className="text-indigo-200 mb-10 max-w-xl mx-auto">
            Let's collaborate to design, build, and deploy applications that
            accelerate your growth.
          </p>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-cover bg-center" />
      </section>
    </main>
  );
}