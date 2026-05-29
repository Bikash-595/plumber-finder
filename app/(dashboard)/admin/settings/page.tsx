import AdminSectionPage from "@/components/admin-dashboard/AdminSectionPage";

const settings = [
  { label: "Platform mode", value: "Live" },
  { label: "Email notifications", value: "Enabled" },
  { label: "Data retention", value: "12 months" },
];

export default function AdminSettingsPage() {
  return (
    <AdminSectionPage
      title="Admin Settings"
      description="Configure global behavior and platform policies for users, companies, and freelancers."
    >
      <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {settings.map((item) => (
          <div key={item.label} className="flex flex-col gap-2 rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-base font-semibold text-gray-900">{item.label}</p>
              <span className="rounded-full bg-[#0b1f3b] px-3 py-1 text-xs font-semibold text-white">{item.value}</span>
            </div>
            <p className="text-sm text-gray-500">Manage advanced settings, notifications, and platform governance from here.</p>
          </div>
        ))}
      </div>
    </AdminSectionPage>
  );
}
