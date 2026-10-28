export const metadata = {
  title: "AWS Cloud Services - ACME Global Hub",
  description:
    "Plan, migrate and manage secure AWS cloud environments with ACME Global Hub’s cloud consulting and implementation services.",
  alternates: { canonical: "/services/cloud-services/aws" },
};
import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import AWSDeliver from "@/app/components/DetailedServices/CloudService/AWS/AWSDeliver";
import AWSBenefits from "@/app/components/DetailedServices/CloudService/AWS/AWSBenefits";
import AWSCTA from "@/app/components/DetailedServices/CloudService/AWS/CTA";
import AwsRequirementsForm from "@/app/components/DetailedServices/CloudService/AWS/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <AWSDeliver />
      <AWSBenefits />
      <AWSCTA />
      {/* <AwsRequirementsForm serviceType="AWS" /> */}
    </main>
  );
}
