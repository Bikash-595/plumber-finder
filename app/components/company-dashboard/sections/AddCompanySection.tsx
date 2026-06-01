import AddCompanyWizard from "@/components/company-dashboard/sections/AddCompanyWizard";
import CompanySectionPage from "../CompanySectionPage";

const content = {
  title: "Add Company",
  description: "Create a complete plumber company listing with comparison, service, availability, contact, and business details.",
  stats: [
    { label: "Required fields", value: "18", detail: "Structured onboarding sections" },
    { label: "Onboarding steps", value: "7", detail: "Branding, contacts, locations, services" },
    { label: "Profile status", value: "Draft", detail: "Ready for admin review" },
  ],
  tasks: [
    { title: "Enter company details", status: "Required", detail: "Name, tagline, description, mission, and vision." },
    { title: "Define branding and SEO", status: "Required", detail: "Logo, hero media, metadata, and schema." },
    { title: "Set operations and services", status: "Required", detail: "Locations, hours, services, and coverage." },
  ],
};

export default function AddCompanySection() {
  return (
    <CompanySectionPage content={content} showOperations={false}>
      <AddCompanyWizard />
    </CompanySectionPage>
  );
}
