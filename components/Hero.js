import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/img1.jpg", // replace with actual image paths
    "/hero2.jpg",
    "/hero3.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={slides[currentSlide]}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto h-full flex flex-col justify-center px-6 text-center">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg font-poppins">
          Illuminating Your World with LTG Solutions
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg max-w-xl mx-auto drop-shadow-md">
          Discover premium lighting designs that elevate the beauty of your
          home, farmhouse, office, hotel, or garden. At LTG, we blend innovation
          with style to brighten every space uniquely.
        </p>

        <Link href="/about-us">
          <button className="mt-8 bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 flex items-center gap-2 mx-auto">
            About Us <span>›</span>
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-light opacity-70 hover:opacity-100 transition"
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl font-light opacity-70 hover:opacity-100 transition"
        aria-label="Next Slide"
      >
        &#8594;
      </button>

      {/* Font import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
        .font-poppins {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </section>
  );
}
