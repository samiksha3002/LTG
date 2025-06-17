"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseLumitec({
  top = {
    title: "Why Choose Lumitec?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tagline: "Lighting excellence with purpose.",
    image: "/img1.jpg",
    reverse: false,
  },
  bottom = {
    title: "Commitment to Quality",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tagline: "Designed for today. Ready for tomorrow.",
    image: "/img1.jpg",
    reverse: true,
  },
}) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const Section = ({ title, text, tagline, image, reverse }) => (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-10`}
      data-aos="fade-up"
    >
      {/* Image Block */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
          {text}
        </p>
        {tagline && (
          <div className="border-l-4 border-orange-500 pl-4">
            <p className="text-orange-600 text-lg italic font-medium">
              {tagline}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="bg-white px-6 md:px-16 py-20 space-y-24">
      <Section {...top} />
      <Section {...bottom} />
    </section>
  );
}
