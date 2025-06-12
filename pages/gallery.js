import Header from "../components/Header";
import AboutUsHero from "../components/AboutUsHero";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <section className="mt-[100px]">
        {" "}
        {/* adjust based on header height */}
        <AboutUsHero
          imageSrc="/img1.jpg"
          title="Gallery"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        />
      </section>

      <ImageGallery />
      <Footer />
    </>
  );
}
