"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, FormEvent, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { ServicesDropdown } from "../components/dropdowns/ServicesDropdown";
import { StatesDropdown } from "../components/dropdowns/StatesDropdown";
import { allStateAbbrs, getStateName } from "../components/utils/location";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find Plumber", href: "/find" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const usStates = allStateAbbrs.map(getStateName);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      router.push(searchQuery.trim() ? `/find?search=${encodeURIComponent(searchQuery.trim())}` : "/find");
      setMenuOpen(false);
    },
    [searchQuery, router]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-gray-800 backdrop-blur shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-4">
          <div className="flex flex-shrink-0 items-center">
            <Link href="/" className="flex items-center gap-2 text-[#FFD60A]">
              <div className="relative h-14 w-14">
                <Image
                  src="/Plumber%20(1).png"
                  alt="Plumber Finder icon"
                  fill
                  sizes="56px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="leading-none text-gray-800">
                <div className="text-xl font-extrabold">Plumber Finder</div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <form onSubmit={handleSearch} className="relative w-full max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plumbers, services, location..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2.5 pl-12 pr-20 text-sm text-gray-800 placeholder-gray-500 focus:border-[#FFD60A] focus:outline-none focus:ring-1 focus:ring-[#FFD60A]"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#FFD60A] px-4 py-1 text-sm font-semibold text-white shadow-sm transition hover:brightness-105"
              >
                Search
              </button>
            </form>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/add-business"
              className="rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              List Your Business
            </Link>
            <Link
              href="/login"
              className="rounded-full border border-gray-800 px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-800/10"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full border border-[color:var(--color-alert-orange)] px-4 py-2 text-sm font-semibold text-[color:var(--color-alert-orange)] shadow-sm transition hover:bg-[color:var(--color-alert-orange)] hover:text-white"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-gray-800/20 p-2 text-gray-800 hover:bg-gray-800/5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
              {menuOpen ? <path d="M6 18 18 6M6 6l12 12" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>

        <div className="hidden h-12 items-center justify-start gap-8 border-t border-gray-200 text-sm font-semibold text-gray-800 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#FFD60A]">
              {link.label}
            </Link>
          ))}
          <ServicesDropdown />
          <StatesDropdown />
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-gray-800">
            <form onSubmit={handleSearch} className="relative mb-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search plumbers, services..."
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-2.5 pl-12 pr-20 text-sm text-gray-800 placeholder-gray-500 focus:border-[#FFD60A] focus:outline-none focus:ring-1 focus:ring-[#FFD60A]"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <button type="submit" className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#FFD60A] px-4 py-1 text-sm font-semibold text-white shadow-sm transition hover:brightness-105">
                Search
              </button>
            </form>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pl-4 border-l-2 border-gray-200 mt-1">
              <div className="text-xs font-semibold text-gray-500 mb-1">Services</div>
              <div className="grid grid-cols-1 gap-1">
                <Link href="/find" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Find Plumber Companies
                </Link>
                <Link href="/post-requirement" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Post a Requirement
                </Link>
                <Link href="/quotes" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Get Quotes
                </Link>
                <Link href="/book-appointment" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Book Appointment
                </Link>
                <Link href="/compare" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Compare Companies
                </Link>
                <Link href="/register-business" className="flex items-center gap-3 rounded-md px-2 py-2 transition hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
                  Register Your Business
                </Link>
              </div>
            </div>
            <div className="pl-4 border-l-2 border-gray-200 mt-1">
              <div className="text-xs font-semibold text-gray-500 mb-1">States</div>
              <div className="grid grid-cols-2 gap-1 mt-1">
                {usStates.map((state) => (
                  <Link key={state} href={`/states/${state.toLowerCase().replace(/\s/g, '-')}`} className="rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 transition" onClick={() => setMenuOpen(false)}>
                    {state}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Link href="/add-business" className="flex-1 rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition hover:brightness-110" onClick={() => setMenuOpen(false)}>
                List Your Business
              </Link>
              <Link href="/login" className="flex-1 rounded-full border border-gray-800 px-4 py-2 text-center text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-800/10" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link href="/signup" className="flex-1 rounded-full border border-[color:var(--color-alert-orange)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--color-alert-orange)] shadow-sm transition hover:bg-[color:var(--color-alert-orange)] hover:text-white" onClick={() => setMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
