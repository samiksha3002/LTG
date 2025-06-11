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
        title="⚡ Electrical Works"
        paragraphs={[
          "Electricity is the foundation of every modern space — and at LTG, we ensure it flows seamlessly, safely, and smartly. Our electrical services are designed to meet the highest standards for both residential and commercial projects. From new installations and complete rewiring to maintenance, upgrades, and smart power distribution, we handle it all with precision. Whether you're building a new home, renovating an office, or outfitting a luxury hotel, our licensed professionals bring deep technical expertise with a focus on efficiency, safety, and design integration.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Smart Home Integration"
      />
      <WhyChooseLumitec
        top={{
          title: "✅ Why Choose Us?",
          text: "Because we don’t just do wiring — we build trust. At LTG, our electrical work is powered by experience, driven by innovation, and backed by full compliance with industry standards. We take the time to understand your needs and deliver tailored solutions that are future-ready. No shortcuts, no compromises — just clean, reliable, and high-performance results.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "🛠 Our Commitment to Quality",
          text: "Every wire, socket, and switch we install is a reflection of our commitment to excellence. Our team uses top-grade materials and follows precise installation practices to ensure your system is not only functional but also future-proof. We test everything thoroughly and work with full transparency — because for us, quality means peace of mind that lasts for years.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
