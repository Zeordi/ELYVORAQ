import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { Signal } from "@/components/Signal";

const footerNav = {
  company: [
    { href: "/about", label: "About" },
    { href: "/about#leadership", label: "Leadership" },
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/software-engineering", label: "Software Engineering" },
    { href: "/services/ai-data", label: "AI & Data" },
    { href: "/services/digital-products", label: "Digital Products" },
    { href: "/services/web-digital", label: "Web & Digital Experience" },
    { href: "/services/brand-creative", label: "Brand & Creative" },
  ],
  partner: [
    { href: "/services/tatatech", label: "TATATECH Services" },
    { href: "/solutions/digital-business-card", label: "Digital Business Solutions" },
  ],
  innovation: [
    { href: "/labs", label: "Elyvoraq Labs" },
  ],
  connect: [
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://instagram.com", label: "Instagram" },
    { href: "https://tiktok.com", label: "TikTok" },
    { href: "mailto:hello@elyvoraq.com", label: "Email" },
    { href: "tel:+251911234567", label: "Phone" },
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

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15V11.7a4.78 4.78 0 01-3.77 1.74V6.69h3.77z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
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
                href="https://instagram.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://tiktok.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </Link>
              <Link
                href="mailto:hello@elyvoraq.com"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:+251911234567"
                className="text-text-secondary hover:text-accent transition-colors duration-300"
                aria-label="Phone"
              >
                <PhoneIcon />
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
              Partner Services
            </h3>
            <ul className="space-y-3">
              {footerNav.partner.map((item) => (
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

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerNav.connect.map((item) => (
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
            &copy; 2026 Elyvoraq Technologies. All rights reserved.
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
