"use client";

import {
  Activity,
  Shield,
  Server,
  Download,
  Zap,
  MessageSquare,
  Database,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Monitoring & Intelligent Alerting",
    description:
      "Continuous oversight of servers, networks, databases, cloud resources, and business applications to detect issues before they impact operations.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "Infrastructure health monitoring",
      "Network device monitoring",
      "Application availability checks",
      "Threshold–based alerts",
      "Root cause diagnostics",
      "SLA reporting dashboards",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: Shield,
    title: "Security Management & Patch Governance",
    description:
      "Protect your IT environment with consistent security operations and automated maintenance.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "Endpoint security monitoring",
      "Threat detection & escalation",
      "OS and firmware patching",
      "Antivirus management",
      "Firewall policy reviews",
      "Vulnerability remediation support",
      "Access control governance",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: Server,
    title: "Remote Server & Network Management",
    description:
      "End-to-end management of physical, virtual, and cloud-hosted infrastructure.",
    subtitle: "SUPPORTED ENVIRONMENTS",
    points: [
      "Windows & Linux servers",
      "VMware / Hyper–V platforms",
      "AWS EC2 / Azure VMs / OCI Compute / GCP Compute Engine",
      "Routers, switches, firewalls, VPN gateways",
      "WAN / SD-WAN edge infrastructure",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: Download,
    title: "Backup & Disaster Recovery",
    description:
      "Ensure business continuity with secure backup strategies and tested recovery plans.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "Daily / scheduled backups",
      "Cloud backup repositories",
      "DR orchestration",
      "Recovery drills and validation",
      "Database backup management",
      "Cross-region / multi-site recovery design",
    ],
    benefit:
      "Business Benefit: Rapid recovery from ransomware, failure, or outages.",
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: Zap,
    title: "Automation & RMM Tooling",
    description:
      "Increase efficiency through intelligent automation and enterprise RMM platforms.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "Automated patch deployment",
      "OS hardening scripts",
      "Antivirus updates",
      "Routine maintenance tasks",
      "Auto-remediation workflows",
      "Asset discovery and inventory",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: MessageSquare,
    title: "Centralized Help Desk Support",
    description:
      "A professional multi-level support desk for users, devices, and IT incidents.",
    subtitle: "SUPPORT MODEL",
    points: [
      "L1 / L2 / L3 help desk",
      "Ticketing & SLA management",
      "User onboarding / offboarding",
      "Remote troubleshooting",
      "Escalation management",
      "Executive service reporting",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: Database,
    title: "Application & Database Support",
    description:
      "Keep business applications and databases performing optimally.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "SQL / Oracle / PostgreSQL / MySQL support",
      "Performance monitoring",
      "Patching & upgrades",
      "Job failures & service checks",
      "ERP / CRM application monitoring",
      "Capacity planning",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: TrendingUp,
    title: "Scalability & Flexible Delivery",
    description:
      "Our services are tailored to your environment and scale as your business grows.",
    subtitle: "FLEXIBLE MODELS",
    points: [
      "Full outsourced IT operations",
      "Co-managed IT support",
      "After-hours monitoring only",
      "Cloud operations center model",
      "Regional multi-site support",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },

  {
    icon: BarChart3,
    title: "Performance Optimization & Analytics",
    description:
      "Ongoing analysis to improve efficiency, utilization, and service quality.",
    subtitle: "CAPABILITIES INCLUDE",
    points: [
      "Resource utilization trends",
      "Capacity forecasting",
      "Cost optimization for cloud workloads",
      "Latency & performance tuning",
      "Monthly governance reviews",
    ],
    glow: "hover:shadow-[0_0_35px_rgba(37,99,235,0.14)]",
    border: "hover:border-[#2563EB]/40",
  },
];

export default function CoreRIMServices() {
  return (
    <section className="bg-[#F4F6FB] py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-16">
        {/* LABEL */}
        <div className="mb-5 flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#4F7CFF] lg:text-[13px]">
          <Server className="h-4 w-4" />
          Your Infrastructure. Expertly Managed.
        </div>

        {/* HEADING */}
        <h2 className="mx-auto max-w-[900px] text-center font-playfair text-[40px] font-bold leading-[1.15] text-[#0B1120] lg:text-[40px]">
          Core Remote Infrastructure{" "} <br />
          <span className="text-[#4F7CFF]">
            Management Services
          </span>
        </h2>

        {/* GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group rounded-[28px] border border-[#DCE4F2] bg-[#F7F9FD] p-6 transition-all duration-300 hover:translate-x-[4px] ${service.border} ${service.glow}`}
              >
                {/* TOP */}
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E9EEFA]">
                    <Icon className="h-6 w-6 text-[#3563FF]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-playfair text-[24px] font-bold leading-[1.2] text-[#111827] lg:text-[22px]">
                    {service.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="mt-4 text-[15px] leading-[22px] text-[#64748B] lg:text-[14px]">
                  {service.description}
                </p>

                {/* SUBTITLE */}
                <h4 className="mt-4 text-[12px] font-bold uppercase tracking-[1px] text-[#3563FF]">
                  {service.subtitle}
                </h4>

                {/* POINTS */}
                <ul className="mt-5 space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-3 text-[14px] leading-[18px] text-[#374151] lg:text-[14px]"
                    >
                      <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#3563FF]" />

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* BENEFIT */}
                {service.benefit && (
                  <div className="mt-4 rounded-2xl border border-[#8CE5D7] bg-[#DDF7F2] px-5 py-3">
                    <p className="text-[14px] font-semibold leading-[24px] text-[#066A5B]">
                      {service.benefit}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}