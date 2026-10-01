"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export default function DigitalBusinessCardPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Section>
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
              Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-text-primary mb-6">
              Digital Business Card
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Premium digital business identity and NFC solutions for modern professionals
              and businesses.
            </p>
          </div>
          <div className="mt-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide uppercase rounded-full border border-border bg-secondary text-text-secondary px-3 py-1">
              Coming Soon
            </span>
          </div>
        </Section>

        <section className="border-t border-border">
          <div className="py-24 lg:py-32">
            <Section>
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-6">
                  Your identity,
                  <br />
                  one tap away.
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                  ELYVORAQ is developing premium digital business identity and NFC solutions
                  for modern professionals and businesses. Detailed specifications, pricing,
                  and availability will be shared when the product is ready for launch.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
                <div className="p-8 bg-surface">
                  <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                    Digital Identity
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Professional presence, reimagined.
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    A modern approach to business identity that replaces traditional cards
                    with instant, updatable digital contact experiences.
                  </p>
                </div>
                <div className="p-8 bg-surface">
                  <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                    NFC Technology
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Tap to connect.
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    NFC-enabled solutions that enable instant information sharing with a
                    single tap — no app download required.
                  </p>
                </div>
                <div className="p-8 bg-surface">
                  <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                    Instant Updates
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Always current.
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Update your information in real time without reprinting cards or
                    redistributing contact details.
                  </p>
                </div>
                <div className="p-8 bg-surface">
                  <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                    Business Integration
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Built for teams.
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Organizational management, analytics, and brand consistency tools for
                    teams and enterprises.
                  </p>
                </div>
              </div>
            </Section>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="py-24 lg:py-32">
            <Section>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-6">
                  Interested in early access?
                </h2>
                <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
                  Leave your details and we will reach out when the digital business card
                  solution is ready.
                </p>
                <Button href="/contact" size="lg">
                  Get in Touch
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
