"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Signal, AnimatedSignal } from "@/components/Signal";

const services = [
  {
    title: "Software Engineering",
    description:
      "Scalable, resilient systems built with precision. From cloud-native platforms to enterprise architectures.",
    href: "/services/software-engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "AI & Data",
    description:
      "Intelligent systems that learn, adapt, and transform how organizations operate and decide.",
    href: "/services/ai-data",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Digital Products",
    description:
      "End-to-end product design and development. From concept to launch, engineered for real-world use.",
    href: "/services/digital-products",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Web & Digital Experience",
    description:
      "Performant, accessible, and beautifully engineered web platforms that serve global audiences.",
    href: "/services/web-digital",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Brand & Creative",
    description:
      "Identity systems and creative direction grounded in strategy, crafted for long-term impact.",
    href: "/services/brand-creative",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.36 3.36a3 3 0 005.78-1.128 2.25 2.25 0 012.4-2.245 4.5 4.5 0 00-8.4 2.245c0 .399.078.78.22 1.128zm0 0a15.998 15.998 0 00-3.388 1.62m5.043.025a15.994 15.994 0 01-1.622 3.395M3.75 21h16.5a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "12", label: "Countries Served" },
  { value: "98%", label: "Client Retention" },
  { value: "40+", label: "Engineers & Designers" },
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
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wide uppercase bg-secondary text-text-secondary rounded-full border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Elyvoraq Technologies
              </span>
            </div>

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
                  className="absolute bottom-1 left-0 right-0 h-3 bg-accent/20 -z-0"
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
              We are a software engineering and digital innovation company. We design,
              build, and scale intelligent digital products for serious businesses and
              international organizations.
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
                View Our Work
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
          <Section className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } } }} className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </Section>
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary text-accent mb-6 group-hover:bg-accent/10 transition-colors duration-300">
                    {service.icon}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  Selected Work
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  Projects that reflect
                  <br />
                  real engineering capability
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-8">
                  From global platforms to enterprise infrastructure, our work demonstrates
                  depth, precision, and measurable impact.
                </p>
                <Button href="/work" variant="secondary">
                  View All Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Enterprise Cloud Platform",
                    category: "Software Engineering",
                    year: "2025",
                  },
                  {
                    title: "AI-Powered Analytics Suite",
                    category: "AI & Data",
                    year: "2024",
                  },
                  {
                    title: "Global Fintech Infrastructure",
                    category: "Digital Products",
                    year: "2024",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={project.title}
                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: i * 0.1 } } }}
                    className="group p-6 bg-background rounded-xl border border-border hover:border-accent/30 transition-all duration-500 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-mono text-text-secondary">{project.category}</span>
                      <span className="text-xs font-mono text-text-secondary">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
        </div>
      </section>

      <section className="border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                Elyvoraq Labs
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                Research, experimentation,
                <br />
                and proprietary innovation
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                Our R&D division explores the edges of what is possible — from experimental AI
                to next-generation systems that shape our future work.
              </p>
              <Button href="/labs" variant="secondary">
                Explore Labs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
