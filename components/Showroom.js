"use client";

import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Showroom() {
  return (
    <div className="bg-black text-white relative font-sans overflow-hidden">
      {/* Geometric Background with Slow Zoom */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-left bg-no-repeat bg-cover mix-blend-multiply opacity-10 pointer-events-none animate-slowZoom"
        style={{
          backgroundImage: "url('/Bg-img.png')",
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left - Images */}
        <div className="relative z-10 flex gap-4 w-full opacity-0 animate-fadeInUp">
          {/* Short Image */}
          <div className="w-1/2 h-[250px] overflow-hidden mt-8 animate-float">
            <Image
              src="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183233/Interior2_x4y8ya.jpg"
              alt="Smart home interface"
              width={500}
              height={250}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>

          {/* Tall Image */}
          <div className="w-1/2 h-[400px] overflow-hidden animate-float">
            <Image
              src="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182393/Comercial56_zqdyro.jpg"
              alt="Technician setting up smart lighting"
              width={500}
              height={400}
              className="object-cover w-full h-full rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Right - Text */}
        <div className="opacity-0 animate-fadeInUp delay-200">
          <h2 className="text-4xl font-bold mb-6">Our Showroom</h2>
          <p className="mb-6 text-gray-300">
            Step into a space where technology meets design. Our showroom
            showcases live demos of LED lighting, home automation setups, and
            smart electrical solutions — all crafted to elevate your lifestyle.
          </p>
          <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-semibold transition-transform duration-300 hover:scale-105">
            Contact us today →
          </button>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-20 bg-white text-black px-3 py-5 rounded-md shadow-md rotate-180 opacity-0 animate-fadeInUp delay-500"
        aria-label="Back to top"
      >
        <div className="flex flex-col items-center text-xs font-medium">
          <ArrowUp className="mb-2 rotate-180" />
          <span className="writing-vertical">Back To Top</span>
        </div>
      </button>

      {/* Custom Styles */}
      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slowZoom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
