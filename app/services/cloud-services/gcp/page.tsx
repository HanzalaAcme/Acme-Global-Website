import GCPHero from "@/app/components/DetailedServices/CloudService/GCP/Hero";
import GCPBenefits from "@/app/components/DetailedServices/CloudService/GCP/GCPBenefits";
import GCPDeliver from "@/app/components/DetailedServices/CloudService/GCP/GCPDeliver";
import GCPRequirementsForm from "@/app/components/DetailedServices/CloudService/GCP/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <GCPHero />
      <GCPDeliver />
      <GCPBenefits />
      <GCPRequirementsForm serviceType="GCP" />
    </main>
  );
}