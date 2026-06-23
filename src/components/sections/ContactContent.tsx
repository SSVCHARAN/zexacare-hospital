"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const contactInfo = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email Us",
    value: "zexabuilds@gmail.com",
    href: "mailto:zexabuilds@gmail.com",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 73370 36740",
    href: "tel:+917337036740",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Visit Us",
    value: "123 Healthcare Avenue, Medical District",
    href: "#",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Hours",
    value: "24/7 Emergency • Mon-Sat: 8AM-8PM",
    href: "#",
  },
];

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section id="contact" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1B2A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,124,102,0.2),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
              Contact Us
            </span>
            <h1 className="font-heading mt-4 text-5xl font-bold text-white sm:text-6xl">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Have a question or want to book an appointment? We&apos;d love to
              hear from you. Reach out and our team will respond promptly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal direction="left">
              <div>
                <h2 className="font-heading text-3xl font-bold text-text">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="mt-3 text-text-muted">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 rounded-2xl bg-primary/10 p-8 text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-text">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-text-muted">
                      Thank you for reaching out. We&apos;ll contact you shortly.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Send Another
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-text">
                          Department
                        </label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        >
                          <option value="">Select a department</option>
                          <option value="cardiology">Cardiology</option>
                          <option value="neurology">Neurology</option>
                          <option value="orthopedics">Orthopedics</option>
                          <option value="pediatrics">Pediatrics</option>
                          <option value="general">General Medicine</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-text">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div>
                <h2 className="font-heading text-3xl font-bold text-text">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="mt-3 text-text-muted">
                  Reach us through any of these channels.
                </p>

                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="glass group flex items-start gap-4 rounded-2xl p-5 transition-all hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">{item.label}</p>
                        <p className="font-medium text-text">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                  <div className="glass mt-8 overflow-hidden rounded-2xl">
                    <ImagePlaceholder aspectRatio="16/9" label="Map Location" className="w-full" />
                  </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
