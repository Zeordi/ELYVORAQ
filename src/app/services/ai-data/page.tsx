"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "AI applications",
  "Machine learning",
  "Automation systems",
  "Intelligent systems",
  "Data processing",
  "Dashboards & analytics",
  "Model evaluation",
  "AI integration",
];

const process = [
  {
    step: "01",
    title: "Define",
    description:
      "Frame the problem, identify data sources, and establish measurable success criteria.",
  },
  {
    step: "02",
    title: "Prepare",
    description:
      "Data engineering, cleaning, feature stores, and pipeline architecture for reliable inputs.",
  },
  {
    step: "03",
    title: "Model",
    description:
      "Model selection, training, validation, and evaluation against business outcomes.",
  },
  {
    step: "04",
    title: "Deploy",
    description:
      "Production serving, monitoring, and integration into existing operational workflows.",
  },
  {
    step: "05",
    title: "Improve",
    description:
      "Continuous evaluation, retraining pipelines, and systematic performance improvement.",
  },
];

const selectedWork = [
  {
    title: "AI-Powered Analytics Suite",
    category: "AI & Data",
    year: "2024",
    description:
      "Real-time predictive analytics platform reducing decision latency by 70% for a Fortune 500 retailer.",
    tags: ["Python", "Spark", "GCP", "MLflow"],
  },
  {
    title: "Healthcare Intelligence System",
    category: "AI & Data",
    year: "2023",
    description:
      "Clinical decision support system reducing diagnostic time by 45% across 12 hospitals.",
    tags: ["AI", "FHIR", "Python", "React"],
  },
];

export default function AiDataPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              AI & Data
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Intelligent systems that learn, adapt, and transform how organizations operate
              and make decisions.
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
                Applied machine learning and data engineering for production environments.
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
                A disciplined approach to bringing AI into production.
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
                System Architecture
              </h2>
              <p className="text-text-secondary max-w-2xl">
                Data flow and model serving architecture for a production AI platform.
              </p>
            </div>
            <div className="relative p-8 lg:p-12 bg-surface rounded-2xl border border-border overflow-hidden">
              <svg viewBox="0 0 800 360" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <linearGradient id="dataGrad" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#071A1C" />
                    <stop offset="50%" stopColor="#20D6C7" />
                    <stop offset="100%" stopColor="#D8C39A" />
                  </linearGradient>
                </defs>
                {[160, 400, 640].map((x, idx) => (
                  <g key={x}>
                    <rect x={x - 70} y={idx === 1 ? 100 : 130} width="140" height="100" rx="10" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" fill="none" />
                    <circle cx={x} cy={idx === 1 ? 180 : 210} r="5" fill="currentColor" className="text-accent" />
                    {idx > 0 && (
                      <path d={`M${idx === 1 ? 230 : 570} ${idx === 1 ? 180 : 210} C ${idx === 1 ? 280 : 620} ${idx === 1 ? 180 : 210}, ${idx === 1 ? 320 : 660} ${idx === 1 ? 180 : 210}, ${idx === 1 ? 370 : 700} ${idx === 1 ? 180 : 210}`} stroke="url(#dataGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    )}
                  </g>
                ))}
                <motion.circle
                  cx="400"
                  cy="180"
                  r="6"
                  fill="#20D6C7"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
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
            Ready to explore intelligent systems?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Tell us about the data you have and the problems you need to solve.
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
