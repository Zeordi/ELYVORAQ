"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { PartnershipBadge } from "@/components/PartnershipBadge";

interface ServiceCategory {
  number: string;
  title: string;
  description: string;
  services: {
    name: string;
    description: string;
    meta?: string;
  }[];
}

const categories: ServiceCategory[] = [
  {
    number: "01",
    title: "Digital Presence",
    description:
      "Professional digital experiences that communicate credibility and drive engagement.",
    services: [
      {
        name: "Website Design",
        description:
          "Strategic, performant websites engineered for conversion and built to scale.",
        meta: "Design / Engineering / UX",
      },
      {
        name: "PWA & Mobile Experiences",
        description:
          "Progressive web applications that deliver app-like experiences without platform limitations.",
        meta: "PWA / Mobile / Performance",
      },
      {
        name: "Digital Experience",
        description:
          "End-to-end digital platforms designed around real user behavior and business goals.",
        meta: "UX / Engineering / Strategy",
      },
    ],
  },
  {
    number: "02",
    title: "Growth & Marketing",
    description:
      "Data-informed digital marketing that connects brands with the right audiences.",
    services: [
      {
        name: "SEO",
        description:
          "Technical and content-driven search optimization for sustainable organic visibility.",
        meta: "SEO / Content / Technical",
      },
      {
        name: "Social Media",
        description:
          "Strategic social media management and content that builds genuine audience engagement.",
        meta: "Strategy / Content / Management",
      },
      {
        name: "Email Marketing",
        description:
          "Automated and manual email campaigns designed for retention, conversion, and relationship building.",
        meta: "Automation / Campaigns / CRM",
      },
      {
        name: "Content & Marketing",
        description:
          "Compelling content strategy and production across digital channels.",
        meta: "Strategy / Production / Channels",
      },
      {
        name: "Analytics",
        description:
          "Measurement frameworks and dashboards that turn data into actionable decisions.",
        meta: "Data / Dashboards / Insights",
      },
    ],
  },
  {
    number: "03",
    title: "Software & Technology",
    description:
      "Custom software and digital solutions built with engineering discipline.",
    services: [
      {
        name: "Software Development",
        description:
          "Full-cycle software engineering from architecture through deployment and maintenance.",
        meta: "Full-stack / Cloud / Architecture",
      },
      {
        name: "Digital Solutions",
        description:
          "Tailored digital products and internal tools that solve specific operational challenges.",
        meta: "Products / Tools / Integration",
      },
      {
        name: "Business Consulting",
        description:
          "Technology strategy and digital transformation advisory for leadership teams.",
        meta: "Strategy / Advisory / Digital",
      },
      {
        name: "Business Analysis",
        description:
          "Structured analysis of requirements, processes, and system architecture before engineering begins.",
        meta: "Requirements / Process / Architecture",
      },
    ],
  },
  {
    number: "04",
    title: "Research & Strategy",
    description:
      "Evidence-based research that de-risks digital investments.",
    services: [
      {
        name: "User Research",
        description:
          "Methodical user research and usability testing that informs design and product decisions.",
        meta: "UX Research / Testing / Insights",
      },
      {
        name: "Digital Strategy",
        description:
          "Roadmaps that align digital capability with business outcomes.",
        meta: "Strategy / Roadmap / Alignment",
      },
      {
        name: "Business Analysis",
        description:
          "Deep analysis of operations, systems, and opportunities for digital improvement.",
        meta: "Analysis / Process / Opportunity",
      },
    ],
  },
  {
    number: "05",
    title: "Connected Business",
    description:
      "Next-generation contact and business identity solutions.",
    services: [
      {
        name: "NFC Digital Business Cards",
        description:
          "Premium digital business identity that connects with a single tap.",
        meta: "NFC / Identity / Hardware",
      },
      {
        name: "NFC Digital Solutions",
        description:
          "Broader NFC-enabled business solutions for modern organizations.",
        meta: "NFC / Integration / Solutions",
      },
    ],
  },
];

export default function TatatechServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              TATATECH Services
              <br />
              in Ethiopia
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Through our service-provider relationship with TATATECH Technology LLC,
              ELYVORAQ can support Ethiopian businesses with an expanded portfolio of
              digital and technology services.
            </p>
          </div>
          <div className="mt-6">
            <PartnershipBadge />
          </div>
        </Section>

        <div className="space-y-6 mt-20">
          {categories.map((category, i) => (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-8 lg:p-10 bg-surface rounded-2xl border border-border hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6 mb-8">
                <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mt-1">
                  {String(Number(category.number)).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-3">
                    {category.title}
                  </h2>
                  <p className="text-base text-text-secondary leading-relaxed max-w-2xl">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden ml-8">
                {category.services.map((service) => (
                  <div
                    key={service.name}
                    className="p-6 bg-surface hover:bg-secondary transition-colors duration-300"
                  >
                    <h3 className="text-base font-semibold text-text-primary mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {service.description}
                    </p>
                    {service.meta && (
                      <span className="text-[10px] font-mono text-text-secondary tracking-wider">
                        {service.meta}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <Section className="mt-20">
          <div className="p-8 lg:p-12 bg-surface rounded-2xl border border-border relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-30" aria-hidden="true">
              <svg viewBox="0 0 200 60" className="w-32 h-auto">
                <path
                  d="M2 30 C 40 30, 50 10, 80 10 S 120 50, 150 30 S 190 30, 198 30"
                  stroke="url(#sigGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="198" cy="30" r="3" fill="#20D6C7" />
                <defs>
                  <linearGradient id="sigGrad" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#071A1C" />
                    <stop offset="50%" stopColor="#20D6C7" />
                    <stop offset="100%" stopColor="#D8C39A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-4">
                Want to discuss your needs?
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                Tell us what you are building. We will help you understand which services
                are best delivered through ELYVORAQ directly and which benefit from our
                partnership network.
              </p>
              <Button href="/contact" size="lg">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
