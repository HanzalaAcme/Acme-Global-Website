import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import GCPRequirementsForm from "@/app/components/DetailedServices/CloudService/GCP/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <GCPRequirementsForm serviceType="GCP" />
    </main>
  );
}