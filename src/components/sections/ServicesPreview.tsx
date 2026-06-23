"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "Emergency Care",
    description:
      "24/7 emergency services with rapid response teams and advanced life-support systems.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    title: "Cardiology",
    description:
      "Comprehensive heart care with state-of-the-art diagnostic and interventional cardiology.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
    title: "Neurology",
    description:
      "Advanced neurological care with cutting-edge diagnostic technology and expert specialists.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Orthopedics",
    description:
      "Expert bone and joint care with minimally invasive surgical techniques and rehabilitation.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
        <path d="M12 14c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
      </svg>
    ),
    title: "Pediatrics",
    description:
      "Specialized care for children in a warm, child-friendly environment with experienced pediatricians.",
  },
  {
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 12v7.5" />
        <path d="M16.5 5.5a4.5 4.5 0 1 0-9 0v3.75a4.5 4.5 0 0 0 9 0V5.5z" />
        <path d="M7.5 15.75a6.75 6.75 0 0 0 9 0" />
      </svg>
    ),
    title: "General Surgery",
    description:
      "Comprehensive surgical services with advanced laparoscopic and robotic-assisted procedures.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="gradient-bg-subtle pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Our Services
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold text-text sm:text-5xl">
            Comprehensive{" "}
            <span className="gradient-text">Healthcare Solutions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-muted">
            From emergency care to specialized treatments, we offer a full
            spectrum of medical services under one roof.
          </p>
        </Reveal>

        <StaggerContainer
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <GlassCard className="group h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-text">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal className="mt-12 text-center" delay={0.3}>
          <Button href="/#services" variant="primary" size="lg">
            View All Services
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
