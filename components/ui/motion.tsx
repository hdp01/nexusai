"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// 1. Staggered Text Reveal
export function TextReveal({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) {
  const words = text.split(" ");
  return (
    <div className={cn("overflow-hidden", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + (i * 0.1), ease: [0.2, 0.65, 0.3, 0.9] }}
          className="inline-block mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// 2. Slow, smooth fade up
export function SmoothAppear({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. 3D Tilt Card Effect
export function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
        transition: { duration: 0.4 }
      }}
      initial={{ rotateY: 0, rotateX: 0 }}
      className={cn("perspective-1000", className)}
    >
      {children}
    </motion.div>
  );
}