"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "Machine learning model development",
  "Natural language processing systems",
  "Computer vision and image analysis",
  "Predictive analytics and forecasting",
  "Data pipeline architecture",
  "Real-time data processing",
  "MLOps and model deployment",
  "Data governance and security",
];

export default function AiDataPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              AI & Data
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Intelligent systems that learn, adapt, and transform how organizations operate
              and make decisions.
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
                  We treat AI as a tool for genuine problem-solving, not a buzzword to
                  attach to marketing materials. Every model we build is grounded in
                  real-world data, evaluated against business outcomes, and designed for
                  production reliability.
                </p>
                <p>
                  Our data engineers and ML scientists work alongside your teams to
                  ensure solutions are transparent, maintainable, and aligned with
                  organizational strategy.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <Section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Ready to explore intelligent systems?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Tell us about the data you have and the problems you need to solve.
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
