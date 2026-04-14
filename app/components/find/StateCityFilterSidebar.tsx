"use client";

import Link from "next/link";
import { useState } from "react";
import { plumbers } from "@/data/plumbers";
import { getStateName, allStateAbbrs } from "../utils/location";

interface StateCityFilterSidebarProps {
  selectedState?: string;   // state abbreviation (e.g., "NY")
  selectedCity?: string;
}

export default function StateCityFilterSidebar({ selectedState, selectedCity }: StateCityFilterSidebarProps) {
  const [expandedState, setExpandedState] = useState(selectedState ?? "");

  const citiesByState = allStateAbbrs.reduce<Record<string, string[]>>((acc, stateAbbr) => {
    const cities = Array.from(
      new Set(
        plumbers
          .filter((plumber) => plumber.state === stateAbbr)
          .map((plumber) => plumber.city)
          .filter((city): city is string => Boolean(city))
      )
    ).sort((a, b) => a.localeCompare(b));

    acc[stateAbbr] = cities;
    return acc;
  }, {});

  const toggleState = (stateAbbr: string) => {
    setExpandedState((current) => (current === stateAbbr ? "" : stateAbbr));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h3 className="mb-1 font-semibold text-gray-900">Filter by State and City</h3>
        <p className="mb-4 text-sm text-gray-500">
          Open a state to browse its cities. States without listings will show an empty result page.
        </p>

        <div className="max-h-[38rem] space-y-2 overflow-y-auto pr-1">
          {allStateAbbrs.map((stateAbbr) => {
            const stateName = getStateName(stateAbbr);
            const isSelected = selectedState === stateAbbr;
            const isExpanded = expandedState === stateAbbr;
            const stateCities = citiesByState[stateAbbr];
            const hasPlumbers = stateCities.length > 0;
            const stateHref = `/states/${stateName.toLowerCase().replace(/\s/g, "-")}`;

            const className = `block rounded-md px-3 py-1.5 text-sm transition ${
              isSelected
                ? "bg-[#FFD60A] font-semibold text-white"
                : isExpanded
                  ? "bg-yellow-50 font-medium text-black"
                  : hasPlumbers
                    ? "text-black hover:bg-gray-100 hover:text-black"
                    : "text-black hover:bg-gray-50 hover:text-black"
            }`;

            return (
              <div key={stateAbbr} className="overflow-hidden rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 bg-white p-1">
                  <Link href={stateHref} className={`${className} flex-1`}>
                    <span>{stateName}</span>
                    <span
                      className={`ml-2 text-xs ${
                        isSelected ? "text-white/85" : hasPlumbers ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {hasPlumbers ? `${stateCities.length} cities` : "0 cities"}
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleState(stateAbbr)}
                    className={`rounded-md p-2 transition ${
                      isExpanded
                        ? "bg-yellow-100 text-black"
                        : "text-gray-500 hover:bg-gray-100 hover:text-black"
                    }`}
                    aria-label={`${isExpanded ? "Collapse" : "Expand"} ${stateName} cities`}
                    aria-expanded={isExpanded}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>

                {isExpanded && (
                  <div className="border-t border-gray-100 bg-gray-50 px-3 py-3">
                    {hasPlumbers ? (
                      <div className="space-y-1">
                        {stateCities.map((city) => (
                          <Link
                            key={city}
                            href={`${stateHref}?city=${encodeURIComponent(city)}`}
                            className={`block rounded-md px-3 py-2 text-sm transition ${
                              selectedState === stateAbbr && selectedCity === city
                                ? "bg-[#FFD60A] font-semibold text-white"
                                : "text-black hover:bg-white hover:text-black"
                            }`}
                          >
                            {city}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-md border border-dashed border-gray-200 bg-white px-3 py-3 text-sm text-gray-500">
                        No plumbing companies listed in {stateName} yet.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
