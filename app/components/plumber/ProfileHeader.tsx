// import Image from "next/image";
// import { Plumber } from "../find/types";
// import { FaStar, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

// export default function ProfileHeader({ plumber }: { plumber: Plumber }) {
//   return (
//     <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//       <div className="flex flex-col sm:flex-row gap-6">
//         <div className="relative h-32 w-32 rounded-full overflow-hidden">
//           <Image src={plumber.image} alt={plumber.name} fill className="object-cover" />
//         </div>
//         <div className="flex-1">
//           <div className="flex flex-wrap items-center justify-between gap-2">
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-2xl font-bold text-gray-900">{plumber.companyName}</h1>
//                 {plumber.isVerified && <FaCheckCircle className="h-5 w-5 text-[#FFD60A]" />}
//               </div>
//               <div className="flex items-center gap-2 mt-1">
//                 <FaStar className="text-[#FFD60A]" />
//                 <span className="font-semibold">{plumber.rating}</span>
//                 <span className="text-gray-500">({plumber.reviewCount} reviews)</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="flex items-center gap-1 text-gray-600">
//                   <FaMapMarkerAlt className="h-3 w-3" />
//                   {plumber.location}
//                 </span>
//               </div>
//             </div>
//             {plumber.isEmergency && (
//               <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
//                 🚨 24/7 Emergency
//               </span>
//             )}
//           </div>
//           <p className="mt-3 text-gray-700">{plumber.description}</p>
//           <div className="mt-4 flex flex-wrap gap-4 text-sm">
//             <a href={`tel:${plumber.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//               <FaPhone className="h-4 w-4" />
//               {plumber.phone}
//             </a>
//             <a href={`mailto:${plumber.email}`} className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//               <FaEnvelope className="h-4 w-4" />
//               {plumber.email}
//             </a>
//             {plumber.website && (
//               <a href={plumber.website} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//                 <FaGlobe className="h-4 w-4" />
//                 Website
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











// import Image from "next/image";
// import { Plumber } from "@/components/find/types";
// import { FaStar, FaCheckCircle, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaUsers, FaUserTie } from "react-icons/fa";

// export default function ProfileHeader({ plumber }: { plumber: Plumber }) {
//   return (
//     <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//       <div className="flex flex-col sm:flex-row gap-6">
//         <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
//           <Image src={plumber.logo} alt={plumber.companyName} fill className="object-cover" />
//         </div>
//         <div className="flex-1">
//           <div className="flex flex-wrap items-center justify-between gap-2">
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-2xl font-bold text-gray-900">{plumber.companyName}</h1>
//                 {plumber.isVerified && <FaCheckCircle className="h-5 w-5 text-[#FFD60A]" />}
//               </div>
//               <div className="flex items-center gap-2 mt-1 flex-wrap">
//                 <FaStar className="text-[#FFD60A]" />
//                 <span className="font-semibold">{plumber.rating}</span>
//                 <span className="text-gray-500">({plumber.reviewCount} reviews)</span>
//                 <span className="text-gray-400">•</span>
//                 <span className="flex items-center gap-1 text-gray-600">
//                   <FaMapMarkerAlt className="h-3 w-3" /> {plumber.location}
//                 </span>
//               </div>
//             </div>
//             {plumber.isEmergency && (
//               <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
//                 🚨 24/7 Emergency
//               </span>
//             )}
//           </div>
//           <p className="mt-3 text-gray-700">{plumber.description}</p>
//           <div className="mt-4 flex flex-wrap gap-4 text-sm">
//             <div className="flex items-center gap-1 text-gray-500">
//               <FaUserTie className="h-4 w-4" />
//               <span>Owner: {plumber.ownerName}</span>
//             </div>
//             <div className="flex items-center gap-1 text-gray-500">
//               <FaUsers className="h-4 w-4" />
//               <span>{plumber.teamSize} licensed plumbers</span>
//             </div>
//             <a href={`tel:${plumber.phone}`} className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//               <FaPhone className="h-4 w-4" /> {plumber.phone}
//             </a>
//             <a href={`mailto:${plumber.email}`} className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//               <FaEnvelope className="h-4 w-4" /> {plumber.email}
//             </a>
//             {plumber.website && (
//               <a href={plumber.website} target="_blank" className="flex items-center gap-2 text-gray-600 hover:text-[#FFD60A]">
//                 <FaGlobe className="h-4 w-4" /> Website
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








import Image from "next/image";
import { Plumber } from "@/components/find/types";
import {
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

export default function ProfileHeader({ plumber }: { plumber: Plumber }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-200">
      <div className="flex flex-col sm:flex-row gap-6">
        
        {/* Logo */}
        <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border">
          <Image
            src={plumber.logo}
            alt={plumber.companyName}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          
          {/* Top Section */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            
            {/* Name + Rating */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl font-bold text-black">
                  {plumber.companyName}
                </h1>

                {plumber.isVerified && (
                  <FaCheckCircle className="h-5 w-5 text-yellow-500" />
                )}
              </div>

              {/* Rating + Location */}
              <div className="flex items-center gap-3 mt-2 flex-wrap text-black">
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">
                    {plumber.rating}
                  </span>
                  <span className="text-sm">
                    ({plumber.reviewCount} reviews)
                  </span>
                </div>

                <span>•</span>

                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="h-4 w-4" />
                  <span>{plumber.location}</span>
                </div>
              </div>
            </div>

            {/* Emergency Badge */}
            {plumber.isEmergency && (
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                🚨 24/7 Emergency
              </span>
            )}
          </div>

          {/* Description */}
          <p className="mt-4 text-black leading-relaxed">
            {plumber.description}
          </p>

          {/* Info Section */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-black">
            
            <div className="flex items-center gap-2">
              <FaUserTie />
              <span>Owner: {plumber.ownerName}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaUsers />
              <span>{plumber.teamSize} licensed plumbers</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            
            <a
              href={`tel:${plumber.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-black hover:bg-gray-100 transition"
            >
              <FaPhone />
              Call
            </a>

            <a
              href={`mailto:${plumber.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border text-black hover:bg-gray-100 transition"
            >
              <FaEnvelope />
              Email
            </a>

            {plumber.website && (
              <a
                href={plumber.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border text-black hover:bg-gray-100 transition"
              >
                <FaGlobe />
                Website
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}






