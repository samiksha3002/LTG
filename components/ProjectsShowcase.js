"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  { src: "/Projects.webp", alt: "Office Interior" },
  { src: "/Projects2.jpg", alt: "Modern Kitchen" },
  { src: "/Projects3.jpg", alt: "Luxury Dining" },
  { src: "/Projects4.jpg", alt: "Cozy Space" },
  { src: "/Projects5.jpg", alt: "Cozy Space" },
];

export default function ProjectsShowcase() {
  const scrollRef = useRef(null);

  const scroll = (direction = "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f8f8f8] py-20 fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12 fade-in">
        Explore Our Projects
      </h2>

      <div className="relative max-w-[95%] mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 float-hover"
        >
          <ChevronLeft className="w-10 h-10 text-white drop-shadow-md" />
        </button>

        {/* Scrollable Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2"
        >
          {projects.map((item, i) => (
            <div
              key={i}
              className="group min-w-[280px] md:min-w-[320px] rounded-xl overflow-hidden fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="relative h-[400px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={320}
                  height={400}
                  className="object-cover w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full text-center text-white bg-gradient-to-t from-black/70 to-transparent px-4 py-2 text-sm font-medium">
                  {item.alt}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 float-hover"
        >
          <ChevronRight className="w-10 h-10 text-white drop-shadow-md" />
        </button>
      </div>

      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Fade-in animation */
        .fade-in {
          opacity: 0;
          animation: fadeInUp 1s forwards ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Floating hover effect */
        .float-hover {
          transition: transform 0.3s ease;
        }
        .float-hover:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
}
