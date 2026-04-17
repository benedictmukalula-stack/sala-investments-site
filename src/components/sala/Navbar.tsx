"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  "Strategic Advisory",
  "Market Entry",
  "Investment Structuring",
  "Execution Support",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.18em] text-white uppercase">
          Sala Investments
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#about" className="text-sm text-white/80 transition hover:text-white">
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-white/80 transition hover:text-white"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl">
                {services.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="block rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
                  >
                    {service}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link href="#sectors" className="text-sm text-white/80 transition hover:text-white">
            Sectors
          </Link>
          <Link href="#insights" className="text-sm text-white/80 transition hover:text-white">
            Insights
          </Link>
          <Link href="#contact" className="text-sm text-white/80 transition hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-amber-400/40 bg-amber-400 px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Book Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black md:hidden">
          <div className="space-y-3 px-6 py-4">
            <a href="#about" className="block text-sm text-white/80">About</a>
            <a href="#services" className="block text-sm text-white/80">Services</a>
            <a href="#sectors" className="block text-sm text-white/80">Sectors</a>
            <a href="#insights" className="block text-sm text-white/80">Insights</a>
            <a href="#contact" className="block text-sm text-white/80">Contact</a>
            <a
              href="#contact"
              className="block rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-medium text-black"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
