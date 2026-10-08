"use client";

import { useEffect } from "react";

/** Reveals the hero once, then repeats the reveal for sections below it. */
export function useTextGenerateEffect() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".content-column > section",
    );

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isHero = entry.target.classList.contains("hero");

          if (entry.isIntersecting) {
            entry.target.setAttribute("data-text-revealed", "true");
            if (isHero) observer.unobserve(entry.target);
          } else if (!isHero) {
            entry.target.removeAttribute("data-text-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );

    sections.forEach((section) => {
      section.setAttribute("data-text-reveal", "true");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}
