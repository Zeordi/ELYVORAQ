"use client";

import { ChevronRight } from "lucide-react";
import { Section } from "@/components/Section";
import Link from "next/link";

const caseStudy = {
  title: "Enterprise Cloud Platform",
  category: "Software Engineering",
  year: "2025",
  client: "Fortune 500 Retailer",
  duration: "18 months",
  team: "12 engineers",
  challenge:
    "The client operated a legacy monolithic architecture that could not support growing global demand. Frequent outages, slow deployments, and increasing technical debt were threatening business continuity.",
  approach:
    "We conducted a full architecture audit, identified critical risk areas, and designed a phased migration strategy. Rather than a risky big-bang rewrite, we incrementally extracted bounded contexts into microservices.",
  design:
    "We designed a unified API gateway, service mesh topology, and observability framework. The architecture prioritized resilience, enabling independent deployment and failure isolation across 40+ services.",
  engineering:
    "We implemented the platform in Go and TypeScript, with Kubernetes for orchestration, gRPC for inter-service communication, and a custom event bus for async workflows. CI/CD pipelines enforced quality gates at every stage.",
  solution:
    "A modern cloud-native platform with 99.99% uptime, processing 2M+ daily operations across 12 regions. Deployment frequency increased from monthly to multiple times per day.",
  outcome:
    "The platform now handles 2M+ daily operations with 99.99% uptime. Infrastructure costs decreased by 40%, and the client can launch new features in days instead of months.",
  technology: ["Go", "TypeScript", "Kubernetes", "AWS", "gRPC", "PostgreSQL", "Terraform", "Prometheus", "Grafana"],
};

const nextProject = {
  title: "AI-Powered Analytics Suite",
  href: "#",
};

export default function CaseStudyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase">
                {caseStudy.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em]">
                {caseStudy.year}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              {caseStudy.outcome}
            </p>
          </div>
        </Section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { label: "Client", value: caseStudy.client },
                { label: "Duration", value: caseStudy.duration },
                { label: "Team", value: caseStudy.team },
                { label: "Year", value: caseStudy.year },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase mb-2">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-text-primary">{item.value}</div>
                </div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                01 — Challenge
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                The problem
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                02 — Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                How we tackled it
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                03 — Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                Architecture & design
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.design}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                04 — Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                Build details
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.engineering}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                05 — Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                What we delivered
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                06 — Outcome
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                Measurable impact
              </h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-lg text-text-secondary leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-4">
                07 — Technology
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary">
                Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-mono text-text-secondary bg-surface border border-border rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24">
          <Section>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase mb-2">
                  Next Project
                </div>
                <Link
                  href={nextProject.href}
                  className="text-xl font-semibold text-text-primary hover:text-accent transition-colors duration-300"
                >
                  {nextProject.title}
                </Link>
              </div>
              <Link
                href={nextProject.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
              >
                View case study
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Section>
        </section>
      </div>
    </div>
  );
}
