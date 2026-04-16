'use client';

import Image from 'next/image';
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  Send,
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
   Real company contact details ONLY
   ──────────────────────────────────────────── */
const WHATSAPP_NUMBER = '27795228493';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Sala%20Investments%2C%20I%20am%20interested%20in%20your%20vehicle%20sourcing%20services.`;

const subjectOptions = [
  'Vehicle Sourcing Enquiry',
  'Export Compliance Query',
  'Logistics & Shipping',
  'General Enquiry',
  'Partnership Opportunity',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

/* ══════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════ */
export default function ContactPage() {
  const navigate = useNavigationStore((s) => s.navigate);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <span className="sala-breadcrumb-current">Contact</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <h1>Contact Us</h1>
            <p className="subtitle">
              Get in touch with our team to discuss your vehicle requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Two-Column: Details + Form ── */}
      <section className="sala-section">
        <div className="sala-container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
            {/* ── Left: Contact Details ── */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="sala-gold-line mb-4" />
              <h2 className="sala-heading">Our Office</h2>

              {/* Office image */}
              <div className="relative mt-6 h-48 overflow-hidden rounded-lg">
                <Image src="/images/contact-office.png" alt="Sala Investments office building exterior in Johannesburg" fill className="object-cover" />
              </div>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <MapPin className="size-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="sala-label">Address</p>
                    <p className="mt-1 text-[14px] font-medium leading-relaxed text-brand-navy">
                      Regus Sunninghill, West Wing, Ground Floor
                      <br />
                      6 Kikuyu Road, Sunninghill
                      <br />
                      Johannesburg, 2191
                      <br />
                      South Africa
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <Phone className="size-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="sala-label">Phone</p>
                    <div className="mt-1 space-y-0.5">
                      <a
                        href="tel:+27795228493"
                        className="block text-[14px] font-medium text-brand-navy transition-colors hover:text-brand-gold"
                      >
                        +27 79 522 8493
                      </a>
                      <a
                        href="tel:+27733091446"
                        className="block text-[14px] font-medium text-brand-navy transition-colors hover:text-brand-gold"
                      >
                        +27 73 309 1446
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <Mail className="size-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="sala-label">Email</p>
                    <a
                      href="mailto:info@salainv.com"
                      className="mt-1 block text-[14px] font-medium text-brand-navy transition-colors hover:text-brand-gold"
                    >
                      info@salainv.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-navy shadow-sm">
                    <Clock className="size-5 text-brand-gold" />
                  </div>
                  <div>
                    <p className="sala-label">Operating Hours</p>
                    <p className="mt-1 text-[14px] font-medium text-brand-navy">
                      Mon–Fri 08:00–17:00 CAT
                    </p>
                    <p className="mt-0.5 text-[13px] text-brand-grey">
                      Available after hours for emergency enquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp quick note */}
              <div className="mt-8 sala-card p-5">
                <p className="text-[14px] leading-relaxed text-brand-grey">
                  For urgent or after-hours enquiries, please reach out via
                  WhatsApp for a quicker response.
                </p>
              </div>
            </motion.div>

            {/* ── Right: Contact Form ── */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="flex min-h-[400px] flex-col items-center justify-center sala-card p-8 text-center sm:p-12"
                >
                  <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-brand-gold/10">
                    <CheckCircle className="size-7 text-brand-gold" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-brand-navy sm:text-2xl">
                    Message Sent Successfully
                  </h3>
                  <p className="max-w-md text-[14px] leading-relaxed text-brand-grey">
                    Thank you for contacting Sala Investments. Our team will
                    respond within 24 hours.
                  </p>
                  <button onClick={() => navigate('home')} className="sala-btn-primary mt-6">
                    Back to Home
                  </button>
                </motion.div>
              ) : (
                <div className="sala-card p-6 sm:p-8">
                  <h2 className="sala-heading mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-[14px] font-medium text-brand-navy">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy placeholder:text-brand-grey-light focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[14px] font-medium text-brand-navy">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy placeholder:text-brand-grey-light focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-[14px] font-medium text-brand-navy">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy placeholder:text-brand-grey-light focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      />
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label htmlFor="country" className="text-[14px] font-medium text-brand-navy">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Your country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy placeholder:text-brand-grey-light focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-[14px] font-medium text-brand-navy">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      >
                        <option value="" disabled>
                          Select a subject
                        </option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[14px] font-medium text-brand-navy">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your vehicle requirements..."
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-md border border-[#E2E5EA] bg-white px-3 py-2.5 text-[14px] text-brand-navy placeholder:text-brand-grey-light focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="sala-btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp Direct ── */}
      <section className="pb-12 lg:pb-16">
        <div className="sala-container">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="rounded-lg border border-[#25D366]/20 bg-[#25D366]/5 p-6 sm:p-8">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15">
                  <MessageCircle className="size-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-brand-navy">
                    Prefer WhatsApp?
                  </h3>
                  <p className="mt-1 text-[14px] text-brand-grey">
                    Chat with us directly on{' '}
                    <span className="font-medium text-brand-navy">
                      +27 79 522 8493
                    </span>{' '}
                    for a quicker response.
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <span className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#1EBE57]">
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
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
            <h2>Ready to Source a Vehicle?</h2>
            <p className="subtitle">
              Submit your vehicle requirements and our team will provide a tailored
              sourcing solution within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    country: '',
                    subject: 'Vehicle Sourcing Enquiry',
                    message: '',
                  });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="sala-btn-primary"
              >
                Request a Vehicle
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <span className="sala-btn-secondary">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
