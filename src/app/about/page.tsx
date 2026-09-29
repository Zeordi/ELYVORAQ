"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const values = [
  {
    title: "Engineering",
    description:
      "Technology is not an afterthought. Every decision is grounded in sound architecture, tested rigorously, and built to perform.",
  },
  {
    title: "Design",
    description:
      "Great engineering deserves great design. We believe form and function are inseparable — one cannot succeed without the other.",
  },
  {
    title: "Innovation",
    description:
      "We invest in R&D through Elyvoraq Labs, ensuring our work benefits from the latest advances in AI, automation, and emerging technology.",
  },
  {
    title: "Reliability",
    description:
      "We build systems that last. Our architectures are designed for scale, resilience, and long-term maintainability.",
  },
];

const teamStats = [
  { value: "40+", label: "Engineers, designers, and strategists" },
  { value: "12", label: "Nationalities represented" },
  { value: "15+", label: "Years of combined leadership experience" },
  { value: "50+", label: "Projects delivered" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Technology should move
              <br />
              people forward
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Elyvoraq Technologies combines software engineering, design, and emerging
              technology to build digital solutions for organizations ready to move forward.
            </p>
          </div>
        </Section>

        <section className="mb-24">
          <Section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
              {teamStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } } }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  Built by engineers,
                  <br />
                  for ambitious problems
                </h2>
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  Elyvoraq Technologies was founded with a simple premise: the gap between
                  what technology can do and what most organizations achieve is too large.
                </p>
                <p>
                  We assembled a team of senior engineers, data scientists, and designers
                  who share a commitment to craft and a refusal to accept &ldquo;good enough.&rdquo;
                </p>
                <p>
                  Today, we partner with enterprises, growth-stage startups, and
                  international organizations to build systems, products, and experiences
                  that are genuinely better — technically, strategically, and humanly.
                </p>
              </div>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                What Drives Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Our values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1 } } }}
                  className="p-8 bg-surface rounded-2xl border border-border"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border mt-24">
          <div className="py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              Want to join the team?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We are always looking for exceptional people who share our standards.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
