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
          title="Fit Out Constructions"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Services /Fit Out Constructions" },
          ]}
        />
      </section>

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
          title: "Precision-Driven Interior Execution",
          text: "From blank shells to turnkey interiors, our fit-out services deliver refined spaces that reflect both purpose and personality. We manage the complete execution — including civil, flooring, ceiling, partitions, and finishing — with precision, ensuring every layer of the build aligns with design intent and structural integrity. Our team turns blueprints into immersive experiences.",
          tagline:
            "Every square foot crafted with care — quality that speaks without saying a word.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "Design-Integrated Project Delivery",
          text: "We work hand-in-hand with architects, designers, and consultants to bring a cohesive vision to life. Through collaborative planning, 3D coordination, and seamless on-site execution, we bridge concept and reality. The result? Spaces that are beautiful, functional, and delivered on time — with zero compromise on detail.",
          tagline:
            "Our commitment is not just to build — but to elevate the design at every stage.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
