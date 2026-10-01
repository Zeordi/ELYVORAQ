"use client";

import { motion } from "framer-motion";

interface PartnershipVisualProps {
  className?: string;
}

export function PartnershipVisual({ className = "" }: PartnershipVisualProps) {
  return (
    <div className={`relative w-full py-12 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 600 220"
        className="w-full h-auto max-w-3xl mx-auto"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="600" y2="0">
            <stop offset="0%" stopColor="#071A1C" />
            <stop offset="40%" stopColor="#20D6C7" />
            <stop offset="100%" stopColor="#D8C39A" />
          </linearGradient>
          <linearGradient id="nodeGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#20D6C7" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#20D6C7" stopOpacity="0.05" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M100 110 L200 110 L300 110 L400 110 L500 110"
          stroke="url(#lineGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        <motion.circle
          cx="100"
          cy="110"
          r="3"
          fill="#071A1C"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.circle
          cx="200"
          cy="110"
          r="3"
          fill="#20D6C7"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.circle
          cx="300"
          cy="110"
          r="3"
          fill="#20D6C7"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.0 }}
        />
        <motion.circle
          cx="400"
          cy="110"
          r="3"
          fill="#D8C39A"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        <motion.circle
          cx="500"
          cy="110"
          r="3"
          fill="#D8C39A"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />

        <motion.text
          x="100"
          y="50"
          textAnchor="middle"
          className="text-[11px] font-mono fill-text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          TATATECH Technology LLC
        </motion.text>
        <motion.text
          x="200"
          y="50"
          textAnchor="middle"
          className="text-[11px] font-mono fill-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Service Provider
        </motion.text>
        <motion.text
          x="200"
          y="65"
          textAnchor="middle"
          className="text-[11px] font-mono fill-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Partnership
        </motion.text>
        <motion.text
          x="300"
          y="50"
          textAnchor="middle"
          className="text-[11px] font-semibold fill-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          ELYVORAQ
        </motion.text>
        <motion.text
          x="400"
          y="50"
          textAnchor="middle"
          className="text-[11px] font-mono fill-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          Local Presence
        </motion.text>
        <motion.text
          x="400"
          y="65"
          textAnchor="middle"
          className="text-[11px] font-mono fill-text-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          & Delivery
        </motion.text>
        <motion.text
          x="500"
          y="50"
          textAnchor="middle"
          className="text-[11px] font-medium fill-text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.9 }}
        >
          Ethiopian Market
        </motion.text>
      </svg>
    </div>
  );
}
