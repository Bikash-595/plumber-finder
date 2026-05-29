import AdminSectionPage from "@/components/admin-dashboard/AdminSectionPage";

const policies = [
  { label: "Multi-factor auth", status: "Enabled" },
  { label: "Session timeout", status: "30 mins" },
  { label: "Password policy", status: "Strong" },
];

export default function AdminSecurityPage() {
  return (
    <AdminSectionPage
      title="Security Settings"
      description="Review security controls, access policies, and platform protection settings."
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-3">
          {policies.map((policy) => (
            <div key={policy.label} className="rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-500">{policy.label}</p>
              <p className="mt-3 text-xl font-bold text-gray-900">{policy.status}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminSectionPage>
  );
}
