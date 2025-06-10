"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUsHero({ imageSrc, title, breadcrumb }) {
  return (
    <div className="relative w-full h-[250px] md:h-[300px]">
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={`${title} Background`}
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Heading */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      </div>

      {/* Breadcrumb with sharp corners and spacing */}
      <div
        className="absolute bottom-0 left-14 z-30 bg-white px-12 py-4 shadow-md text-xl font-medium text-black"
        style={{ borderRadius: 0 }}
      >
        {breadcrumb.map(({ label, href }, idx) => (
          <span key={label + idx} className="inline-flex items-center">
            {href ? (
              <Link href={href} className="text-black hover:underline">
                {label}
              </Link>
            ) : (
              <span className="text-red-500">{label}</span>
            )}
            {idx < breadcrumb.length - 1 && (
              <span className="text-red-500 mx-2">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
