"use client";
import { useParams } from "next/navigation";

import CloudHero from "@/app/components/DetailedServices/CloudService/Hero";
import WhyChooseACME from "@/app/components/DetailedServices/CloudService/Why-acme";
import CloudPlatforms  from "@/app/components/DetailedServices/CloudService/CloudPlatforms";
import CloudCTA from "@/app/components/DetailedServices/CloudService/CTA"


import ApplicationHero from "@/app/components/DetailedServices/ApplicationService/Hero";
import ApplicationCTA from "@/app/components/DetailedServices/ApplicationService/CTA"
import RequirementsForm from "@/app/components/DetailedServices/ApplicationService/RequirementForm";

import CyberSecurityCapabilities from "@/app/components/DetailedServices/CybersecurityService/Capabilities";
import WhyAcme from "@/app/components/DetailedServices/CybersecurityService/Why-acme";
import CyberHero from "@/app/components/DetailedServices/CybersecurityService/Hero";
import CyberCTA from "@/app/components/DetailedServices/CybersecurityService/CTA";
import RequirementsFormCyber from "@/app/components/DetailedServices/CybersecurityService/RequirementForm";

import RemoteInfrastructureHero from "@/app/components/DetailedServices/RemoteInfrastructure/Hero";
import RemoteCTA from "@/app/components/DetailedServices/RemoteInfrastructure/CTA";
import RequirementsFormRemote from "@/app/components/DetailedServices/RemoteInfrastructure/RequirementForm";

import GCCHero from "@/app/components/DetailedServices/GCC/Hero";
import GCCCTA from "@/app/components/DetailedServices/GCC/CTA";
import RequirementsFormGCC from "@/app/components/DetailedServices/GCC/RequirementForm";

import StaffAugmentationHero from "@/app/components/DetailedServices/StaffAugmentationService/Hero";
import StaffCTA from "@/app/components/DetailedServices/StaffAugmentationService/CTA";
import RequirementsFormStaffAug from "@/app/components/DetailedServices/StaffAugmentationService/RequirementForm";

import ERPHero from "@/app/components/DetailedServices/ERPPlatforms/Hero";
import ERPCTA from "@/app/components/DetailedServices/ERPPlatforms/CTA";
import RequirementsFormERP from "@/app/components/DetailedServices/ERPPlatforms/RequirementForm";

import ManagedITServicesHero from "@/app/components/DetailedServices/ManagedITServices/Hero";
import ManagedCTA from "@/app/components/DetailedServices/ManagedITServices/CTA";
import RequirementsFormManagedIT from "@/app/components/DetailedServices/ManagedITServices/RequirementForm";

import RaaSHero from "@/app/components/DetailedServices/RaaS/Hero";
import RaaSCTA from "@/app/components/DetailedServices/RaaS/CTA";
import RequirementsFormRaaS from "@/app/components/DetailedServices/RaaS/RequirementForm";

import PactRevenuHero from "@/app/components/DetailedServices/PactRevenu/Hero";
import PactCTA from "@/app/components/DetailedServices/PactRevenu/CTA";

import StaffDynamicsHero from "@/app/components/DetailedServices/StaffDynamics/Hero";
import StaffDynamicsCTA from "@/app/components/DetailedServices/StaffDynamics/CTA";
import RequirementsFormStaffDyn from "@/app/components/DetailedServices/StaffDynamics/RequirementForm";

import PayDynamicsHero from "@/app/components/DetailedServices/PayDynamics/Hero";
import PayDynamicsCTA from "@/app/components/DetailedServices/PayDynamics/CTA";
import RequirementsFormPayDyn from "@/app/components/DetailedServices/PayDynamics/RequirementForm";



export default function ServicePage() {
  const { slug } = useParams();

  switch (slug) {
    case "cloud-services":
      return (
    <>
      <CloudHero />
      <WhyChooseACME />
      <CloudPlatforms />
      <CloudCTA />
    </>
  );

      case "application-services":
      return (
    <>
      <ApplicationHero />
      <ApplicationCTA />
      <RequirementsForm serviceType="Application Services"/>
    </>
  );
    
    case "cyber-security":
       return (
    <>
      <CyberHero />
      <CyberSecurityCapabilities />
      <WhyAcme />
      <CyberCTA />
      <RequirementsFormCyber serviceType="Cyber Security" />
    </>
  );

    case "remote-infrastructure":
       return (
    <>
      <RemoteInfrastructureHero />
      <RemoteCTA />
      <RequirementsFormRemote serviceType="Remote Infrastructure" />
    </>
  );

    
     case "global-capability-center":
       return (
    <>
      <GCCHero />
      <GCCCTA />
      <RequirementsFormGCC serviceType="Global Capability Center" />
    </>
  );

     case "staff-augmentation-services":
       return (
    <>
      <StaffAugmentationHero />
      <StaffCTA />
      <RequirementsFormStaffAug serviceType="Staff Augmentation" />
    </>
  );

     case "erp-business-platforms":
       return (
    <>
      <ERPHero />
      <ERPCTA />
      <RequirementsFormERP serviceType="ERP Platforms" />
    </>
  );

     case "managed-it-services":
       return (
    <>
      <ManagedITServicesHero />
      <ManagedCTA />
      <RequirementsFormManagedIT serviceType="Managed IT Services" />
    </>
  );

     case "recruitment-as-a-service":
       return (
    <>
      <RaaSHero />
      <RaaSCTA />
      <RequirementsFormRaaS serviceType="Recruitment as a Service" />
    </>
  );

     case "pact-revenue-plus":
       return (
    <>
      <PactRevenuHero />
      <PactCTA />
    </>
  );

     case "staffdynamics":
       return (
    <>
      <StaffDynamicsHero />
      <StaffDynamicsCTA />
      <RequirementsFormStaffDyn serviceType="Staff Dynamics" />
    </>
  );

     case "paydynamics":
       return (
    <>
      <PayDynamicsHero />
      <PayDynamicsCTA />
      <RequirementsFormPayDyn serviceType="Pay Dynamics" />
    </>
  );

    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-700">Service not found</h1>
        </div>
      );
  }
} 