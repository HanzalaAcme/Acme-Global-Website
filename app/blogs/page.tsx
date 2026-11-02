import type { Metadata } from "next";

import BlogsClient from "@/app/components/blog/BlogsClient";

export const metadata: Metadata = {

  title:
    "Technology Insights | AI, Cloud and Cybersecurity ",

  description:
    "AI adoption insights; cloud computing analysis; cyber risk management; application modernization trends; IT strategy commentary",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {

  return <BlogsClient />;
}
