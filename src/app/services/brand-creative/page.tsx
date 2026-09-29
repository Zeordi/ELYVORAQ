"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const capabilities = [
  "Brand strategy and positioning",
  "Visual identity design",
  "Design system architecture",
  "Motion design and animation",
  "Creative direction",
  "Art direction",
  "Brand guidelines",
  "Cross-platform identity systems",
];

export default function BrandCreativePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Brand & Creative
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Identity systems and creative direction grounded in strategy, crafted for
              long-term impact.
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
                  Design is not decoration. It is strategic communication. We build brand
                  systems that help organizations express their values, connect with their
                  audiences, and stand apart in competitive markets.
                </p>
                <p>
                  Our creative team works alongside our engineers to ensure that brand and
                  product experiences are coherent across every touchpoint, from marketing
                  materials to product interfaces.
                </p>
              </div>
            </div>
          </Section>
        </div>

        <Section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            Ready to elevate your brand?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            Let us discuss your brand vision and how we can bring it to life.
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
