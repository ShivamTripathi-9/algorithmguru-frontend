import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import Categories from "../components/home/Categories";
import Benefits from "../components/home/Benefits";
import Testimonials from "../components/home/Testimonials";
import Pricing from "../components/home/Pricing";
import CTA from "../components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Categories />
      <Benefits />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
