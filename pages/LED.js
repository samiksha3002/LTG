"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseLumitec({ top, bottom }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Section = ({ title, text, image, reverse }) => (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center gap-10 py-14`}
    >
      <div
        className="w-full lg:w-1/2 px-4"
        data-aos={reverse ? "fade-left" : "fade-right"}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg font-light text-gray-600 leading-relaxed">
          {text}
        </p>
      </div>
      <div
        className="w-full lg:w-1/2 px-4"
        data-aos={reverse ? "fade-right" : "fade-left"}
      >
        <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:scale-105">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#fdfbf7] px-6 md:px-10 lg:px-20 xl:px-32">
      <Section {...top} />
      <Section {...bottom} />
    </section>
  );
}
