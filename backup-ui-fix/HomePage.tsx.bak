'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Truck, Globe, Calendar, Users, ArrowRight, CheckCircle,
  Search, ClipboardCheck, ShieldCheck, Ship,
  Package, HardHat, BusFront,
  MessageSquare, FileText,
  Eye, UserCheck, Layers, Zap, Handshake, Clock, Banknote,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigationStore } from '@/lib/store';

/* ── Data ─────────────────────────────────── */

const stats = [
  { number: '850+', label: 'Vehicles Exported', icon: Truck },
  { number: '7', label: 'Countries Served', icon: Globe },
  { number: '8', label: 'Years Experience', icon: Calendar },
  { number: '99%', label: 'Client Retention', icon: Users },
];

const services = [
  {
    icon: Search,
    title: 'Vehicle Sourcing',
    description:
      'We source quality vehicles tailored to your exact specifications from our trusted network of suppliers across South Africa.',
    serviceId: 'vehicle-sourcing',
    image: '/images/service-sourcing.png',
  },
  {
    icon: ClipboardCheck,
    title: 'Inspection & QA',
    description:
      'Every vehicle undergoes a rigorous multi-point inspection covering mechanical, electrical, structural, and cosmetic checks before export.',
    serviceId: 'inspection-qa',
    image: '/images/service-inspection.png',
  },
  {
    icon: ShieldCheck,
    title: 'Export & Compliance',
    description:
      'Full regulatory compliance with South African export laws and destination country import requirements, handled by our experienced team.',
    serviceId: 'export-compliance',
    image: '/images/service-compliance.png',
  },
  {
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'End-to-end logistics management including customs clearance, inland transport, and international shipping across Africa.',
    serviceId: 'shipping-logistics',
    image: '/images/service-shipping.png',
  },
];

const whyChooseUs = [
  { icon: Eye, title: 'Transparent Pricing', description: 'Full cost breakdown upfront with no hidden fees or surprise charges.' },
  { icon: UserCheck, title: 'Dedicated Account Manager', description: 'A single point of contact who manages your order from start to finish.' },
  { icon: Layers, title: 'End-to-End Service', description: 'Sourcing, inspection, compliance, and logistics — all handled by us.' },
  { icon: Handshake, title: 'Established Supplier Network', description: 'Trusted relationships with auctions, dealers, and OEMs across South Africa.' },
  { icon: ClipboardCheck, title: 'Rigorous Quality Assurance', description: 'Multi-point inspection on every vehicle before export approval.' },
  { icon: Banknote, title: 'Competitive Freight Rates', description: 'Logistics partnerships that secure reliable shipping at competitive prices.' },
  { icon: ShieldCheck, title: 'Regulatory Expertise', description: 'Deep knowledge of export and import compliance across 7 African markets.' },
  { icon: Clock, title: 'Fast Turnaround', description: 'Efficient processes and 24-hour response times keep your project on schedule.' },
];

const markets = [
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Tanzania', flag: '🇹🇿' },
  { name: 'Zimbabwe', flag: '🇿🇼' },
  { name: 'Zambia', flag: '🇿🇲' },
  { name: 'Uganda', flag: '🇺🇬' },
  { name: 'Malawi', flag: '🇲🇼' },
  { name: 'DRC', flag: '🇨🇩' },
];

const vehicleCategories = [
  {
    icon: Package,
    title: 'Light Commercial Vehicles',
    description: 'Vans, pickups, and light trucks for business and commercial operations.',
  },
  {
    icon: Truck,
    title: 'Heavy-Duty Trucks & Trailers',
    description: 'Long-haul trucks, flatbeds, tankers, and trailer combinations for logistics.',
  },
  {
    icon: HardHat,
    title: 'Construction & Agricultural',
    description: 'Excavators, loaders, graders, tractors, and other industrial machinery.',
  },
  {
    icon: BusFront,
    title: 'Minibuses & Passenger Vans',
    description: 'Public transport minibuses, shuttles, and passenger vans for people-moving.',
  },
];

