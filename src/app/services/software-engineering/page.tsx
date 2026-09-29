"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "Cloud-native architecture design",
  "Enterprise-grade API development",
  "Microservices and event-driven systems",
  "Performance optimization and scaling",
  "Legacy system modernization",
  "Security-first engineering practices",
  "CI/CD and DevOps automation",
  "Multi-region infrastructure",
];

export default function SoftwareEngineeringPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Software Engineering
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Scalable, resilient systems built with precision. From cloud-native platforms
              to enterprise architectures that perform at the highest level.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <Section>
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{cap}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Section>
          <Section>
            <div>
              <h2 className="text-2xl font-semibold text-text-primary mb-6">
                Our approach
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  We do not write throwaway code. Every system we build is designed to
                  evolve with your business, built on principles of modularity, testability,
                  and operational clarity.
                </p>
                <p>
                  Our engineers have led platforms serving millions of users and processing
                  billions of transactions. We bring that experience to every engagement,
                  regardless of scale.
                </p>
                <p>
                  From infrastructure decisions to the smallest implementation details, we
                  operate with a standard of craftsmanship that reflects genuine senior-level
                  expertise.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <Section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Let us discuss your architecture
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Every project starts with a conversation. Tell us about your technical
            challenges.
          </p>
          <Button href="/contact" size="lg">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Section>
      </div>
    </div>
  );
}
