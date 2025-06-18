import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsHero from "../components/AboutUsHero";
import AboutLedLighting from "../components/AboutLedLighting";
import WhyChooseLumitec from "../components/WhyChooseLumitec";
import FeaturesGrid from "../components/FeaturesGrid";

export default function LED() {
  return (
    <>
      <Header />
      <section className="mt-[100px]">
        {" "}
        {/* adjust based on header height */}
        <AboutUsHero
          imageSrc="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183610/Light5_t6bacj.jpg"
          title="Electrical Work"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Services / Electrical Work" },
          ]}
        />
      </section>

      <AboutLedLighting
        title="⚡ Electrical Works"
        paragraphs={[
          "Electricity is the foundation of every modern space — and at LTG, we ensure it flows seamlessly, safely, and smartly. Our electrical services are designed to meet the highest standards for both residential and commercial projects. From new installations and complete rewiring to maintenance, upgrades, and smart power distribution, we handle it all with precision. Whether you're building a new home, renovating an office, or outfitting a luxury hotel, our licensed professionals bring deep technical expertise with a focus on efficiency, safety, and design integration.",
        ]}
        imageSrc="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183184/Exterior32_kjkl8w.jpg"
        imageAlt="Smart Home Integration"
      />
      <WhyChooseLumitec
        top={{
          title: "Reliable Power Infrastructure",
          text: "We specialize in end-to-end electrical solutions — from basic wiring to complex power distribution systems. Safety, precision, and compliance form the backbone of every project. Whether residential, commercial, or industrial, our certified team ensures every circuit is carefully planned and executed to meet the highest standards.",
          tagline:
            "Powering your project with reliability and zero-compromise safety.",
          image:
            "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183219/Interior1_axgzlh.jpg",
          reverse: false,
        }}
        bottom={{
          title: "Systematic Design & Execution",
          text: "We believe electrical works are not just technical — they are architectural veins of a building. Our planning emphasizes accessibility, load management, and longevity. Working closely with the design team, we ensure all systems — lighting, automation, HVAC — run seamlessly and sustainably.",
          tagline: "Designed for today. Ready for tomorrow.",
          image:
            "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183218/Interior3_lrfzif.jpg",
          reverse: true,
        }}
      />

      <FeaturesGrid />
      <Footer />
    </>
  );
}
