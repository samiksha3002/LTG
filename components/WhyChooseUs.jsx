"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section
      className="relative bg-[#dcd8c7] py-20 md:py-28 px-6 overflow-hidden"
      aria-labelledby="why-us-title"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Background Pattern */}
      <div
        className="absolute top-0 left-0 w-full h-72 md:h-full md:w-1/2 bg-no-repeat bg-contain md:bg-cover bg-center md:bg-left-top mix-blend-multiply opacity-20 pointer-events-none animate-slow-zoom"
        style={{ backgroundImage: "url('/Bg-img.png')" }}
        role="presentation"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Left Side with Logo */}
        <div className="relative flex justify-center items-center px-6 md:px-12 py-8 md:py-12 h-64 md:min-h-[400px] z-10">
          <div className="relative z-10 animate-float">
            <Image
              src="/logo.png"
              alt="LTG Lighting Company Logo"
              width={250}
              height={250}
              loading="lazy"
              className="object-contain transition-transform duration-500 ease-in-out hover:scale-105 md:w-[250px] md:h-[250px]"
              itemProp="logo"
            />
          </div>
        </div>

        {/* Right Content */}
        <article
          className="px-6 md:px-12 z-10 animate-fade-in-up delay-200"
          itemProp="description"
        >
          <header>
            <p className="text-[#d45023] font-medium mb-2" aria-hidden="true">
              — Why Us
            </p>
            <h2
              id="why-us-title"
              className="text-3xl md:text-5xl font-extrabold mb-6 text-black"
            >
              Why Choose Us?
            </h2>
          </header>
          <p className="text-black text-base leading-relaxed mb-6">
            At <span itemProp="name">LTG</span>, we blend creativity with
            technology to bring lighting dreams to life. From homes to hotels,
            our expert team delivers brilliance, elegance, and long-lasting
            quality that speaks for itself.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black text-white font-semibold py-3 px-6 hover:bg-[#333] transition-all duration-300 ease-in-out"
            itemProp="url"
          >
            Contact Us Today &rarr;
          </a>
        </article>
      </div>
    </section>
  );
}
