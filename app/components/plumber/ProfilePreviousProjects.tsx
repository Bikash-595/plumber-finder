// "use client";

// import Image from "next/image";
// import { Plumber } from "@/components/find/types";

// interface ProfilePreviousProjectsProps {
//   plumber: Plumber;
// }

// export default function ProfilePreviousProjects({ plumber }: ProfilePreviousProjectsProps) {
//   if (!plumber.projects || plumber.projects.length === 0) {
//     return null;
//   }

//   return (
//     <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold text-gray-900">Previous Projects</h2>
//         <span className="text-sm text-gray-500">{plumber.projects.length} projects</span>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {plumber.projects.map((project, idx) => (
//           <div
//             key={idx}
//             className="group rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md hover:-translate-y-1"
//           >
//             <div className="relative h-48 w-full overflow-hidden bg-gray-100">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 fill
//                 className="object-cover transition group-hover:scale-105 duration-300"
//               />
//               <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
//                 {project.year}
//               </div>
//             </div>
//             <div className="p-4">
//               <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
//               <p className="text-sm text-gray-600 mt-1">Client: {project.client}</p>
//               <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Plumber } from "@/components/find/types";
// import { FaTimes } from "react-icons/fa";

// interface ProfilePreviousProjectsProps {
//   plumber: Plumber;
// }

// export default function ProfilePreviousProjects({ plumber }: ProfilePreviousProjectsProps) {
//   const [selectedProject, setSelectedProject] = useState<typeof plumber.projects[0] | null>(null);

//   if (!plumber.projects || plumber.projects.length === 0) {
//     return null;
//   }

//   return (
//     <>
//       <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-900">Previous Projects</h2>
//           <span className="text-sm text-gray-500">{plumber.projects.length} projects</span>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {plumber.projects.map((project, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedProject(project)}
//               className="group rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md hover:-translate-y-1 text-left w-full cursor-pointer"
//             >
//               <div className="relative h-48 w-full overflow-hidden bg-gray-100">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition group-hover:scale-105 duration-300"
//                 />
//                 <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
//                   {project.year}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-gray-900 text-lg">{project.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">Client: {project.client}</p>
//                 <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
//             >
//               <FaTimes className="h-5 w-5" />
//             </button>
//             <div className="relative h-80 w-full">
//               <Image
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 fill
//                 className="object-cover rounded-t-2xl"
//               />
//             </div>
//             <div className="p-6">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
//                 <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
//                   {selectedProject.year}
//                 </span>
//               </div>
//               <p className="mt-2 text-gray-600">
//                 <span className="font-semibold">Client:</span> {selectedProject.client}
//               </p>
//               <p className="mt-4 text-gray-700 leading-relaxed">{selectedProject.description}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }














// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Plumber } from "@/components/find/types";
// import { FaTimes, FaStar, FaCalendarAlt, FaDollarSign, FaClock } from "react-icons/fa";
// import StarRating from "@/components/ui/StarRating"; // reuse your star rating component

// interface ProfilePreviousProjectsProps {
//   plumber: Plumber;
// }

// export default function ProfilePreviousProjects({ plumber }: ProfilePreviousProjectsProps) {
//   const [selectedProject, setSelectedProject] = useState<typeof plumber.projects[0] | null>(null);

//   if (!plumber.projects || plumber.projects.length === 0) {
//     return null;
//   }

//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
//   };

//   return (
//     <>
//       <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-900">Previous Projects</h2>
//           <span className="text-sm text-gray-500">{plumber.projects.length} projects</span>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {plumber.projects.map((project, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedProject(project)}
//               className="group rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md hover:-translate-y-1 text-left w-full cursor-pointer"
//             >
//               <div className="relative h-48 w-full overflow-hidden bg-gray-100">
//                 <Image
//                   src={project.image}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition group-hover:scale-105 duration-300"
//                 />
//                 <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
//                   {project.year}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{project.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">Client: {project.client}</p>
//                 <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
//                 {project.clientRating && (
//                   <div className="mt-2 flex items-center gap-1">
//                     <StarRating rating={project.clientRating} size={12} />
//                     <span className="text-xs text-gray-500">({project.clientRating})</span>
//                   </div>
//                 )}
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition"
//             >
//               <FaTimes className="h-5 w-5" />
//             </button>
//             <div className="relative h-80 w-full">
//               <Image
//                 src={selectedProject.image}
//                 alt={selectedProject.title}
//                 fill
//                 className="object-cover rounded-t-2xl"
//               />
//             </div>
//             <div className="p-6">
//               <div className="flex flex-wrap justify-between items-start gap-2">
//                 <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
//                 <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
//                   {selectedProject.year}
//                 </span>
//               </div>
//               <p className="mt-2 text-gray-600">
//                 <span className="font-semibold">Client:</span> {selectedProject.client}
//               </p>
//               <p className="mt-4 text-gray-700 leading-relaxed">{selectedProject.description}</p>

