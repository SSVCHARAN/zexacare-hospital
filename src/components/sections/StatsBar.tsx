"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

function StatItem({ end, suffix = "", label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-heading text-4xl font-bold text-primary sm:text-5xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </motion.div>
  );
}

export default function StatsBar() {
  const stats = [
    { end: 50, suffix: "+", label: "Expert Doctors" },
    { end: 10000, suffix: "+", label: "Patients Cared For" },
    { end: 15, suffix: "+", label: "Years of Excellence" },
    { end: 98, suffix: "%", label: "Patient Satisfaction" },
  ];

  return (
    <section className="relative -mt-28 z-20 mx-auto max-w-6xl px-6">
      <div className="glass rounded-3xl px-8 py-12 shadow-xl sm:px-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
