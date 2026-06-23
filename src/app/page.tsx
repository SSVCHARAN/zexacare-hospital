import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutContent from "@/components/sections/AboutContent";
import ServicesContent from "@/components/sections/ServicesContent";
import Testimonials from "@/components/sections/Testimonials";
import ContactContent from "@/components/sections/ContactContent";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutContent />
      <ServicesContent />
      <Testimonials />
      <ContactContent />
      <CTABanner />
    </>
  );
}
