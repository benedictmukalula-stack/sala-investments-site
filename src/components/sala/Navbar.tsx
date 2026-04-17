"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const services: NavLink[] = [
  { label: "Strategic Advisory", href: "#services" },
  { label: "Market Entry", href: "#services" },
  { label: "Investment Structuring", href: "#services" },
  { label: "Project Execution", href: "#services" },
];

const mainLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-sm font-medium text-neutral-800 transition hover:text-black"
    >
      {label}
    </Link>
  );
}

function ServicesDropdown({
  isMobile = false,
  onNavigate,
}: {
  isMobile?: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-xl border border-neutral-200 px-4 py-3 text-left text-sm font-medium text-neutral-900"
        >
          <span>Services</span>
          <ChevronDown
            className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div className="mt-2 space-y-2 rounded-xl bg-neutral-50 p-3">
            {services.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-sm text-neutral-700 transition hover:bg-white hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-neutral-800 transition hover:text-black"
      >
        <span>Services</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-neutral-200 bg-white p-3 shadow-xl">
          <div className="space-y-1">
            {services.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-xl px-3 py-2 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="#home" className="text-lg font-semibold tracking-tight text-black">
          Sala Investments
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {mainLinks.slice(0, 3).map((item) => (
            <NavItem key={item.label} href={item.href} label={item.label} />
          ))}

          <ServicesDropdown />

          {mainLinks.slice(3).map((item) => (
            <NavItem key={item.label} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-6 py-4">
            {mainLinks.slice(0, 3).map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                onClick={closeMobile}
              />
            ))}

            <ServicesDropdown isMobile onNavigate={closeMobile} />

            {mainLinks.slice(3).map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                label={item.label}
                onClick={closeMobile}
              />
            ))}

            <Link
              href="#contact"
              onClick={closeMobile}
              className="block rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
