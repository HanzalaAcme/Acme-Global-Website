import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import AzureRequirementsForm from "@/app/components/DetailedServices/CloudService/Azure/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <AzureRequirementsForm serviceType="Azure" />
    </main>
  );
}