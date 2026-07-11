// import CompanySectionPage, { CompanySectionTable } from "./addcompany/CompanySectionPage";

// const content = {
//   title: "Service Areas",
//   description: "Control covered cities, zip codes, travel fees, emergency radius, and local ranking focus.",
//   stats: [
//     { label: "Cities covered", value: "18", detail: "4 primary markets" },
//     { label: "Emergency radius", value: "22 mi", detail: "After-hours coverage" },
//     { label: "Local pages", value: "11", detail: "Ranking across state pages" },
//   ],
//   tasks: [
//     { title: "Add north suburbs", status: "Draft", detail: "Review travel fee before publishing." },
//     { title: "Pause two zip codes", status: "Open", detail: "Temporary staffing shortage." },
//     { title: "Tune emergency radius", status: "Recommended", detail: "Reduce missed response targets." },
//   ],
// };

// const table = {
//   title: "Coverage Map",
//   description: "Primary markets, local pages, and operating rules by area.",
//   headers: ["Area", "Type", "Travel Fee", "Status"],
//   rows: [
//     ["Austin", "Primary", "$0", "Live"],
//     ["Round Rock", "Primary", "$15", "Live"],
//     ["Cedar Park", "Secondary", "$25", "Live"],
//     ["Georgetown", "Secondary", "$35", "Review"],
//   ],
// };

// export default function ServiceAreasSection() {
//   return (
//     <CompanySectionPage content={content}>
//       <CompanySectionTable table={table} />
//     </CompanySectionPage>
//   );
// }





import React from 'react'

const ServiceAreasSection = () => {
  return (
    <div>
      <h2>Service Areas Section</h2>  
      <p>This is where the service areas information will be displayed.</p>
      
    </div>
  )
}

export default ServiceAreasSection
