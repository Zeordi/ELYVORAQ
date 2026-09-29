"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "Full-stack development",
  "Frontend engineering",
  "Backend systems",
  "API design & integration",
  "Database architecture",
  "Enterprise systems",
  "Cloud infrastructure",
  "System architecture",
  "Maintenance & optimization",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your domain, constraints, and goals before writing a single line of code.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "System design, technology selection, and modular planning aligned with long-term scale.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Senior engineers implement with testability, observability, and performance built in.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "CI/CD pipelines, infrastructure as code, and staged rollout with monitoring.",
  },
  {
    step: "05",
    title: "Evolve",
    description:
      "Ongoing optimization, refactoring, and feature evolution as your system grows.",
  },
];

const selectedWork = [
  {
    title: "Enterprise Cloud Platform",
    category: "Software Engineering",
    year: "2025",
    description:
      "Multi-tenant orchestration platform processing 2M+ daily operations with 99.99% uptime.",
    tags: ["Go", "Kubernetes", "AWS", "gRPC"],
  },
  {
    title: "Global Fintech Infrastructure",
    category: "Software Engineering",
    year: "2024",
    description:
      "Core banking APIs and transaction processing for 15M+ users across 40 countries.",
    tags: ["TypeScript", "PostgreSQL", "Kafka", "Terraform"],
  },
];

export default function SoftwareEngineeringPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Software Engineering
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Scalable, resilient systems built with precision. From cloud-native platforms
              to enterprise architectures that perform at the highest level.
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
                Full-spectrum engineering across the modern technology stack.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-border"
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
                A proven methodology refined across dozens of enterprise engagements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden">
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
                Technology Visualization
              </h2>
              <p className="text-text-secondary max-w-2xl">
                Abstract representation of a modern distributed system architecture.
              </p>
            </div>
            <div className="relative p-8 lg:p-12 bg-surface rounded-2xl border border-border overflow-hidden">
              <svg viewBox="0 0 800 320" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <linearGradient id="archGrad" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#071A1C" />
                    <stop offset="50%" stopColor="#20D6C7" />
                    <stop offset="100%" stopColor="#D8C39A" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="160" x2="800" y2="160" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                {[100, 250, 400, 550, 700].map((x) => (
                  <g key={x}>
                    <rect x={x - 40} y={x === 400 ? 120 : 110} width="80" height="100" rx="8" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" fill="none" />
                    <circle cx={x} cy={x === 400 ? 160 : 150} r="4" fill="currentColor" className="text-accent" />
                    {x !== 400 && (
                      <>
                        <line x1={x} y1={x === 100 ? 150 : 110} x2="400" y2="120" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                        <line x1={x} y1={x === 100 ? 150 : 110} x2="400" y2="160" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                      </>
                    )}
                  </g>
                ))}
                <motion.path
                  d="M60 150 C 180 150, 220 80, 400 120 S 580 80, 740 150"
                  stroke="url(#archGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
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
            Let us discuss your architecture
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us about your technical challenges.
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
