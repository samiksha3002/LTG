"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-[#F9F9F9] py-16 px-6 md:px-20"
      aria-labelledby="about-us-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side Images */}
        <div className="flex gap-4 justify-center" data-aos="fade-right">
          <figure className="w-1/2 translate-y-4">
            <Image
              src="/aboutS2.jpg"
              alt="Modern lighting decor for interiors"
              width={500}
              height={800}
              className="object-cover w-full h-[500px]"
              priority
            />
          </figure>
          <figure className="w-1/2 -translate-y-4">
            <Image
              src="/aboutS1.jpg"
              alt="Contemporary lighting in hall design"
              width={300}
              height={700}
              className="object-cover w-full h-auto"
              priority
            />
          </figure>
        </div>

        {/* Right Side Content */}
        <article data-aos="fade-left" data-aos-delay="200">
          <header>
            <p className="text-sm text-orange-500 mb-2">— About Us</p>
            <h2
              id="about-us-heading"
              className="text-4xl font-semibold leading-tight mb-4 text-black"
            >
              Lighting Spaces. Empowering Dreams.
            </h2>
          </header>

          <p className="text-gray-600 mb-6">
            At LTG, our story begins with a spark — a passion to redefine how
            light shapes the spaces we live and work in. We bring together
            design, technology, and craftsmanship to deliver lighting solutions
            that aren’t just functional, but unforgettable. From subtle ambience
            to bold brilliance, every project we touch is guided by innovation
            and heart. We’re not just lighting rooms — we’re setting the stage
            for moments, moods, and memories. Welcome to LTG — where every light
            tells a story.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-800 mb-6">
            <ul className="space-y-2 list-disc list-inside marker:text-orange-500">
              <li>LED Lighting Solutions</li>
              <li>Electrical Installations</li>
              <li>Smart Home Automation</li>
            </ul>
            <ul className="space-y-2 list-disc list-inside marker:text-orange-500">
              <li>MEP Contracting Services</li>
              <li>Interior Fit-Out Construction</li>
            </ul>
          </div>

          <button
            className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition duration-300"
            aria-label="Read more about LTG Lighting"
          >
            Read More →
          </button>
        </article>
      </div>
    </section>
  );
}
