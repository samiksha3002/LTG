"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactCTA() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      className="bg-[#dcd8c7] py-20 px-6 lg:px-20"
      aria-labelledby="cta-heading"
      role="region"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="cta-heading"
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug"
        >
          Let’s Brighten the Future Together
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Have a question, custom project, or partnership in mind? We’d love to
          hear from you. Reach out to our team of lighting experts and let’s
          make something brilliant.
        </p>

        <a
          data-aos="fade-up"
          data-aos-delay="300"
          href="/contact-us"
          className="inline-block bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md"
          aria-label="Contact Us Today"
        >
          Contact Us Today →
        </a>
      </div>
    </section>
  );
}
