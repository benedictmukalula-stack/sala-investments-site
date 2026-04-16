'use client';

import { motion } from 'framer-motion';
import {
  MessageSquare,
  Search,
  ClipboardCheck,
  FileText,
  Ship,
  ArrowRight,
} from 'lucide-react';
import { useNavigationStore } from '@/lib/store';

/* ────────────────────────────────────────────
   Exact 5-step process — titles locked
   ──────────────────────────────────────────── */
const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Enquiry & Consultation',
    description:
      'Submit your vehicle requirements — make, model, year, specifications, and budget. Our team reviews your request and provides initial guidance on availability, pricing, and timelines within 24 hours.',
  },
  {
    number: 2,
    icon: Search,
    title: 'Sourcing & Selection',
    description:
      'We search our supplier network across South African auctions, dealers, and OEM channels to shortlist vehicles that match your exact criteria. You receive curated options with photos, condition reports, and transparent pricing.',
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Inspection & Purchase',
    description:
      'Your selected vehicle undergoes a comprehensive multi-point quality inspection covering mechanical, electrical, structural, and cosmetic condition. Once approved, we complete the purchase on your behalf.',
  },
  {
    number: 4,
    icon: FileText,
    title: 'Documentation & Compliance',
    description:
      'We handle all regulatory requirements — vehicle de-registration, export permits, compliance documentation, and destination country import paperwork — ensuring a fully legal and seamless transfer.',
  },
  {
    number: 5,
    icon: Ship,
    title: 'Shipping & Delivery',
    description:
      'Your vehicle is collected, prepared, and shipped via the most suitable method — RoRo or container — with comprehensive insurance and real-time tracking from departure to final delivery at your destination.',
  },
];

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

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function HowItWorksPage() {
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
            <span className="sala-breadcrumb-current">How It Works</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>How It Works</h1>
            <p className="subtitle">
              Our streamlined five-step process makes vehicle sourcing and export
              simple, transparent, and reliable from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="sala-section">
        <div className="sala-container">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              {/* Vertical connector line — desktop */}
              <div className="absolute left-[23px] top-0 bottom-0 hidden w-px bg-[#E2E5EA] md:block" />

              <div className="space-y-6 md:space-y-0">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isLast = i === steps.length - 1;

                  return (
                    <motion.div
                      key={step.number}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      variants={fadeUp}
                      className="relative md:py-8"
                    >
                      <div className="flex gap-5 md:gap-8 items-start">
                        {/* Step number circle — navy */}
                        <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-navy shadow-sm text-[13px] font-bold text-white">
                          {step.number}
                        </div>

                        {/* Content card — sala-card styling */}
                        <div className="sala-card flex-1 p-5 sm:p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                              <Icon className="size-4 text-brand-gold" />
                            </div>
                            <h3 className="text-[15px] font-semibold text-brand-navy">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-[14px] leading-relaxed text-brand-grey">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Mobile connector */}
                      {!isLast && (
                        <div className="flex justify-center py-2 md:hidden">
                          <div className="w-px h-6 bg-[#E2E5EA]" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
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
            <h2>Ready to Get Started?</h2>
            <p className="subtitle">
              Contact our team and we will guide you through every step of the
              vehicle sourcing and export process.
            </p>
            <button onClick={() => navigate('contact')} className="sala-btn-primary mt-8">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
