import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import AWSDeliver from "@/app/components/DetailedServices/CloudService/AWS/AWSDeliver";
import AWSBenefits from "@/app/components/DetailedServices/CloudService/AWS/AWSBenefits";
import AwsRequirementsForm from "@/app/components/DetailedServices/CloudService/AWS/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <AWSDeliver />
      <AWSBenefits />
      <AwsRequirementsForm serviceType="AWS" />
    </main>
  );
}