"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#hem", label: "Hem" },
  { href: "#om", label: "Om mig" },
  { href: "#konst", label: "Konst" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseLinkClasses = "hover:text-gray-600 transition-colors";
  const mobileLinkClasses = "block hover:text-gray-600 transition-colors";

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-playfair text-2xl font-bold">
            <Link href="/">Jonny Eriksson</Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={baseLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-black"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden text-gray-200 bg-black backdrop-blur-sm border-t border-gray-200 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={mobileLinkClasses}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
