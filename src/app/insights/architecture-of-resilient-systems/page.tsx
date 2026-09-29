"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import Link from "next/link";

const article = {
  title: "The Architecture of Resilient Systems",
  date: "Sep 2025",
  readTime: "8 min",
  category: "Engineering",
  author: "Elyvoraq Engineering Team",
  content: `
    <p>Modern software systems must do more than function. They must continue functioning when parts of them fail. This is the core challenge of resilience — and it is one that most engineering teams underestimate until they are faced with a real incident.</p>
    <h2>Designing for failure</h2>
    <p>The most reliable systems are not those that never fail. They are the ones that fail gracefully, recover automatically, and continue serving users without interruption. This requires intentional architecture: circuit breakers, bulkheads, retries with exponential backoff, and clear degradation paths.</p>
    <h2>Observability as a first-class concern</h2>
    <p>You cannot fix what you cannot see. Modern resilient systems require comprehensive observability — metrics, logs, and traces that give engineers the context they need during incidents. We treat observability as a non-negotiable requirement, not an afterthought.</p>
    <h2>Testing at scale</h2>
    <p>Chaos engineering, load testing, and synthetic monitoring are not optional extras. They are the tools that validate resilience before it is needed in production. Every system we build is tested under realistic failure conditions.</p>
  `,
};

const related = [
  {
    title: "AI Integration Without Disruption",
    category: "AI",
    readTime: "6 min",
    href: "#",
  },
  {
    title: "Design Systems at Global Scale",
    category: "Design",
    readTime: "10 min",
    href: "#",
  },
];

export default function ArticlePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase">
                {article.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">{article.author}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-sm text-text-secondary">{article.date}</span>
            </div>
          </div>
        </Section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div
              className="prose prose-lg max-w-3xl text-text-secondary leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </Section>
        </section>

        <section className="border-t border-border pt-24">
          <Section>
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
                Related articles
              </h2>
            </div>
            <div className="space-y-6">
              {related.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-6 bg-surface rounded-xl border border-border hover:border-accent/30 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                      {item.readTime}
                    </span>
                  </div>
                  <Link
                    href={item.href}
                    className="text-lg font-semibold text-text-primary hover:text-accent transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>
      </div>
    </div>
  );
}
