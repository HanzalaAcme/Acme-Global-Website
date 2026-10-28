import type { MetadataRoute } from "next";

const serviceSlugs = [
  "cloud-services",
  "application-services",
  "cyber-security",
  "remote-infrastructure",
  "global-capability-center",
  "staff-augmentation-services",
  "erp-business-platforms",
  "managed-it-services",
  "recruitment-as-a-service",
  "ai-and-generative-ai-services",
  "staffdynamics",
  "paydynamics",
];

const publicPaths = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/services/cloud-services/aws",
  "/services/cloud-services/azure",
  "/services/cloud-services/gcp",
  "/services/cloud-services/oci",
  "/blogs",
  "/careers",
  "/faqs",
  "/partner",
  "/privacy-policy",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: new URL(path, "https://www.acmeglobal.tech").toString(),
  }));
}
