"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["/img1.jpg", "/hero2.jpg", "/hero3.jpg"];

  // Auto Slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with dark overlay */}
      <div className="absolute inset-0 -z-10 transition-all duration-700">
        <Image
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col justify-center items-center px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg font-poppins">
          Illuminating Your World with LTG Solutions
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-xl drop-shadow-md">
          Discover premium lighting designs that elevate your home, farmhouse,
          office, hotel, or garden. At LTG, we blend innovation with style to
          brighten every space uniquely.
        </p>
        <Link href="/about-us">
          <button className="mt-8 bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition flex items-center gap-2">
            About Us <span className="text-xl">›</span>
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-light opacity-60 hover:opacity-100 transition"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-light opacity-60 hover:opacity-100 transition"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Font Import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </section>
  );
}
