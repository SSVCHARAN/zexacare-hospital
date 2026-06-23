"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import StaggerContainer, {
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const departments = [
  {
    icon: "❤️",
    title: "Cardiology",
    description:
      "Complete heart care including diagnostics, interventional procedures, and cardiac rehabilitation with advanced catheterization labs.",
    highlights: ["Echocardiography", "Angioplasty", "Heart Surgery", "Cardiac Rehab"],
  },
  {
    icon: "🧠",
    title: "Neurology",
    description:
      "Comprehensive neurological care with state-of-the-art imaging, stroke management, and neurosurgical interventions.",
    highlights: ["Brain Imaging", "Stroke Care", "Neurosurgery", "Epilepsy Treatment"],
  },
  {
    icon: "🦴",
    title: "Orthopedics",
    description:
      "Expert bone, joint, and spine care with minimally invasive surgical techniques and advanced rehabilitation programs.",
    highlights: ["Joint Replacement", "Spine Surgery", "Sports Medicine", "Physiotherapy"],
  },
  {
    icon: "👶",
    title: "Pediatrics",
    description:
      "Specialized healthcare for infants, children, and adolescents in a nurturing, child-friendly environment.",
    highlights: ["Wellness Checks", "Vaccinations", "Pediatric ICU", "Developmental Care"],
  },
  {
    icon: "🔬",
    title: "General Surgery",
    description:
      "Advanced surgical procedures including laparoscopic and robotic-assisted surgery for optimal outcomes.",
    highlights: ["Laparoscopy", "Robotic Surgery", "Emergency Surgery", "Cancer Surgery"],
  },
  {
    icon: "🫁",
    title: "Pulmonology",
    description:
      "Comprehensive respiratory care for conditions affecting the lungs and respiratory system with advanced diagnostic tools.",
    highlights: ["Pulmonary Tests", "Bronchoscopy", "Asthma Care", "Sleep Studies"],
  },
  {
    icon: "🩺",
    title: "Internal Medicine",
    description:
      "Comprehensive adult healthcare covering diagnosis, treatment, and prevention of a wide range of conditions.",
    highlights: ["Health Screenings", "Disease Management", "Preventive Care", "Chronic Care"],
  },
  {
    icon: "🤰",
    title: "Obstetrics & Gynecology",
    description:
      "Complete women's health services including prenatal care, delivery, and gynecological treatments.",
    highlights: ["Prenatal Care", "Delivery Suite", "Fertility Care", "Women's Health"],
  },
  {
    icon: "👁️",
    title: "Ophthalmology",
    description:
      "Comprehensive eye care from routine examinations to advanced surgical procedures for vision correction.",
    highlights: ["Cataract Surgery", "Glaucoma Care", "LASIK", "Retina Treatment"],
  },
];

const process = [
  { step: "01", title: "Book Appointment", description: "Schedule online or call us — our team will confirm within minutes." },
  { step: "02", title: "Visit & Consult", description: "Meet your specialist in a comfortable, modern consultation suite." },
  { step: "03", title: "Diagnosis & Treatment", description: "Advanced diagnostic tests followed by a personalized treatment plan." },
  { step: "04", title: "Recovery & Follow-up", description: "Ongoing support, rehabilitation, and follow-up care for complete healing." },
];

export default function ServicesContent() {
  return (
    <>
      <section id="services" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Our Services
            </span>
            <h1 className="font-heading mt-4 text-5xl font-bold text-white sm:text-6xl">
              Comprehensive{" "}
              <span className="text-secondary">Medical Care</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              From routine check-ups to complex surgeries, ZexaCare offers a
              full spectrum of medical services delivered by expert specialists.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12">
            <ImagePlaceholder aspectRatio="21/9" label="Medical Facility Image" className="w-full" />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerContainer
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            staggerDelay={0.06}
          >
            {departments.map((dept) => (
              <StaggerItem key={dept.title}>
                <GlassCard className="group h-full flex flex-col" glow>
                  <ImagePlaceholder aspectRatio="16/9" label={dept.title + " Image"} className="w-full mb-4" />
                  <span className="mb-4 text-4xl">{dept.icon}</span>
                  <h3 className="font-heading text-xl font-semibold text-text">
                    {dept.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
                    {dept.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dept.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 gradient-bg-subtle">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <h2 className="font-heading text-4xl font-bold text-text sm:text-5xl">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-text-muted">
              From booking to recovery — a seamless healthcare experience.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2" />
            <div className="grid gap-8 lg:grid-cols-4">
              {process.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.15}>
                  <div className="relative text-center">
                    <div className="gradient-bg mx-auto flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg mb-6 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-bold text-text sm:text-5xl">
              Cutting-Edge <span className="gradient-text">Technology</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-muted">
              ZexaCare is equipped with the latest medical technology to ensure
              accurate diagnosis and effective treatment — from advanced imaging
              systems to robotic surgery platforms.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {["MRI & CT Imaging", "Robotic Surgery", "Digital X-Ray", "ECG & Echo", "Endoscopy Suite", "ICU Monitoring"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/30 bg-white px-5 py-2.5 text-sm font-medium text-primary shadow-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 gradient-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Need Help Choosing a Service?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Our team is here to guide you to the right specialist.
            </p>
            <div className="mt-6">
              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
              >
                Talk to Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
