"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content:
      "The care I received at ZexaCare was exceptional. From the moment I walked in, the staff made me feel comfortable and well-cared for. The doctors took time to explain everything thoroughly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Patient",
    content:
      "ZexaCare transformed my recovery experience. The physiotherapy team was amazing, and the facilities are world-class. I couldn't have asked for better care during my rehabilitation.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Patient's Family",
    content:
      "When my mother needed emergency surgery, ZexaCare's team acted swiftly and professionally. They kept us informed every step of the way. Truly grateful for their compassion and expertise.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[#0D1B2A]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(13,124,102,0.2),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
            Testimonials
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold text-white sm:text-5xl">
            What Our{" "}
            <span className="text-secondary">Patients Say</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="glass mx-auto max-w-2xl rounded-3xl p-8 sm:p-12"
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )
                )}
              </div>
              <p className="text-lg leading-relaxed text-white/80">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-white">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-white/50">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-secondary"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
