import { FaPlusCircle } from "react-icons/fa";
import CompanySectionPage from "../CompanySectionPage";

const content = {
  title: "Add Company",
  description: "Create a complete plumber company listing with comparison, service, availability, contact, and business details.",
  stats: [
    { label: "Required fields", value: "15", detail: "Core listing and comparison data" },
    { label: "Profile sections", value: "3", detail: "Basic, services, contact" },
    { label: "Listing status", value: "Draft", detail: "Ready for admin review" },
  ],
  tasks: [
    { title: "Fill basic information", status: "Required", detail: "Name, rating, reviews, pricing, location, and response time." },
    { title: "Add services and availability", status: "Required", detail: "Emergency support, services, certifications, warranty, and experience." },
    { title: "Complete contact details", status: "Required", detail: "Phone, email, website, team size, and license number." },
  ],
};

const defaults = {
  companyName: "Premier New York Plumbing",
  rating: "4.5",
  reviews: "342",
  priceRange: "$99 diag",
  responseTime: "< 4 hours",
  location: "New York, NY",
  emergency: "No",
  services: "Leak Repair, Water Heater, Pipe Repair, Sewer Line, Emergency Service, Toilet Repair",
  certifications: "EPA, OSHA",
  warranty: "1 year",
  yearsExperience: "21",
  phone: "(212) 555-1234",
  email: "contact@premiernewyorkplumbing.com",
  website: "https://premiernewyorkplumbing.com",
  teamSize: "42",
  licenseNumber: "PL-54892",
};

const groups = [
  {
    title: "Basic Information",
    description: "Core data shown in detailed comparison cards.",
    fields: [
      { label: "Company Name", name: "companyName", type: "text", value: defaults.companyName },
      { label: "Rating", name: "rating", type: "number", value: defaults.rating, suffix: "★" },
      { label: "Reviews", name: "reviews", type: "number", value: defaults.reviews, suffix: "reviews" },
      { label: "Price Range", name: "priceRange", type: "text", value: defaults.priceRange },
      { label: "Response Time", name: "responseTime", type: "text", value: defaults.responseTime },
      { label: "Location", name: "location", type: "text", value: defaults.location },
    ],
  },
  {
    title: "Services & Availability",
    description: "Service coverage, certifications, warranty, and operating readiness.",
    fields: [
      { label: "24/7 Emergency", name: "emergency", type: "select", value: defaults.emergency },
      { label: "Services Offered", name: "services", type: "textarea", value: defaults.services },
      { label: "Certifications", name: "certifications", type: "text", value: defaults.certifications },
      { label: "Warranty", name: "warranty", type: "text", value: defaults.warranty },
      { label: "Years Experience", name: "yearsExperience", type: "number", value: defaults.yearsExperience, suffix: "years" },
    ],
  },
  {
    title: "Contact & Business",
    description: "Business identity, contact channels, staffing, and license information.",
    fields: [
      { label: "Phone", name: "phone", type: "tel", value: defaults.phone },
      { label: "Email", name: "email", type: "email", value: defaults.email },
      { label: "Website", name: "website", type: "url", value: defaults.website },
      { label: "Team Size", name: "teamSize", type: "number", value: defaults.teamSize, suffix: "members" },
      { label: "License Number", name: "licenseNumber", type: "text", value: defaults.licenseNumber },
    ],
  },
];

function AddCompanyForm() {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-gray-100 pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b1f3b] text-[#FFD60A]">
            <FaPlusCircle className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Company Listing Form</h2>
            <p className="text-sm text-gray-500">Detailed Comparison data for a plumber company profile.</p>
          </div>
        </div>
        <span className="inline-flex w-fit rounded-lg bg-[#FFD60A]/20 px-3 py-2 text-xs font-bold uppercase tracking-wide text-[#0b1f3b]">
          Draft Listing
        </span>
      </div>

      <form className="mt-6 space-y-8">
        {groups.map((group) => (
          <fieldset key={group.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <legend className="px-2 text-base font-bold text-gray-900">{group.title}</legend>
            <p className="mt-1 text-sm text-gray-500">{group.description}</p>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {group.fields.map((field) => (
                <label
                  key={field.name}
                  className={field.type === "textarea" ? "md:col-span-2 xl:col-span-3" : ""}
                >
                  <span className="block text-xs font-bold uppercase tracking-wide text-gray-500">
                    {field.label}
                  </span>
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      defaultValue={field.value}
                      rows={4}
                      className="mt-2 block w-full resize-y rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-gray-900 outline-none transition focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]/30"
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      defaultValue={field.value}
                      className="mt-2 block min-h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline-none transition focus:border-[#FFD60A] focus:ring-2 focus:ring-[#FFD60A]/30"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  ) : (
                    <div className="mt-2 flex min-h-11 overflow-hidden rounded-lg border border-gray-200 bg-white focus-within:border-[#FFD60A] focus-within:ring-2 focus-within:ring-[#FFD60A]/30">
                      <input
                        name={field.name}
                        type={field.type}
                        defaultValue={field.value}
                        step={field.name === "rating" ? "0.1" : undefined}
                        min={field.type === "number" ? "0" : undefined}
                        className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 outline-none"
                      />
                      {field.suffix && (
                        <span className="flex items-center border-l border-gray-100 bg-gray-50 px-3 text-xs font-bold text-gray-500">
                          {field.suffix}
                        </span>
                      )}
                    </div>
                  )}
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className="grid gap-4 rounded-xl border border-gray-200 bg-white p-5 lg:grid-cols-3">
          <div>
            <h3 className="font-bold text-gray-900">Detailed Comparison Preview</h3>
            <p className="mt-1 text-sm text-gray-500">This mirrors the customer-facing comparison data.</p>
          </div>
          <div className="grid gap-3 text-sm sm:grid-cols-2 lg:col-span-2">
            {[
              ["Company Name", defaults.companyName],
              ["Rating", `${defaults.rating} ★`],
              ["Reviews", `${defaults.reviews} reviews`],
              ["Price Range", defaults.priceRange],
              ["Response Time", defaults.responseTime],
              ["Location", defaults.location],
              ["24/7 Emergency", defaults.emergency],
              ["Warranty", defaults.warranty],
              ["Team Size", `${defaults.teamSize} members`],
              ["License Number", defaults.licenseNumber],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-gray-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">{label}</p>
                <p className="mt-1 font-bold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="min-h-11 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-bold text-gray-600 transition hover:border-[#0b1f3b] hover:text-[#0b1f3b]"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="min-h-11 rounded-lg bg-[#FFD60A] px-5 py-2.5 text-sm font-bold text-[#0b1f3b] transition hover:bg-[#0b1f3b] hover:text-white"
          >
            Submit Company Listing
          </button>
        </div>
      </form>
    </section>
  );
}

export default function AddCompanySection() {
  return (
    <CompanySectionPage content={content}>
      <AddCompanyForm />
    </CompanySectionPage>
  );
}
