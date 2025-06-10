import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUsHero from "../components/AboutUsHero";
import AboutLedLighting from "../components/AboutLedLighting";
import WhyChooseLumitec from "../components/WhyChooseLumitec";
import FeaturesGrid from "../components/FeaturesGrid";
import ContactCTA from "../components/ContactCTA";

export default function LED() {
  return (
    <>
      <Header />
      <AboutUsHero
        imageSrc="/img1.jpg"
        title="LED Lighting"
        breadcrumb={[
          { label: "Home", href: "LED Lighting" },
          { label: "LED Lighting", href: null },
        ]}
      />
      <AboutLedLighting
        title="Modern LED Innovations"
        paragraphs={[
          "Our LED lighting solutions are designed for durability, energy efficiency, and elegance.",
          "Trusted by thousands of homes and businesses for their cost-effective performance.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Modern LED"
      />

      <WhyChooseLumitec
        top={{
          title: "Why Our Lighting Solutions Shine",
          text: "We deliver premium quality lighting with innovative technology.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "Sustainable Brilliance",
          text: "Our products are eco-friendly and energy efficient.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />

      <FeaturesGrid />
      <ContactCTA />
      <Footer />
    </>
  );
}
