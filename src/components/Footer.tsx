import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Signal } from "@/components/Signal";

const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/labs", label: "Labs" },
    { href: "/insights", label: "Insights" },
  ],
  services: [
    { href: "/services/software-engineering", label: "Software Engineering" },
    { href: "/services/ai-data", label: "AI & Data" },
    { href: "/services/digital-products", label: "Digital Products" },
    { href: "/services/web-digital", label: "Web & UX" },
    { href: "/services/brand-creative", label: "Brand & Creative" },
  ],
  innovation: [
    { href: "/labs", label: "Elyvoraq Labs" },
  ],
};

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  className="w-8 h-8"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="32"
                    height="32"
                    rx="8"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent"
                  />
                  <path
                    d="M10 12h12M10 18h8M10 24h10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="text-text-primary"
                  />
                </svg>
              </div>
              <span className="text-base font-semibold tracking-tight text-text-primary">
                ELYVORAQ
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-6">
              Engineering digital possibilities.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://github.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="mailto:hello@elyvoraq.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Innovation
            </h3>
            <ul className="space-y-3">
              {footerNav.innovation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            © 2026 Elyvoraq Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function GlobalCTA() {
  return (
    <section className="border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <Signal className="text-accent/40 mx-auto" width={120} height={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary mb-4">
            Engineering Digital Possibilities.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
            Ready to build something that matters? Let us start a conversation.
          </p>
          <Button href="/contact" size="lg">
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
