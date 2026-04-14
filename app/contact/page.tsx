// "use client";

// import { Inter, Plus_Jakarta_Sans } from "next/font/google";
// import ContactHero from "../components/contact/ContactHero";
// import ContactForm from "../components/contact/ContactForm";
// import ContactInfo from "../components/contact/ContactInfo";
// import ContactMap from "../components/contact/ContactMap";
// import ContactChatPreview from "../components/contact/ContactChatPreview";
// import ContactFaq from "../components/contact/ContactFaq";
// import ContactLiquidGlass from "../components/contact/ContactLiquidGlass";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta",
// });

// export default function ContactPage() {
//   return (
//     <main
//       className={`${inter.variable} ${plusJakarta.variable} relative min-h-screen overflow-x-hidden bg-[#0b1f3b] font-sans`}
//       style={{ fontFamily: "var(--font-inter)" }}
//     >
//       {/* Liquid glass background wrapper */}
//       <ContactLiquidGlass />

//       <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <ContactHero />
        
//         <div className="mt-16 grid gap-12 lg:grid-cols-2">
//           <ContactForm />
//           <ContactInfo />
//         </div>

//         <div className="mt-20">
//           <ContactMap />
//         </div>

//         <div className="mt-20">
//           <ContactChatPreview />
//         </div>

//         <div className="mt-20">
//           <ContactFaq />
//         </div>
//       </div>
//     </main>
//   );
// }









"use client";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import ContactMap from "../components/contact/ContactMap";
import ContactChatPreview from "../components/contact/ContactChatPreview";
import ContactFaq from "../components/contact/ContactFaq";
import ContactLiquidGlass from "../components/contact/ContactLiquidGlass";
import ContactNewsletter from "../components/contact/ContactNewsletter";
import ContactSocialProof from "../components/contact/ContactSocialProof";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <ContactLiquidGlass />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ContactHero />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-20">
          <ContactMap />
        </div>

        <div className="mt-20">
          <ContactChatPreview />
        </div>

        <div className="mt-20">
          <ContactFaq />
        </div>

        <div className="mt-20">
          <ContactNewsletter />
        </div>

        <div className="mt-20">
          <ContactSocialProof />
        </div>
      </div>
    </main>
  );
}
