"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutUsHero({ imageSrc, title, breadcrumb }) {
  return (
    <section
      className="relative w-full h-[250px] md:h-[300px]"
      aria-labelledby="page-title"
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={`${title} - Hero Background`}
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Title */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 id="page-title" className="text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
      </div>

      {/* Breadcrumb */}
      <nav
        className="absolute bottom-0 left-14 z-30 bg-white px-12 py-4 shadow-md text-xl font-medium text-black"
        style={{ borderRadius: 0 }}
        aria-label="Breadcrumb"
      >
        {breadcrumb.map(({ label, href }, idx) => (
          <span key={label + idx} className="inline-flex items-center">
            {href ? (
              <Link
                href={href}
                className="text-black hover:underline"
                aria-current={
                  idx === breadcrumb.length - 1 ? "page" : undefined
                }
              >
                {label}
              </Link>
            ) : (
              <span className="text-red-500" aria-current="page">
                {label}
              </span>
            )}
            {idx < breadcrumb.length - 1 && (
              <span className="text-red-500 mx-2">/</span>
            )}
          </span>
        ))}
      </nav>
    </section>
  );
}
