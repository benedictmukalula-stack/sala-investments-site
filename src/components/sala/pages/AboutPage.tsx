'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Truck, Globe, Calendar, Users, Award, ShieldCheck, Package, Heart, ArrowRight,
} from 'lucide-react';
import { useNavigationStore } from '@/lib/store';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' },
  }),
};

const stats = [
  { number: '850+', label: 'Vehicles Exported', icon: Truck },
  { number: '7', label: 'Countries Served', icon: Globe },
  { number: '8', label: 'Years in Business', icon: Calendar },
  { number: '99%', label: 'Client Retention', icon: Users },
];

const features = [
  {
    icon: Award,
    title: 'Experienced Team',
    description: '8 years of proven expertise in vehicle sourcing and export across Africa.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Assurance',
    description: 'Full regulatory compliance ensuring smooth, hassle-free vehicle exports.',
  },
  {
    icon: Package,
    title: 'End-to-End Service',
    description: 'From sourcing to delivery — a single point of contact for the entire process.',
  },
  {
    icon: Heart,
    title: 'Client-Centric Approach',
    description: '99% client retention speaks to our dedication to exceeding expectations.',
  },
];

export default function AboutPage() {
  const { navigate } = useNavigationStore();

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
            <span className="sala-breadcrumb-current">About Us</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>About Sala Investments</h1>
            <p className="subtitle">Driving Quality Vehicles Across Africa</p>
          </motion.div>
        </div>
      </section>

      {/* ── Company Story ── */}
      <section className="sala-section">
        <div className="sala-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="sala-gold-line mb-4" />
              <h2 className="sala-heading">Our Story</h2>
              <p className="mt-6 text-[14px] leading-[1.8] text-brand-grey sm:text-[15px]">
                Sala Investments was founded in 2018 in Johannesburg, South Africa, with a clear
                vision: to bridge the gap between quality South African vehicles and buyers across
                the African continent. What began as a small operation sourcing vehicles for
                clients in neighbouring countries has grown into a trusted export partner serving
                seven markets across Southern and East Africa.
              </p>
              <p className="mt-4 text-[14px] leading-[1.8] text-brand-grey sm:text-[15px]">
                Our founders recognised that many African buyers faced significant challenges when
                sourcing vehicles — limited access to reliable suppliers, opaque pricing, and
                complex export procedures. Sala Investments was established to solve these problems
                by offering a single, trusted point of contact for the entire vehicle sourcing and
                export journey.
              </p>
              <div className="mt-8 space-y-4">
                <div className="border-l-2 border-brand-gold pl-5 py-1">
                  <p className="sala-label mb-2">Our Mission</p>
                  <p className="text-[14px] leading-relaxed text-brand-navy sm:text-[15px]">
                    To provide businesses and individuals across Africa with seamless access to
                    quality, competitively priced vehicles from South Africa — delivered with
                    transparency, reliability, and full compliance at every step.
                  </p>
                </div>
                <div className="border-l-2 border-brand-navy pl-5 py-1">
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-brand-navy mb-2">Our Values</p>
                  <p className="text-[14px] leading-relaxed text-brand-grey sm:text-[15px]">
                    Integrity, transparency, and client commitment drive everything we do. We
                    believe in building long-term relationships founded on trust, consistent
                    quality, and honest communication.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="relative rounded-lg overflow-hidden h-72 lg:h-80 ring-1 ring-brand-gold/20">
                <Image src="/images/about-office.png" alt="Sala Investments corporate office lobby in Johannesburg" fill className="object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      custom={i + 2}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="sala-card p-5 text-center"
                    >
                      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy">
                        <Icon className="h-5 w-5 text-brand-gold" />
                      </div>
                      <div className="text-2xl font-semibold text-brand-navy">{stat.number}</div>
                      <div className="mt-1 text-[13px] font-medium text-brand-grey">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
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
            <h2 className="sala-heading">Why Choose Sala Investments?</h2>
            <p className="sala-heading-sub">
              Our commitment to quality, compliance, and client satisfaction sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="sala-card h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy shadow-sm mb-4">
                    <feature.icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-brand-grey">
                    {feature.description}
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
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto max-w-2xl text-center"
          >
            <h2>Get in Touch</h2>
            <p className="subtitle">
              Ready to learn more about how Sala Investments can serve your vehicle
              sourcing and export needs? Reach out to our team.
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
