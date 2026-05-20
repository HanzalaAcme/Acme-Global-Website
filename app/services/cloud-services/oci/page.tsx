import OCIHero from "@/app/components/DetailedServices/CloudService/OCI/Hero";
import OCIBenefits from "@/app/components/DetailedServices/CloudService/OCI/OCIBenefits";
import OCIDeliver from "@/app/components/DetailedServices/CloudService/OCI/OCIDeliver";
import OCIRequirementsForm from "@/app/components/DetailedServices/CloudService/OCI/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <OCIHero />
      <OCIDeliver />
      <OCIBenefits />
      <OCIRequirementsForm serviceType="OCI" />
    </main>
  );
}