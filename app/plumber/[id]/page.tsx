// "use client";

// import { use } from "react";
// import { notFound } from "next/navigation";
// import { plumbers } from "@/data/plumbers";
// import ProfileHeader from "@/components/plumber/ProfileHeader";
// import ProfileStats from "@/components/plumber/ProfileStats";
// import ProfileServices from "@/components/plumber/ProfileServices";
// import ProfileReviews from "@/components/plumber/ProfileReviews";
// import ProfileMap from "@/components/plumber/ProfileMap";
// import BookingWidget from "@/components/plumber/BookingWidget";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta",
// });

// export default function PlumberProfilePage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);
//   const plumber = plumbers.find((p) => p.id === id);
//   if (!plumber) return notFound();

//   return (
//     <main
//       className={`${inter.variable} ${plusJakarta.variable} min-h-screen bg-gray-50 font-sans`}
//       style={{ fontFamily: "var(--font-inter)" }}
//     >
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <ProfileHeader plumber={plumber} />
//             <ProfileStats plumber={plumber} />
//             <ProfileServices plumber={plumber} />
//             <ProfileReviews />
//             <ProfileMap plumber={plumber} />
//           </div>
//           <div className="lg:col-span-1">
//             <BookingWidget plumber={plumber} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



// "use client";

// import { use } from "react";
// import { notFound } from "next/navigation";
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// import { plumbers } from "@/data/plumbers";
// import ProfileHeader from "@/components/plumber/ProfileHeader";
// import ProfileStats from "@/components/plumber/ProfileStats";
// import ProfileServices from "@/components/plumber/ProfileServices";
// import ProfileAdditionalInfo from "@/components/plumber/ProfileAdditionalInfo";
// import ProfileReviews from "@/components/plumber/ProfileReviews";
// import ProfileMap from "@/components/plumber/ProfileMap";
// import BookingWidget from "@/components/plumber/BookingWidget";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta",
// });

// export default function PlumberProfilePage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);
//   const plumber = plumbers.find((p) => p.id === id);
//   if (!plumber) return notFound();

//   return (
//     <main
//       className={`${inter.variable} ${plusJakarta.variable} min-h-screen bg-gray-50 font-sans`}
//       style={{ fontFamily: "var(--font-inter)" }}
//     >
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <ProfileHeader plumber={plumber} />
//             <ProfileStats plumber={plumber} />
//             <ProfileServices plumber={plumber} />
//             <ProfileAdditionalInfo plumber={plumber} />
//             <ProfileReviews plumber={plumber} />
//             <ProfileMap plumber={plumber} />
//           </div>
//           <div className="lg:col-span-1">
//             <BookingWidget plumber={plumber} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }













// "use client";

// import { use } from "react";
// import { notFound } from "next/navigation";
// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// import { plumbers } from "@/data/plumbers";
// import ProfileHeader from "@/components/plumber/ProfileHeader";
// import ProfileStats from "@/components/plumber/ProfileStats";
// import ProfileServices from "@/components/plumber/ProfileServices";
// import ProfileAdditionalInfo from "@/components/plumber/ProfileAdditionalInfo";
// import ProfileReviews from "@/components/plumber/ProfileReviews";
// import ProfileMap from "@/components/plumber/ProfileMap";
// import BookingWidget from "@/components/plumber/BookingWidget";
// import MediaGallery from "@/components/plumber/MediaGallery"; // 👈 import

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta",
// });

// export default function PlumberProfilePage({ params }: { params: Promise<{ id: string }> }) {
//   const { id } = use(params);
//   const plumber = plumbers.find((p) => p.id === id);
//   if (!plumber) return notFound();

//   return (
//     <main
//       className={`${inter.variable} ${plusJakarta.variable} min-h-screen bg-gray-50 font-sans`}
//       style={{ fontFamily: "var(--font-inter)" }}
//     >
//       <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-6">
//             <ProfileHeader plumber={plumber} />
//               {/* 👇 Add MediaGallery if media exists */}
//             {plumber.media && (plumber.media.images.length > 0 || plumber.media.videos.length > 0) && (
//               <MediaGallery images={plumber.media.images} videos={plumber.media.videos} />
//             )}
//             <ProfileStats plumber={plumber} />
//             <ProfileServices plumber={plumber} />
//             <ProfileAdditionalInfo plumber={plumber} />
//             <ProfileReviews plumber={plumber} />
//             <ProfileMap plumber={plumber} />
//           </div>
//           <div className="lg:col-span-1">
//             <BookingWidget plumber={plumber} />
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }











"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { plumbers } from "@/data/plumbers";
import ProfileHeader from "@/components/plumber/ProfileHeader";
import ProfileStats from "@/components/plumber/ProfileStats";
import ProfileServices from "@/components/plumber/ProfileServices";
import ProfileAdditionalInfo from "@/components/plumber/ProfileAdditionalInfo";
import ProfileReviews from "@/components/plumber/ProfileReviews";
import ProfileMap from "@/components/plumber/ProfileMap";
import BookingWidget from "@/components/plumber/BookingWidget";
import MediaGallery from "@/components/plumber/MediaGallery";
import ProfilePreviousProjects from "@/components/plumber/ProfilePreviousProjects";
import DiscountCard from "@/components/plumber/DiscountCard";
import ProfileBlogSection from "@/components/plumber/ProfileBlogSection";
import ProfileFaq from "@/components/plumber/ProfileFaq";

export default function PlumberProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const plumber = plumbers.find((p) => p.id === id);
  if (!plumber) return notFound();

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ProfileHeader plumber={plumber} />
            {plumber.media && (plumber.media.images.length > 0 || plumber.media.videos.length > 0) && (
              <MediaGallery images={plumber.media.images} videos={plumber.media.videos} />
            )}
            <ProfileStats plumber={plumber} />
            <ProfileServices plumber={plumber} />
            <ProfileAdditionalInfo plumber={plumber} />
            {plumber.projects && plumber.projects.length > 0 && <ProfilePreviousProjects plumber={plumber} />}
            <ProfileBlogSection plumber={plumber} />
            <ProfileFaq plumber={plumber} />
            <ProfileReviews />
            <ProfileMap plumber={plumber} />
          </div>
          <div className="lg:col-span-1">
            <DiscountCard plumber={plumber} />
             <BookingWidget plumber={plumber} />
          </div>
        </div>
      </div>
    </main>
  );
}
