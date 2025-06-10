import Hero from "../components/Hero";
import Header from "../components/Header";
import ComfortSection from "../components/ComfortSection";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import Showroom from "../components/Showroom";
import ProjectsShowcase from "../components/ProjectsShowcase";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import MarqueeSection from "../components/MarqueeSection";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ComfortSection />
      <WhyChooseUs />
      <OurServices />
      <MarqueeSection />
      <Showroom />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />

      {/* Other sections go here */}
    </>
  );
}
