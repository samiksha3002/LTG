"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutLedLighting({
  title = "Service Title",
  paragraphs = [],
  imageSrc = "",
  imageAlt = "",
}) {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      id="about-led-lighting"
      className="bg-white px-6 md:px-16 py-10 pt-32 md:pt-36 scroll-mt-36"
    >
      <h2
        className="text-black text-3xl md:text-4xl font-bold mb-4"
        data-aos="fade-up"
      >
        {title}
      </h2>

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

      {imageSrc && (
        <div
          className="relative overflow-hidden shadow-lg mt-6 h-[600px] w-full rounded-md"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover w-full h-full"
            priority
          />

          {imageAlt && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 px-5 py-2 rounded-md">
              <p className="text-white text-center text-base font-medium">
                {imageAlt}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
