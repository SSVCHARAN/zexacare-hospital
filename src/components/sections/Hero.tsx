"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="absolute inset-0">
        <div className="absolute left-10 top-1/4 h-64 w-64 rounded-full bg-primary-light/20 blur-3xl" />
        <div className="absolute right-10 bottom-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
          Excellence in Healthcare Since 2024
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl font-bold leading-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Your Health,{" "}
          <span className="gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Our Mission
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          At ZexaCare, we combine cutting-edge medical technology with
          compassionate care to deliver world-class multi-specialty healthcare
          for you and your family.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            href="/#contact"
            variant="secondary"
            size="lg"
            className="min-w-[200px]"
          >
            Book Appointment
          </Button>
          <Button
            href="/#services"
            variant="outline"
            size="lg"
            className="min-w-[200px] border-white/40 text-white hover:bg-white/10"
          >
            Explore Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              className="stroke-current"
            >
              <rect
                x="1"
                y="1"
                width="14"
                height="22"
                rx="7"
                strokeWidth="2"
              />
              <motion.circle
                cx="8"
                cy="8"
                r="2"
                fill="currentColor"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
