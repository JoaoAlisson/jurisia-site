"use client";

/**
 * JurisIA Logo — Clean typographic wordmark.
 * "juris" in dark + "ia" in accent color.
 */
export default function Logo({ size = "md", className = "" }: { size?: "sm" | "md"; className?: string }) {
  const textSize = size === "sm" ? "text-lg" : "text-xl";

  return (
    <span className={`${textSize} font-semibold tracking-tight select-none ${className}`}>
      <span className="text-slate-900 dark:text-white">juris</span>
      <span className="text-[var(--logo-ia-color,#0A2540)]">ia</span>
    </span>
  );
}
