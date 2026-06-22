"use client";

import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="gradient-bg absolute inset-0 opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Ready to Experience{" "}
            <span className="text-secondary">World-Class Care</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Schedule your appointment today and take the first step towards
            better health. Our team is here to help you every step of the way.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="min-w-[200px]"
            >
              Book Appointment
            </Button>
            <Button
              href="tel:+917337036740"
              variant="outline"
              size="lg"
              className="min-w-[200px] border-white/40 text-white hover:bg-white/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" />
              </svg>
              Call +91 73370 36740
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
