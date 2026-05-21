import type { Metadata } from "next";

import FAQsClient from "@/app/components/faqs/FaqsClients";

export const metadata: Metadata = {

  title:
    "FAQs - ACME Global Hub",

  description:
    "Find answers to common questions about ACME Global Hub services, cloud solutions, cybersecurity, managed IT services, careers, and enterprise digital transformation.",

};

export default function FAQsPage() {

  return <FAQsClient />;
}