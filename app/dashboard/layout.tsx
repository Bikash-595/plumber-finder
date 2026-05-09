// app/dashboard/layout.tsx
"use client";

import { ReactNode, useState } from "react";
import DashboardSidebar, {
  type DashboardSidebarState,
} from "@/components/dashboard/DashboardSidebar";

const nextSidebarState = (state: DashboardSidebarState): DashboardSidebarState => {
  if (state === "open") return "icons";
  if (state === "icons") return "closed";
  return "open";
};

const getDesktopSidebarWidth = (state: DashboardSidebarState) => {
  if (state === "open") return "lg:w-64";
  return "lg:w-14";
};

const getMobileSidebarWidth = (state: DashboardSidebarState) => {
  if (state === "open") return "w-64 shadow-lg";
  return "w-14";
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [mobileSidebarState, setMobileSidebarState] =
    useState<DashboardSidebarState>("closed");
  const [desktopSidebarState, setDesktopSidebarState] =
    useState<DashboardSidebarState>("open");

  const mobileSidebar = (
    <DashboardSidebar
      sidebarState={mobileSidebarState}
      onLinkClick={() => setMobileSidebarState("closed")}
      onToggle={() => setMobileSidebarState(nextSidebarState)}
    />
  );

  return (
    <div className="flex min-h-[calc(100vh-theme(spacing.24))]">
      {/* Desktop Sidebar */}
      {desktopSidebarState === "closed" ? (
        <div className="hidden lg:block">
          <DashboardSidebar
            sidebarState={desktopSidebarState}
            onToggle={() => setDesktopSidebarState(nextSidebarState)}
          />
        </div>
      ) : (
        <div
          className={`hidden flex-shrink-0 transition-[width] duration-300 ease-in-out lg:block ${getDesktopSidebarWidth(
            desktopSidebarState
          )}`}
        >
          <div className="h-full overflow-hidden">
            <DashboardSidebar
              sidebarState={desktopSidebarState}
              onToggle={() => setDesktopSidebarState(nextSidebarState)}
            />
          </div>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarState === "open" && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileSidebarState("closed")}
        />
      )}

      {/* Mobile Sidebar Panel */}
      {mobileSidebarState === "closed" && (
        <div className="lg:hidden">{mobileSidebar}</div>
      )}

      {mobileSidebarState !== "closed" && (
        <div
          className={`fixed inset-y-24 left-0 z-50 overflow-hidden transition-[width] duration-300 ease-in-out lg:hidden ${getMobileSidebarWidth(
            mobileSidebarState
          )}`}
        >
          {mobileSidebar}
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
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
























// "use client";

// import { ReactNode, useState } from "react";
// import DashboardSidebar, {
//   type DashboardSidebarState,
// } from "@/components/dashboard/DashboardSidebar";

// const nextSidebarState = (
//   state: DashboardSidebarState
// ): DashboardSidebarState => {
//   if (state === "open") return "icons";
//   if (state === "icons") return "closed";
//   return "open";
// };

// const getDesktopSidebarWidth = (state: DashboardSidebarState) => {
//   if (state === "open") return "lg:w-64";
//   return "lg:w-14";
// };

// const getMobileSidebarWidth = (state: DashboardSidebarState) => {
//   if (state === "open") return "w-64 shadow-lg";
//   return "w-14";
// };

// export default function DashboardLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   const [mobileSidebarState, setMobileSidebarState] =
//     useState<DashboardSidebarState>("closed");

//   const [desktopSidebarState, setDesktopSidebarState] =
//     useState<DashboardSidebarState>("open");

//   const mobileSidebar = (
//     <DashboardSidebar
//       sidebarState={mobileSidebarState}
//       onLinkClick={() => setMobileSidebarState("closed")}
//       onToggle={() =>
//         setMobileSidebarState((prev) => nextSidebarState(prev))
//       }
//     />
//   );

//   return (
//     <div className="flex min-h-[calc(100vh-theme(spacing.24))]">
//       {/* Desktop Sidebar */}
//       {desktopSidebarState === "closed" ? (
//         <div className="hidden lg:block">
//           <DashboardSidebar
//             sidebarState={desktopSidebarState}
//             onToggle={() =>
//               setDesktopSidebarState((prev) =>
//                 nextSidebarState(prev)
//               )
//             }
//           />
//         </div>
//       ) : (
//         <div
//           className={`hidden flex-shrink-0 transition-[width] duration-300 ease-in-out lg:block ${getDesktopSidebarWidth(
//             desktopSidebarState
//           )}`}
//         >
//           <div className="h-full overflow-hidden">
//             <DashboardSidebar
//               sidebarState={desktopSidebarState}
//               onToggle={() =>
//                 setDesktopSidebarState((prev) =>
//                   nextSidebarState(prev)
//                 )
//               }
//             />
//           </div>
//         </div>
//       )}

//       {/* Mobile Sidebar Overlay */}
//       {mobileSidebarState === "open" && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 lg:hidden"
//           onClick={() => setMobileSidebarState("closed")}
//         />
//       )}

//       {/* Mobile Sidebar Panel */}
//       {mobileSidebarState === "closed" && (
//         <div className="lg:hidden">{mobileSidebar}</div>
//       )}

//       {mobileSidebarState !== "closed" && (
//         <div
//           className={`fixed inset-y-24 left-0 z-50 overflow-hidden transition-[width] duration-300 ease-in-out lg:hidden ${getMobileSidebarWidth(
//             mobileSidebarState
//           )}`}
//         >
//           {mobileSidebar}
//         </div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <main className="flex-1 overflow-y-auto bg-gray-50">
//           <div className="py-8 px-4 sm:px-6 lg:px-8">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }