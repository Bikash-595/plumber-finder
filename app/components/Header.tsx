"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Find a Plumber", href: "/find" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#ffffff] text-[color:var(--color-dark-navy)] backdrop-blur shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row: logo + actions */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-[color:var(--color-alert-orange)]"
            >
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
              <div className="leading-none text-[color:var(--color-dark-navy)]">
                <div className="text-xl font-extrabold">Plumber Finder</div>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-full border border-[color:var(--color-dark-navy)] px-4 py-2 text-sm font-semibold text-[color:var(--color-dark-navy)] shadow-sm transition hover:bg-[color:var(--color-dark-navy)]/10"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            >
              Sign Up
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-dark-navy)]/20 p-2 text-[color:var(--color-dark-navy)] hover:bg-[color:var(--color-dark-navy)]/5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 18 18 6M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Bottom row: navigation */}
        <div className="hidden h-12 items-center justify-start gap-8 border-t border-[color:var(--color-dark-navy)]/10 text-sm font-semibold text-[color:var(--color-dark-navy)] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[color:var(--color-primary-blue)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-[color:var(--color-dark-navy)]/10 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-[color:var(--color-dark-navy)]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 transition hover:bg-[color:var(--color-dark-navy)]/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/login"
                className="flex-1 rounded-full border border-[color:var(--color-dark-navy)] px-4 py-2 text-center text-sm font-semibold text-[color:var(--color-dark-navy)] shadow-sm transition hover:bg-[color:var(--color-dark-navy)]/10"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="flex-1 rounded-full bg-[color:var(--color-alert-orange)] px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
