import AWSHero from "@/app/components/DetailedServices/CloudService/AWS/Hero";
import AwsRequirementsForm from "@/app/components/DetailedServices/CloudService/AWS/RequirementForm";

export default function AWSPage() {
  return (
    <main>
      <AWSHero />
      <AwsRequirementsForm serviceType="AWS" />
    </main>
  );
}