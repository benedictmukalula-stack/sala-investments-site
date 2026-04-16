'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Truck,
  HardHat,
  BusFront,
  Package,
  ArrowRight,
} from 'lucide-react';
import { useNavigationStore } from '@/lib/store';

/* ────────────────────────────────────────────
   Animation
   ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

/* ────────────────────────────────────────────
   Category data — exactly 4, no extras
   ──────────────────────────────────────────── */
const categories = [
  {
    icon: Package,
    title: 'Light Commercial Vehicles (LCVs)',
    description:
      'Vans, pickups, bakkies, and light-duty trucks suited for last-mile delivery, urban logistics, and small-to-medium business operations. Sourced from leading brands including Toyota Hilux, Ford Ranger, Volkswagen Amarok, and Nissan NP200.',
    useCase:
      'Ideal for distribution companies, retail supply chains, courier services, and SMEs that need reliable, fuel-efficient vehicles for daily operations and short-haul freight.',
    image: '/images/cat-lcv.png',
  },
  {
    icon: Truck,
    title: 'Heavy-Duty Trucks & Trailers',
    description:
      'Long-haul trucks, flatbeds, tankers, refrigerated units, and trailer combinations built for bulk cargo transport across long distances. We source from trusted manufacturers such as Scania, Volvo, MAN, Mercedes-Benz, and Hino.',
    useCase:
      'Essential for logistics companies, mining operations, fuel distributors, and cross-border freight operators moving high-volume goods between cities, ports, and borders.',
    image: '/images/cat-trucks.png',
  },
  {
    icon: HardHat,
    title: 'Construction & Agricultural Equipment',
    description:
      'Excavators, backhoe loaders, motor graders, bulldozers, tractors, and other industrial machinery for heavy-duty applications. Sourced from Caterpillar, JCB, Komatsu, Case, and John Deere.',
    useCase:
      'Critical for construction firms, road-building contractors, mining companies, and large-scale commercial farming operations that require durable equipment for demanding environments.',
    image: '/images/cat-construction.png',
  },
  {
    icon: BusFront,
    title: 'Minibuses & Passenger Vans',
    description:
      'Public transport minibuses, crew shuttles, school buses, and multi-passenger vans for people-moving operations. Commonly sourced models include Toyota Quantum, Volkswagen Kombi, Ford Transit, and Isuzu NPR.',
    useCase:
      'Suited for public transport operators, corporate shuttle services, school transport providers, and tourism companies needing safe, high-capacity passenger vehicles.',
    image: '/images/cat-minibus.png',
  },
];

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function VehicleCategoriesPage() {
  const navigate = useNavigationStore((s) => s.navigate);

  return (
    <main>
      {/* ── Header ── */}
      <section className="sala-page-header">
        <div className="sala-container">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="sala-breadcrumb"
          >
            <button onClick={() => navigate('home')} className="sala-breadcrumb-link">
              Home
            </button>
            <span className="sala-breadcrumb-sep">/</span>
            <span className="sala-breadcrumb-current">Vehicle Categories</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>Vehicle Categories</h1>
            <p className="subtitle">
              We source quality vehicles across four core categories, serving
              businesses and logistics operators throughout Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Cards ── */}
      <section className="sala-section">
        <div className="sala-container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <div className="sala-card h-full overflow-hidden p-0">
                    {/* Category image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image src={cat.image} alt={`${cat.title}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
                    </div>
                    <div className="p-6 sm:p-8">
                    {/* Icon + title */}
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                        <Icon className="size-5 text-brand-gold" />
                      </div>
                      <h3 className="text-[15px] font-semibold text-brand-navy sm:text-base">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-[14px] leading-relaxed text-brand-grey">
                      {cat.description}
                    </p>

                    {/* Use-case */}
                    <div className="mt-5 rounded-md bg-brand-grey-pale p-4">
                      <p className="sala-label">Business &amp; Logistics Use</p>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-brand-navy">
                        {cat.useCase}
                      </p>
                    </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="sala-cta-banner">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2>Need a Specific Vehicle?</h2>
            <p className="subtitle">
              Tell us your requirements and our team will source the right vehicle
              for your business.
            </p>
            <button onClick={() => navigate('contact')} className="sala-btn-primary mt-8">
              Request a Vehicle
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
