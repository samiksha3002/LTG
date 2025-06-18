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
      <section className="mt-[100px]">
        {" "}
        {/* adjust based on header height */}
        <AboutUsHero
          imageSrc="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183832/Interior77_dpjvyu.jpg"
          title="LED Lighting"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Services / LED Lighting" },
          ]}
        />
      </section>

      <AboutLedLighting
        title="💡 LED Lighting"
        paragraphs={[
          "At the core of our lighting philosophy lies a deep respect for form, function, and the future. We don’t just install luminaires — we design experiences. Our LED solutions reflect the latest in global lighting technology, chosen with purpose to suit each space's character. Every lighting plan is crafted with a balance of performance, aesthetics, and sustainability — ensuring your space stands out while staying energy-efficient and future-ready.From custom luminaires to adaptive lighting systems, our innovations push boundaries without compromising practicality.",
        ]}
        imageSrc="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183115/Commercial21_lz380z.jpg   "
        imageAlt="Smart Home Integration"
      />

      <WhyChooseLumitec
        top={{
          title: "1. Innovation in Lighting Design",
          text: "At LTG, we go beyond basic lighting. We understand that every space has a story, and the right light helps tell it. Our team of experts doesn’t just install — we listen, design, and collaborate with you to bring your vision to life. With cutting-edge products, creative solutions, and a commitment to detail, we make lighting easy, efficient, and exceptional. ",
          tagline:
            "Whether it's residential or commercial, you can count on us to deliver with passion and precision.",
          image:
            "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183865/Light1_yx5yao.jpg",
          reverse: false,
        }}
        bottom={{
          title: " Seamless Architectural Integration",
          text: " Lighting should never feel added — it should feel born from the architecture itself. Our approach involves close collaboration with architects and designers to integrate lighting that enhances the form, flow, and emotion of each space. Every beam, shadow, and reflection is intentional — shaping an environment that feels alive, immersive, and natural.  ",
          tagline:
            "We transform spaces with light that whispers elegance, comfort, and meaning — never overpowering, always in harmony.",
          image:
            "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182766/Interio80_goy6bj.jpg",
          reverse: true,
        }}
      />

      <FeaturesGrid />
      <ContactCTA />
      <Footer />
    </>
  );
}
