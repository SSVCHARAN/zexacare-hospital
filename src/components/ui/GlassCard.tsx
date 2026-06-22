"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${glow ? "shadow-glow" : "shadow-md"} ${className}`}
      whileHover={
        hover
          ? { y: -5, boxShadow: "0 20px 40px rgba(13, 124, 102, 0.1)" }
          : {}
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
