"use client";

import { useMemo, useState, useEffect } from "react";

import {
  ChevronDown,
  Cloud,
  Shield,
  Briefcase,
  Server,
  Sparkles,
  Users,
  Layers3,
} from "lucide-react";

/* TYPES */

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  label: string;
  icon: any;
  color: string;
  faqs: FAQItem[];
};

interface FAQSectionProps {
  searchQuery?: string;
}

/* FAQ DATA */

const faqData: FAQCategory[] = [
  {
    id: "about",
    label: "About ACME Global",
    icon: Briefcase,
    color: "bg-[#3563FF]",

    faqs: [
      {
        question:
          "What is ACME Global Hub and what services do you offer?",

        answer:
          "ACME Global Hub is an enterprise IT services company operating as a Cloud Service Provider, Managed Service Provider, and Resource Outsourcing Partner. We help organizations across the GCC modernize IT infrastructure, implement ERP platforms, strengthen cybersecurity, adopt AI, and optimize their workforce. Our services span Cloud (AWS, Azure, Google Cloud, Oracle), ERP & Business Applications, Cybersecurity, Managed IT, AI & Generative AI, Staff Augmentation, RaaS, and HR & Payroll solutions.",
      },

      {
        question: "Where does ACME Global Hub operate?",

        answer:
          "ACME Global Hub is headquartered in Hyderabad, India, with regional operations in Bahrain (through Almoayyed Computers Middle East) and Kuwait (through Alghanim & Almoayyed Computer Solutions). We serve enterprise clients across the broader GCC region.",
      },

      {
        question:
          "Which industries does ACME Global Hub serve?",

        answer:
          "We work with enterprise clients across BFSI, Retail & E-Commerce, Healthcare, Manufacturing, Government & Public Sector, Oil & Energy, and Technology. Our solutions are tailored to the regulatory, compliance, and operational requirements of each sector.",
      },

      {
        question:
          "How do I get started with ACME Global Hub?",

        answer:
          "The easiest way to start is by requesting a demo through our Demo Request page. Our team will reach out within one business day. You can also contact us directly at sales@acmeglobal.tech.",
      },

      {
        question:
          "Does ACME Global Hub offer SLA-backed support?",

        answer:
          "Yes. All managed services engagements are governed by formal Service Level Agreements (SLAs) with 24x7 monitoring and support, and clearly defined response and resolution times based on severity.",
      },

    ],
  },

  {
    id: "cloud",
    label: "Cloud Services",
    icon: Cloud,
    color: "bg-[#F59E0B]",

    faqs: [
      {
        question:
          "Which cloud platforms does ACME Global support?",

        answer:
          "We support all four major enterprise cloud platforms: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and Oracle Cloud Infrastructure (OCI). We also offer multi-cloud management for organizations running workloads across more than one provider.",
      },

      {
        question:
          "Can ACME Global Hub help us migrate from on-premise to cloud?",

        answer:
          "Yes. Cloud migration is a core competency. We provide end-to-end migration services including assessment, architecture design, workload migration, testing, and post-migration support using lift-and-shift, re-platforming, or re-architecting approaches.",
      },

      {
        question:
          "Do you offer cloud cost optimization services?",

        answer:
          "Yes. We offer cloud cost optimization engagements covering resource rightsizing, reserved instance planning, waste identification, and governance framework setup — available as a one-time assessment or ongoing managed service.",
      },

      {
        question:
          "Is cloud hosting compliant with GCC data residency requirements?",

        answer:
          "Yes. All major cloud providers operate data centre regions within the GCC. We design architectures that keep data within required geographic boundaries and comply with local data protection regulations.",
      },

      {
        question:
          "Do you provide disaster recovery as part of cloud services?",

        answer:
          "Yes. Backup and Disaster Recovery (DRaaS) is a core component of our cloud portfolio. We design backup strategies, replication, automated failover, and recovery testing. RTO and RPO are defined and contractually governed.",
      },

      {
        question:
          "What is multi-cloud management and do I need it?",

        answer:
          "Multi-cloud management means centrally overseeing workloads across two or more cloud providers. If your organization uses more than one cloud platform, a unified management approach addresses visibility, cost, security, and governance challenges.",
      },
    ],
  },

  {
    id: "erp",
    label: "ERP & Applications",
    icon: Layers3,
    color: "bg-[#EF4444]",

    faqs: [
      {
        question:
          "Which ERP platforms does ACME Global Hub implement?",

        answer:
          "We implement Oracle Fusion Cloud Applications, Microsoft Dynamics 365, SAP ERP Solutions, and PACT Business Solutions ERP — as well as Microsoft Power Platform (Power Apps, Power Automate, Power BI, SharePoint).",
      },

      {
        question:
          "How long does an ERP implementation typically take?",

        answer:
          "A mid-sized Dynamics 365 or PACT ERP implementation typically takes 3–6 months. Oracle Fusion or large-scale SAP deployments may take 6–18 months. A detailed project plan with milestones is provided during scoping.",
      },

      {
        question:
          "Can you integrate new ERP with existing systems?",

        answer:
          "Yes. We connect ERP platforms with HRMS, banking systems, CRM, eCommerce, BI tools, and third-party applications using APIs, middleware, and platform-native connectors.",
      },

      {
        question:
          "Do you offer post-go-live support for ERP systems?",

        answer:
          "Yes. Application Managed Services (AMS) covers 24x7 support, incident management, enhancements, and SLA-based operations. We also provide hypercare support in the weeks immediately after go-live.",
      },

      {
        question:
          "What is the difference Application Services and ERP and Business Platforms?",

        answer:
          "Application Services details our capabilities within each platform. ERP & Business Platforms focuses on our delivery approach — implementation, migration, managed services, and integration. Both describe the same team and services from different angles.",
      },
    ],
  },

  {
    id: "cybersecurity",
    label: "Cybersecurity",
    icon: Shield,
    color: "bg-[#F43F5E]",

    faqs: [
      {
        question:
          "What cybersecurity services does ACME Global provide?",

        answer:
          "We provide SOC monitoring, vulnerability management, SIEM, IAM, endpoint security, and compliance services.",
      },

      {
        question:
          "Do you offer 24x7 security monitoring?",

        answer:
          "Yes. Our SOC teams provide continuous monitoring and threat response services.",
      },
    ],
  },

  {
    id: "managed-it",
    label: "Managed IT Services",
    icon: Server,
    color: "bg-[#2563EB]",

    faqs: [
      {
        question:
          "What does Remote Infrastructure Management include?",

        answer:
          "RIM includes monitoring, server management, patching, help desk, automation, and infrastructure operations.",
      },
    ],
  },

  {
    id: "ai",
    label: "AI & Generative AI",
    icon: Sparkles,
    color: "bg-[#8B5CF6]",

    faqs: [
      {
        question:
          "What is the difference between AI and Generative AI?",

        answer:
          "AI focuses on intelligent automation and predictions, while Generative AI creates new content and outputs.",
      },
    ],
  },

  {
    id: "talent",
    label: "Talent, HR & Payroll",
    icon: Users,
    color: "bg-[#00C9A7]",

    faqs: [
      {
        question:
          "What is the difference between Staff Augmentation and RaaS?",

        answer:
          "Staff Augmentation provides skilled resources while RaaS delivers end-to-end recruitment as a managed service.",
      },
    ],
  },
];

