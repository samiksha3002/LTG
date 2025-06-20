"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Led Lighting",
    desc: "Illuminate your environment with advanced LED lighting solutions. Designed for energy efficiency and visual appeal, our lighting setups are perfect for modern homes and smart spaces.",
    image:
      "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182384/Commercial117_tnlrzg.jpg",
    iconImg: "/Ser2.png",
    link: "/LED",
  },
  {
    title: "Electrical Works",
    desc: "We handle all your electrical needs — from basic wiring to complex installations — with a focus on safety, compliance, and long-term reliability. Quality you can count on, power you can trust.",
    image:
      "https://wordpress.cloud1.me/lumitec/wp-content/uploads/2025/04/pexels-jose-andres-pacheco-cortes-3641213-5463587.jpg",
    iconImg: "/ser1.png",
    link: "/Electrical",
  },
  {
    title: "Home Automation",
    desc: "Step into the future of living with our smart home automation systems. Control lighting, temperature, and security — all from your fingertips — and enjoy true comfort and convenience.",
    image:
      "https://wordpress.cloud1.me/lumitec/wp-content/uploads/2025/04/pexels-mateusz-haberny-806274365-19238583.jpg",
    iconImg: "/ser3.png",
    link: "/Automation",
  },
  {
    title: "Mep Services",
    desc: "From seamless electrical layouts to efficient mechanical and plumbing systems, our MEP solutions ensure safe, reliable, and future-ready infrastructure for every smart space.",
    image:
      "https://wordpress.cloud1.me/lumitec/wp-content/uploads/2025/04/pexels-ar-abnoy-536397811-16509869.jpg",
    iconImg: "/ser4.png",
    link: "/Mep",
  },
  {
    title: "Fit Out Constructions",
    desc: "Bring your interior visions to life with our custom fit-out services. From planning to execution, we deliver stylish, functional, and future-ready spaces for homes, offices, and more.",
    image:
      "https://wordpress.cloud1.me/lumitec/wp-content/uploads/2025/04/pexels-rquiros-2219024.jpg",
    iconImg: "/ser5.png",
    link: "/Constructions",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSwipe = (offsetX) => {
    if (offsetX < -50 && activeIndex < services.length - 1) {
      setActiveIndex((prev) => prev + 1);
    } else if (offsetX > 50 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-[#f9f3ef] py-12 text-black">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="max-w-xl mx-auto mt-2 text-lg text-gray-600">
          At LTG, we offer a complete range of lighting and automation services
          — from LED installations and electrical works to intelligent home
          setups and luxury fit-outs. Designed for homes, offices, hotels, and
          every space in between.
        </p>
      </div>

      <div className="md:flex md:overflow-x-auto md:no-scrollbar pl-4 pr-4 gap-4 flex-wrap md:flex-nowrap flex-col md:flex-row">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                handleSwipe(info.offset.x);
              }}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-2xl relative group transition-all duration-500 ease-in-out
                ${isActive && !isMobile ? "md:w-[65vw]" : "md:w-[100px]"}
                w-full h-[500px] overflow-hidden flex-shrink-0 mb-6 md:mb-0`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-60"
                }`}
              ></div>

              {isActive || isMobile ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 p-10 text-white h-full flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-4xl font-semibold mb-4 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-orange-500 text-5xl">
                          {service.title[0]}
                        </span>
                        {service.title.slice(1)}
                      </span>
                      <img
                        src={service.iconImg}
                        alt={`${service.title} icon`}
                        className="object-contain filter invert w-14 h-14"
                      />
                    </h3>
                    <p className="text-lg mt-2">{service.desc}</p>
                  </div>
                  <div>
                    <Link href={service.link}>
                      <button className="mt-4 bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        SEE MORE →
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <div className="relative z-10 flex flex-col items-center justify-between h-full py-6 text-white text-lg font-semibold">
                  <img
                    src={service.iconImg}
                    alt={`${service.title} icon`}
                    className="w-10 h-10 object-contain filter invert"
                  />
                  <div className="flex-1 flex items-center justify-center">
                    <div className="transform -rotate-90 whitespace-nowrap text-center">
                      <span className="text-orange-500 text-4xl">
                        {service.title[0]}
                      </span>
                      {service.title.slice(1)}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
