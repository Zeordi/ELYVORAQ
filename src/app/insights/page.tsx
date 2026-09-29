"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";

const categories = [
  "All",
  "Engineering",
  "AI",
  "Design",
  "Products",
  "Technology",
];

const insights = [
  {
    title: "The Architecture of Resilient Systems",
    excerpt:
      "How modern engineering teams are building systems that fail gracefully, recover faster, and scale without complexity.",
    date: "Sep 2025",
    category: "Engineering",
    readTime: "8 min",
    href: "/insights/architecture-of-resilient-systems",
    featured: true,
  },
  {
    title: "AI Integration Without Disruption",
    excerpt:
      "Practical frameworks for embedding machine learning into existing business operations without breaking what already works.",
    date: "Aug 2025",
    category: "AI",
    readTime: "6 min",
    href: "#",
    featured: false,
  },
  {
    title: "Design Systems at Global Scale",
    excerpt:
      "Lessons from building and maintaining design systems across 200+ product surfaces in multiple languages and regulatory environments.",
    date: "Jul 2025",
    category: "Design",
    readTime: "10 min",
    href: "#",
    featured: false,
  },
  {
    title: "Why Engineering Partnerships Last",
    excerpt:
      "The difference between a vendor relationship and a genuine engineering partnership — and why it matters for the long term.",
    date: "Jun 2025",
    category: "Products",
    readTime: "5 min",
    href: "#",
    featured: false,
  },
];

export default function InsightsPage() {
  const featured = insights.find((item) => item.featured);
  const rest = insights.filter((item) => !item.featured);

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Insights
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Thinking from the
              <br />
              engineering team
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Perspectives on technology, engineering practice, and the craft of building
              digital products that last.
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

        {featured && (
          <Section className="mb-12">
            <div className="p-8 lg:p-12 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
                  Featured
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                  {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {featured.title}
              </h2>
              <p className="text-base text-text-secondary leading-relaxed max-w-2xl mb-6">
                {featured.excerpt}
              </p>
              <Link
                href={featured.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
              >
                Read article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Section>
        )}

        <div className="space-y-6">
          {rest.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="group p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-text-secondary">
                      {insight.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-mono text-text-secondary">
                      {insight.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-xs font-mono text-text-secondary">
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {insight.excerpt}
                  </p>
                </div>
                <Link
                  href={insight.href}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 flex-shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
