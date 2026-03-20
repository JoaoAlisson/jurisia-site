"use client";

/**
 * JurisIA Logo — The "J" doubles as a minimalist scale of justice.
 * Pure inline SVG for crisp rendering at any size.
 */
export default function Logo({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const h = size === "sm" ? 22 : 28;
  const scale = h / 28;

  return (
    <svg
      width={140 * scale}
      height={h}
      viewBox="0 0 140 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Jurisia"
    >
      {/* === J as Balance Scale === */}
      {/* Dot/pinnacle of J */}
      <circle cx="12" cy="2.5" r="2" fill="currentColor" />

      {/* Balance beam */}
      <line x1="2" y1="6" x2="22" y2="6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />

      {/* Left pan line */}
      <line x1="3.5" y1="6" x2="5" y2="10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Left pan */}
      <path d="M2.5 10 Q5 12.5 7.5 10" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" />

      {/* Right pan line */}
      <line x1="20.5" y1="6" x2="19" y2="10" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Right pan */}
      <path d="M16.5 10 Q19 12.5 21.5 10" stroke="currentColor" strokeWidth="1.1" fill="none" strokeLinecap="round" />

      {/* Vertical stem of J */}
      <line x1="12" y1="6" x2="12" y2="23" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />

      {/* J curve at bottom */}
      <path d="M12 23 Q12 27 7 27 Q3.5 27 2.5 24" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* === "urisia" text === */}
      <text
        x="26"
        y="24"
        fill="currentColor"
        fontSize="22"
        fontFamily="var(--font-inter), Inter, system-ui, sans-serif"
        fontWeight="500"
        letterSpacing="-0.5"
      >
        urisia
      </text>
    </svg>
  );
}
