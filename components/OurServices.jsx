import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Led Lightning",
    desc: "Illuminate your environment with advanced LED lighting solutions. Designed for energy efficiency and visual appeal, our lighting setups are perfect for modern homes and smart spaces.",
    image: "/img1.jpg",
    iconImg: "/Ser2.png",
    link: "/LED",
  },
  {
    title: "Electrical Works",
    desc: "We handle all your electrical needs — from basic wiring to complex installations — with a focus on safety, compliance, and long-term reliability. Quality you can count on, power you can trust.",
    image: "/img1.jpg",
    iconImg: "/ser1.png",
    link: "/Electrical",
  },
  {
    title: "Home Automation",
    desc: "Step into the future of living with our smart home automation systems. Control lighting, temperature, and security — all from your fingertips — and enjoy true comfort and convenience.",
    image: "/img1.jpg",
    iconImg: "/ser3.png",
    link: "/Automation",
  },
  {
    title: "Map Services",
    desc: "Whether it’s geolocation integration or smart mapping features, our solutions ensure precise navigation, accurate tracking, and seamless user experiences in any smart application.",
    image: "/img1.jpg",
    iconImg: "/ser4.png",
    link: "/Mep",
  },
  {
    title: "Fit Out Constructions",
    desc: "Bring your interior visions to life with our custom fit-out services. From planning to execution, we deliver stylish, functional, and future-ready spaces for homes, offices, and more.",
    image: "/img1.jpg",
    iconImg: "/ser5.png",
    link: "/Constructions",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0);

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

      {/* Layout switch based on screen size */}
      <div className="md:flex md:overflow-x-auto md:no-scrollbar pl-4 pr-4 gap-4 flex-wrap md:flex-nowrap flex-col md:flex-row">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer rounded-2xl relative group transition-all duration-500 ease-in-out
                ${isActive ? "md:w-[65vw]" : "md:w-[100px]"}
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

              {isActive || window.innerWidth < 768 ? (
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
