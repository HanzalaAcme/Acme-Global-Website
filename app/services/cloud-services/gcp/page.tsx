export const metadata = {
  title: "GCP Cloud Services - ACME Global Hub",
  description:
    "Build and manage Google Cloud Platform environments with ACME Global Hub’s cloud architecture, migration and ongoing operations expertise for businesses.",
  alternates: { canonical: "/services/cloud-services/gcp" },
};
import GCPHero from "@/app/components/DetailedServices/CloudService/GCP/Hero";
import GCPBenefits from "@/app/components/DetailedServices/CloudService/GCP/GCPBenefits";
import GCPDeliver from "@/app/components/DetailedServices/CloudService/GCP/GCPDeliver";
import GCPRequirementsForm from "@/app/components/DetailedServices/CloudService/GCP/RequirementForm";
import GCPCTA from "@/app/components/DetailedServices/CloudService/GCP/CTA";

export default function GCPPage() {
  return (
    <main>
      <GCPHero />
      <GCPDeliver />
      <GCPBenefits />
      <GCPCTA />
      {/* <GCPRequirementsForm serviceType="GCP" /> */}
    </main>
  );
}
