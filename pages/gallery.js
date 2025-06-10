import Header from "../components/Header";
import AboutUsHero from "../components/AboutUsHero";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <AboutUsHero
        imageSrc="/img1.jpg"
        title="Gallery"
        breadcrumb={[
          { label: "Home", href: "Gallery" },
          { label: "Gallery", href: null },
        ]}
      />
      <ImageGallery />
      <Footer />
    </>
  );
}
