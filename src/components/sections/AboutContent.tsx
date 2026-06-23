"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const values = [
  {
    number: "01",
    title: "Compassion",
    description:
      "We treat every patient with empathy, dignity, and respect — because healthcare is personal.",
  },
  {
    number: "02",
    title: "Innovation",
    description:
      "We invest in cutting-edge technology and continuously evolve to provide the best medical outcomes.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "We strive for the highest standards in every aspect of care, from diagnosis to recovery.",
  },
  {
    number: "04",
    title: "Integrity",
    description:
      "We operate with complete transparency and ethical practices, putting patient trust above all.",
  },
];

const timeline = [
  { year: "2024", title: "Foundation", description: "ZexaCare Hospital was established with a vision to transform healthcare." },
  { year: "2025", title: "Expansion", description: "Opened new wings for cardiology, neurology, and advanced surgery." },
  { year: "2026", title: "Milestone", description: "Served over 10,000 patients and earned recognition for clinical excellence." },
];

const team = [
  { name: "Dr. Ananya Sharma", role: "Chief of Cardiology", initials: "AS" },
  { name: "Dr. Rajesh Mehta", role: "Head of Neurology", initials: "RM" },
  { name: "Dr. Priya Kapoor", role: "Lead Orthopedic Surgeon", initials: "PK" },
  { name: "Dr. Arjun Nair", role: "Chief Pediatrician", initials: "AN" },
];

export default function AboutContent() {
  return (
    <>
      <section id="about" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1B2A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,124,102,0.2),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              About Us
            </span>
            <h1 className="font-heading mt-4 text-5xl font-bold text-white sm:text-6xl">
              Our{" "}
              <span className="text-secondary">Mission</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              At ZexaCare Hospital, we are driven by a singular purpose — to
              deliver compassionate, world-class healthcare that transforms
              lives. Founded on the principles of excellence and innovation, we
              bring together the brightest medical minds and the latest
              technology to serve our community.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <ImagePlaceholder aspectRatio="21/9" label="Hospital Image" className="w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-4xl font-bold text-text sm:text-5xl">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              The principles that guide everything we do.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="group relative rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <span className="font-heading text-6xl font-bold text-primary/10 transition-colors group-hover:text-primary/20">
                    {value.number}
                  </span>
                  <h3 className="font-heading mt-2 text-xl font-semibold text-text">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 gradient-bg-subtle">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-4xl font-bold text-text sm:text-5xl">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20 hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`relative flex items-center gap-8 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="hidden md:block md:w-1/2" />
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full gradient-bg items-center justify-center text-white font-bold text-sm shadow-lg">
                      {i + 1}
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="glass rounded-2xl p-6 md:mx-8">
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                        <h3 className="font-heading mt-1 text-xl font-semibold text-text">{item.title}</h3>
                        <p className="mt-2 text-sm text-text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-4xl font-bold text-text sm:text-5xl">
              Meet Our <span className="gradient-text">Experts</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              Led by some of the most respected names in medicine.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <ImagePlaceholder rounded label="Photo" className="h-full w-full" />
                    <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white drop-shadow-md">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-heading mt-4 text-lg font-semibold text-text">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
