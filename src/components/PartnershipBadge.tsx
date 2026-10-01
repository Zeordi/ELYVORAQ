"use client";

interface PartnershipBadgeProps {
  className?: string;
  size?: "sm" | "md";
}

export function PartnershipBadge({ className = "", size = "md" }: PartnershipBadgeProps) {
  const sizeClasses = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-3 py-1",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium tracking-wide uppercase rounded-full border border-accent/30 bg-accent/10 text-accent ${sizeClasses[size]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
      Service Provider Partner
    </span>
  );
}
