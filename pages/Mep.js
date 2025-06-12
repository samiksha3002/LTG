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
          title="Mep Services"
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Our Services / Mep Services" },
          ]}
        />
      </section>

      <AboutLedLighting
        title="🗺 Mep Services"
        paragraphs={[
          "At LTG, our MEP (Mechanical, Electrical, and Plumbing) services are designed to support and enhance lighting systems in every type of space. From smooth electrical layouts to efficient HVAC planning and plumbing integration, we ensure that every technical layer behind your lighting works flawlessly. Whether it's a home, hotel, office, or commercial site, our MEP solutions create a strong foundation for intelligent, safe, and future-ready lighting environments.",
        ]}
        imageSrc="/img1.jpg"
        imageAlt="Smart Home Integration"
      />
      <WhyChooseLumitec
        top={{
          title: "Technical Mastery in MEP Engineering",
          text: "Our MEP (Mechanical, Electrical & Plumbing) services are designed to optimize performance, ensure safety, and reduce long-term operating costs. We leverage the latest engineering tools, smart systems, and proven standards to deliver MEP solutions that are both technically sound and future-ready. Whether it's HVAC efficiency, precise electrical load balancing, or reliable plumbing layouts — we engineer with clarity and confidence.",
          tagline:
            "Every wire, pipe, and duct is planned to perform — designed for durability, safety, and energy efficiency.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "Integrated MEP Planning with Architectural Vision",
          text: "MEP design is more than just infrastructure — it’s the lifeblood of any functional space. We collaborate closely with architects, consultants, and developers to ensure our systems are seamlessly woven into the structure’s form and function. From early-stage schematics to final commissioning, our team ensures the MEP elements support and enhance the architectural experience — never conflict with it.",
          tagline:
            "We believe great engineering is invisible — present in performance, yet harmonious with the design.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
