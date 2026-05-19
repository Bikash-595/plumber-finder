import {
  FaAddressBook,
  FaBell,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaChartLine,
  FaCog,
  FaCommentDots,
  FaCreditCard,
  FaFileInvoiceDollar,
  FaHome,
  FaMapMarkedAlt,
  FaPlusCircle,
  FaStar,
  FaTools,
  FaUserCog,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export type CompanySidebarState = "open" | "icons" | "closed";

export type CompanyNavItem = {
  label: string;
  href: string;
  icon: IconType;
};

export const companyNavSections: { label: string; items: CompanyNavItem[] }[] = [
  {
    label: "Command Center",
    items: [
      { label: "Dashboard", href: "/company-dashboard", icon: FaHome },
      { label: "Analytics", href: "/company-dashboard/analytics", icon: FaChartLine },
      { label: "Notifications", href: "/company-dashboard/notifications", icon: FaBell },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Leads", href: "/company-dashboard/leads", icon: FaAddressBook },
      { label: "Jobs", href: "/company-dashboard/jobs", icon: FaBriefcase },
      { label: "Schedule", href: "/company-dashboard/schedule", icon: FaCalendarAlt },
      { label: "Messages", href: "/company-dashboard/messages", icon: FaCommentDots },
      { label: "Customers", href: "/company-dashboard/customers", icon: FaUsers },
    ],
  },
  {
    label: "Business Profile",
    items: [
      { label: "Add Company", href: "/company-dashboard/add-company", icon: FaPlusCircle },
      { label: "Company List", href: "/company-dashboard/company-list", icon: FaBuilding },
      { label: "Company Profile", href: "/company-dashboard/profile", icon: FaTools },
      { label: "Service Areas", href: "/company-dashboard/service-areas", icon: FaMapMarkedAlt },
      { label: "Services & Pricing", href: "/company-dashboard/services", icon: FaFileInvoiceDollar },
      { label: "Reviews", href: "/company-dashboard/reviews", icon: FaStar },
      { label: "Team", href: "/company-dashboard/team", icon: FaUserCog },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Billing", href: "/company-dashboard/billing", icon: FaCreditCard },
      { label: "Settings", href: "/company-dashboard/settings", icon: FaCog },
    ],
  },
];
