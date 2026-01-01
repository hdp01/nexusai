"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Import cn utility to merge classes safely

interface MotionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string; // Add className as an optional prop
}

export function FadeIn({ children, delay = 0, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, delay = 0, className }: MotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: delay, ease: "easeOut" }}
      className={cn(className)} // Apply the className here
    >
      {children}
    </motion.div>
  );
}