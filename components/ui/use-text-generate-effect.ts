"use client";

import { useEffect } from "react";

/** Reveals each section once when it enters during a downward scroll. */
export function useTextGenerateEffect() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".content-column > section");
    sections.forEach((section) => {
      section.removeAttribute("data-text-reveal");
      section.removeAttribute("data-text-revealed");
    });
    if (!("IntersectionObserver" in window)) return;

    const revealTimers = new Set<number>();
    const revealSection = (section: HTMLElement) => {
      if (section.hasAttribute("data-text-reveal")) return;
      section.setAttribute("data-text-reveal", "true");
      const timer = window.setTimeout(() => {
        section.setAttribute("data-text-revealed", "true");
        revealTimers.delete(timer);
      }, 180);
      revealTimers.add(timer);
    };

    let lastScrollY = window.scrollY;
    let scrollingDown = false;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollingDown = currentScrollY > lastScrollY;
      lastScrollY = currentScrollY;
      if (!scrollingDown) return;
      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) revealSection(section);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && scrollingDown) {
          revealSection(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -4% 0px" });
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      revealTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
