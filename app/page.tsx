// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[color:var(--color-dark-navy)] text-white">
//       <section
//         className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#123260,transparent_45%),radial-gradient(circle_at_top_right,#0f2a4d,transparent_40%),radial-gradient(circle_at_bottom_left,#0f2a4d,transparent_35%)]"
//         style={{
//           backgroundImage:
//             "url('/Plumber%20working%20under%20a%20modern%20sink.png'), radial-gradient(circle at top left, #123260 0%, transparent 45%), radial-gradient(circle at top right, #0f2a4d 0%, transparent 40%), radial-gradient(circle at bottom left, #0f2a4d 0%, transparent 35%)",
//           backgroundSize: "cover, auto, auto, auto",
//           backgroundPosition: "center 30%",
//         }}
//       >
//         <div className="absolute inset-0 bg-[#0b1f3b]/55" aria-hidden />

//         <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24 lg:items-start">
//           <div className="max-w-3xl space-y-4">
//             <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
//               Find top-rated plumbers in your area fast
//             </h1>
//             <p className="text-base text-white/80 sm:text-lg">
//               Compare vetted local plumbers, read verified reviews, and book the right pro with transparent pricing, no phone tag required.
//             </p>
//           </div>

//           <div className="w-full max-w-5xl rounded-2xl bg-white/10 p-4 backdrop-blur shadow-2xl ring-1 ring-white/10">
//             <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
//               <label className="flex flex-[3] items-center gap-3 rounded-full bg-white px-4 py-3 text-[color:var(--color-dark-navy)] shadow-lg">
//                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-primary-blue)]/10 text-[color:var(--color-primary-blue)]">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
//                     <path d="m15.5 15.5 3 3" />
//                     <circle cx="11" cy="11" r="6" />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="What can we help you with?"
//                   className="w-full bg-transparent text-base outline-none placeholder:text-[color:var(--color-dark-navy)]/50"
//                 />
//               </label>
//               <label className="flex w-full items-center gap-3 rounded-full bg-white px-4 py-3 text-[color:var(--color-dark-navy)] shadow-lg lg:flex-[1.1] lg:w-auto">
//                 <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--color-alert-orange)]/10 text-[color:var(--color-alert-orange)]">
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
//                     <path d="M12 21s-7-5.373-7-10A7 7 0 0 1 19 11c0 4.627-7 10-7 10Z" />
//                     <circle cx="12" cy="11" r="2.5" />
//                   </svg>
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="Zip code"
//                   className="w-full bg-transparent text-base outline-none placeholder:text-[color:var(--color-dark-navy)]/50"
//                 />
//               </label>
//               <button className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-alert-orange)] px-6 py-3 text-base font-semibold text-white shadow-xl transition hover:brightness-110 lg:flex-[0.9]">
//                 Get Quotes
//               </button>
//             </div>
//             <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/70">
//               <span className="rounded-full bg-white/10 px-3 py-1">Fast Response</span>
//               <span className="rounded-full bg-white/10 px-3 py-1">Verified Reviews</span>
//               <span className="rounded-full bg-white/10 px-3 py-1">No Hidden Fees</span>
//             </div>
//           </div>

//           <div className="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
//             {["Emergency Repair", "Leak Detection", "Water Heater", "Drain Cleaning", "Pipe Install", "Bathroom Remodel"].map((chip) => (
//               <span
//                 key={chip}
//                 className="rounded-full border border-white/15 px-4 py-2 backdrop-blur transition hover:border-white/40 hover:text-white"
//               >
//                 {chip}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

























"use client";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import { plumbers } from "@/data/plumbers";
import SearchHero from "@/components/find/SearchHero";
import PlumberCardGrid from "@/components/find/PlumberCardGrid";
import PlumberCardList from "@/components/find/PlumberCardList";
import ResultsHeader from "@/components/find/ResultsHeader";
import Pagination from "@/components/find/Pagination";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter plumbers based on search term
  const filteredPlumbers = plumbers.filter((plumber) =>
    plumber.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plumber.services.some((s) => s.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredPlumbers.length / itemsPerPage);
  const paginatedPlumbers = filteredPlumbers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-white font-sans">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-r from-[#FFD60A]/5 to-[#B1A606]/5 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl font-heading">
              Find the Best <span className="text-[#FFD60A]">Plumbers</span> Near You
            </h1>
            <p className="mt-3 text-gray-600">
              Compare verified local plumbers, read reviews, and book with confidence.
            </p>
            <div className="mt-8">
              <input
                type="text"
                placeholder="Search by company or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md rounded-full border border-gray-300 bg-white py-3 px-5 text-gray-900 placeholder-gray-400 focus:border-[#FFD60A] focus:ring-1 focus:ring-[#FFD60A]"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span>🔥 Emergency available</span>
              <span>✓ Verified pros</span>
              <span>💰 Upfront pricing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ResultsHeader
          totalResults={filteredPlumbers.length}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {paginatedPlumbers.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-gray-500">No plumbers found. Try adjusting your search.</p>
          </div>
        ) : viewMode === "grid" ? (
          <PlumberCardGrid plumbers={paginatedPlumbers} />
        ) : (
          <PlumberCardList plumbers={paginatedPlumbers} />
        )}

        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>
    </main>
  );
}
