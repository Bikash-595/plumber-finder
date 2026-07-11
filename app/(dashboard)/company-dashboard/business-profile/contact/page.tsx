import SectionForm from "@/components/company-dashboard/business-profile/SectionForm";
import { companyProfileSeed } from "@/components/company-dashboard/business-profile/profileStore";
export default function Page() { return <SectionForm section="contact" title="Contact Information" description="Keep customer-facing contact channels accurate." defaults={companyProfileSeed} fields={[{name:"phone",label:"Phone",type:"tel"},{name:"email",label:"Email",type:"email"},{name:"website",label:"Website",type:"url"},{name:"whatsapp",label:"WhatsApp",type:"tel"}]} />; }
