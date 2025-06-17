"use client";

import Image from "next/image";

const services = [
  "Electrical Works",
  "Home Automation",
  "Map Services",
  "Fit Out Constructions",
  "LED Lighting",
  "Solar Panels",
  "Smart Systems",
];

export default function MarqueeSection() {
  return (
    <div className="bg-[#f9f3ef] overflow-hidden py-6">
      <div className="relative w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...services, ...services].map((text, i) => (
            <div key={i} className="flex items-center gap-4 min-w-max px-4">
              <span
                className={`text-black font-semibold text-2xl md:text-4xl whitespace-nowrap`}
              >
                {text}
              </span>
              <Image
                src="/Customer1.png"
                alt="service icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
