import {
  FaBuilding,
  FaChartBar,
  FaCog,
  FaHome,
  FaShieldAlt,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

export type AdminSidebarState = "open" | "icons" | "closed";

export const adminNavSections = [
  {
    label: "Admin",
    items: [
      { label: "Overview", href: "/admin", icon: FaHome },
      { label: "Analytics", href: "/admin/analytics", icon: FaChartBar },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Users", href: "/admin/users", icon: FaUsers },
      { label: "Companies", href: "/admin/companies", icon: FaBuilding },
      { label: "Freelancers", href: "/admin/freelancers", icon: FaUserTie },
    ],
  },
  {
    label: "Configuration",
    items: [
      { label: "Settings", href: "/admin/settings", icon: FaCog },
      { label: "Security", href: "/admin/security", icon: FaShieldAlt },
    ],
  },
];

export const adminQuickLinks = [
  { label: "Users", href: "/admin/users" },
  { label: "Companies", href: "/admin/companies" },
  { label: "Freelancers", href: "/admin/freelancers" },
  { label: "Analytics", href: "/admin/analytics" },
];
