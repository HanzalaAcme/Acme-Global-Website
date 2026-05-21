import type { Metadata } from "next";

import BlogsClient from "@/app/components/blog/BlogsClient";

export const metadata: Metadata = {

  title:
    "Blogs - ACME Global Hub",

  description:
    "Explore enterprise technology insights, cloud solutions, AI innovation, cybersecurity trends, and digital transformation updates from ACME Global Hub.",

};

export default function BlogsPage() {

  return <BlogsClient />;
}