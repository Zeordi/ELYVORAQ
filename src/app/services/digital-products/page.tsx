"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "SaaS platforms",
  "MVP development",
  "Web platforms",
  "Business applications",
  "Customer portals",
  "Internal systems",
  "Product strategy",
  "Product engineering",
];

const process = [
  {
    step: "01",
    title: "Idea",
    description:
      "Market validation, user research, and strategic framing before any design or engineering begins.",
  },
  {
    step: "02",
    title: "Prototype",
    description:
      "Rapid prototyping, interaction design, and validated learning through real user feedback.",
  },
  {
    step: "03",
    title: "Product",
    description:
      "Full engineering build with production architecture, security, and performance built in.",
  },
  {
    step: "04",
    title: "Scale",
    description:
      "Growth iteration, feature expansion, and infrastructure evolution as adoption increases.",
  },
];

const selectedWork = [
  {
    title: "Global Fintech Infrastructure",
    category: "Digital Products",
    year: "2024",
    description:
      "Core banking and payment infrastructure serving 15M+ users across 40 countries.",
    tags: ["TypeScript", "Microservices", "PostgreSQL", "Stripe"],
  },
];

export default function DigitalProductsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Digital Products
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              End-to-end product design and development from concept to launch, engineered
              for real-world use.
            </p>
          </div>
        </Section>

        <section className="mb-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Capabilities
              </h2>
              <p className="text-text-secondary max-w-2xl">
                From initial concept through scale, we build products that people actually use.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex items-start gap-3 p-5 bg-surface rounded-xl border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{cap}</span>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Process
              </h2>
              <p className="text-text-secondary max-w-2xl">
                A repeatable framework for taking products from zero to scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
              {process.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="p-6 bg-surface hover:bg-secondary transition-colors duration-500"
                >
                  <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Product Journey
              </h2>
              <p className="text-text-secondary max-w-2xl">
                Every product moves through four stages. We are with you at each one.
              </p>
            </div>
            <div className="relative p-8 lg:p-12 bg-surface rounded-2xl border border-border overflow-hidden">
              <svg viewBox="0 0 800 200" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <linearGradient id="prodGrad" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#071A1C" />
                    <stop offset="33%" stopColor="#20D6C7" />
                    <stop offset="66%" stopColor="#20D6C7" />
                    <stop offset="100%" stopColor="#D8C39A" />
                  </linearGradient>
                </defs>
                <line x1="60" y1="100" x2="740" y2="100" stroke="currentColor" strokeWidth="1" className="text-border" />
                {[160, 400, 640].map((x, i) => (
                  <g key={x}>
                    <circle cx={x} cy="100" r="4" fill="currentColor" className="text-accent" />
                    {i < 2 && (
                      <line x1={x + 8} y1="100" x2={x === 160 ? 392 : 632} y2="100" stroke="currentColor" strokeWidth="1" className="text-border" />
                    )}
                  </g>
                ))}
                <motion.path
                  d="M60 100 C 140 100, 180 40, 280 40 S 380 160, 480 100 S 580 40, 680 40 S 740 100, 740 100"
                  stroke="url(#prodGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                {[
                  { x: 100, label: "Idea" },
                  { x: 300, label: "Prototype" },
                  { x: 500, label: "Product" },
                  { x: 700, label: "Scale" },
                ].map((item) => (
                  <text
                    key={item.label}
                    x={item.x}
                    y="170"
                    textAnchor="middle"
                    className="text-[10px] font-mono fill-text-secondary tracking-widest uppercase"
                  >
                    {item.label}
                  </text>
                ))}
              </svg>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Selected Work
              </h2>
            </div>
            <div className="space-y-6">
              {selectedWork.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className="group p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono text-text-secondary">{project.category}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="text-xs font-mono text-text-secondary">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[10px] font-mono text-text-secondary bg-secondary rounded-full border border-border tracking-wider uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 flex-shrink-0"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <Section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Have a product to build?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            We partner with founders and product leaders to turn vision into reality.
          </p>
          <Button href="/contact" size="lg">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Section>
      </div>
    </div>
  );
}
