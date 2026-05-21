export const metadata = {
  title: "Azure Cloud Services - ACME Global Hub",
};
import AzureHero from "@/app/components/DetailedServices/CloudService/Azure/Hero";
import AzureBenefits from "@/app/components/DetailedServices/CloudService/Azure/AzureBenefits";
import AzureDeliver from "@/app/components/DetailedServices/CloudService/Azure/AzureDeliver";
import AzureRequirementsForm from "@/app/components/DetailedServices/CloudService/Azure/RequirementForm";
import AzureCTA from "@/app/components/DetailedServices/CloudService/Azure/CTA";

export default function AzurePage() {
  return (
    <main>
      <AzureHero />
      <AzureDeliver />
      <AzureBenefits />
      <AzureCTA />
      {/* <AzureRequirementsForm serviceType="Azure" /> */}
    </main>
  );
}