"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Concept Development",
    icon: "/Efforts.png",
  },
  {
    title: "Attractive Alternatives",
    icon: "/Efforts2.png",
  },
  {
    title: "Lighting Installation",
    icon: "/Efforts3.png",
  },
  {
    title: "Decor Visualization",
    icon: "/Efforts4.png",
  },
];

export default function ComfortSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="bg-[#f7f7f5] py-16 text-center">
      <h2
        className="text-4xl md:text-5xl font-extrabold text-black mb-12"
        data-aos="fade-up"
      >
        We create comfort for living<span className="text-black">.</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay={index * 100} // subtle staggered effect
          >
            <Image
              src={feature.icon}
              alt={feature.title}
              width={125}
              height={125}
              className="mb-4"
            />
            <p className="text-base text-black font-medium leading-tight">
              {feature.title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
