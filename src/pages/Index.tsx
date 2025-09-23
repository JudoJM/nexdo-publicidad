import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ProgressBar from "@/components/ProgressBar";

const Index = () => {
  return (
    <main className="relative">
      <ProgressBar />
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <CallToAction />
    </main>
  );
};

export default Index;
