"use client";

import { useEffect, useState } from "react";

interface FlameEffectProps {
  className?: string;
  showSmoke?: boolean;
  intensity?: "low" | "medium" | "high";
  showGlow?: boolean;
}

export default function FlameEffect({
  className = "",
  showSmoke = true,
}: FlameEffectProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  if (prefersReducedMotion) return null;

  return (
    <div
      className={`flame-effect-container ${className}`}
      aria-hidden="true"
    >
      {showSmoke && <div className="flame-smoke-mist" />}
      <div className="flame-heat-haze" />
    </div>
  );
}
