"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.5 }: { words: string; className?: string; filter?: boolean; duration?: number }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!scope.current) return;
    void animate("span", { opacity: 1, filter: filter ? "blur(0px)" : "none" }, { duration: duration || 1, delay: stagger(0.08) });
  }, [animate, duration, filter, scope]);

  return <div className={cn("font-bold", className)}><div className="mt-0 text-inherit leading-snug tracking-wide"><motion.div ref={scope}>{wordsArray.map((word, index) => <motion.span key={`${word}-${index}`} className="opacity-0" style={{ filter: filter ? "blur(10px)" : "none" }}>{word}{" "}</motion.span>)}</motion.div></div></div>;
};
