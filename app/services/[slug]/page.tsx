"use client";
import { useParams } from "next/navigation";
import CloudService from "@/app/components/DetailedServices/CloudService";
//import ApplicationService from "@/components/services/ApplicationService";
import CyberSecurity from "@/app/components/DetailedServices/CyberSecurity";
//import RemoteInfrastructure from "@/components/services/RemoteInfrastructure";
//import PayDynamics from "@/components/services/PayDynamics";
//import StaffDynamics from "@/components/services/StaffDynamics";
import GlobalCapability from "@/app/components/DetailedServices/GlobalCapabilityCenter";
//import PactRevenue from "@/components/services/PactRevenue";
//import StaffService from "@/components/services/StaffServices";

export default function ServicePage() {
  const { slug } = useParams();

  switch (slug) {
    case "cloud-services":
      return <CloudService />;
    //case "application-services":
      //return <ApplicationService />;
    case "cyber-security":
      return <CyberSecurity />;
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