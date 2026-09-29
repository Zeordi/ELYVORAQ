"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const solutions = [
  {
    title: "Digital Transformation",
    description:
      "Modernize legacy systems, migrate to cloud-native architectures, and unlock operational efficiency at scale.",
    href: "#",
    need: "Replace outdated infrastructure with modern, scalable systems.",
    outcome: "Reduced operational costs, faster delivery, improved reliability.",
  },
  {
    title: "Business Automation",
    description:
      "Embed intelligent automation into existing workflows without disrupting operations.",
    href: "#",
    need: "Eliminate manual processes and reduce operational overhead.",
    outcome: "Faster processes, fewer errors, freed-up capacity for strategic work.",
  },
  {
    title: "Product Development",
    description:
      "From market validation to launch-ready products that create genuine competitive advantage.",
    href: "#",
    need: "Launch a new product or significantly improve an existing one.",
    outcome: "Validated product-market fit, scalable architecture, clear growth path.",
  },
  {
    title: "Enterprise Systems",
    description:
      "Engineering infrastructure that performs reliably across regions, languages, and regulatory environments.",
    href: "#",
    need: "Stable, secure, and compliant systems that support global operations.",
    outcome: "99.99% uptime, multi-region resilience, regulatory compliance.",
  },
  {
    title: "AI Integration",
    description:
      "Embed machine learning and intelligent automation into business operations.",
    href: "#",
    need: "Leverage data and AI to make better decisions faster.",
    outcome: "Faster decisions, reduced costs, new capabilities.",
  },
  {
    title: "Digital Experience",
    description:
      "Performant, accessible, and beautifully engineered web platforms that serve global audiences.",
    href: "#",
    need: "World-class digital presence that converts and retains users.",
    outcome: "Higher engagement, better conversion, improved brand perception.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Solutions for real
              <br />
              business challenges
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We do not sell generic packages. We partner with leadership teams to solve
              specific, high-stakes problems.
            </p>
          </div>
        </Section>

        <div className="space-y-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
                  >
                    Learn more
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
                    <div className="p-5 bg-surface">
                      <div className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Need
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {solution.need}
                      </p>
                    </div>
                    <div className="p-5 bg-surface">
                      <div className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase mb-2">
                        Outcome
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {solution.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Section className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              Need a tailored solution?
            </h2>
            <p className="text-text-secondary mb-8">
              We work with leadership teams to design solutions for their specific context.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}
