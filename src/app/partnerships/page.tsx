"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PartnershipVisual } from "@/components/PartnershipVisual";
import { TrustSection } from "@/components/TrustSection";
import { PartnershipBadge } from "@/components/PartnershipBadge";

const trustItems = [
  {
    label: "Service Provider Partnership",
    description:
      "ELYVORAQ works with TATATECH Technology LLC as a service provider, extending selected technology and digital services to the Ethiopian market.",
  },
  {
    label: "Engineering-Led Delivery",
    description:
      "Every engagement is led by senior software engineers who treat client work with the same rigor we apply to our own products.",
  },
  {
    label: "Local Understanding, Global Capability",
    description:
      "Based in Ethiopia with access to a broader technology ecosystem through established partnerships.",
  },
  {
    label: "Transparent Process",
    description:
      "Clear milestones, honest communication, and predictable delivery. No black-box engagement models.",
  },
  {
    label: "Founder-Led Leadership",
    description:
      "Software engineers lead ELYVORAQ — not account managers. That means technical decisions stay technical.",
  },
  {
    label: "Built for Growth",
    description:
      "An emerging company with professional standards, designed to scale capability as demand grows.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding the problem, the market context, and what success looks like from the client's perspective.",
  },
  {
    step: "02",
    title: "Capability Mapping",
    description:
      "We identify whether the engagement is best served by ELYVORAQ's core engineering capability or extended through our partner network.",
  },
  {
    step: "03",
    title: "Delivery",
    description:
      "Work is delivered with the same engineering discipline regardless of whether it is executed directly or through a partner relationship.",
  },
  {
    step: "04",
    title: "Support & Evolution",
    description:
      "Post-launch support, iteration, and long-term partnership. We stay close to what we build.",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Partnerships
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Local expertise.
              <br />
              Expanded capability.
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Through our service-provider relationship with TATATECH Technology LLC,
              ELYVORAQ connects businesses in Ethiopia with a broader range of digital,
              software and technology services while maintaining local market understanding.
            </p>
          </div>
          <div className="mt-6">
            <PartnershipBadge />
          </div>
        </Section>

        <section className="border-t border-border">
          <div className="py-24 lg:py-32">
            <Section>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  Technology Without Borders
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  How ELYVORAQ extends its
                  <br />
                  service capacity in Ethiopia
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                  Through our service-provider relationship with TATATECH Technology LLC,
                  ELYVORAQ can support Ethiopian businesses with an expanded portfolio of
                  digital and technology services — from digital presence and marketing to
                  software development and business consulting.
                </p>
              </div>

              <PartnershipVisual />
            </Section>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="py-24 lg:py-32">
            <Section>
              <div className="max-w-3xl mb-16">
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  How the Partnership Works
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  A professional framework
                  <br />
                  for expanded delivery
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                  The partnership is structured around capability, not branding. Clients
                  receive ELYVORAQ&apos;s engineering rigor regardless of whether the work is
                  executed directly or through an established partner relationship.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {howItWorks.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                    className="p-8 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500"
                  >
                    <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                      Step {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        <TrustSection items={trustItems} />

        <section className="border-t border-border">
          <div className="py-24 lg:py-32">
            <Section>
              <div className="max-w-3xl mx-auto text-center">
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  Discuss Your Project
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-6">
                  Ready to explore what
                  <br />
                  is possible?
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                  Tell us about your project. We will help you understand whether ELYVORAQ
                  is the right fit and how our partnership network can extend your options.
                </p>
                <Button href="/contact" size="lg">
                  Start a Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Section>
          </div>
        </section>
      </div>
    </div>
  );
}
