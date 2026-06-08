"use client";

import {
  BookOpen,
  Sparkles,
  Zap,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "AI Strategy & Advisory",
    color: "text-[#6EA8FF]",
    bg: "bg-[#1D3B8B]/25",
    dot: "bg-[#6EA8FF]",
    points: [
      "AI readiness assessments and use-case identification",
      "Business case development and ROI modeling",
      "Data and governance strategy",
      "Responsible AI and compliance frameworks",
    ],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    color: "text-[#00D4AA]",
    bg: "bg-[#00D4AA]/15",
    dot: "bg-[#00D4AA]",
    points: [
      "Enterprise knowledge assistants and copilots",
      "Document summarization and content generation",
      "Proposal, report, and code generation",
      "Retrieval-Augmented Generation (RAG) using private enterprise data",
    ],
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    color: "text-[#B084FF]",
    bg: "bg-[#7C4DFF]/15",
    dot: "bg-[#B084FF]",
    points: [
      "AI-powered workflows and process automation",
      "Document processing and data extraction",
      "Email and customer service automation",
      "Integration with ERP, CRM, and business applications",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics & Machine Learning",
    color: "text-[#FFD54A]",
    bg: "bg-[#FFB300]/15",
    dot: "bg-[#FFD54A]",
    points: [
      "Forecasting and demand planning",
      "Customer segmentation and personalization",
      "Fraud detection and anomaly detection",
      "Predictive maintenance and operational insights",
    ],
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    color: "text-[#FF7D7D]",
    bg: "bg-[#FF5A5A]/15",
    dot: "bg-[#FF7D7D]",
    points: [
      "Customer service chatbots and virtual assistants",
      "WhatsApp and omnichannel engagement",
      "Voice bots and contact center automation",
      "Multilingual support including Arabic and English",
    ],
  },
  {
    icon: ShieldCheck,
    title: "AI Governance & Security",
    color: "text-[#3AE6C1]",
    bg: "bg-[#00D4AA]/15",
    dot: "bg-[#3AE6C1]",
    points: [
      "Data privacy and access controls",
      "Model monitoring and lifecycle management",
      "Compliance and auditability",
      "Human-in-the-loop review processes",
    ],
  },
];

export default function AIServicePortfolio() {
  return (
    <section className="relative overflow-hidden bg-[#020B2D] py-20 lg:py-20">
      {/* Glow */}
      <div className="absolute left-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(0,212,170,0.14),transparent_70%)] blur-3xl" />
      <div className="absolute right-0 top-0 h-full w-[420px] bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1450px] px-6 lg:px-16">
        {/* LABEL */}
        <div className="mb-5 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#00D4AA]">
          <Briefcase className="h-4 w-4" />
          WHAT WE DELIVER
        </div>

        {/* HEADING */}
        <h2 className="text-center font-playfair text-[42px] font-bold leading-tight text-white lg:text-[40px]">
          Our AI Service{" "}
          <span className="text-[#00D4AA]">
            Portfolio
          </span>
        </h2>

        {/* GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-[32px] border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:translate-x-[4px] hover:border-[#00D4AA]/40 hover:shadow-[0_0_35px_rgba(0,212,170,0.14)]"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.bg}`}
                >
                  <Icon
                    className={`h-8 w-8 ${service.color}`}
                  />
                </div>

                <h3 className="mt-6 font-playfair text-[24px] font-bold leading-[30px] text-white">
                  {service.title}
                </h3>

                <div className="mt-6 space-y-3">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                        
                      <div
                        className={` h-2.5 w-2.5 rounded-full mt-1.5 shrink-0 ${service.dot}`}
                      />

                      <p className="text-[15px] leading-[20px] text-white/70">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}