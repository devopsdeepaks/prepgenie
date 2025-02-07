import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_component/Header";
import HeroSection from "./_component/Hero";
import About from "./_component/About";
import { Services } from "./_component/Services";
import { Testimonials } from "./_component/Testimonial";
import Pricing from "./_component/Pricing";
import Footer from "./_component/Footer";

export default function Home() {
  return (
    <div className="dark bg-black">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
