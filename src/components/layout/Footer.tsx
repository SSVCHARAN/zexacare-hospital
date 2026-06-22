"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services", label: "Cardiology" },
  { href: "/services", label: "Neurology" },
  { href: "/services", label: "Orthopedics" },
  { href: "/services", label: "Pediatrics" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D1B2A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(13,124,102,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-bg text-white font-bold text-lg">
                Z
              </div>
              <span className="font-heading text-xl font-bold">
                Zexa<span className="text-primary-light">Care</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Advancing healthcare through innovation, compassion, and
              excellence. Your health is our mission.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 font-heading text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:zexabuilds@gmail.com"
                  className="transition-colors hover:text-primary-light"
                >
                  zexabuilds@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917337036740"
                  className="transition-colors hover:text-primary-light"
                >
                  +91 73370 36740
                </a>
              </li>
              <li>
                <a
                  href="tel:+919666637481"
                  className="transition-colors hover:text-primary-light"
                >
                  +91 96666 37481
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/zexa.hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-light"
                >
                  instagram.com/zexa.hq
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500"
        >
          <p className="mb-2">
            &copy; {new Date().getFullYear()} ZexaCare Hospital. All Rights
            Reserved.
          </p>
          <p className="mb-2">
            Designed &amp; Developed with{" "}
            <span className="text-red-400">&#9829;</span> by{" "}
            <span className="font-semibold text-white">Zexa Designs</span>
          </p>
          <p className="text-xs">
            &trade; Zexa Designs is a trademark of Zexa Builds.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
