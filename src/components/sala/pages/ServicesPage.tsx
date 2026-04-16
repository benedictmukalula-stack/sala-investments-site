'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  Ship,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { useNavigationStore, type PageKey } from '@/lib/store';

/* ────────────────────────────────────────────
   Service definitions — exact 4 services only
   ──────────────────────────────────────────── */
const services: {
  serviceId: string;
  icon: React.ElementType;
  title: string;
  description: string;
  subServices: string[];
  image: string;
}[] = [
  {
    serviceId: 'vehicle-sourcing',
    icon: Search,
    title: 'Vehicle Sourcing',
    description:
      'We identify and procure vehicles that match your exact specifications through our established supplier network across South Africa, ensuring competitive pricing and reliable quality.',
    subServices: [
      'Auction buying',
      'Dealer & OEM sourcing',
      'Custom spec procurement',
    ],
    image: '/images/service-sourcing.png',
  },
  {
    serviceId: 'inspection-qa',
    icon: ClipboardCheck,
    title: 'Inspection & QA',
    description:
      'Every vehicle undergoes a rigorous quality assurance process before export, giving you full transparency and confidence in the condition of your purchase.',
    subServices: [
      'Multi-point inspection',
      'Third-party reports',
      'Photo/video documentation',
    ],
    image: '/images/service-inspection.png',
  },
  {
    serviceId: 'export-compliance',
    icon: ShieldCheck,
    title: 'Export & Compliance',
    description:
      'Our compliance team manages all regulatory documentation and permits required for both South African export and destination country import, ensuring a seamless and legal transfer.',
    subServices: [
      'De-registration',
      'Export permits',
      'Compliance documentation',
    ],
    image: '/images/service-compliance.png',
  },
  {
    serviceId: 'shipping-logistics',
    icon: Ship,
    title: 'Shipping & Logistics',
    description:
      'From inland collection to international delivery, we coordinate the full logistics chain with tracking, insurance, and flexible shipping options to your destination.',
    subServices: [
      'RoRo and container',
      'Insurance',
      'Shipment tracking',
      'Road delivery option',
    ],
    image: '/images/service-shipping.png',
  },
];

/* ────────────────────────────────────────────
   Animation variants
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
   Service Card
   ──────────────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const navigate = useNavigationStore((s) => s.navigate);
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
    >
      <button
        onClick={() =>
          navigate('service-detail' as PageKey, service.serviceId)
        }
        className="group w-full text-left"
      >
        <div className="sala-card h-full overflow-hidden p-0">
          {/* Service image */}
          <div className="relative h-44 overflow-hidden rounded-t">
            <Image src={service.image} alt={`${service.title} service`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
          {/* Top row: icon + title */}
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
              <Icon className="size-5 text-brand-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-[15px] font-semibold text-brand-navy sm:text-base">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-[14px] leading-relaxed text-brand-grey">
            {service.description}
          </p>

          {/* Sub-services */}
          <ul className="mt-5 space-y-2.5 border-t border-[#F0F2F5] pt-5">
            {service.subServices.map((sub) => (
              <li key={sub} className="flex items-center gap-2.5">
                <CheckCircle className="size-4 shrink-0 text-brand-gold" />
                <span className="text-[14px] font-medium text-brand-navy">
                  {sub}
                </span>
              </li>
            ))}
          </ul>

          {/* View Details link */}
          <span className="mt-6 inline-flex items-center gap-1.5 border-t border-[#F0F2F5] pt-5 text-[13px] font-semibold text-brand-gold transition-all duration-200 group-hover:gap-2.5">
            View Details
            <ArrowRight className="size-3.5" />
          </span>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Main Page
   ──────────────────────────────────────────── */
export default function ServicesPage() {
  const navigate = useNavigationStore((s) => s.navigate);

  return (
    <main>
      {/* ── Page Header ── */}
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
            <span className="sala-breadcrumb-current">Services</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>Our Services</h1>
            <p className="subtitle">
              End-to-end vehicle sourcing, inspection, export compliance, and
              logistics for clients across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="sala-section">
        <div className="sala-container">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.serviceId}
                service={service}
                index={index}
              />
            ))}
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
              Contact our team to discuss your vehicle requirements and we will
              provide a tailored solution.
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
