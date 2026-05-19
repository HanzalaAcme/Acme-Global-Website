"use client";
import { useParams } from "next/navigation";

import CloudHero from "@/app/components/DetailedServices/CloudService/Hero";
import WhyChooseACME from "@/app/components/DetailedServices/CloudService/Why-acme";
import CloudPlatforms  from "@/app/components/DetailedServices/CloudService/CloudPlatforms";
import CloudPortfolioSection from "@/app/components/DetailedServices/CloudService/Portfolio";
import CloudCTA from "@/app/components/DetailedServices/CloudService/CTA"


import ApplicationHero from "@/app/components/DetailedServices/ApplicationService/Hero";
import ApplicationCTA from "@/app/components/DetailedServices/ApplicationService/CTA"
import BeyondERP from "@/app/components/DetailedServices/ApplicationService/BeyondERP";
import ApplicationServicesPortfolio from "@/app/components/DetailedServices/ApplicationService/Portfolio";
import ERPPlatforms from "@/app/components/DetailedServices/ApplicationService/ERPPlatforms";


import CyberSecurityCapabilities from "@/app/components/DetailedServices/CybersecurityService/Capabilities";
import WhyAcme from "@/app/components/DetailedServices/CybersecurityService/Why-acme";
import CyberHero from "@/app/components/DetailedServices/CybersecurityService/Hero";
import CyberCTA from "@/app/components/DetailedServices/CybersecurityService/CTA";


import RemoteInfrastructureHero from "@/app/components/DetailedServices/RemoteInfrastructure/Hero";
import WhyChooseAcme from "@/app/components/DetailedServices/RemoteInfrastructure/WhyChooseACME";
import RemoteCTA from "@/app/components/DetailedServices/RemoteInfrastructure/CTA";


import GCCHero from "@/app/components/DetailedServices/GCC/Hero";
import GCCStrategicAdvantage from "@/app/components/DetailedServices/GCC/StrategicAdv";
import GCCLifecycleServices from "@/app/components/DetailedServices/GCC/GCCLifecycle";
import SpecializedGCCModels from "@/app/components/DetailedServices/GCC/SpecializedGCCModels";
import Differentiators from "@/app/components/DetailedServices/GCC/Differentiators";
import GCCCTA from "@/app/components/DetailedServices/GCC/CTA";


import StaffAugmentationHero from "@/app/components/DetailedServices/StaffAugmentationService/Hero";
import StaffAugmentationApproach from "@/app/components/DetailedServices/StaffAugmentationService/StaffAugmentattionApproach";
import StaffAugmentationBenefits from "@/app/components/DetailedServices/StaffAugmentationService/StaffAugmentationBenefits";
import StaffCTA from "@/app/components/DetailedServices/StaffAugmentationService/CTA";


import ERPHero from "@/app/components/DetailedServices/ERPPlatforms/Hero";
import ERPPlatformExpertise from "@/app/components/DetailedServices/ERPPlatforms/ERPPlatforms";
import ERPWhatWeDeliver from "@/app/components/DetailedServices/ERPPlatforms/ERPDeliver";
import ERPCTA from "@/app/components/DetailedServices/ERPPlatforms/CTA";


import ManagedITServicesHero from "@/app/components/DetailedServices/ManagedITServices/Hero";
import BusinessBenefits from "@/app/components/DetailedServices/ManagedITServices/BusinessACME";
import ManagedServicesPortfolio from "@/app/components/DetailedServices/ManagedITServices/Portfolio";
import ManagedCTA from "@/app/components/DetailedServices/ManagedITServices/CTA";


import RaaSHero from "@/app/components/DetailedServices/RaaS/Hero";
import RaaSModels from "@/app/components/DetailedServices/RaaS/RaasModels";
import WhyRaaS from "@/app/components/DetailedServices/RaaS/WhyRaaS";
import RaaSBusinessBenefits from "@/app/components/DetailedServices/RaaS/RaaSBenefits";
import ComprehensiveRecruitmentCoverage from "@/app/components/DetailedServices/RaaS/RecruitmentCoverage";
import RaaSCTA from "@/app/components/DetailedServices/RaaS/CTA";


import AIHero from "@/app/components/DetailedServices/GenAI/Hero";
//import PactCTA from "@/app/components/DetailedServices/PactRevenu/CTA";

import StaffDynamicsHero from "@/app/components/DetailedServices/StaffDynamics/Hero";
//import StaffDynamicsCTA from "@/app/components/DetailedServices/StaffDynamics/CTA";


import PayDynamicsHero from "@/app/components/DetailedServices/PayDynamics/Hero";
//import PayDynamicsCTA from "@/app/components/DetailedServices/PayDynamics/CTA";



export default function ServicePage() {
  const { slug } = useParams();

  switch (slug) {
    case "cloud-services":
      return (
    <>
      <CloudHero />
      <WhyChooseACME />
      <CloudPlatforms />
      <CloudPortfolioSection />
      <CloudCTA /> 
    </>
  );

      case "application-services":
      return (
    <>
      <ApplicationHero />
      <ERPPlatforms />
      <BeyondERP />
      <ApplicationServicesPortfolio />
      <ApplicationCTA /> 
      
    </>
  );
    
    case "cyber-security":
       return (
    <>
      <CyberHero />
      <CyberSecurityCapabilities />
      <WhyAcme />
      <CyberCTA /> 
      
    </>
  );

    case "remote-infrastructure":
       return (
    <>
      <RemoteInfrastructureHero />
      <WhyChooseAcme />
      <RemoteCTA /> 
      
    </>
  );

    
     case "global-capability-center":
       return (
    <>
      <GCCHero />
      <GCCStrategicAdvantage />
      <GCCLifecycleServices />
      <SpecializedGCCModels />
      <Differentiators />
      <GCCCTA /> 
      
    </>
  );

     case "staff-augmentation-services":
       return (
    <>
      <StaffAugmentationHero />
      <StaffAugmentationApproach />
      <StaffAugmentationBenefits />
      <StaffCTA /> 
      
    </>
  );

     case "erp-business-platforms":
       return (
    <>
      <ERPHero />
      <ERPWhatWeDeliver />
      <ERPPlatformExpertise />
      
      <ERPCTA /> 
      
    </>
  );

     case "managed-it-services":
       return (
    <>
      <ManagedITServicesHero />
      <ManagedServicesPortfolio />
      <BusinessBenefits />
      <ManagedCTA /> 
      
    </>
  );

     case "recruitment-as-a-service":
       return (
    <>
      <RaaSHero />
      <WhyRaaS />
      <RaaSModels />
      <ComprehensiveRecruitmentCoverage />
      <RaaSBusinessBenefits />
      <RaaSCTA /> 
      
    </>
  );

     case "ai-and-generative-ai-services":
       return (
    <>
      <AIHero />
      {/*<PactCTA /> */}
    </>
  );

     case "staffdynamics":
       return (
    <>
      <StaffDynamicsHero />
      {/*<StaffDynamicsCTA /> */}
      
    </>
  );

     case "paydynamics":
       return (
    <>
      <PayDynamicsHero />
      {/*<PayDynamicsCTA /> */}
      
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