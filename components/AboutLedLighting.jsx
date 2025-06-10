"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutLedLighting({
  title = "About Led Lighting",
  paragraphs = [
    "Lighting is more than visibility — it’s about atmosphere, mood, and energy. At LTG, our LED lighting solutions combine style, sustainability, and smart technology to transform spaces of every scale. Whether you’re designing a cozy home, a sleek office, or a grand hotel, our LED options offer powerful performance with stunning aesthetics. From ambient accents to focused task lighting, every fixture is designed to be energy-efficient, long-lasting, and visually captivating. With a wide range of customizable designs, we help you create environments that feel as good as they look — all while saving energy and reducing costs.",
  ],
  imageSrc = "/img1.jpg",
  imageAlt = "LED Lighting",
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="bg-white px-6 md:px-16 py-10">
      <h2
        className="text-black text-3xl md:text-4xl font-bold mb-4"
        data-aos="fade-up"
      >
        {title}
      </h2>

      {paragraphs.map((para, index) => (
        <p
          key={index}
          className="text-gray-700 mb-3"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {para}
        </p>
      ))}

      {imageSrc && (
        <div
          className="overflow-hidden shadow-lg mt-6 h-72"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
