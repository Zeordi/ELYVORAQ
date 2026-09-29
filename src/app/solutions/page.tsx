"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const solutions = [
  {
    title: "Enterprise Transformation",
    description:
      "Modernize legacy systems, migrate to cloud-native architectures, and unlock operational efficiency at scale.",
    href: "#",
    industries: ["Finance", "Healthcare", "Manufacturing"],
  },
  {
    title: "AI Integration",
    description:
      "Embed intelligent automation and machine learning into existing workflows without disrupting operations.",
    href: "#",
    industries: ["Retail", "Logistics", "Technology"],
  },
  {
    title: "Digital Product Strategy",
    description:
      "From market validation to launch-ready products that create genuine competitive advantage.",
    href: "#",
    industries: ["Startups", "Enterprises", "Non-profits"],
  },
  {
    title: "Global Platform Scaling",
    description:
      "Engineering infrastructure that performs reliably across regions, languages, and regulatory environments.",
    href: "#",
    industries: ["SaaS", "Fintech", "E-commerce"],
  },
  {
    title: "Design System Architecture",
    description:
      "Unified, scalable design systems that keep product teams consistent, fast, and aligned.",
    href: "#",
    industries: ["Enterprise", "Consumer", "Developer Tools"],
  },
  {
    title: "Data-Driven Operations",
    description:
      "Data architectures that turn raw information into actionable intelligence and faster decisions.",
    href: "#",
    industries: ["Healthcare", "Energy", "Media"],
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
              organizational challenges
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              We do not sell generic packages. We partner with leadership teams to solve
              specific, high-stakes problems.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {solution.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {solution.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-secondary rounded-full border border-border"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <Link
                href={solution.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
              >
                Learn more
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
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
