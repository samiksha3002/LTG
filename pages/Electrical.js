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
      <AboutLedLighting />
      <WhyChooseLumitec />
      <FeaturesGrid />
      <Footer />
    </>
  );
}
