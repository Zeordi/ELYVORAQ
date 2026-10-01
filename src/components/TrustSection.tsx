"use client";

import { motion, type Variants } from "framer-motion";

interface TrustItem {
  label: string;
  description: string;
}

interface TrustSectionProps {
  title?: string;
  subtitle?: string;
  items: TrustItem[];
  className?: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function TrustSection({
  title = "Why organizations work with ELYVORAQ",
  subtitle,
  items,
  className = "",
}: TrustSectionProps) {
  return (
    <section className={`border-t border-border ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-accent mb-4 block">
            Trust & Capability
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-text-secondary leading-relaxed">{subtitle}</p>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={itemVariant}
              className="p-8 bg-surface hover:bg-secondary transition-colors duration-500"
            >
              <div className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-4">
                0{items.indexOf(item) + 1}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {item.label}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
