// "use client";

// import { useState } from "react";

// // ─── Icons (all defined) ──────────────────────────────────────────────────────
// const FacebookIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//   </svg>
// );

// const InstagramIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//     <circle cx="12" cy="12" r="4" />
//     <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
//   </svg>
// );

// const XIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636z" />
//   </svg>
// );

// const LinkedInIcon = () => (
//   <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
//     <circle cx="4" cy="4" r="2" />
//   </svg>
// );

// const ChevronDownIcon = () => (
//   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="6 9 12 15 18 9" />
//   </svg>
// );

// const ArrowRightIcon = () => (
//   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//     <line x1="5" y1="12" x2="19" y2="12" />
//     <polyline points="12 5 19 12 12 19" />
//   </svg>
// );

// const WrenchIcon = () => (
//   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//   </svg>
// );

// const StarIcon = ({ filled = true }: { filled?: boolean }) => (
//   <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//   </svg>
// );

// // ─── QR Code Placeholder ──────────────────────────────────────────────────────
// const QRCodePlaceholder = () => (
//   <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-md grid grid-cols-7 grid-rows-7 p-1.5 gap-[1px] flex-shrink-0">
//     {Array.from({ length: 49 }).map((_, i) => {
//       const row = Math.floor(i / 7);
//       const col = i % 7;
//       const inTopLeft = row < 3 && col < 3;
//       const inTopRight = row < 3 && col > 3;
//       const inBottomLeft = row > 3 && col < 3;
//       const isRandom = [3,7,11,14,17,20,22,25,28,31,34,37,40,43,46].includes(i);
//       const filled = inTopLeft || inTopRight || inBottomLeft || isRandom;
//       return <div key={i} className={`${filled ? "bg-[#1a3a5c]" : "bg-transparent"} rounded-[1px]`} />;
//     })}
//   </div>
// );

// // ─── Accordion Item ──────────────────────────────────────────────────────────
// const AccordionItem = ({ label }: { label: string }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b border-gray-200">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-full flex justify-between items-center py-3.5 bg-transparent border-none cursor-pointer font-sora font-bold text-sm text-gray-800 text-left"
//       >
//         {label}
//         <span className={`transition-transform duration-200 text-primary ${open ? 'rotate-180' : 'rotate-0'}`}>
//           <ChevronDownIcon />
//         </span>
//       </button>
//       {open && (
//         <div className="pb-3 pl-1">
//           {["Emergency Plumbers", "Pipe Repair", "Drain Cleaning", "Water Heaters"].map(link => (
//             <a key={link} href="#" className="block text-gray-500 text-sm font-sora py-1 hover:text-primary transition-colors">
//               {link}
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// // ─── Main Footer Component ────────────────────────────────────────────────────
// export default function PlumberFinderFooter() {
//   const [email, setEmail] = useState("");

//   const supportLinks = ["Customer Support", "Report a Plumber", "Refund & Guarantee Policy", "Contractor Settlement Notice"];
//   const listLinks = ["Join PlumberFinder Network", "Run a Local Campaign", "How It Works for Pros", "Sponsor Your Area", "Affiliate Program", "Vendor Code of Conduct"];
//   const companyLinks = ["About PlumberFinder", "Jobs", "Press", "Investor Relations", "Management Team"];

//   return (
//     <footer className="bg-white font-dm-sans">
//       {/* Top Section */}
//       <div className="border-b border-gray-200 py-12 px-5 md:px-10 lg:px-16">
//         <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-between max-w-7xl mx-auto">
//           {/* App promo */}
//           <div className="min-w-[220px] max-w-[300px]">
//             <div className="flex items-center gap-3 mb-3">
//               <div className="bg-primary rounded-xl p-2 text-gray-800">
//                 <WrenchIcon />
//               </div>
//               <div>
//                 <div className="text-primary font-sora font-bold text-xs uppercase tracking-wide">Get the App</div>
//                 <div className="font-sora font-extrabold text-base text-gray-800">PlumberFinder</div>
//               </div>
//             </div>
//             <div className="flex gap-3 items-start mb-4">
//               <QRCodePlaceholder />
//               <div>
//                 <p className="font-sora font-bold text-sm text-gray-800 leading-tight">
//                   Find a plumber in under 60 seconds — guaranteed.
//                 </p>
//                 <p className="text-xs text-gray-500 mt-2 leading-relaxed">
//                   Instant quotes, verified pros, real-time tracking.
//                 </p>
//               </div>
//             </div>
//             <button className="bg-primary hover:bg-secondary text-gray-800 font-sora font-bold text-sm py-2.5 px-5 rounded-lg transition transform hover:-translate-y-0.5 mt-2">
//               Download the App
//             </button>
//             <div className="flex items-center gap-1 mt-3">
//               {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
//               <span className="text-xs text-gray-500 ml-1">50M+ installs</span>
//             </div>
//           </div>

