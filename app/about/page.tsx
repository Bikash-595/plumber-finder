"use client";

import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutStats from "../components/about/AboutStats";
import AboutMissionValues from "../components/about/AboutMissionValues";
import AboutTeam from "../components/about/AboutTeam";
import AboutJourney from "../components/about/AboutJourney";
import AboutTestimonials from "../components/about/AboutTestimonials";
import AboutPartners from "../components/about/AboutPartners";
import AboutCta from "../components/about/AboutCta";
import AboutLiquidGlass from "../components/about/AboutLiquidGlass";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white font-sans">
      <AboutLiquidGlass />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <AboutHero />
        <AboutStory />
        <AboutStats />
        <AboutMissionValues />
        <AboutTeam />
        <AboutJourney />
        <AboutTestimonials />
        <AboutPartners />
        <AboutCta />
      </div>
    </main>
  );
}
