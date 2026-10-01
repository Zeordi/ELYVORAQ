"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const services = [
  {
    title: "Software Engineering",
    description:
      "Scalable, resilient systems built with precision. From cloud-native platforms to enterprise architectures.",
    href: "/services/software-engineering",
    capabilities: [
      "Full-stack development",
      "Frontend engineering",
      "Backend systems",
      "API design & integration",
      "Database architecture",
      "Enterprise systems",
      "Cloud infrastructure",
      "System architecture",
      "Maintenance & optimization",
    ],
  },
  {
    title: "AI & Data",
    description:
      "Intelligent systems that learn, adapt, and transform how organizations operate and decide.",
    href: "/services/ai-data",
    capabilities: [
      "AI applications",
      "Machine learning",
      "Automation systems",
      "Intelligent automation",
      "Data processing",
      "Dashboards & analytics",
      "Model evaluation",
      "AI integration",
    ],
  },
  {
    title: "Digital Products",
    description:
      "End-to-end product design and development from concept to launch, engineered for real-world use.",
    href: "/services/digital-products",
    capabilities: [
      "SaaS platforms",
      "MVP development",
      "Web platforms",
      "Business applications",
      "Customer portals",
      "Internal systems",
      "Product strategy",
      "Product engineering",
    ],
  },
  {
    title: "Web & Digital Experience",
    description:
      "Performant, accessible, and beautifully engineered web platforms that serve global audiences.",
    href: "/services/web-digital",
    capabilities: [
      "Websites & platforms",
      "UX design",
      "UI engineering",
      "Performance optimization",
      "Responsive experiences",
      "Headless CMS",
      "E-commerce",
      "Accessibility-first build",
    ],
  },
  {
    title: "Brand & Creative",
    description:
      "Identity systems and creative direction grounded in strategy, crafted for long-term impact.",
    href: "/services/brand-creative",
    capabilities: [
      "Visual identity",
      "Brand systems",
      "UI design",
      "Digital design",
      "Marketing visuals",
      "Design systems",
      "Motion design",
      "Creative direction",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Technology built around
              <br />
              real problems
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              ELYVORAQ&rsquo;s core services are delivered directly by our engineering
              team. Partner services are available through established technology
              partnerships, delivered to the same professional standard.
            </p>
          </div>
        </Section>

        <section className="mb-24">
          <Section>
            <div className="mb-12">
              <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase block mb-3">
                ELYVORAQ CORE
              </span>
              <p className="text-sm text-text-secondary max-w-2xl">
                Services directly positioned under ELYVORAQ, delivered by our engineering
                team with full accountability for quality, timeline, and outcome.
              </p>
            </div>
            <div className="space-y-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-4">
                      <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase block mb-3">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-base text-text-secondary leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all duration-300"
                      >
                        Explore service
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="lg:col-span-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
                        {service.capabilities.map((cap) => (
                          <div
                            key={cap}
                            className="p-4 bg-surface text-sm text-text-secondary hover:text-text-primary hover:bg-secondary transition-colors duration-300"
                          >
                            {cap}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border">
          <Section>
            <div className="py-16">
              <div className="mb-12">
                <span className="text-[10px] font-mono text-text-secondary tracking-[0.2em] uppercase block mb-3">
                  PARTNER NETWORK
                </span>
                <p className="text-sm text-text-secondary max-w-2xl">
                  Additional services available through established technology partnerships.
                  These services maintain ELYVORAQ&rsquo;s professional standards while
                  expanding the portfolio available to Ethiopian businesses.
                </p>
              </div>
              <div className="p-8 lg:p-10 bg-surface rounded-2xl border border-border">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-text-primary mb-2">
                      TATATECH Services in Ethiopia
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
                      Through our service-provider relationship with TATATECH Technology LLC,
                      ELYVORAQ can support Ethiopian businesses with an expanded portfolio of
                      digital and technology services.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Button href="/services/tatatech" variant="secondary" size="md">
                    View TATATECH Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button href="/partnerships" variant="ghost" size="md">
                    About the Partnership
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        </section>

        <Section className="mt-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              Let us discuss your needs
            </h2>
            <p className="text-text-secondary mb-8">
              Every engagement starts with a conversation. Tell us what you are building.
            </p>
            <Button href="/contact" size="lg">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Section>
      </div>
    </div>
  );
}

