// // app/dashboard/layout.tsx
// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
// import { readStoredUser } from "@/components/utils/auth";

// export default function DashboardLayout({ children }: { children: ReactNode }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const user = readStoredUser();
//     if (!user) {
//       router.push("/login");
//     } 
//     else {
//       setLoading(false);
//     }
//   }, [router]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
//         <p className="text-gray-500">Loading dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
//       <div className="flex flex-col gap-6 lg:flex-row">
//         <DashboardSidebar />
//         <main className="flex-1">{children}</main>
//       </div>
//     </div>
//   );
// }










// app/dashboard/layout.tsx
"use client";

import { ReactNode, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.24))]">
      {/* Desktop Sidebar - Only visible on lg screens */}
      <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
        <div className="h-full overflow-y-auto">
          <DashboardSidebar />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar Panel */}
      {isMobile && (
        <div
          className={`fixed inset-y-24 left-0 z-50 w-64 transform transition-all duration-300 ease-in-out lg:hidden ${
            sidebarOpen ? "translate-x-0 shadow-lg" : "-translate-x-full"
          }`}
        >
          <DashboardSidebar onLinkClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Header with Toggle */}
        <div className="border-b border-gray-200 bg-white shadow-sm sticky top-24 z-30">
        </div>

        {/* Page Content - Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="py-8 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
















// // components/dashboard/DashboardWrapper.tsx
// "use client";

// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import DashboardSidebar from "../components/dashboard/DashboardSidebar";

// export default function DashboardWrapper({ children }: any) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       {/* Mobile button */}
//       <div className="mb-4 lg:hidden">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="flex items-center gap-2 border px-4 py-2 rounded"
//         >
//           <FaBars /> Menu
//         </button>
//       </div>

//       <div className="flex flex-col gap-6 lg:flex-row">
//         <div
//           className={`${
//             sidebarOpen ? "block" : "hidden"
//           } lg:block lg:w-64`}
//         >
//           <DashboardSidebar onLinkClick={() => setSidebarOpen(false)} />
//         </div>

//         <main className="flex-1">{children}</main>
//       </div>

//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </>
//   );
// }