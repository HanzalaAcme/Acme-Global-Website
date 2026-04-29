"use client";
import { useParams } from "next/navigation";
import CloudService from "@/app/components/DetailedServices/CloudService";
import CloudCapabilities from "@/app/components/DetailedServices/CloudService/Capabilities";
//import ApplicationService from "@/components/services/ApplicationService";
import CyberSecurityCapabilities from "@/app/components/DetailedServices/Cybersecurity/Capabilities";
import WhyAcme from "@/app/components/DetailedServices/Cybersecurity/Why-acme";
import CyberHero from "@/app/components/DetailedServices/Cybersecurity/Hero";
import CloudHero from "@/app/components/DetailedServices/CloudService/Hero";
//import RemoteInfrastructure from "@/components/services/RemoteInfrastructure";
//import PayDynamics from "@/components/services/PayDynamics";
//import StaffDynamics from "@/components/services/StaffDynamics";
import GlobalCapability from "@/app/components/DetailedServices/GlobalCapabilityCenter";
//import PactRevenue from "@/components/services/PactRevenue";
//import StaffService from "@/components/services/StaffServices";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function ServicePage() {
  const { slug } = useParams();

  switch (slug) {
    case "cloud-services":
      return (
    <>
      <CloudHero />
      <CloudCapabilities />
      <WhyAcme />
    </>
  );
    //case "application-services":
      //return <ApplicationService />;
    case "cyber-security":
       return (
    <>
      <CyberHero />
      <CyberSecurityCapabilities />
      <WhyAcme />
    </>
  );
    //case "remote-infrastructure":
      //return <RemoteInfrastructure />;
   // case "paydynamics":
     // return <PayDynamics />;
   // case "staffdynamics":
    //  return <StaffDynamics />;
    case "global-capability-center":
      return <GlobalCapability />;
   // case "pact-revenue-plus":
    //  return <PactRevenue />;
    //case "staff-augmentation-services":
     // return <StaffService />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-700">Service not found</h1>
        </div>
      );
  }
} 