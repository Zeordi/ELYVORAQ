"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "Product strategy and roadmap",
  "User research and validation",
  "UX/UI design",
  "MVP development",
  "Growth iteration and optimization",
  "Product analytics",
  "Go-to-market strategy",
  "Cross-platform design systems",
];

export default function DigitalProductsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Digital Products
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              End-to-end product design and development from concept to launch, engineered
              for real-world use.
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
                  We believe great products are born from genuine understanding of the
                  people who use them. Our process is rooted in research, validated through
                  iteration, and delivered with engineering rigor.
                </p>
                <p>
                  We do not ship features. We ship outcomes. Every decision in the product
                  lifecycle is connected to a measurable goal, and every engagement ends
                  with knowledge transfer so your team can continue to build independently.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <Section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Have a product to build?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            We partner with founders and product leaders to turn vision into reality.
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
