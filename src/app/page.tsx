import Navbar from "@/components/sala/Navbar";

const services = [
  {
    title: "Strategic Advisory",
    text: "Commercial strategy, investment readiness, and market positioning for high-value opportunities.",
  },
  {
    title: "Transaction Support",
    text: "Structured support across partnerships, negotiations, and capital-facing engagements.",
  },
  {
    title: "Market Entry",
    text: "Practical route-to-market planning for growth across Zambia, South Africa, and regional corridors.",
  },
  {
    title: "Execution Oversight",
    text: "Disciplined implementation support to move from concept to operational traction.",
  },
];

const sectors = [
  "Logistics & Mobility",
  "Infrastructure",
  "Trade & Industrial Services",
  "Energy & Resource-Linked Projects",
];

const insights = [
  "Investment-led business design for African growth markets",
  "Positioning local operators for cross-border expansion",
  "Commercial execution frameworks for emerging ventures",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.07),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.28em] text-amber-300/80">
              Premium Advisory Platform
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Sala Investments
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              A premium investment and advisory brand focused on strategic growth,
              commercial structuring, and market execution across African opportunity corridors.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Start a Conversation
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.22em] text-white/50">
              Positioning Statement
            </p>
            <div className="mt-6 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-white/50">Focus</p>
                <p className="mt-2 text-lg font-medium">Investment, advisory, execution</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-white/50">Approach</p>
                <p className="mt-2 text-lg font-medium">Commercially disciplined, regionally aware</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm text-white/50">Geography</p>
                <p className="mt-2 text-lg font-medium">Southern Africa and cross-border growth markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">About</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Built for credibility, clarity, and market confidence
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-white/70">
              Sala Investments is positioned as a premium platform for strategic advisory,
              investment-facing communication, and commercially grounded execution support.
              The brand is designed to present authority, trust, and readiness for serious engagements.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Core service lines
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.75rem] border border-white/10 bg-black/30 p-8"
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Sectors</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Where the brand can credibly operate
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-5 text-lg text-white/85"
            >
              {sector}
            </div>
          ))}
        </div>
      </section>

      <section id="insights" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Insights</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Thought leadership direction
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-black/30 p-8"
              >
                <p className="text-base leading-7 text-white/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-white/5 p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-amber-300/80">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Ready for serious conversations
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
            Use this section for founder contact details, consultation requests, investor introductions,
            or a formal inquiry path connected to your preferred CRM or email workflow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:info@salainvestments.com"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black"
            >
              Email Us
            </a>
            <a
              href="#home"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
            >
              Back to Top
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