const processSteps = [
  { number: 1, icon: MessageSquare, title: 'Enquiry', description: 'Submit your requirements, specifications, and budget. Our team responds within 24 hours.' },
  { number: 2, icon: Search, title: 'Sourcing', description: 'We search our supplier network and present you with curated vehicle options.' },
  { number: 3, icon: ClipboardCheck, title: 'Inspection', description: 'Selected vehicles undergo comprehensive multi-point quality inspection.' },
  { number: 4, icon: FileText, title: 'Documentation', description: 'We handle all export documentation, customs, and destination compliance.' },
  { number: 5, icon: Ship, title: 'Shipping', description: 'Your vehicle is shipped and tracked to its destination port or address.' },
];

/* ── Animation (subtle, not flashy) ──────── */

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

/* ── Page ────────────────────────────────── */

export default function HomePage() {
  const navigate = useNavigationStore((s) => s.navigate);

  return (
    <main>
      {/* ══════════════════════════════════════════
          1. HERO
          ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-brand-navy sm:min-h-[80vh]">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image src="/images/hero.png" alt="Car carrier ship at port transporting vehicles across Africa" fill className="object-cover" priority />
        </div>

        {/* Overlay gradient — optimized for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/45 to-brand-navy/75" />

        <div className="relative z-10 sala-container max-w-4xl text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-1.5"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            <span className="text-xs font-medium tracking-wider uppercase text-white/70">
              Vehicle Sourcing &amp; Export
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sala-hero-heading drop-shadow-[0_2px_8px_rgba(11,29,53,0.5)]"
          >
            Driving Quality Vehicles{' '}
            <span className="text-brand-gold">Across Africa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 drop-shadow-[0_1px_4px_rgba(11,29,53,0.6)] sm:text-lg"
          >
            Specialist vehicle sourcing and export company connecting buyers across
            Africa with competitively priced, quality-assured vehicles from
            South Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              onClick={() => navigate('contact')}
              className="sala-btn-primary bg-brand-gold px-8 py-3.5 text-[15px] hover:bg-brand-gold-light"
            >
              Request Vehicle
              <ArrowRight className="size-4" />
            </Button>
            <Button
              onClick={() => navigate('contact')}
              className="sala-btn-secondary px-8 py-3.5 text-[15px]"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Bottom gold accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      </section>

      {/* ══════════════════════════════════════════
          2. TRUST METRICS
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-white">
        <div className="sala-container max-w-5xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
                className="sala-stat-card"
              >
                <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-lg bg-brand-gold/10">
                  <stat.icon className="size-5 text-brand-gold" />
                </div>
                <div className="text-3xl font-bold tracking-tight text-brand-navy lg:text-[2.25rem]">
                  {stat.number}
                </div>
                <div className="mt-1.5 text-[12px] font-medium tracking-wide uppercase text-brand-grey">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ABOUT SNAPSHOT
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-brand-grey-pale">
        <div className="sala-container max-w-3xl">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="text-center"
          >
            <div className="mx-auto mb-5 sala-gold-line" />
            <h2 className="sala-heading">About Sala Investments</h2>
            <p className="mt-6 text-base leading-[1.8] text-brand-grey sm:text-[17px]">
              Founded in 2018 and based in Johannesburg, South Africa, Sala
              Investments (Pty) Ltd is a specialist vehicle sourcing and export
              company. We focus on sourcing quality vehicles, conducting thorough
              inspections, managing export compliance, and delivering end-to-end
              logistics solutions for clients across Southern and East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. SERVICES OVERVIEW
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-white">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="sala-section-header"
          >
            <h2 className="sala-heading">Our Services</h2>
            <p className="sala-heading-sub">
              Comprehensive vehicle sourcing and export solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                <div className="sala-card group h-full cursor-pointer overflow-hidden p-0"
                  onClick={() => navigate('service-detail', service.serviceId)}
                >
                  {/* Service image bar */}
                  <div className="relative h-44 overflow-hidden">
                    <Image src={service.image} alt={`${service.title} service`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                  </div>
                  <div className="p-6 lg:p-8">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <service.icon className="size-5 text-brand-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-brand-grey">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center text-[13px] font-semibold text-brand-gold transition-all duration-200 group-hover:text-brand-gold-light group-hover:gap-2">
                    Learn More
                    <ArrowRight className="ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. WHY CHOOSE US
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-brand-navy">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="sala-section-header"
          >
            <div className="mx-auto mb-5 sala-gold-line" />
            <h2 className="sala-heading !text-white">Why Choose Us</h2>
            <p className="sala-heading-sub !text-white/40">
              What sets Sala Investments apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                <div className="group rounded-lg border border-white/[0.06] bg-white/[0.03] p-5 transition-all duration-300 hover:border-brand-gold/25 hover:bg-white/[0.06] hover:shadow-[0_4px_20px_rgba(196,154,42,0.08)]">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-md bg-brand-gold/10 transition-colors duration-300 group-hover:bg-brand-gold/20">
                    <item.icon className="size-5 text-brand-gold" />
                  </div>
                  <h3 className="text-[14px] font-semibold text-white/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/45">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. MARKETS WE SERVE
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-white">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="sala-section-header"
          >
            <h2 className="sala-heading">Markets We Serve</h2>
            <p className="sala-heading-sub">
              Delivering quality vehicles across the continent
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {markets.map((market, i) => (
              <motion.div
                key={market.name}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                <button
                  onClick={() => navigate('markets')}
                  className="sala-card group w-full p-5 lg:p-6 text-center"
                >
                  <span className="mb-3 block text-3xl transition-transform duration-200 group-hover:scale-110">{market.flag}</span>
                  <h3 className="text-[13px] font-semibold text-brand-navy transition-colors duration-200 group-hover:text-brand-gold">
                    {market.name}
                  </h3>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. VEHICLE CATEGORIES
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-brand-grey-pale">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="sala-section-header"
          >
            <h2 className="sala-heading">Vehicle Categories</h2>
            <p className="sala-heading-sub">
              Sourcing quality vehicles across all segments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {vehicleCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fade}
              >
                <div className="sala-card group h-full p-6 lg:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm transition-all duration-300 group-hover:bg-brand-gold">
                      <cat.icon className="size-5 text-brand-gold transition-colors duration-300 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-brand-navy">
                        {cat.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.7] text-brand-grey">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-10 text-center"
          >
            <button
              onClick={() => navigate('vehicles')}
              className="sala-btn-ghost"
            >
              View All Categories
              <ArrowRight className="size-3.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. HOW IT WORKS
          ══════════════════════════════════════════ */}
      <section className="sala-section bg-white">
        <div className="sala-container max-w-6xl">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="sala-section-header"
          >
            <h2 className="sala-heading">How It Works</h2>
            <p className="sala-heading-sub">
              A simple 5-step process from enquiry to delivery
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent lg:block" />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-3">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto mb-5 flex size-[72px] items-center justify-center rounded-full border-2 border-brand-gold/25 bg-white shadow-sm transition-all duration-300 hover:border-brand-gold hover:shadow-md">
                    <step.icon className="size-6 text-brand-gold" />
                    <span className="absolute -right-0.5 -top-0.5 flex size-6 items-center justify-center rounded-full bg-brand-navy text-[10px] font-bold text-white shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-[14px] font-semibold text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-brand-grey">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="mt-12 text-center"
          >
            <button
              onClick={() => navigate('how-it-works')}
              className="sala-btn-ghost"
            >
              Learn More
              <ArrowRight className="size-3.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. CTA BANNER
          ══════════════════════════════════════════ */}
      <section className="sala-cta-banner">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="sala-container max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 sala-gold-line" />
          <h2>Ready to Source Your Next Vehicle?</h2>
          <p className="subtitle">
            Contact our team today and let us handle the entire process — from sourcing to delivery.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() => navigate('contact')}
              className="sala-btn-primary bg-brand-gold px-8 py-3.5 text-[15px] hover:bg-brand-gold-light"
            >
              Request Vehicle
              <ArrowRight className="size-4" />
            </Button>
            <Button
              onClick={() => navigate('contact')}
              className="sala-btn-secondary px-8 py-3.5 text-[15px]"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
