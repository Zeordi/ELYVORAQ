"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Signal } from "@/components/Signal";

const capabilities = [
  "Visual identity",
  "Brand systems",
  "UI design",
  "Digital design",
  "Marketing visuals",
  "Design systems",
  "Motion design",
  "Creative direction",
];

const process = [
  {
    step: "01",
    title: "Strategy",
    description:
      "Brand positioning, competitive analysis, and strategic foundation before design begins.",
  },
  {
    step: "02",
    title: "Identity",
    description:
      "Visual identity system, typography, color, and core design tokens for consistency.",
  },
  {
    step: "03",
    title: "System",
    description:
      "Component libraries, pattern libraries, and design system documentation for scale.",
  },
  {
    step: "04",
    title: "Activate",
    description:
      "Creative direction, marketing visuals, and cross-platform implementation guidance.",
  },
];

export default function BrandCreativePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Brand & Creative
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Identity systems and creative direction grounded in strategy, crafted for
              long-term impact.
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
                Design as strategic communication, not decoration.
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
                A disciplined process for building brand systems that last.
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
                Identity System
              </h2>
              <p className="text-text-secondary max-w-2xl">
                Abstract representation of a modular brand system architecture.
              </p>
            </div>
            <div className="relative p-8 lg:p-12 bg-surface rounded-2xl border border-border overflow-hidden">
              <svg viewBox="0 0 800 260" className="w-full h-auto" aria-hidden="true">
                <defs>
                  <linearGradient id="brandGrad" x1="0" y1="0" x2="800" y2="0">
                    <stop offset="0%" stopColor="#071A1C" />
                    <stop offset="50%" stopColor="#20D6C7" />
                    <stop offset="100%" stopColor="#D8C39A" />
                  </linearGradient>
                </defs>
                {[160, 400, 640].map((x) => (
                  <g key={x}>
                    <rect x={x - 60} y={80} width="120" height="100" rx="10" stroke="currentColor" strokeWidth="1" className="text-text-secondary/30" fill="none" />
                    <circle cx={x} cy="110" r="3" fill="currentColor" className="text-accent" />
                    <rect x={x - 40} y="130" width="80" height="6" rx="3" className="text-accent/30" fill="currentColor" />
                    <rect x={x - 40} y="145" width="60" height="6" rx="3" className="text-text-secondary/20" fill="currentColor" />
                  </g>
                ))}
                <motion.path
                  d="M100 110 C 180 110, 220 40, 340 40 S 460 180, 580 110 S 700 40, 740 110"
                  stroke="url(#brandGrad)"
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

        <section className="border-t border-border pt-24">
          <div className="relative overflow-hidden">
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
            <div className="relative z-10 py-16 text-center">
              <Signal className="text-accent/40 mx-auto mb-8" width={200} height={40} />
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
                Ready to elevate your brand?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Let us discuss your brand vision and how we can bring it to life.
              </p>
              <Button href="/contact" size="lg">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
