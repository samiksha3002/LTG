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
        title="💡 LED Lighting"
        paragraphs={[
          "Lighting is more than visibility — it’s about atmosphere, mood, and energy. At LTG, our LED lighting solutions combine style, sustainability, and smart technology to transform spaces of every scale. Whether you’re designing a cozy home, a sleek office, or a grand hotel, our LED options offer powerful performance with stunning aesthetics. From ambient accents to focused task lighting, every fixture is designed to be energy-efficient, long-lasting, and visually captivating. With a wide range of customizable designs, we help you create environments that feel as good as they look — all while saving energy and reducing costs.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Smart Home Integration"
      />

      <WhyChooseLumitec
        top={{
          title: "✅ Why Choose Us?",
          text: "At LTG, we go beyond basic lighting. We understand that every space has a story, and the right light helps tell it. Our team of experts doesn’t just install — we listen, design, and collaborate with you to bring your vision to life. With cutting-edge products, creative solutions, and a commitment to detail, we make lighting easy, efficient, and exceptional. Whether it's residential or commercial, you can count on us to deliver with passion and precision.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "🛠 Our Commitment to Quality",
          text: "Quality is not just a promise — it’s built into every project we take on. From selecting premium-grade materials to ensuring flawless installations, we hold ourselves to the highest standards. Every LED solution we provide undergoes strict testing, ensuring durability, efficiency, and aesthetic harmony. At LTG, we believe your spaces deserve lighting that lasts — in performance, style, and satisfaction.",
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
