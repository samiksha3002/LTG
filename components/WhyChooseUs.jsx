"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#f8eae1] py-28 px-6 overflow-hidden">
      {/* Left geometric background pattern with slow zoom animation */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-left bg-no-repeat bg-cover mix-blend-multiply opacity-20 pointer-events-none animate-slow-zoom"
        style={{ backgroundImage: "url('/Bg-img.png')" }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Left Side with logo */}
        <div className="relative flex justify-center items-center px-6 md:px-12 py-12 min-h-[400px]">
          <div className="relative z-10 animate-float">
            <Image
              src="/logo.png"
              alt="LTG Logo"
              width={250}
              height={250}
              className="object-contain transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="px-6 md:px-12 z-10 animate-fade-in-up delay-200">
          <p className="text-[#d45023] font-medium mb-2">— Why Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black">
            Why Choose Us?
          </h2>
          <p className="text-black text-base leading-relaxed mb-6">
            At LTG, We blend creativity with technology to bring lighting dreams
            to life. From homes to hotels, our expert team delivers brilliance,
            elegance, and long-lasting quality that speaks for itself.
          </p>
          <button className="bg-black text-white font-semibold py-3 px-6 hover:bg-[#333] transition-all duration-300 ease-in-out">
            Contact Us Today &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
