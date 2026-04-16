'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  ClipboardCheck,
  ShieldCheck,
  Ship,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Handshake,
} from 'lucide-react';
import { useNavigationStore, type PageKey } from '@/lib/store';

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */
type LucideIcon = React.ComponentType<React.SVGProps<SVGSVGElement> & { className?: string }>;

interface ProcessStep {
  step: number;
  label: string;
  description: string;
}

interface ServiceEntry {
  title: string;
  icon: LucideIcon;
  overview: string;
  capabilities: string[];
  process: ProcessStep[];
  whyMatters: {
    heading: string;
    points: { icon: LucideIcon; text: string }[];
  };
  relatedServices: string[]; // serviceId keys
  image: string;
}

/* ────────────────────────────────────────────
   Service data — 4 real services (all data preserved)
   ──────────────────────────────────────────── */
const serviceData: Record<string, ServiceEntry> = {
  'vehicle-sourcing': {
    title: 'Vehicle Sourcing',
    icon: Search,
    overview:
      'We identify and procure vehicles that match your exact specifications through our established supplier network across South Africa. Whether through auctions, dealer partnerships, or direct OEM channels, we ensure competitive pricing and reliable quality for every order. Our team works closely with you to understand your requirements, budget, and timeline before sourcing begins.',
    capabilities: [
      'Auction buying from certified South African vehicle auctions',
      'Dealer and OEM direct sourcing for new and pre-owned vehicles',
      'Custom specification procurement to meet exact client requirements',
      'Market price analysis to ensure competitive and transparent pricing',
      'Multi-brand access covering Toyota, Isuzu, Mitsubishi, Hino, Ford, and more',
    ],
    process: [
      {
        step: 1,
        label: 'Submit Your Requirements',
        description:
          'Tell us the make, model, year, and specifications you need. Our team reviews your request within 24 hours and provides initial guidance on pricing and availability.',
      },
      {
        step: 2,
        label: 'Source & Match',
        description:
          'We search auctions, dealer networks, and OEM channels to shortlist vehicles that precisely match your requirements and budget.',
      },
      {
        step: 3,
        label: 'Present Options',
        description:
          'You receive a curated selection of vehicles complete with photos, condition reports, and transparent pricing for your review and selection.',
      },
      {
        step: 4,
        label: 'Client Selection & Procurement',
        description:
          'Select your preferred vehicle and we proceed with procurement, inspection, compliance, and logistics arrangements on your behalf.',
      },
    ],
    whyMatters: {
      heading: 'Why Vehicle Sourcing Matters',
      points: [
        {
          icon: TrendingUp,
          text: 'Access to South Africa\'s widest vehicle supply network means better selection and pricing than sourcing independently.',
        },
        {
          icon: Shield,
          text: 'Our established supplier relationships and due diligence process protect you from fraudulent listings and misrepresented vehicles.',
        },
        {
          icon: Clock,
          text: 'We handle the time-intensive search process so you can focus on your business while we find the right vehicles.',
        },
        {
          icon: Handshake,
          text: 'Transparent pricing with no hidden fees — you see the full cost breakdown before committing to any purchase.',
        },
      ],
    },
    relatedServices: ['inspection-qa', 'export-compliance', 'shipping-logistics'],
    image: '/images/service-sourcing.png',
  },
  'inspection-qa': {
    title: 'Inspection & Quality Assurance',
    icon: ClipboardCheck,
    overview:
      'Every vehicle we source undergoes a rigorous quality assurance process before export. Our inspection protocol covers all critical systems — mechanical, electrical, structural, and cosmetic — and provides full documentation so you have complete confidence in your purchase. We do not compromise on quality; vehicles that fail our standards are rejected and returned to the supplier.',
    capabilities: [
      'Comprehensive multi-point mechanical and structural inspection',
      'Independent third-party inspection reports for unbiased assessment',
      'Full photo and video documentation of vehicle condition',
      'Engine diagnostics and fluid analysis',
      'Bodywork and paint condition verification for accident history',
    ],
    process: [
      {
        step: 1,
        label: 'Receive Vehicle at Inspection Facility',
        description:
          'The sourced vehicle is received at our dedicated inspection facility and logged into our quality assurance tracking system.',
      },
      {
        step: 2,
        label: 'Multi-Point Inspection',
        description:
          'Certified inspectors perform a thorough check covering mechanical, electrical, structural, and cosmetic condition using standardised checklists.',
      },
      {
        step: 3,
        label: 'Report & Documentation',
        description:
          'A detailed inspection report is compiled with third-party verification, high-resolution photographs, and video documentation.',
      },
      {
        step: 4,
        label: 'Approval or Rejection',
        description:
          'Only vehicles that pass our quality standards proceed to export. Rejected vehicles are returned to the supplier and alternatives are sourced.',
      },
    ],
    whyMatters: {
      heading: 'Why Inspection & QA Matters',
      points: [
        {
          icon: Shield,
          text: 'Protects your investment by ensuring you only pay for vehicles that meet agreed-upon quality standards.',
        },
        {
          icon: TrendingUp,
          text: 'Reduces the risk of costly post-delivery repairs and downtime by catching issues before export.',
        },
        {
          icon: Handshake,
          text: 'Full documentation gives you verifiable proof of vehicle condition for insurance, registration, and resale purposes.',
        },
        {
          icon: Clock,
          text: 'Catching defects early avoids delays in the export process and prevents disputes upon delivery.',
        },
      ],
    },
    relatedServices: ['vehicle-sourcing', 'export-compliance', 'shipping-logistics'],
    image: '/images/service-inspection.png',
  },
  'export-compliance': {
    title: 'Export & Compliance',
    icon: ShieldCheck,
    overview:
      'Our compliance team manages all regulatory documentation and permits required for both South African export and destination country import. We ensure every vehicle transfer is fully legal, properly documented, and free of compliance risks. With deep knowledge of SADC and East African import regulations, we handle the paperwork so you do not have to.',
    capabilities: [
      'Vehicle de-registration with South African authorities',
      'Export permit and certificate acquisition',
      'Full compliance documentation for both export and import requirements',
      'Destination country import regulation guidance',
      'Letter of credit and customs documentation support',
    ],
    process: [
      {
        step: 1,
        label: 'De-Registration Initiation',
        description:
          'We initiate the vehicle de-registration process with the relevant South African authorities and obtain the necessary clearance certificates.',
      },
      {
        step: 2,
        label: 'Export Permits & Certificates',
        description:
          'All required export permits, roadworthiness certificates, and clearance documents are obtained from the issuing bodies on your behalf.',
      },
      {
        step: 3,
        label: 'Compliance Documentation Package',
        description:
          'We prepare and verify the full set of compliance documentation tailored to your destination country\'s specific import requirements.',
      },
      {
        step: 4,
        label: 'Final Clearance Confirmation',
        description:
          'Once all documentation is verified and approved, we obtain the export clearance certificate and the vehicle is cleared for shipping logistics.',
      },
    ],
    whyMatters: {
      heading: 'Why Export & Compliance Matters',
      points: [
        {
          icon: Shield,
          text: 'Non-compliant shipments risk seizure, fines, or return — our process eliminates these risks entirely.',
        },
        {
          icon: Clock,
          text: 'Incorrect documentation is the single biggest cause of export delays. Our expertise keeps your timeline on track.',
        },
        {
          icon: TrendingUp,
          text: 'Proper documentation streamlines customs clearance at your destination, reducing demurrage and port charges.',
        },
        {
          icon: Handshake,
          text: 'We stay current on changing regulations across 7 African markets so you do not have to.',
        },
      ],
    },
    relatedServices: ['vehicle-sourcing', 'inspection-qa', 'shipping-logistics'],
    image: '/images/service-compliance.png',
  },
  'shipping-logistics': {
    title: 'Shipping & Logistics',
    icon: Ship,
    overview:
      'From inland collection to international delivery, we coordinate the full logistics chain. With flexible shipping methods including Roll-on/Roll-off (RoRo) and container shipping, comprehensive insurance coverage, and real-time tracking, your vehicle reaches its destination safely and on schedule. We also offer road delivery options for landlocked destinations.',
    capabilities: [
      'Roll-on/Roll-off (RoRo) and container shipping options',
      'Comprehensive marine and transit insurance coverage',
      'Real-time shipment tracking from departure to arrival',
      'Road delivery coordination for landlocked destinations',
      'Inland collection and vehicle preparation before export',
    ],
    process: [
      {
        step: 1,
        label: 'Collection & Preparation',
        description:
          'The vehicle is collected from the supplier or inspection facility and prepared for transport, including cleaning, protective wrapping, and documentation handover.',
      },
      {
        step: 2,
        label: 'Shipping Method Selection',
        description:
          'We arrange the most suitable shipping method — RoRo or container — based on vehicle type, destination port, and your preference.',
      },
      {
        step: 3,
        label: 'Insurance & Tracking Activation',
        description:
          'Comprehensive insurance cover is arranged and real-time shipment tracking is activated from departure to arrival at the destination port.',
      },
      {
        step: 4,
        label: 'Port Processing & Final Delivery',
        description:
          'We coordinate port processing, customs clearance at destination, and road delivery to your specified address if required.',
      },
    ],
    whyMatters: {
      heading: 'Why Shipping & Logistics Matters',
      points: [
        {
          icon: Shield,
          text: 'Comprehensive insurance ensures you are protected against loss or damage during transit.',
        },
        {
          icon: Clock,
          text: 'Real-time tracking and proactive communication mean you always know where your vehicle is and when to expect delivery.',
        },
        {
          icon: TrendingUp,
          text: 'Our logistics partnerships secure competitive freight rates and reliable schedules across African shipping routes.',
        },
        {
          icon: Handshake,
          text: 'Door-to-port and port-to-door options provide flexibility for clients in both coastal and landlocked destinations.',
        },
      ],
    },
    relatedServices: ['vehicle-sourcing', 'inspection-qa', 'export-compliance'],
    image: '/images/service-shipping.png',
  },
};

