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
        title="🏠 Home Automation"
        paragraphs={[
          "Welcome to the future of living — where comfort, control, and convenience come together seamlessly. At LTG, our home automation systems are designed to make your lifestyle smarter, safer, and more connected. From automated lighting, climate control, and security to voice-activated systems and mobile integration, we offer intuitive solutions tailored to your needs. Whether you're building a luxury villa or upgrading your current space, we transform homes into intelligent environments that respond to your lifestyle, enhance energy efficiency, and elevate everyday comfort.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Smart Home Integration"
      />

      <WhyChooseLumitec
        top={{
          title: "✅ Why Choose Us?",
          text: "At LTG, we understand that automation is not just about gadgets — it’s about simplifying life. Our team listens closely to your routine, preferences, and goals to design systems that work quietly in the background but powerfully impact your comfort. We integrate reliable, cutting-edge technology with elegant design — giving you control at your fingertips, whether you're home or away.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "🛠 Our Commitment to Quality",
          text: "Quality in home automation starts with understanding — and ends with flawless execution. We use certified, high-performance products and follow best-in-class installation practices to ensure lasting performance. Every system is tested, secured, and fine-tuned for your lifestyle. With LTG, you get more than just automation — you get peace of mind, built to last.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
