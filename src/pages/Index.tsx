import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppScreenshots from "@/components/AppScreenshots";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import ProgressBar from "@/components/ProgressBar";

const Index = () => {
  return (
    <main className="relative">
      <ProgressBar />
      <Hero />
      <Features />
      <AppScreenshots />
      <Benefits />
      <Testimonials />
      <Contact />
      <CallToAction />
    </main>
  );
};

export default Index;
