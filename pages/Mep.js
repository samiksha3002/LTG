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
          title: "✅ Why Choose Us?",
          text: "lighting works best when everything else is built to support it. At LTG, we align mechanical, electrical, and plumbing systems perfectly with your lighting needs — ensuring seamless functionality, energy efficiency, and future-ready performance across residential, commercial, and hospitality spaces.",
          image: "/img1.jpg",
          reverse: false,
        }}
        bottom={{
          title: "🛠 Our Commitment to Quality",
          text: "We don’t just plug and play — we plan and perfect. Our MEP services are executed with accuracy, certified materials, and skilled workmanship. Every connection, cable, and conduit is tested, secured, and designed to complement your lighting vision without compromise.",
          image: "/img1.jpg",
          reverse: true,
        }}
      />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
