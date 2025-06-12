import Header from "../components/Header";
import AboutUsHero from "../components/AboutUsHero";
import Footer from "../components/Footer";
import ContactCards from "../components/ContactCards";
import ContactFormSection from "../components/ContactFormSection";
import GoogleMapSection from "../components/GoogleMapSection";

export default function ContactUs() {
  return (
    <>
      <Header />
      <section className="mt-[100px]">
        {" "}
        {/* adjust based on header height */}
        <AboutUsHero
          imageSrc="/img1.jpg"
          title="Contact Us"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact us" }]}
        />
      </section>
      <ContactCards />
      <ContactFormSection />
      <GoogleMapSection />

      {/* Add your Contact Section here */}
      <Footer />
    </>
  );
}
