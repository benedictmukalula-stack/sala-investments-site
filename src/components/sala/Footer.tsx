'use client';

import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useNavigationStore } from '@/lib/store';

const quickLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'About Us', page: 'about' as const },
  { label: 'Services', page: 'services' as const },
  { label: 'Markets', page: 'markets' as const },
  { label: 'Contact', page: 'contact' as const },
];

const serviceLinks = [
  { label: 'Vehicle Sourcing', page: 'service-detail' as const, serviceId: 'vehicle-sourcing' },
  { label: 'Inspection & QA', page: 'service-detail' as const, serviceId: 'inspection-qa' },
  { label: 'Export & Compliance', page: 'service-detail' as const, serviceId: 'export-compliance' },
  { label: 'Shipping & Logistics', page: 'service-detail' as const, serviceId: 'shipping-logistics' },
];

export default function Footer() {
  const navigate = useNavigationStore((s) => s.navigate);

  return (
    <footer className="mt-auto bg-brand-navy text-white">
      {/* Top gold accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1: Company Info */}
          <div className="space-y-5">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-3 text-left"
              aria-label="SALA INVESTMENTS Home"
            >
              <img
                src="/logo.png"
                alt="Sala Investments Logo"
                width={40}
                height={40}
                className="size-10 object-contain brightness-0 invert"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-bold tracking-[-0.02em]">
                  SALA INVESTMENTS
                </span>
                <span className="mt-0.5 text-[10px] font-medium tracking-wider uppercase text-white/30">
                  (Pty) Ltd
                </span>
              </div>
            </button>
            <p className="text-sm leading-relaxed text-white/40">
              Specialist vehicle sourcing and export company connecting buyers across Africa with quality-assured vehicles from South Africa.
            </p>
            <div className="flex items-start gap-2.5 text-sm text-white/40">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-gold" />
              <span>
                Regus Sunninghill, West Wing, Ground Floor<br />
                6 Kikuyu Road, Sunninghill, Johannesburg, 2191<br />
                South Africa
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-gold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => navigate(link.page)}
                    className="text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-gold">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.serviceId}>
                  <button
                    onClick={() => navigate(link.page, link.serviceId)}
                    className="group text-sm text-white/40 transition-colors duration-200 hover:text-white"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      {link.label}
                      <ArrowRight className="size-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-gold">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                <div className="flex flex-col">
                  <span>+27 79 522 8493</span>
                  <span>+27 73 309 1446</span>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/40">
                <Mail className="size-4 shrink-0 text-brand-gold" />
                <span>info@salainv.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/40">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                <div>
                  <p className="text-white/55 font-medium">Mon – Fri: 08:00 – 17:00 CAT</p>
                  <p className="mt-0.5 text-xs text-white/30">After hours for emergency enquiries</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="my-10 bg-white/[0.06]" />
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Sala Investments (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Johannesburg, South Africa
          </p>
        </div>

        {/* Powered by signature */}
        <div className="mt-6 flex flex-col items-center gap-2 pt-4">
          <p className="text-[10px] uppercase tracking-[0.12em] text-white/20">
            Powered by
          </p>
          <p className="text-xs font-semibold tracking-wide text-white/40">
            Knowledge Camp Global
          </p>
          <div className="flex flex-col items-center gap-0.5 text-[10px] text-white/20">
            <a href="tel:+27833910863" className="transition-colors hover:text-white/50">
              +27 83 391 0863
            </a>
            <a href="mailto:info@knowledgecamp.co.za" className="transition-colors hover:text-white/50">
              info@knowledgecamp.co.za
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