//           <div className="flex-1"></div>

//           {/* Email signup (USA only) */}
//           <div className="min-w-[260px] max-w-[360px]">
//             <h4 className="font-sora font-bold text-sm text-gray-800 mb-1.5">Get the best local deals</h4>
//             <p className="text-xs text-gray-500 mb-3">Plumbing tips, discounts & verified pro alerts — weekly.</p>
//             <div className="flex gap-2 items-center">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary"
//               />
//               <button className="bg-primary hover:bg-secondary text-gray-800 rounded-full w-11 h-11 flex items-center justify-center transition-transform hover:scale-105">
//                 <ArrowRightIcon />
//               </button>
//             </div>
//             <p className="text-[11px] text-gray-400 mt-2 leading-tight">
//               By subscribing, I agree to the{" "}
//               <a href="#" className="text-primary hover:underline">Terms & Conditions</a>{" "}
//               and have read the{" "}
//               <a href="#" className="text-primary hover:underline">Privacy Statement</a>.
//             </p>
//           </div>

//           {/* Social links */}
//           <div className="min-w-[120px]">
//             <h4 className="font-sora font-bold text-sm text-gray-800 mb-3">Follow Us</h4>
//             <div className="flex gap-2.5">
//               <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
//                 <FacebookIcon />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
//                 <InstagramIcon />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
//                 <XIcon />
//               </button>
//               <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
//                 <LinkedInIcon />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Link Grid */}
//       <div className="py-10 px-5 md:px-10 lg:px-16">
//         <div className="flex flex-col md:flex-row gap-8 flex-wrap max-w-7xl mx-auto">
//           <div className="flex-1 min-w-[160px]">
//             <h5 className="font-sora font-extrabold text-xs uppercase tracking-wide text-gray-800 mb-4">Support</h5>
//             {supportLinks.map(link => (
//               <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
//             ))}
//           </div>
//           <div className="flex-1 min-w-[200px]">
//             <h5 className="font-sora font-extrabold text-xs uppercase tracking-wide text-gray-800 mb-4">List on PlumberFinder</h5>
//             {listLinks.map(link => (
//               <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
//             ))}
//           </div>
//           <div className="flex-1 min-w-[160px]">
//             <h5 className="font-sora font-extrabold text-xs uppercase tracking-wide text-gray-800 mb-4">Company</h5>
//             {companyLinks.map(link => (
//               <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
//             ))}
//           </div>
//           <div className="flex-1 min-w-[200px]">
//             <h5 className="font-sora font-extrabold text-xs uppercase tracking-wide text-gray-800 mb-1">Quick Links</h5>
//             <AccordionItem label="Emergency Plumbers" />
//             <AccordionItem label="Service Categories" />
//             <AccordionItem label="Deals & Coupons" />
//             <AccordionItem label="Find by Occasion" />
//           </div>
//         </div>
//       </div>

//       {/* Copyright Bar */}
//       <div className="border-t border-gray-200 py-4 px-5 md:px-10 lg:px-16">
//         <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-400 max-w-7xl mx-auto">
//           <span>© 2026 PlumberFinder, Inc. All Rights Reserved.</span>
//           {["Terms and Conditions", "Privacy Statement", "Do Not Sell My Information", "Accessibility", "Sitemap", "Customer Support", "Licenses"].map((item, i) => (
//             <span key={item} className="flex items-center gap-2">
//               {i > 0 && <span className="text-gray-300">·</span>}
//               <a href="#" className={`${item === "Privacy Statement" ? "text-primary font-semibold" : "text-gray-400"} hover:text-primary transition-colors`}>
//                 {item}
//               </a>
//             </span>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// }
















"use client";

import { useState } from "react";

// ─── Icons (fully defined) ───────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.636z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const StarIcon = ({ filled = true }: { filled?: boolean }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// ─── QR Code Placeholder ─────────────────────────────────────────────────────
const QRCodePlaceholder = () => (
  <div className="w-20 h-20 bg-gray-100 border border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-xs">
    QR
  </div>
);

