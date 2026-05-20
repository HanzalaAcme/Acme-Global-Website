import AzureHero from "@/app/components/DetailedServices/CloudService/Azure/Hero";
import AzureBenefits from "@/app/components/DetailedServices/CloudService/Azure/AzureBenefits";
import AzureDeliver from "@/app/components/DetailedServices/CloudService/Azure/AzureDeliver";
import AzureRequirementsForm from "@/app/components/DetailedServices/CloudService/Azure/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AzureHero />
      <AzureDeliver />
      <AzureBenefits />
      <AzureRequirementsForm serviceType="Azure" />
    </main>
  );
}