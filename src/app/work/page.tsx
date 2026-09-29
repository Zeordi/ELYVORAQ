"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

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
  {
    title: "Healthcare Intelligence System",
    category: "AI & Data",
    year: "2023",
    description:
      "Clinical decision support system reducing diagnostic time by 45% across 12 hospitals.",
    href: "#",
    tags: ["AI", "FHIR", "React", "Python"],
  },
  {
    title: "Brand Identity System",
    category: "Brand & Creative",
    year: "2023",
    description:
      "Complete brand architecture and design system for a $2B technology company entering new markets.",
    href: "#",
    tags: ["Design System", "Strategy", "Figma"],
  },
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Selected Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Projects that reflect real engineering capability
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Every project represents a deep partnership. We do not do cookie-cutter work.
              The results speak for themselves.
            </p>
          </div>
        </Section>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-text-secondary">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-mono text-text-secondary">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono text-text-secondary bg-secondary rounded-full border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={project.href}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 flex-shrink-0"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <Section className="mt-20 text-center">
          <p className="text-text-secondary mb-8">
            Have a project in mind? Let us discuss what is possible.
          </p>
          <Button href="/contact" size="lg">
            Start a Conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Section>
      </div>
    </div>
  );
}
