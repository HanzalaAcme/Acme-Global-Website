// lib/services.js
import { Cloud, Shield, Code, Monitor, Globe, DollarSign, Briefcase, Users, UserPlus, PenLine, LayoutGrid } from "lucide-react";

export const services = [
  {
    slug: "cloud-services",
    title: "Cloud Services",
    desc: "Full-spectrum cloud solutions supporting migration, architecture, and managed operations across your environments.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    slug: "application-services",
    title: "Application Services",
    desc: "Design, development, modernization, and lifecycle management of enterprise applications.",
    icon: <Code className="w-6 h-6" />,
    
  },
  {
    slug: "cyber-security",
    title: "Cybersecurity Services",
    desc: "Advanced cybersecurity services safeguarding your business from evolving threats.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    slug: "remote-infrastructure",
    title: "Remote Infrastructure Management",
    desc: "24/7 remote infrastructure management for secure, optimized IT environments.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    slug: "global-capability-center",
    title: "Global Capability\nCenter (GCC)",
    desc: "Strategic global capability center (GCC) designed for agility and scalability.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    slug: "staff-augmentation-services",
    title: "Staff Augmentation Services",
    desc: "On-demand skilled professionals to strengthen your workforce instantly.",
    icon: <Users className="w-6 h-6" />,   
  },
  {
    slug: "erp-business-platforms",
    title: "ERP & Business Platforms",
    desc: "Transform operations with intelligent ERP and business platforms.",
    icon: <LayoutGrid className="w-6 h-6" />,
  },
  {
    slug: "managed-it-services",
    title: "Managed IT Services",
    desc: "Proactive managed IT services ensuring reliability and performance.",
    icon: <PenLine className="w-6 h-6" />,
  },
  {
    slug: "recruitment-as-a-service",
    title: "Recruitment as\na Service (RaaS)",
    desc: "Helping organizations attract, assess, and hire the right talent efficiently.",
    icon: <UserPlus className="w-6 h-6" />,
  },
  {
    slug: "pact-revenue-plus",
    title: "PACT Revenu+",
    desc: "All-in-one ERP solution for finance, inventory, payroll, and business management.",
    icon : <Briefcase className="w-6 h-6" />,
  },
  {
    slug: "staffdynamics",
    title: "StaffDynamics",
    desc: "Optimize workforce management, employee tracking, and staffing operations.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    slug: "paydynamics",
    title: "PayDynamics",
    desc: "Automate payroll processing, compliance, and employee compensation management.",
    icon: <DollarSign className="w-6 h-6" />,
  },
];

// Helper function to find a service by slug
export function findServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}