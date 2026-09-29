"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const categories = [
  "All",
  "Software Engineering",
  "AI & Data",
  "Digital Products",
  "Web & Digital Experience",
  "Brand & Creative",
];

const projects = [
  {
    title: "Enterprise Cloud Platform",
    category: "Software Engineering",
    year: "2025",
    description:
      "Multi-tenant cloud orchestration platform processing 2M+ daily operations with 99.99% uptime.",
    href: "/work/enterprise-cloud-platform",
    tags: ["Cloud", "Go", "Kubernetes", "AWS"],
    outcome: "99.99% uptime, 2M+ daily operations, 40% cost reduction",
    featured: true,
  },
  {
    title: "AI-Powered Analytics Suite",
    category: "AI & Data",
    year: "2024",
    description:
      "Real-time predictive analytics platform reducing decision latency by 70% for a Fortune 500 retailer.",
    href: "#",
    tags: ["Python", "ML", "Spark", "GCP"],
    outcome: "70% faster decisions, 30% inventory reduction",
    featured: true,
  },
  {
    title: "Global Fintech Infrastructure",
    category: "Digital Products",
    year: "2024",
    description:
      "Core banking and payment infrastructure serving 15M+ users across 40 countries.",
    href: "#",
    tags: ["TypeScript", "Microservices", "PostgreSQL"],
    outcome: "15M+ users, 40 countries, sub-second settlement",
    featured: false,
  },
  {
    title: "Digital Experience Platform",
    category: "Web & Digital Experience",
    year: "2024",
    description:
      "A headless content platform powering 200+ brand properties with sub-second load times.",
    href: "#",
    tags: ["Next.js", "Node", "Vercel", "Contentful"],
    outcome: "200+ properties, 90+ Lighthouse score",
    featured: false,
  },
  {
    title: "Healthcare Intelligence System",
    category: "AI & Data",
    year: "2023",
    description:
      "Clinical decision support system reducing diagnostic time by 45% across 12 hospitals.",
    href: "#",
    tags: ["AI", "FHIR", "React", "Python"],
    outcome: "45% faster diagnosis, 12 hospitals",
    featured: false,
  },
  {
    title: "Brand Identity System",
    category: "Brand & Creative",
    year: "2023",
    description:
      "Complete brand architecture and design system for a $2B technology company entering new markets.",
    href: "#",
    tags: ["Design System", "Strategy", "Figma"],
    outcome: "Unified brand across 8 markets, 60% faster design delivery",
    featured: false,
  },
];

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Selected work
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              A curated selection of projects that reflect real engineering capability,
              measurable outcomes, and lasting partnerships.
            </p>
          </div>
        </Section>

        <Section>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 text-xs font-medium tracking-wide rounded-full border transition-colors duration-300 ${
                  i === 0
                    ? "bg-text-primary text-white border-text-primary"
                    : "bg-surface text-text-secondary border-border hover:border-text-primary hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Section>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group relative"
            >
              <div className="p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase">
                        {project.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-border" />
                      <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                        {project.year}
                      </span>
                      {project.featured && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
                            Featured
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed max-w-2xl mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-[10px] font-mono text-text-secondary bg-secondary rounded-full border border-border tracking-wider uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span className="font-mono tracking-wide">{project.outcome}</span>
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
