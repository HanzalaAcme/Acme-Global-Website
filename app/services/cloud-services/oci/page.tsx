import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import OCIRequirementsForm from "@/app/components/DetailedServices/CloudService/OCI/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <OCIRequirementsForm serviceType="OCI" />
    </main>
  );
}