"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { AnimatedSignal } from "@/components/Signal";

const researchAreas = [
  {
    title: "Applied AI Research",
    description:
      "Exploring the practical application of machine learning, generative models, and autonomous systems to solve real-world problems.",
    href: "#",
    status: "Active",
  },
  {
    title: "Experimental Interfaces",
    description:
      "Investigating next-generation interaction paradigms beyond conventional screen-based interfaces.",
    href: "#",
    status: "Active",
  },
  {
    title: "Distributed Systems",
    description:
      "Researching resilient, performant, and secure architectures for global-scale applications.",
    href: "#",
    status: "Active",
  },
  {
    title: "Computational Design",
    description:
      "Using algorithms and computation to generate, optimize, and refine design systems and creative outputs.",
    href: "#",
    status: "Exploratory",
  },
];

const products = [
  {
    title: "Nexus Orchestrator",
    description:
      "A proprietary cloud orchestration framework for managing distributed workloads with unprecedented efficiency.",
    status: "In Development",
    href: "#",
  },
  {
    title: "Signal Analytics",
    description:
      "An AI-powered analytics engine that surfaces meaningful patterns in complex datasets.",
    status: "Beta",
    href: "#",
  },
  {
    title: "Lattice Design System",
    description:
      "A comprehensive, token-driven design system built for scale and consistency across digital products.",
    status: "Internal",
    href: "#",
  },
];

export default function LabsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Elyvoraq Labs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Where we explore what
              <br />
              comes next
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Our research and development division operates at the frontier of technology.
              Here, we experiment, prototype, and build the proprietary systems that shape
              our future work with clients.
            </p>
          </div>
        </Section>

        <section className="mb-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
                Research Areas
              </h2>
              <p className="text-text-secondary">
                Active investigations into technologies that will define the next decade.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchAreas.map((area, i) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                      Research
                    </span>
                    <span className="px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
                      {area.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
                Proprietary Products
              </h2>
              <p className="text-text-secondary">
                Tools and platforms we have built for ourselves and our clients.
              </p>
            </div>
            <div className="space-y-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2.5 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full border border-accent/20">
                          {product.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 flex-shrink-0"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border mt-24">
          <div className="py-16">
            <AnimatedSignal />
          </div>
        </section>
      </div>
    </div>
  );
}
