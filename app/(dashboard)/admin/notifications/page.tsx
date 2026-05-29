import AdminSectionPage from "@/components/admin-dashboard/AdminSectionPage";

const events = [
  { title: "New user signup", detail: "3 new users registered today" },
  { title: "Company verification", detail: "2 companies pending review" },
  { title: "Freelancer report", detail: "1 report needs attention" },
];

export default function AdminNotificationsPage() {
  return (
    <AdminSectionPage
      title="Notifications"
      description="Monitor system alerts and admin notifications across users, companies, and freelancers."
    >
      <div className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        {events.map((event) => (
          <div key={event.title} className="rounded-2xl bg-gray-50 p-4">
            <p className="text-base font-semibold text-gray-900">{event.title}</p>
            <p className="mt-2 text-sm text-gray-500">{event.detail}</p>
          </div>
        ))}
      </div>
    </AdminSectionPage>
  );
}
