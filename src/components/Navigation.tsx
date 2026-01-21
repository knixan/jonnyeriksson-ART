"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-playfair text-2xl font-bold">
            <Link href="/">Jonny Eriksson</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#hem" className="hover:text-gray-600 transition-colors">
              Hem
            </Link>
            <Link href="#om" className="hover:text-gray-600 transition-colors">
              Om mig
            </Link>
            <Link
              href="#konst"
              className="hover:text-gray-600 transition-colors"
            >
              Konst
            </Link>
            <Link
              href="#kontakt"
              className="hover:text-gray-600 transition-colors"
            >
              Kontakt
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-black"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      </div>

      {/* Mobilmeny, visas när knapp trycks */}
      {mobileMenuOpen && (
        <div className="md:hidden text-gray-200 bg-black backdrop-blur-sm border-t border-gray-200 px-4 py-4 space-y-4">
          <Link
            href="#hem"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-gray-600 transition-colors"
          >
            Hem
          </Link>
          <Link
            href="#om"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-gray-600 transition-colors"
          >
            Om mig
          </Link>
          <Link
            href="#konst"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-gray-600 transition-colors"
          >
            Konst
          </Link>
          <Link
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-gray-600 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
