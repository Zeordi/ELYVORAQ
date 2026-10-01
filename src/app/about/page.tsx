"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { TeamMember } from "@/components/TeamMember";
import { TrustSection } from "@/components/TrustSection";
import { PartnershipBadge } from "@/components/PartnershipBadge";

const values = [
  {
    title: "Engineering",
    description:
      "Technology is not an afterthought. Every decision is grounded in sound architecture, tested rigorously, and built to perform.",
  },
  {
    title: "Design",
    description:
      "Great engineering deserves great design. We believe form and function are inseparable — one cannot succeed without the other.",
  },
  {
    title: "Innovation",
    description:
      "We invest in R&D through Elyvoraq Labs, ensuring our work benefits from the latest advances in AI, automation, and emerging technology.",
  },
  {
    title: "Reliability",
    description:
      "We build systems that last. Our architectures are designed for scale, resilience, and long-term maintainability.",
  },
];

const founders = [
  {
    name: "Abel Alemayehu",
    role: "Founder",
    bio:
      "Software engineering graduate from Adama Science and Technology University. Founded ELYVORAQ with a focus on building practical technology that turns ideas into useful digital products and experiences.",
    education: "Adama Science and Technology University — Software Engineering",
    expertise: ["Software Engineering", "System Architecture", "Product Development"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "abel@elyvoraq.com",
  },
  {
    name: "Abel Alemu",
    role: "Co-Founder / Partner",
    bio:
      "Software engineering graduate from Adama Science and Technology University. Co-founded ELYVORAQ with a shared commitment to engineering quality and practical digital innovation.",
    education: "Adama Science and Technology University — Software Engineering",
    expertise: ["Software Engineering", "Digital Products", "Business Strategy"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    email: "abel@elyvoraq.com",
  },
];

const trustItems = [
  {
    label: "Engineering-Led Leadership",
    description:
      "ELYVORAQ is led by software engineers, not sales teams. Technical decisions stay technical.",
  },
  {
    label: "Local Ethiopian Presence",
    description:
      "Building from Ethiopia with a global outlook — combining local understanding with international capability.",
  },
  {
    label: "Service Provider Partnerships",
    description:
      "Established technology partnerships extend our service capacity without diluting our engineering standards.",
  },
  {
    label: "Transparent Process",
    description:
      "Clear milestones, honest communication, and predictable delivery from the first conversation.",
  },
  {
    label: "Founder-Led Delivery",
    description:
      "Founders remain hands-on with engagements, ensuring quality and alignment throughout.",
  },
  {
    label: "Built for Growth",
    description:
      "An emerging company with professional standards, designed to scale capability as we grow.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-20">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Technology should move
              <br />
              people forward
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Elyvoraq Technologies combines software engineering, design, and emerging
              technology to build digital solutions for organizations ready to move forward.
            </p>
          </div>
        </Section>

        <section className="mb-24">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                01 — Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6 max-w-3xl">
                Built by engineers.
                <br />
                Shaped by ambition.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                ELYVORAQ was founded by software engineers with a shared goal: building
                practical technology that turns ideas into useful digital products, systems
                and experiences.
              </p>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                  02 — Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  Software engineering,
                  <br />
                  grounded in purpose
                </h2>
              </div>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  Elyvoraq Technologies was founded with a simple premise: the gap between
                  what technology can do and what most organizations achieve is too large.
                </p>
                <p>
                  We assembled a team of senior engineers, data scientists, and designers
                  who share a commitment to craft and a refusal to accept &ldquo;good
                  enough.&rdquo;
                </p>
                <p>
                  Today, we partner with enterprises, growth-stage startups, and
                  international organizations to build systems, products, and experiences
                  that are genuinely better — technically, strategically, and humanly.
                </p>
              </div>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                03 — Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Founder-led.
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl">
                Software engineers lead ELYVORAQ. That means technical decisions stay
                technical, and every engagement benefits from founder-level attention.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {founders.map((founder) => (
                <TeamMember key={founder.name} {...founder} />
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-6 italic">
              Additional team members will be added as the organization grows.
            </p>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                04 — Engineering & Design
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                What drives us
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, delay: i * 0.1 },
                    },
                  }}
                  className="p-8 bg-surface rounded-2xl border border-border"
                >
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                05 — Partnership Network
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                Extended capability
                <br />
                through partnerships
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                ELYVORAQ works with TATATECH Technology LLC as a service provider in
                Ethiopia, extending selected technology and digital services to businesses
                and organizations in the Ethiopian market.
              </p>
            </div>
            <div className="p-8 lg:p-10 bg-surface rounded-2xl border border-border">
              <div className="flex items-start gap-4 mb-6">
                <PartnershipBadge />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">
                Technology Without Borders
              </h3>
              <p className="text-base text-text-secondary leading-relaxed mb-6 max-w-2xl">
                Through our service-provider relationship with TATATECH Technology LLC,
                ELYVORAQ connects businesses in Ethiopia with a broader range of digital,
                software and technology services while maintaining local market understanding.
              </p>
              <Button href="/partnerships" variant="secondary" size="md">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                06 — Ethiopia Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                Built in Ethiopia.
                <br />
                Designed for everywhere.
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                ELYVORAQ is building from Ethiopia with a global outlook — combining local
                understanding, engineering capability, and international collaboration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  Local Roots
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Founded and operated from Ethiopia, with deep understanding of the local
                  market, culture, and business environment.
                </p>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  Global Standards
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Engineering discipline and delivery standards aligned with international
                  technology companies.
                </p>
              </div>
              <div className="p-8 bg-surface rounded-2xl border border-border">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  International Reach
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Serving local Ethiopian clients while collaborating with international
                  partners and clients.
                </p>
              </div>
            </div>
          </Section>
        </section>

        <section className="border-t border-border pt-24 mb-24">
          <Section>
            <div className="mb-16">
              <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
                07 — How We Work
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
                Professional by design
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
              <div className="p-8 lg:p-10 bg-surface hover:bg-secondary transition-colors duration-500">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  01
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Engineering Discipline
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Sound architecture, rigorous testing, and clean code. Technology is never
                  an afterthought.
                </p>
              </div>
              <div className="p-8 lg:p-10 bg-surface hover:bg-secondary transition-colors duration-500">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  02
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Transparent Communication
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Clear milestones, honest status updates, and predictable delivery. No
                  black-box engagements.
                </p>
              </div>
              <div className="p-8 lg:p-10 bg-surface hover:bg-secondary transition-colors duration-500">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  03
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Long-Term Thinking
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  We build durable partnerships and systems that deliver sustained value for
                  years.
                </p>
              </div>
              <div className="p-8 lg:p-10 bg-surface hover:bg-secondary transition-colors duration-500">
                <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                  04
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  Founder-Led Engagement
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Founders remain hands-on. Technical decisions stay technical, and quality
                  is non-negotiable.
                </p>
              </div>
            </div>
          </Section>
        </section>

        <TrustSection items={trustItems} />

        <section className="border-t border-border">
          <div className="py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
              Want to work with us?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              We are always open to conversations with organizations that value engineering
              quality and genuine technical partnership.
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
