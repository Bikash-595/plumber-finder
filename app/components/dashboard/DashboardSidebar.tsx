// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   FaChartLine,
//   FaHeart,
//   FaBell,
//   FaUserCog,
//   FaSignOutAlt,
//   FaBuilding,
//   FaTachometerAlt,
//   FaQuestionCircle,
//   FaShieldAlt,
// } from "react-icons/fa";
// import { clearStoredUser, getInitials, readStoredUser, type AppUser } from "../utils/auth";
// import { useEffect, useState } from "react";

// const navItems = [
//   { label: "Dashboard", href: "/dashboard", icon: FaTachometerAlt },
//   { label: "Compare Companies", href: "/dashboard/compare", icon: FaBuilding },
//   { label: "Saved Deals", href: "/saved", icon: FaHeart },
//   { label: "Notifications", href: "/notifications", icon: FaBell },
//   { label: "Profile Settings", href: "/dashboard/profile", icon: FaUserCog },
//   { label: "Help & Support", href: "/dashboard/support", icon: FaQuestionCircle },
//   { label: "Privacy & Security", href: "/dashboard/security", icon: FaShieldAlt },
// ];

// export default function DashboardSidebar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [user, setUser] = useState<AppUser | null>(null);

//   useEffect(() => {
//     setUser(readStoredUser());
//   }, []);

//   const handleLogout = () => {
//     clearStoredUser();
//     router.push("/");
//   };

//   return (
//     <aside className="sticky top-28 hidden h-[calc(100vh-7rem)] w-64 flex-shrink-0 overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm lg:block">
//       {/* User Profile Summary */}
//       <div className="mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
//         {user?.avatarUrl ? (
//           <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
//         ) : (
//           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD60A] text-sm font-bold text-white">
//             {getInitials(user?.name || "User")}
//           </div>
//         )}
//         <div className="overflow-hidden">
//           <p className="truncate font-semibold text-gray-900">{user?.name || "Guest"}</p>
//           <p className="truncate text-xs text-gray-500">{user?.email || ""}</p>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="space-y-1">
//         {navItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
//                 isActive
//                   ? "bg-[#FFD60A] text-gray-900"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               <Icon className="h-4 w-4" />
//               {item.label}
//             </Link>
//           );
//         })}
//         <button
//           onClick={handleLogout}
//           className="mt-4 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
//         >
//           <FaSignOutAlt className="h-4 w-4" />
//           Logout
//         </button>
//       </nav>
//     </aside>
//   );
// }









"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaHeart,
  FaBell,
  FaSignOutAlt,
  FaBuilding,
  FaTachometerAlt,
  FaQuestionCircle,
  FaShieldAlt,
  FaChevronRight,
  FaFileInvoice,
  FaHistory,
  FaUser,
  FaWallet,
  FaCog,
  FaChartBar,
  FaHome,
  FaSearch,
  FaStar,
} from "react-icons/fa";
import { clearStoredUser, getInitials, readStoredUser, type AppUser } from "../utils/auth";
import { useEffect, useState } from "react";

const navSections = [
  {
    label: "Dashboard",
    items: [
      { label: "Home", href: "/dashboard", icon: FaHome },
      { label: "Overview", href: "/dashboard/overview", icon: FaChartBar },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Find Plumbers", href: "/find", icon: FaSearch },
      { label: "Compare Companies", href: "/dashboard/compare", icon: FaBuilding },
      { label: "Saved Deals", href: "/dashboard/saved", icon: FaHeart },
      { label: "Booking History", href: "/dashboard/bookings", icon: FaHistory },
    ],
  },
  {
    label: "Account",
    items: [
      { label: "Profile", href: "/dashboard/profile", icon: FaUser },
      { label: "Settings", href: "/dashboard/settings", icon: FaCog },
      { label: "Wallet & Payments", href: "/dashboard/wallet", icon: FaWallet },
      { label: "Invoices", href: "/dashboard/invoices", icon: FaFileInvoice },
    ],
  },
  {
    label: "Support",
    items: [
      { label: "Notifications", href: "/dashboard/notifications", icon: FaBell },
      { label: "Help & Support", href: "/dashboard/support", icon: FaQuestionCircle },
      { label: "Security", href: "/dashboard/security", icon: FaShieldAlt },
    ],
  },
];

interface DashboardSidebarProps {
  onLinkClick?: () => void;
}