/* COMPONENT */

export default function FAQSection({
  searchQuery = "",
}: FAQSectionProps) {

  const [activeTab, setActiveTab] = useState("all");

  const [openQuestion, setOpenQuestion] = useState("");

  /* FILTER LOGIC */

  const filteredSections = useMemo(() => {

    const normalizedQuery = searchQuery
      .trim()
      .toLowerCase();

    /* FILTER BY TAB */
    const tabFiltered =
      activeTab === "all"
        ? faqData
        : faqData.filter(
            (section) => section.id === activeTab
          );

    /* FILTER BY SEARCH */
    const searchFiltered = tabFiltered
      .map((section) => {

        const matchedFaqs = section.faqs.filter(
          (faq) => {

            if (!normalizedQuery) return true;

            return (
              faq.question
                .toLowerCase()
                .includes(normalizedQuery) ||

              faq.answer
                .toLowerCase()
                .includes(normalizedQuery)
            );
          }
        );

        return {
          ...section,
          faqs: matchedFaqs,
        };
      })

      /* REMOVE EMPTY SECTIONS */
      .filter(
        (section) => section.faqs.length > 0
      );

    return searchFiltered;

  }, [activeTab, searchQuery]);

  /* AUTO OPEN FIRST SEARCH RESULT */

  useEffect(() => {

    if (
      searchQuery &&
      filteredSections.length > 0 &&
      filteredSections[0].faqs.length > 0
    ) {
      setOpenQuestion(
        filteredSections[0].faqs[0].question
      );
    }

  }, [searchQuery, filteredSections]);

  return (
    <section className="bg-white py-16 lg:py-24">

      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12">

        {/* TABS */}

        <div className="sticky top-0 z-20 mb-12 overflow-x-auto border-b border-[#E5E7EB] bg-white pb-4">

          <div className="flex min-w-max items-center gap-3">

            {/* ALL */}

            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                activeTab === "all"
                  ? "border-[#3563FF] bg-[#3563FF] text-white"
                  : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F3F4F6]"
              }`}
            >
              <Layers3 className="h-4 w-4" />
              All
            </button>

            {faqData.map((tab) => {

              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() =>
                    setActiveTab(tab.id)
                  }
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[13px] font-medium whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.id
                      ? "border-[#3563FF] bg-[#3563FF] text-white"
                      : "border-[#E5E7EB] bg-white text-[#374151] hover:bg-[#F3F4F6]"
                  }`}
                >
                  <Icon className="h-4 w-4" />

                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ CONTENT */}

        <div className="space-y-20">

          {filteredSections.map((section) => {

            const SectionIcon = section.icon;

            return (
              <div key={section.id}>

                {/* TITLE */}

                <div className="mb-8 flex items-center gap-4">

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${section.color}`}
                  >
                    <SectionIcon className="h-5 w-5 text-white" />
                  </div>

                  <h2 className="font-playfair text-[28px] font-bold text-[#111827] lg:text-[38px]">
                    {section.label}
                  </h2>
                </div>

                {/* FAQ LIST */}

                <div className="space-y-4">

                  {section.faqs.map(
                    (faq, index) => {

                      const isOpen =
                        openQuestion ===
                        faq.question;

                      return (
                        <div
                          key={index}
                          className={`overflow-hidden rounded-[22px] border transition-all duration-300 ${
                            isOpen
                              ? "border-[#3563FF] bg-[#F8FAFF]"
                              : "border-[#E5E7EB] bg-white hover:bg-[#F5F5F5]"
                          }`}
                        >

                          {/* QUESTION */}

                          <button
                            onClick={() =>
                              setOpenQuestion(
                                isOpen
                                  ? ""
                                  : faq.question
                              )
                            }
                            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left lg:px-8"
                          >

                            <span className="text-[15px] font-medium leading-[28px] text-[#111827] lg:text-[17px]">
                              {faq.question}
                            </span>

                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition-all duration-300 ${
                                isOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              <ChevronDown className="h-4 w-4 text-[#374151]" />
                            </div>
                          </button>

                          {/* ANSWER */}

                          <div
                            className={`grid transition-all duration-500 ease-in-out ${
                              isOpen
                                ? "grid-rows-[1fr]"
                                : "grid-rows-[0fr]"
                            }`}
                          >

                            <div className="overflow-hidden">

                              <div className="border-t border-[#E5E7EB] px-6 pb-6 pt-5 lg:px-8">

                                <p className="max-w-[1200px] text-[15px] leading-[32px] text-[#5B6475] lg:text-[16px]">
                                  {faq.answer}
                                </p>

                              </div>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}

          {/* NO RESULTS */}

          {filteredSections.length === 0 && (

            <div className="flex flex-col items-center justify-center rounded-[28px] border border-[#E5E7EB] bg-[#FAFAFA] px-6 py-20 text-center">

              <h3 className="text-[24px] font-semibold text-[#111827]">
                No FAQs Found
              </h3>

              <p className="mt-3 max-w-[500px] text-[15px] leading-[28px] text-[#6B7280]">
                Try searching with another keyword or choose a different FAQ category.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}