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
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...services, ...services].map((text, i) => (
            <div key={i} className="flex items-center gap-3 min-w-max px-4">
              <span
                className={`${
                  i % 2 === 0
                    ? "text-black font-extrabold text-5xl"
                    : "text-black text-5xl font-outline-1"
                }`}
              >
                {text}
              </span>
              <Image
                src="/Customer1.png" // Replace with your image path
                alt="service icon"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