//               {/* Additional details grid */}
//               <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
//                 {selectedProject.clientRating && (
//                   <div className="flex items-center gap-2">
//                     <FaStar className="h-5 w-5 text-[#FFD60A]" />
//                     <div>
//                       <div className="text-sm text-gray-500">Client Rating</div>
//                       <div className="flex items-center gap-1">
//                         <StarRating rating={selectedProject.clientRating} size={14} />
//                         <span className="text-sm font-medium">{selectedProject.clientRating}</span>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 {selectedProject.durationDays && (
//                   <div className="flex items-center gap-2">
//                     <FaCalendarAlt className="h-5 w-5 text-[#FFD60A]" />
//                     <div>
//                       <div className="text-sm text-gray-500">Duration</div>
//                       <div className="font-medium">{selectedProject.durationDays} days</div>
//                     </div>
//                   </div>
//                 )}
//                 {selectedProject.projectCost && (
//                   <div className="flex items-center gap-2">
//                     <FaDollarSign className="h-5 w-5 text-[#FFD60A]" />
//                     <div>
//                       <div className="text-sm text-gray-500">Project Cost</div>
//                       <div className="font-medium">{formatCurrency(selectedProject.projectCost)}</div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Client review */}
//               {selectedProject.clientReview && (
//                 <div className="mt-4 rounded-lg bg-gray-50 p-4 border border-gray-100">
//                   <p className="text-sm text-gray-500 italic">“{selectedProject.clientReview}”</p>
//                   <p className="mt-2 text-xs text-gray-400">— {selectedProject.client}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }













"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plumber } from "@/components/find/types";
import { FaTimes, FaStar, FaCalendarAlt, FaDollarSign, FaQuoteLeft } from "react-icons/fa";
import StarRating from "@/components/ui/StarRating";

interface ProfilePreviousProjectsProps {
  plumber: Plumber;
}

export default function ProfilePreviousProjects({ plumber }: ProfilePreviousProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<typeof plumber.projects[0] | null>(null);

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  if (!plumber.projects || plumber.projects.length === 0) {
    return null;
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <>
      <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Previous Projects</h2>
          <span className="text-sm text-gray-500">{plumber.projects.length} projects</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {plumber.projects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProject(project)}
              className="group rounded-xl border border-gray-200 overflow-hidden bg-white transition hover:shadow-md hover:-translate-y-1 text-left w-full cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition group-hover:scale-105 duration-300"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400">
                    No image
                  </div>
                )}
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Client: {project.client}</p>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  {project.clientRating && (
                    <div className="flex items-center gap-1">
                      <StarRating rating={project.clientRating} size={12} />
                      <span className="text-xs text-gray-500">({project.clientRating})</span>
                    </div>
                  )}
                  {project.projectCost && (
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <FaDollarSign className="h-3 w-3" />
                      {formatCurrency(project.projectCost)}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close modal"
            >
              <FaTimes className="h-5 w-5" />
            </button>
            <div className="relative h-80 w-full">
              {selectedProject.image ? (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-200 text-gray-400 rounded-t-2xl">
                  No image available
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  {selectedProject.year}
                </span>
              </div>
              <p className="mt-2 text-gray-600">
                <span className="font-semibold">Client:</span> {selectedProject.client}
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">{selectedProject.description}</p>

              {/* Additional details grid */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                {selectedProject.clientRating && (
                  <div className="flex items-center gap-2">
                    <FaStar className="h-5 w-5 text-[#FFD60A]" />
                    <div>
                      <div className="text-sm text-gray-500">Client Rating</div>
                      <div className="flex items-center gap-1">
                        <StarRating rating={selectedProject.clientRating} size={14} />
                        <span className="text-sm font-medium">{selectedProject.clientRating}</span>
                      </div>
                    </div>
                  </div>
                )}
                {selectedProject.durationDays && (
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="h-5 w-5 text-[#FFD60A]" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-medium">{selectedProject.durationDays} days</div>
                    </div>
                  </div>
                )}
                {selectedProject.projectCost && (
                  <div className="flex items-center gap-2">
                    <FaDollarSign className="h-5 w-5 text-[#FFD60A]" />
                    <div>
                      <div className="text-sm text-gray-500">Project Cost</div>
                      <div className="font-medium">{formatCurrency(selectedProject.projectCost)}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Client review */}
              {selectedProject.clientReview && (
                <div className="mt-4 rounded-lg bg-gray-50 p-4 border border-gray-100">
                  <FaQuoteLeft className="h-4 w-4 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600 italic">“{selectedProject.clientReview}”</p>
                  <p className="mt-2 text-xs text-gray-400">— {selectedProject.client}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
