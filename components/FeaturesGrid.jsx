"use client";

import { useEffect } from "react";
import {
  Droplets,
  Share2,
  BadgeDollarSign,
  CandlestickChart,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturesGrid() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      icon: <Droplets size={36} className="text-white" />,
      title: "Eco-friendly Efficiency",
      desc: "Our lighting systems consume less energy while delivering superior brightness and ambiance.",
    },
    {
      icon: <Share2 size={36} className="text-white" />,
      title: "Smart Integration",
      desc: "Seamlessly connect your lighting with smart home devices for automation and control.",
    },
    {
      icon: <BadgeDollarSign size={36} className="text-white" />,
      title: "Cost Effective",
      desc: "Enjoy high-end lighting solutions that save you money in the long run.",
    },
    {
      icon: <CandlestickChart size={36} className="text-white" />,
      title: "Performance Focused",
      desc: "Engineered to deliver consistent performance across diverse environments and projects.",
    },
  ];

  return (
    <section
      className="bg-[#fdfbf7] py-20 px-4 md:px-10"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2
          id="features-heading"
          className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-gray-900"
          data-aos="fade-up"
        >
          Bright Ideas, Brilliant Execution
        </h2>

        {/* Subheading */}
        <p
          className="text-gray-600 font-light mb-14 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Discover how our cutting-edge lighting solutions transform ordinary
          spaces into extraordinary experiences.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-left"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black mb-4 group-hover:scale-110 transform transition duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