// ─── Accordion Item ──────────────────────────────────────────────────────────
const AccordionItem = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-gray-800 font-medium text-sm text-left"
      >
        {label}
        <span className={`transition-transform duration-200 text-primary ${open ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDownIcon />
        </span>
      </button>
      {open && (
        <div className="pb-2 pl-2">
          {["Emergency Plumbers", "Pipe Repair", "Drain Cleaning", "Water Heaters"].map(link => (
            <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Footer Component ────────────────────────────────────────────────────
export default function PlumberFinderFooter() {
  const [email, setEmail] = useState("");

  const supportLinks = ["Customer Support", "Report a Plumber", "Refund & Guarantee Policy", "Contractor Settlement Notice"];
  const listLinks = ["Join PlumberFinder Network", "Run a Local Campaign", "How It Works for Pros", "Sponsor Your Area", "Affiliate Program", "Vendor Code of Conduct"];
  const companyLinks = ["About PlumberFinder", "Jobs", "Press", "Investor Relations", "Management Team"];

  return (
    <footer className="bg-white text-gray-800">
      <hr></hr>
      {/* Top Section */}
      <div className="border-b border-gray-200 py-12 px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-8 flex-wrap justify-between max-w-7xl mx-auto">
          {/* App promo */}
          <div className="min-w-[220px] max-w-[300px]">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-primary rounded-xl p-2 text-gray-800">
                <WrenchIcon />
              </div>
              <div>
                <div className="text-primary font-bold text-xs uppercase tracking-wide">Get the App</div>
                <div className="font-bold text-base text-gray-800">PlumberFinder</div>
              </div>
            </div>
            <div className="flex gap-3 items-start mb-4">
              <QRCodePlaceholder />
              <div>
                <p className="font-bold text-sm text-gray-800 leading-tight">
                  Find a plumber in under 60 seconds — guaranteed.
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  Instant quotes, verified pros, real-time tracking.
                </p>
              </div>
            </div>
            <button className="bg-primary hover:bg-secondary text-gray-800 font-bold text-sm py-2.5 px-5 rounded-lg transition transform hover:-translate-y-0.5 mt-2">
              Download the App
            </button>
            <div className="flex items-center gap-1 mt-3">
              {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
              <span className="text-xs text-gray-500 ml-1">50M+ installs</span>
            </div>
          </div>

          <div className="flex-1"></div>

          {/* Email signup */}
          <div className="min-w-[260px] max-w-[360px]">
            <h4 className="font-bold text-sm text-gray-800 mb-1.5">Get the best local deals</h4>
            <p className="text-xs text-gray-500 mb-3">Plumbing tips, discounts & verified pro alerts — weekly.</p>
            <div className="flex gap-2 items-center">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="bg-primary hover:bg-secondary text-gray-800 rounded-full w-11 h-11 flex items-center justify-center transition-transform hover:scale-105">
                <ArrowRightIcon />
              </button>
            </div>
            <p className="text-[11px] text-gray-400 mt-2 leading-tight">
              By subscribing, I agree to the{" "}
              <a href="#" className="text-primary hover:underline">Terms & Conditions</a>{" "}
              and have read the{" "}
              <a href="#" className="text-primary hover:underline">Privacy Statement</a>.
            </p>
          </div>

          {/* Social links */}
          <div className="min-w-[120px]">
            <h4 className="font-bold text-sm text-gray-800 mb-3">Follow Us</h4>
            <div className="flex gap-2.5">
              <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                <FacebookIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                <InstagramIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                <XIcon />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-gray-800 transition-all transform hover:-translate-y-0.5 flex items-center justify-center">
                <LinkedInIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Link Grid */}
      <div className="py-10 px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row gap-8 flex-wrap max-w-7xl mx-auto">
          <div className="flex-1 min-w-[160px]">
            <h5 className="font-bold text-xs uppercase tracking-wide text-gray-800 mb-4">Support</h5>
            {supportLinks.map(link => (
              <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex-1 min-w-[200px]">
            <h5 className="font-bold text-xs uppercase tracking-wide text-gray-800 mb-4">List on PlumberFinder</h5>
            {listLinks.map(link => (
              <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex-1 min-w-[160px]">
            <h5 className="font-bold text-xs uppercase tracking-wide text-gray-800 mb-4">Company</h5>
            {companyLinks.map(link => (
              <a key={link} href="#" className="block text-gray-500 text-sm py-1 hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
          <div className="flex-1 min-w-[200px]">
            <h5 className="font-bold text-xs uppercase tracking-wide text-gray-800 mb-1">Quick Links</h5>
            <AccordionItem label="Emergency Plumbers" />
            <AccordionItem label="Service Categories" />
            <AccordionItem label="Deals & Coupons" />
            <AccordionItem label="Find by Occasion" />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-200 py-4 px-5 md:px-10 lg:px-16">
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs text-gray-400 max-w-7xl mx-auto">
          <span>© 2026 PlumberFinder, Inc. All Rights Reserved.</span>
          {["Terms and Conditions", "Privacy Statement", "Do Not Sell My Information", "Accessibility", "Sitemap", "Customer Support", "Licenses"].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="text-gray-300">·</span>}
              <a href="#" className={`${item === "Privacy Statement" ? "text-primary font-semibold" : "text-gray-400"} hover:text-primary transition-colors`}>
                {item}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}