export default function DashboardSidebar({ onLinkClick }: DashboardSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    setUser(readStoredUser());
  }, []);

  const handleLogout = () => {
    clearStoredUser();
    router.push("/");
    onLinkClick?.();
  };

  return (
    <aside className="h-full w-64 flex-shrink-0 overflow-y-auto bg-white border-r border-gray-200 shadow-sm">
      {/* Brand Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-[#FFD60A]/5 to-[#FFD60A]/10 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD60A] to-[#B1A606] text-white shadow-lg">
            <span className="text-xl font-bold">🔧</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">Plumber Pro</span>
            <span className="text-sm text-gray-600">Professional Dashboard</span>
          </div>
        </div>
      </div>

      {/* User Profile Card */}
      <div className="border-b border-gray-200 bg-gray-50/50 px-6 py-4">
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-[#FFD60A]/20 shadow-md"
            />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD60A] to-[#B1A606] text-lg font-bold text-white shadow-md">
              {getInitials(user?.name || "User")}
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-base font-semibold text-gray-900">{user?.name || "Guest"}</p>
            <p className="truncate text-sm text-gray-600">{user?.email || "No email"}</p>
            <div className="mt-1 flex items-center gap-1">
              <FaStar className="h-3 w-3 text-[#FFD60A]" />
              <span className="text-xs font-medium text-gray-700">Pro Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">
        <div className="space-y-6">
          {navSections.map((section) => (
            <div key={section.label}>
              <p className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                {section.label}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => onLinkClick?.()}
                      className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#FFD60A] to-[#B1A606] text-white shadow-lg transform scale-[1.02]"
                          : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {isActive && <FaChevronRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Logout Button */}
      <div className="border-t border-gray-200 bg-gray-50/50 px-4 py-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700 hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <FaSignOutAlt className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </div>
        </button>
      </div>
    </aside>
  );
}


















// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import {
//   FaHeart,
//   FaBell,
//   FaUserCog,
//   FaSignOutAlt,
//   FaBuilding,
//   FaTachometerAlt,
//   FaQuestionCircle,
//   FaShieldAlt,
//   FaChevronRight,
//   FaFileInvoice,
//   FaHistory,
//   FaUser,
//   FaWallet,
//   FaCog,
//   FaChartBar,
//   FaHome,
// } from "react-icons/fa";
// import { clearStoredUser, getInitials, readStoredUser, type AppUser } from "../utils/auth";
// import { useEffect, useState } from "react";

// const navSections = [
//   {
//     label: "Main",
//     items: [
//       { label: "Dashboard", href: "/dashboard", icon: FaTachometerAlt },
//       { label: "Overview", href: "/dashboard/overview", icon: FaChartBar },
//     ],
//   },
//   {
//     label: "Search & Bookings",
//     items: [
//       { label: "Find Plumbers", href: "/find", icon: FaBuilding },
//       { label: "Compare Companies", href: "/dashboard/compare", icon: FaBuilding },
//       { label: "Saved Deals", href: "/saved", icon: FaHeart },
//       { label: "Booking History", href: "/dashboard/bookings", icon: FaHistory },
//     ],
//   },
//   {
//     label: "Account",
//     items: [
//       { label: "Profile", href: "/dashboard/profile", icon: FaUser },
//       { label: "Settings", href: "/dashboard/settings", icon: FaCog },
//       { label: "Wallet & Payments", href: "/dashboard/wallet", icon: FaWallet },
//       { label: "Invoices", href: "/dashboard/invoices", icon: FaFileInvoice },
//     ],
//   },
//   {
//     label: "Support & Security",
//     items: [
//       { label: "Notifications", href: "/dashboard/notifications", icon: FaBell },
//       { label: "Help & Support", href: "/dashboard/support", icon: FaQuestionCircle },
//       { label: "Security", href: "/dashboard/security", icon: FaShieldAlt },
//     ],
//   },
// ];

// interface DashboardSidebarProps {
//   onLinkClick?: () => void;
// }

// export default function DashboardSidebar({ onLinkClick }: DashboardSidebarProps) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [user, setUser] = useState<AppUser | null>(null);

//   useEffect(() => {
//     setUser(readStoredUser());
//   }, []);

//   const handleLogout = () => {
//     clearStoredUser();
//     router.push("/");
//     onLinkClick?.();
//   };

//   return (
//     <aside className="sticky top-28 h-[calc(100vh-7rem)] w-64 flex-shrink-0 overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
//       {/* Header with logo */}
//       <div className="border-b border-gray-100 px-5 py-4">
//         <div className="flex items-center gap-2">
//           <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFD60A] to-[#B1A606] text-white shadow-sm">
//             <FaHome className="h-4 w-4" />
//           </div>
//           <div>
//             <p className="text-sm font-bold text-gray-800">Plumber Finder</p>
//             <p className="text-[11px] text-gray-500">Professional Dashboard</p>
//           </div>
//         </div>
//       </div>

//       {/* User profile card */}
//       <div className="border-b border-gray-100 px-5 py-4">
//         <div className="flex items-center gap-3 rounded-xl bg-gray-50/80 p-3 transition hover:bg-gray-100">
//           {user?.avatarUrl ? (
//             <img src={user.avatarUrl} alt={user.name} className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
//           ) : (
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FFD60A] to-[#B1A606] text-sm font-bold text-white shadow-sm">
//               {getInitials(user?.name || "User")}
//             </div>
//           )}
//           <div className="min-w-0 flex-1">
//             <p className="truncate text-sm font-semibold text-gray-800">{user?.name || "Guest"}</p>
//             <p className="truncate text-xs text-gray-500">{user?.email || "No email"}</p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="px-3 py-4">
//         <div className="space-y-5">
//           {navSections.map((section) => (
//             <div key={section.label}>
//               <p className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                 {section.label}
//               </p>
//               <div className="space-y-1">
//                 {section.items.map((item) => {
//                   const Icon = item.icon;
//                   const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
//                   return (
//                     <Link
//                       key={item.href}
//                       href={item.href}
//                       onClick={() => onLinkClick?.()}
//                       className={`group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
//                         isActive
//                           ? "bg-[#FFD60A]/10 text-[#FFD60A] shadow-sm"
//                           : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <Icon className={`h-4 w-4 ${isActive ? "text-[#FFD60A]" : ""}`} />
//                         <span>{item.label}</span>
//                       </div>
//                       {isActive && <FaChevronRight className="h-3 w-3 text-[#FFD60A]" />}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </nav>

//       {/* Logout button */}
//       <div className="border-t border-gray-100 px-3 py-4">
//         <button
//           onClick={handleLogout}
//           className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700"
//         >
//           <div className="flex items-center gap-3">
//             <FaSignOutAlt className="h-4 w-4" />
//             <span>Logout</span>
//           </div>
//         </button>
//       </div>
//     </aside>
//   );
// }