
export const metadata = {
  title: "OCI Cloud Services - ACME Global Hub",
  description:
    "Move and operate workloads on Oracle Cloud Infrastructure with ACME Global Hub’s enterprise cloud consulting, implementation and ongoing support.",
  alternates: { canonical: "/services/cloud-services/oci" },
};

import OCICTA from "@/app/components/DetailedServices/CloudService/OCI/CTA";
import OCIHero from "@/app/components/DetailedServices/CloudService/OCI/Hero";
import OCIBenefits from "@/app/components/DetailedServices/CloudService/OCI/OCIBenefits";
import OCIDeliver from "@/app/components/DetailedServices/CloudService/OCI/OCIDeliver";
import OCIRequirementsForm from "@/app/components/DetailedServices/CloudService/OCI/RequirementForm";

export default function OCIPage() {
  return (
    <main>
      <OCIHero />
      <OCIDeliver />
      <OCIBenefits />
      <OCICTA />
      {/* <OCIRequirementsForm serviceType="OCI" /> */}
    </main>
  );
}