/* ────────────────────────────────────────────
   Helper: get service entry by id
   ──────────────────────────────────────────── */
function getServiceById(id: string) {
  return serviceData[id] ?? null;
}

/* ────────────────────────────────────────────
   Animation helpers
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
   Breadcrumb
   ──────────────────────────────────────────── */
function Breadcrumb({ serviceName }: { serviceName: string }) {
  const navigate = useNavigationStore((s) => s.navigate);
  return (
    <nav aria-label="Breadcrumb" className="sala-breadcrumb">
      <button onClick={() => navigate('home')} className="sala-breadcrumb-link">
        Home
      </button>
      <span className="sala-breadcrumb-sep">/</span>
      <button onClick={() => navigate('services')} className="sala-breadcrumb-link">
        Services
      </button>
      <span className="sala-breadcrumb-sep">/</span>
      <span className="sala-breadcrumb-current">{serviceName}</span>
    </nav>
  );
}

/* ────────────────────────────────────────────
   Step card in the process timeline — navy number circles
   ──────────────────────────────────────────── */
function StepCard({
  step,
  label,
  description,
  index,
  isLast,
}: {
  step: number;
  label: string;
  description: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={fadeUp}
      className="relative flex gap-4"
    >
      {/* Timeline connector */}
      <div className="flex flex-col items-center">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
          {step}
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-[#E2E5EA]" />
        )}
      </div>

      {/* Content */}
      <div className={isLast ? 'pb-0' : 'pb-10'}>
        <h4 className="mb-1 text-[14px] font-semibold text-brand-navy">
          {label}
        </h4>
        <p className="text-[14px] leading-relaxed text-brand-grey">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Related Service Card — uses sala-card
   ──────────────────────────────────────────── */
function RelatedServiceCard({
  serviceId,
  index,
}: {
  serviceId: string;
  index: number;
}) {
  const navigate = useNavigationStore((s) => s.navigate);
  const service = getServiceById(serviceId);
  if (!service) return null;

  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      variants={fadeUp}
    >
      <button
        onClick={() => navigate('service-detail' as PageKey, serviceId)}
        className="group w-full text-left"
      >
        <div className="sala-card h-full p-5">
          <div className="flex items-start gap-3.5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-navy">
              <Icon className="size-4.5 text-brand-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[14px] font-semibold text-brand-navy group-hover:text-brand-gold transition-colors">
                {service.title}
              </h4>
              <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-brand-grey">
                {service.overview.slice(0, 100)}...
              </p>
            </div>
            <ArrowRight className="mt-1 size-4 shrink-0 text-brand-grey transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-gold" />
          </div>
        </div>
      </button>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   Not Found view
   ──────────────────────────────────────────── */
function ServiceNotFound() {
  const navigate = useNavigationStore((s) => s.navigate);
  return (
    <main className="min-h-screen">
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="mb-3 text-3xl font-semibold text-brand-navy sm:text-4xl">
            Service Not Found
          </h1>
          <p className="mb-8 max-w-md text-[14px] leading-relaxed text-brand-grey">
            The service you are looking for does not exist or has been removed.
            Please browse our services page for available options.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('services')}
              className="sala-btn-ghost"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </button>
            <button
              onClick={() => navigate('home')}
              className="sala-btn-primary"
            >
              Go Home
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/* ══════════════════════════════════════════════
   MAIN PAGE — 7-Section Reusable Template
   ══════════════════════════════════════════════ */
export default function ServiceDetailPage() {
  const serviceId = useNavigationStore((s) => s.serviceId);
  const navigate = useNavigationStore((s) => s.navigate);

  const service = serviceId ? serviceData[serviceId] : null;

  if (!service) {
    return <ServiceNotFound />;
  }

  const Icon = service.icon;

  return (
    <main>
      {/* ── SECTION 1: Service Title ── */}
      <section className="relative sala-page-header overflow-hidden">
        {/* Service banner image */}
        <div className="absolute inset-0">
          <Image src={service.image} alt={`${service.title} service banner`} fill className="object-cover" priority />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 to-brand-navy/60" />
        <div className="relative sala-container">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Breadcrumb serviceName={service.title} />
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
            className="flex items-center gap-4"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-white/10">
              <Icon className="size-6 text-brand-gold" />
            </div>
            <div>
              <p className="sala-label mb-2">Service</p>
              <h1>{service.title}</h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Overview ── */}
      <section className="sala-section">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-3xl"
          >
            <div className="sala-gold-line mb-4" />
            <h2 className="sala-heading">Overview</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-brand-grey sm:text-base">
              {service.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 3: Key Capabilities ── */}
      <section className="sala-section bg-brand-grey-pale">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="sala-section-header"
          >
            <div className="sala-gold-line mx-auto mb-4" />
            <h2 className="sala-heading">Key Capabilities</h2>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.capabilities.map((capability, i) => (
              <motion.div
                key={capability}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
                className="sala-card flex items-start gap-3 p-4"
              >
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-brand-gold" />
                <span className="text-[14px] font-medium text-brand-navy">
                  {capability}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Process Explanation ── */}
      <section className="sala-section">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="sala-section-header"
          >
            <div className="sala-gold-line mx-auto mb-4" />
            <h2 className="sala-heading">Our Process</h2>
            <p className="sala-heading-sub">
              A structured, transparent approach that keeps you informed at every stage.
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl">
            {service.process.map((item, index) => (
              <StepCard
                key={item.step}
                step={item.step}
                label={item.label}
                description={item.description}
                index={index}
                isLast={index === service.process.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Why This Matters — navy icon bg ── */}
      <section className="sala-section bg-brand-grey-pale">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="sala-section-header"
          >
            <div className="sala-gold-line mx-auto mb-4" />
            <h2 className="sala-heading">{service.whyMatters.heading}</h2>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {service.whyMatters.points.map((point, i) => {
              const PointIcon = point.icon;
              return (
                <motion.div
                  key={point.text.slice(0, 20)}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={fadeUp}
                  className="sala-card flex items-start gap-4 p-5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 shadow-sm">
                    <PointIcon className="size-5 text-brand-gold" />
                  </div>
                  <p className="text-[14px] leading-relaxed text-brand-navy">
                    {point.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Related Services ── */}
      <section className="sala-section">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="sala-section-header"
          >
            <div className="sala-gold-line mx-auto mb-4" />
            <h2 className="sala-heading">Related Services</h2>
            <p className="sala-heading-sub">
              Explore our other services that complement {service.title.toLowerCase()}.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {service.relatedServices.map((relatedId, i) => (
              <RelatedServiceCard
                key={relatedId}
                serviceId={relatedId}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
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
              Interested in our {service.title.toLowerCase()} service? Contact our
              team today and we will guide you through every step of the process.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button onClick={() => navigate('contact')} className="sala-btn-primary">
                Request a Vehicle
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => navigate('services')} className="sala-btn-secondary">
                View All Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
