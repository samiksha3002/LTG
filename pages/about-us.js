import Head from "next/head";
import Header from "../components/Header";
import AboutUsHero from "../components/AboutUsHero";
import AboutSection from "../components/AboutSection";
import AboutService from "../components/AboutService";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

export default function AboutUs() {
  return (
    <>
      <Header />
      <section className="mt-[100px]">
        {" "}
        {/* adjust based on header height */}
        <AboutUsHero
          imageSrc="/img1.jpg"
          title="About Us"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        />
      </section>

      <AboutSection />
      <AboutService />
      <TeamSection />
      <ContactCTA />
      <Footer />
      {/* You can add more sections here as needed */}
    </>
  );
}
