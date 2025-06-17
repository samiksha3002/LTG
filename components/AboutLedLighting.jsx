"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutLedLighting({
  title = "Service Title",
  paragraphs = [],
  imageSrc = "",
  imageAlt = "LED lighting installation for commercial projects",
}) {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      id="about-led-lighting"
      className="bg-white px-6 md:px-16 py-10 scroll-mt-36"
      aria-labelledby="about-led-lighting-title"
    >
      <header>
        <h2
          id="about-led-lighting-title"
          className="text-black text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          {title}
        </h2>
      </header>

      <article>
        {paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-gray-700 mb-3 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {para}
          </p>
        ))}
      </article>

      {imageSrc && (
        <figure
          className="relative overflow-hidden shadow-lg mt-6 h-[400px] w-full"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src={imageSrc}
            alt={imageAlt || "LED lighting installation image"}
            fill
            className="object-cover w-full h-full"
            priority
          />
          {imageAlt && (
            <figcaption className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-5 py-2 rounded-md">
              <p className="text-white text-center text-base font-medium">
                {imageAlt}
              </p>
            </figcaption>
          )}
        </figure>
      )}
    </section>
  );
}
