'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useNavigationStore, type PageKey } from '@/lib/store';

const navLinks: { label: string; page: PageKey; serviceId?: string }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Markets', page: 'markets' },
  { label: 'Vehicles', page: 'vehicles' },
  { label: 'How It Works', page: 'how-it-works' },
  { label: 'Contact', page: 'contact' },
];

const serviceDropdownItems: {
  label: string;
  page: PageKey;
  serviceId: string;
}[] = [
  { label: 'Vehicle Sourcing', page: 'service-detail', serviceId: 'vehicle-sourcing' },
  { label: 'Inspection & QA', page: 'service-detail', serviceId: 'inspection-qa' },
  { label: 'Export & Compliance', page: 'service-detail', serviceId: 'export-compliance' },
  { label: 'Shipping & Logistics', page: 'service-detail', serviceId: 'shipping-logistics' },
];

function NavLogo() {
  const navigate = useNavigationStore((s) => s.navigate);
  return (
    <button
      onClick={() => navigate('home')}
      className="flex items-center gap-3 shrink-0"
      aria-label="SALA INVESTMENTS Home"
    >
      <Image
        src="/logo.png"
        alt="Sala Investments Logo"
        width={44}
        height={44}
        className="size-10 sm:size-11 object-contain"
        priority
      />
      <div className="hidden sm:flex flex-col leading-none">
        <span className="text-[15px] font-bold tracking-[-0.02em] text-brand-navy">
          SALA INVESTMENTS
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-wider uppercase text-brand-grey">
          (Pty) Ltd
        </span>
      </div>
    </button>
  );
}

function ServicesDropdown({ isMobile = false }: { isMobile?: boolean }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigationStore((s) => s.navigate);
  const currentPage = useNavigationStore((s) => s.currentPage);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-[13px] font-medium text-brand-navy transition-colors hover:bg-brand-grey-pale"
        >
          Services
          <ChevronDown
            className={`size-3.5 text-brand-grey transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        {open && (
          <div className="ml-4 mt-1 flex flex-col border-l border-brand-gold/40 pl-4">
            {serviceDropdownItems.map((item) => (
              <button
                key={item.serviceId}
                onClick={() => {
                  navigate(item.page, item.serviceId);
                  setOpen(false);
                }}
                className="rounded-md px-3 py-2 text-left text-[13px] text-brand-grey transition-colors hover:text-brand-navy"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  const isActive = currentPage === 'services' || currentPage === 'service-detail';

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => navigate('services')}
        className={`flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
          isActive
            ? 'text-brand-gold'
            : 'text-brand-navy hover:text-brand-gold'
        }`}
      >
        Services
        <ChevronDown
          className={`size-3 text-brand-grey transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <div
        className={`absolute left-0 top-full pt-1.5 transition-all duration-200 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="w-52 rounded-md border border-[#E2E5EA] bg-white py-1 shadow-[0_4px_16px_rgba(11,29,53,0.08)]">
          {serviceDropdownItems.map((item) => (
            <button
              key={item.serviceId}
              onClick={() => {
                navigate(item.page, item.serviceId);
                setOpen(false);
              }}
              className="flex w-full items-center px-4 py-2.5 text-left text-[13px] text-brand-navy transition-colors hover:bg-brand-grey-pale hover:text-brand-gold"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopNav() {
  const navigate = useNavigationStore((s) => s.navigate);
  const currentPage = useNavigationStore((s) => s.currentPage);

  return (
    <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
      {navLinks.map((link) => {
        if (link.page === 'services') {
          return <ServicesDropdown key={link.page} />;
        }

        const isActive = currentPage === link.page;

        return (
          <button
            key={link.page}
            onClick={() => navigate(link.page)}
            className={`relative rounded-md px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
              isActive
                ? 'text-brand-gold'
                : 'text-brand-navy hover:text-brand-gold'
            }`}
          >
            {link.label}
          </button>
        );
      })}
    </nav>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const navigate = useNavigationStore((s) => s.navigate);
  const currentPage = useNavigationStore((s) => s.currentPage);

  const handleNavigate = (page: PageKey, serviceId?: string | null) => {
    navigate(page, serviceId);
    onClose();
  };

  return (
    <nav className="flex flex-col gap-0.5 px-3 py-4" aria-label="Mobile navigation">
      {navLinks.map((link) => {
        if (link.page === 'services') {
          return <ServicesDropdown key={link.page} isMobile />;
        }

        const isActive = currentPage === link.page;

        return (
          <button
            key={link.page}
            onClick={() => handleNavigate(link.page)}
            className={`rounded-md px-3 py-2.5 text-left text-[13px] font-medium transition-colors ${
              isActive
                ? 'text-brand-gold'
                : 'text-brand-navy hover:text-brand-gold'
            }`}
          >
            {link.label}
          </button>
        );
      })}

      <div className="mt-5 border-t border-[#E2E5EA] pt-5">
        <Button
          className="w-full bg-brand-gold text-white hover:bg-brand-gold-light rounded-md text-[13px] font-medium shadow-sm"
          onClick={() => handleNavigate('contact')}
        >
          Request Sourcing
        </Button>
      </div>
    </nav>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigationStore((s) => s.navigate);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_1px_8px_rgba(11,29,53,0.08)]'
          : ''
      }`}
    >
      {/* Top brand accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <NavLogo />
        <DesktopNav />
        <div className="flex items-center gap-3">
          <Button
            className="hidden rounded-md bg-brand-gold px-5 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-200 hover:bg-brand-gold-light hover:shadow-md hover:-translate-y-0.5 lg:inline-flex"
            onClick={() => navigate('contact')}
          >
            Request Sourcing
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-brand-navy hover:bg-brand-grey-pale"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetHeader className="border-b border-[#E2E5EA] px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/logo.png"
                    alt="Sala Investments Logo"
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                  <SheetTitle className="text-left text-[15px] font-bold tracking-[-0.02em] text-brand-navy">
                    SALA INVESTMENTS
                  </SheetTitle>
                </div>
              </SheetHeader>
              <MobileNav onClose={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
