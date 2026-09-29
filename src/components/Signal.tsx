"use client";

import { motion } from "framer-motion";

interface SignalProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

export function Signal({ className = "", width = 200, height = 60, color = "currentColor" }: SignalProps) {
  return (
    <svg
      viewBox="0 0 200 60"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d="M2 30 C 40 30, 50 10, 80 10 S 120 50, 150 30 S 190 30, 198 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <motion.circle
        cx="198"
        cy="30"
        r="3"
        fill={color}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
      />
    </svg>
  );
}

export function AnimatedSignal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        className="w-full h-auto"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 40 C 100 40, 150 10, 250 10 S 400 70, 500 40 S 650 10, 750 10 S 900 70, 1000 40 S 1100 20, 1200 40"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="signalGradient" x1="0" y1="0" x2="1200" y2="0">
            <stop offset="0%" stopColor="#071A1C" />
            <stop offset="40%" stopColor="#20D6C7" />
            <stop offset="100%" stopColor="#D8C39A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
