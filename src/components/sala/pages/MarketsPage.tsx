'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Globe, Network, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigationStore } from '@/lib/store';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

const countries = [
  { name: 'Kenya', flag: '🇰🇪', description: 'Vehicle exports to Kenya with full compliance, customs clearance, and Mombasa port logistics.' },
  { name: 'Tanzania', flag: '🇹🇿', description: 'Export and delivery services via Dar es Salaam port with complete documentation support.' },
  { name: 'Zimbabwe', flag: '🇿🇼', description: 'Cross-border delivery with full documentation, customs clearance, and regulatory compliance.' },
  { name: 'Zambia', flag: '🇿🇲', description: 'Northern corridor exports with compliance and transport logistics to Lusaka and beyond.' },
  { name: 'Uganda', flag: '🇺🇬', description: 'Vehicle sourcing and export via the Northern Corridor with Kampala delivery coordination.' },
  { name: 'Malawi', flag: '🇲🇼', description: 'Dedicated export support through Beira and Durban corridors with import compliance.' },
  { name: 'DRC', flag: '🇨🇩', description: 'Export services to the Democratic Republic of Congo with logistics and customs support.' },
];

const expertiseItems = [
  {
    icon: Globe,
    title: 'Local Knowledge',
    description: 'Understanding of local import regulations and market requirements in each destination country.',
  },
  {
    icon: Network,
    title: 'Established Networks',
    description: 'Logistics partnerships and customs agent relationships across the region.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Support',
    description: 'Full documentation and compliance support tailored to each country\'s import requirements.',
  },
];

export default function MarketsPage() {
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
            <span className="sala-breadcrumb-current">Markets We Serve</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>Markets We Serve</h1>
            <p className="subtitle">Delivering quality vehicles across Africa</p>
          </motion.div>
        </div>
      </section>

      {/* ── Regional Overview ── */}
      <section className="sala-section">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy">
              <MapPin className="size-5 text-brand-gold" />
            </div>
            <p className="text-[14px] leading-relaxed text-brand-grey sm:text-base">
              Sala Investments serves clients across 7 countries in the African region.
              Our deep understanding of local regulations, market dynamics, and logistics
              networks enables seamless vehicle exports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Markets Banner ── */}
      <section className="pb-6">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={fadeUp}
          >
            <div className="relative h-56 overflow-hidden rounded-lg">
              <Image src="/images/markets-africa.png" alt="Durban harbour aerial view showing Africa trade routes" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/70 via-brand-navy/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <p className="pl-8 sm:pl-12 text-xl sm:text-2xl font-semibold text-white">
                  Serving 7 Countries Across Africa
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Countries Grid ── */}
      <section className="pb-12 lg:pb-16">
        <div className="sala-container">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, i) => (
              <motion.div
                key={country.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <div className="sala-card h-full p-5 sm:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl transition-transform duration-200 group-hover:scale-110">{country.flag}</span>
                    <h3 className="text-[15px] font-semibold text-brand-navy transition-colors duration-200 group-hover:text-brand-gold">
                      {country.name}
                    </h3>
                  </div>
                  <p className="text-[14px] leading-[1.7] text-brand-grey">
                    {country.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Expertise ── */}
      <section className="sala-section bg-brand-grey-pale">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="sala-section-header"
          >
            <div className="sala-gold-line mx-auto mb-4" />
            <h2 className="sala-heading">Regional Expertise</h2>
            <p className="sala-heading-sub">
              What sets us apart in cross-border vehicle exports
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseItems.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <div className="sala-card h-full p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <item.icon className="size-5 text-brand-gold" />
                  </div>
                  <h3 className="mb-2 text-[15px] font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-brand-grey">
                    {item.description}
                  </p>
                </div>
              </motion.div>
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
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2>Expanding to a New Market?</h2>
            <p className="subtitle">
              We are continuously growing our reach. Contact us to discuss vehicle
              export options for your country.
            </p>
            <button onClick={() => navigate('contact')} className="sala-btn-primary mt-8">
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
