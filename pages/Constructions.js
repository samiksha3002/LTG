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
      <AboutUsHero
        imageSrc="/img1.jpg"
        title="LED Lighting"
        breadcrumb={[
          { label: "Home", href: "Gallery" },
          { label: "", href: null },
        ]}
      />
      <AboutLedLighting
        title="Electrical Living with Home Automation"
        paragraphs={[
          "At LTG, we bring spaces to life — from bare walls to fully finished environments. Our fit-out construction services cover everything from flooring, partitions, ceilings, and painting to electrical, lighting, and smart system integration. Whether it’s a home, office, showroom, hotel, or retail space, we manage every detail with precision and professionalism. We don’t just build interiors — we craft atmospheres that feel as good as they look. With LTG, your space is not only built beautifully but built ready.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Smart Home Integration"
      />
      <WhyChooseLumitec
        top={{
          title: "✅ Why Choose Us?",
          text: "Because we understand the power of a perfectly finished space. Our team handles the complete interior construction process under one roof, ensuring seamless coordination between design, lighting, and electrical work. We deliver projects on time, on budget, and to the highest standard — with zero compromises on creativity or quality.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "🛠 Our Commitment to Quality",
          text: "Every fit-out project is backed by expert craftsmanship, premium materials, and attention to the smallest detail. From structural works to final finishes, we maintain a rigorous standard of safety, durability, and aesthetic excellence. With LTG, your space doesn’t just get done — it gets done right, with quality that stands the test of time.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
