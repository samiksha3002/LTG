"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "LED Lighting",
    href: "/LED",
    description:
      "Brighten your world with energy-efficient LED — built to shine smarter, longer.",
    icon: "/about1.png",
    image: "/G1.jpg",
  },
  {
    title: "Electrical Works",
    href: "/Electrical",
    description:
      "From wiring to safety upgrades, we deliver electrical excellence that powers every project.",
    icon: "/about2.png",
    image: "/G2.jpg",
  },
  {
    title: "Home Automation",
    href: "/Automation",
    description:
      "Control your home with a touch — lights, security, and comfort, all in one intelligent system.",
    icon: "/about3.png",
    image: "/G3.jpg",
  },
  {
    title: "MEP Services",
    href: "/Mep",
    description:
      "Optimized mechanical, electrical, and plumbing integrations for efficient, sustainable buildings.",
    icon: "/about4.png",
    image: "/G4.jpg",
  },
  {
    title: "Fit-Out Constructions",
    href: "/Constructions",
    description:
      "Transforming interiors from plans to perfection — tailored fit-out solutions for every space.",
    icon: "/about5.png",
    image: "/G5.jpg",
  },
];

export default function AboutService() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="w-full bg-black py-20 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <header
          className="grid md:grid-cols-2 gap-10 items-stretch"
          data-aos="fade-up"
        >
          <div className="bg-black text-white p-10 md:p-14 rounded-2xl shadow-2xl">
            <p className="text-sm text-orange-500 mb-2">— Our Services</p>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-semibold mb-6 leading-snug"
            >
              Innovative Lighting Solutions, <br />
              Engineered for Impact and Elegance
            </h2>
          </div>

          <figure className="h-[300px] md:h-[420px] w-full">
            <Image
              src="/AboutS3.jpg"
              alt="Lighting installation design and planning"
              width={800}
              height={500}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
          </figure>
        </header>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[-60px] z-30 relative">
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={index}
              href={service.href}
              aria-label={`Explore ${service.title}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="block"
            >
              <article
                className="relative rounded-2xl overflow-hidden shadow-xl flex flex-col px-4 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "400px",
                }}
              >
                <div className="absolute inset-0 bg-white bg-opacity-20" />
                <div className="relative flex flex-col h-full text-black">
                  <div className="mb-3 mt-6">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={70}
                      height={70}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm flex-grow">{service.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div
          className="flex justify-center mt-10 gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
            {services.slice(3).map((service, index) => (
              <Link
                key={index}
                href={service.href}
                aria-label={`Learn more about ${service.title}`}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
                className="block"
              >
                <article
                  className="relative rounded-2xl overflow-hidden shadow-xl flex flex-col px-8 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "400px",
                  }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20" />
                  <div className="relative flex flex-col h-full text-black">
                    <div className="mb-3 mt-6">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        width={70}
                        height={70}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm flex-grow">{service.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
