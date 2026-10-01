"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Signal, AnimatedSignal } from "@/components/Signal";
import { PartnershipBadge } from "@/components/PartnershipBadge";

const services = [
  {
    title: "Software Engineering",
    description:
      "Scalable, resilient systems built with precision. From cloud-native platforms to enterprise architectures.",
    href: "/services/software-engineering",
    category: "SOFTWARE ENGINEERING",
    motif: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <rect x="20" y="20" width="80" height="80" rx="12" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <path d="M40 60h40M60 40v40" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" />
        <circle cx="60" cy="60" r="4" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
  {
    title: "AI & Data",
    description:
      "Intelligent systems that learn, adapt, and transform how organizations operate and decide.",
    href: "/services/ai-data",
    category: "AI & DATA",
    motif: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="35" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <circle cx="60" cy="60" r="6" fill="currentColor" className="text-accent" />
        <circle cx="60" cy="25" r="3" fill="currentColor" className="text-accent" />
        <circle cx="85" cy="75" r="3" fill="currentColor" className="text-accent" />
        <circle cx="35" cy="75" r="3" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
  {
    title: "Digital Products",
    description:
      "End-to-end product design and development. From concept to launch, engineered for real-world use.",
    href: "/services/digital-products",
    category: "DIGITAL PRODUCTS",
    motif: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <rect x="25" y="35" width="70" height="50" rx="6" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <path d="M25 45h70" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <circle cx="33" cy="40" r="1.5" fill="currentColor" className="text-accent" />
        <circle cx="40" cy="40" r="1.5" fill="currentColor" className="text-accent" />
        <circle cx="47" cy="40" r="1.5" fill="currentColor" className="text-accent" />
        <rect x="35" y="55" width="50" height="4" rx="2" className="text-accent/40" fill="currentColor" />
        <rect x="35" y="65" width="35" height="4" rx="2" className="text-text-secondary/20" fill="currentColor" />
        <rect x="35" y="75" width="40" height="4" rx="2" className="text-text-secondary/20" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Web & Digital Experience",
    description:
      "Performant, accessible, and beautifully engineered web platforms that serve global audiences.",
    href: "/services/web-digital",
    category: "WEB & UX",
    motif: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" className="text-text-secondary/30" />
        <ellipse cx="60" cy="60" rx="40" ry="15" stroke="currentColor" strokeWidth="0.5" className="text-text-secondary/30" />
        <ellipse cx="60" cy="60" rx="15" ry="40" stroke="currentColor" strokeWidth="0.5" className="text-text-secondary/30" />
        <circle cx="60" cy="60" r="3" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
  {
    title: "Brand & Creative",
    description:
      "Identity systems and creative direction grounded in strategy, crafted for long-term impact.",
    href: "/services/brand-creative",
    category: "BRAND & CREATIVE",
    motif: (
      <svg className="w-full h-full" viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path d="M40 85 L60 35 L80 85" stroke="currentColor" strokeWidth="1.5" className="text-text-secondary/30" />
        <path d="M45 70 L75 70" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" />
        <circle cx="60" cy="55" r="3" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
];

const projects = [
  {
    title: "Enterprise Cloud Platform",
    category: "Software Engineering",
    year: "2025",
    description:
      "A multi-tenant cloud orchestration platform processing 2M+ daily operations with 99.99% uptime.",
    href: "#",
    tags: ["Cloud", "Go", "Kubernetes", "AWS"],
  },
  {
    title: "AI-Powered Analytics Suite",
    category: "AI & Data",
    year: "2024",
    description:
      "Real-time predictive analytics platform reducing decision latency by 70% for a Fortune 500 retailer.",
    href: "#",
    tags: ["Python", "ML", "Spark", "GCP"],
  },
  {
    title: "Global Fintech Infrastructure",
    category: "Digital Products",
    year: "2024",
    description:
      "Core banking and payment infrastructure serving 15M+ users across 40 countries.",
    href: "#",
    tags: ["TypeScript", "Microservices", "PostgreSQL"],
  },
  {
    title: "Digital Experience Platform",
    category: "Web & Digital Experience",
    year: "2024",
    description:
      "A headless content platform powering 200+ brand properties with sub-second load times.",
    href: "#",
    tags: ["Next.js", "Node", "Vercel", "Contentful"],
  },
];

const principles = [
  {
    title: "Engineering First",
    description:
      "Technology is not an afterthought. Every decision is grounded in sound architecture, tested rigorously, and built to perform.",
  },
  {
    title: "Design Matters",
    description:
      "Great engineering deserves great design. We believe form and function are inseparable — one cannot succeed without the other.",
  },
  {
    title: "Built to Scale",
    description:
      "We design systems that grow with ambition. From startup to enterprise, our architectures accommodate tomorrow's demands.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We do not chase trends. We build durable partnerships and systems that deliver sustained value for years.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true" />
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-secondary text-text-secondary rounded-full border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Elyvoraq Technologies
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6"
            >
              <PartnershipBadge size="sm" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-text-primary leading-[1.1] mb-6"
            >
              Engineering digital{" "}
              <span className="relative inline-block">
                <span className="relative z-10">possibilities</span>
                <span
                  className="absolute bottom-1 left-0 right-0 h-3 bg-accent/30 -z-0"
                  aria-hidden="true"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10"
            >
              Elyvoraq builds intelligent software, digital products, and technology solutions
              that help ambitious organizations turn complex ideas into meaningful digital
              experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/contact" size="lg">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                Explore Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-20"
            >
              <Signal className="text-accent/40" width={280} height={50} />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.04]"
          aria-hidden="true"
        >
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
            <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
            <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
            <circle cx="250" cy="250" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-accent" />
            <line x1="50" y1="250" x2="450" y2="250" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
            <line x1="250" y1="50" x2="250" y2="450" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          </svg>
        </motion.div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-16">
            {["SOFTWARE ENGINEERING", "AI & DATA", "DIGITAL PRODUCTS", "WEB & UX", "BRAND & CREATIVE"].map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary whitespace-nowrap"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">
                Services built for the
                <br />
                complexity of modern business
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mt-4">
                We operate at the intersection of engineering, design, and strategy. Every
                engagement is tailored, not templated.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08 } } }}
                  className="group relative p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-secondary">
                      {service.category}
                    </span>
                  </div>
                  <div className="w-16 h-16 mb-6 text-accent/70 group-hover:text-accent transition-colors duration-300">
                    {service.motif}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all duration-300"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                Selected Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">
                Projects that reflect
                <br />
                real engineering capability
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mt-4">
                From global platforms to enterprise infrastructure, our work demonstrates
                depth, precision, and measurable impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative p-8 lg:p-10 bg-background rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-text-secondary tracking-widest">
                      {project.year}
                    </span>
                  </div>
                  <div className="mb-6 h-40 rounded-xl bg-secondary border border-border overflow-hidden relative">
                    <div className="absolute inset-0 opacity-60" aria-hidden="true">
                      <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id={`projGrad${i}`} x1="0" y1="0" x2="400" y2="160">
                            <stop offset="0%" stopColor="#071A1C" />
                            <stop offset="50%" stopColor="#20D6C7" />
                            <stop offset="100%" stopColor="#D8C39A" />
                          </linearGradient>
                        </defs>
                        <path d="M0 80 C 80 80, 100 40, 160 40 S 240 120, 320 80 S 380 60, 400 80" stroke={`url(#projGrad${i})`} strokeWidth="2" fill="none" opacity="0.6" />
                        <circle cx="320" cy="80" r="4" fill="#20D6C7" opacity="0.8" />
                        <rect x="40" y="50" width="60" height="4" rx="2" fill="#20D6C7" opacity="0.4" />
                        <rect x="40" y="60" width="40" height="4" rx="2" fill="#D8C39A" opacity="0.4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[10px] font-mono text-text-secondary bg-secondary rounded-full border border-border tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
                  >
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button href="/work" variant="secondary">
                View All Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(32,214,199,0.04),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
                Technology Without Borders
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Local expertise.
                <br />
                Expanded capability.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Through our service-provider relationship with TATATECH Technology LLC,
                ELYVORAQ connects businesses in Ethiopia with a broader range of digital,
                software and technology services while maintaining a local understanding of
                the market.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services/tatatech" variant="secondary" size="lg">
                Explore Partnership Services
              </Button>
              <Button href="/partnerships" variant="ghost" size="lg">
                About the Partnership
              </Button>
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
                Built in Ethiopia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Built in Ethiopia.
                <br />
                Designed for everywhere.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                ELYVORAQ is building from Ethiopia with a global outlook — combining local
                understanding, engineering capability and international collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  Local Roots
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Founded and operated from Ethiopia, with deep understanding of the local
                  market, culture, and business environment.
                </p>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  Global Standards
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Engineering discipline and delivery standards aligned with international
                  technology companies.
                </p>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  International Reach
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Serving local Ethiopian clients while collaborating with international
                  partners and clients.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(32,214,199,0.04),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
                Elyvoraq Labs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Where we experiment
                <br />
                with what&rsquo;s next
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
                Our R&D division explores the edges of what is possible — from experimental AI
                to next-generation systems that shape our future work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI", desc: "Applied machine learning and generative systems research.", status: "ACTIVE" },
                { title: "Automation", desc: "Intelligent orchestration and autonomous operation systems.", status: "ACTIVE" },
                { title: "Emerging Technology", desc: "Next-generation interfaces, protocols, and computing paradigms.", status: "EXPLORATORY" },
                { title: "Experimental Products", desc: "Proprietary tools built to solve problems we encounter in client work.", status: "BETA" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative p-8 bg-surface/80 backdrop-blur-sm rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase">
                      {item.title}
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-mono text-accent bg-accent/10 rounded-full border border-accent/20 tracking-wider">
                      {item.status}
                    </span>
                  </div>
                  <div className="mb-6 h-24 relative" aria-hidden="true">
                    <svg viewBox="0 0 200 80" className="w-full h-full">
                      <motion.path
                        d="M0 40 C 40 40, 60 10, 100 10 S 160 70, 200 40"
                        stroke="url(#labsSignal)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: i * 0.2 }}
                      />
                      <defs>
                        <linearGradient id="labsSignal" x1="0" y1="0" x2="200" y2="0">
                          <stop offset="0%" stopColor="#071A1C" />
                          <stop offset="50%" stopColor="#20D6C7" />
                          <stop offset="100%" stopColor="#D8C39A" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-text-secondary tracking-wider">
                    <span>ELYVORAQLABS</span>
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    <span>0x{(i * 173 + 42).toString(16).slice(0, 4).toUpperCase()}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <AnimatedSignal />
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <Section>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4 block">
                Why Elyvoraq
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Built for complexity.
                <br />
                Designed for people.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              {principles.map((principle, i) => (
                <motion.div
                  key={principle.title}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } } }}
                  className="p-10 lg:p-12 bg-surface hover:bg-secondary transition-colors duration-500"
                >
                  <div className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <Section>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Ready to build something
                <br />
                that matters?
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                We work with organizations that value precision, long-term thinking, and
                genuine technical partnership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" size="lg">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/about" variant="ghost" size="lg">
                  Learn About Us
                </Button>
              </div>
            </div>
          </Section>
        </div>
      </section>
    </div>
  );
}
