// import { Plumber } from "../find/types";
// import { FaBriefcase, FaClock, FaShieldAlt, FaMapMarkerAlt } from "react-icons/fa";

// export default function ProfileStats({ plumber }: { plumber: Plumber }) {
//   return (
//     <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
//       <h2 className="text-xl font-bold text-gray-900 mb-4">Company Details</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         <div className="text-center">
//           <FaBriefcase className="mx-auto h-6 w-6 text-[#FFD60A]" />
//           <div className="mt-1 text-sm text-gray-500">Experience</div>
//           <div className="font-semibold text-gray-900">{plumber.yearsInBusiness}+ years</div>
//         </div>
//         <div className="text-center">
//           <FaClock className="mx-auto h-6 w-6 text-[#FFD60A]" />
//           <div className="mt-1 text-sm text-gray-500">Response Time</div>
//           <div className="font-semibold text-gray-900">{plumber.responseTime}</div>
//         </div>
//         <div className="text-center">
//           <FaShieldAlt className="mx-auto h-6 w-6 text-[#FFD60A]" />
//           <div className="mt-1 text-sm text-gray-500">License #</div>
//           <div className="font-semibold text-gray-900">{plumber.licenseNumber || "Not provided"}</div>
//         </div>
//         <div className="text-center">
//           <FaMapMarkerAlt className="mx-auto h-6 w-6 text-[#FFD60A]" />
//           <div className="mt-1 text-sm text-gray-500">Service Areas</div>
//           <div className="font-semibold text-gray-900">{plumber.serviceAreas.length} cities</div>
//         </div>
//       </div>
//     </div>
//   );
// }















import { Plumber } from "@/components/find/types";
import { FaBriefcase, FaClock, FaShieldAlt, FaMapMarkerAlt, FaUsers, FaCalendarAlt } from "react-icons/fa";

export default function ProfileStats({ plumber }: { plumber: Plumber }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Company at a Glance</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="text-center">
          <FaCalendarAlt className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">Founded</div>
          <div className="font-semibold text-gray-900">{plumber.established}</div>
        </div>
        <div className="text-center">
          <FaBriefcase className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">Experience</div>
          <div className="font-semibold text-gray-900">{plumber.yearsInBusiness}+ years</div>
        </div>
        <div className="text-center">
          <FaUsers className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">Team Size</div>
          <div className="font-semibold text-gray-900">{plumber.teamSize} plumbers</div>
        </div>
        <div className="text-center">
          <FaClock className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">Response Time</div>
          <div className="font-semibold text-gray-900">{plumber.responseTime}</div>
        </div>
        <div className="text-center">
          <FaShieldAlt className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">License #</div>
          <div className="font-semibold text-gray-900">{plumber.licenseNumber || "—"}</div>
        </div>
        <div className="text-center">
          <FaMapMarkerAlt className="mx-auto h-6 w-6 text-[#FFD60A]" />
          <div className="mt-1 text-xs text-gray-500">Service Areas</div>
          <div className="font-semibold text-gray-900">{plumber.serviceAreas.length} cities</div>
        </div>
      </div>
    </div>
  );
}