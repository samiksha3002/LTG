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
          imageSrc="/img1.jpg"
          title="Home Automation"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Services /Home Automation" },
          ]}
        />
      </section>

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
          title: "Smart Living, Effortlessly Delivered",
          text: "Welcome to a world where lighting, climate, security, and entertainment respond to your touch — or even your presence. Our home automation solutions are designed to provide comfort, control, and convenience, tailored to your lifestyle. Whether it's voice-activated scenes or app-based control, we make technology feel simple, intuitive, and luxurious.Your home. ",
          tagline: "Smart living, effortlessly delivered.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "Seamless Technology Integration",
          text: "We design systems that work invisibly in the background — integrated within your home’s architecture without disrupting aesthetics. From retrofit solutions to new installations, our automation setup is scalable, discreet, and future-proof. Every feature is engineered to blend into your daily life, not interrupt it.",
          tagline:
            "Technology that disappears into design — but appears when you need it",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
