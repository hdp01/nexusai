"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FadeIn({ 
  children, 
  delay = 0, 
  className 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ 
  children, 
  delay = 0, 
  className 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ 
  text, 
  className, 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number; 
}) {
  const words = text.split(" ");
  return (
    <div className={cn("overflow-hidden inline-flex flex-wrap gap-x-[0.2em]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + (i * 0.05), ease: [0.2, 0.65, 0.3, 0.9] }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function SmoothAppear({ 
  children, 
  delay = 0, 
  className 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function TiltCard({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <motion.div
      whileHover={{ 
        y: -5,
        rotateY: 2,
        rotateX: -2,
        transition: { duration: 0.4 }
      }}
      initial={{ rotateY: 0, rotateX: 0 }}
      className={cn("perspective-1000 transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}