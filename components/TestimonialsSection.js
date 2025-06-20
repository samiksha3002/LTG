"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We used LTG’s lighting solutions for our farmhouse — the result was beyond expectations. Great service and perfect finish!",
    author: "Akshay Patil",
    role: "Founder",
    avatar: "/image2vector.svg",
  },
  {
    quote:
      "LTG transformed our villa with smart automation. Super easy to use and beautifully installed!",
    author: "Neha Sharma",
    role: "Architect",
    avatar: "/image2vector.svg",
  },
  {
    quote:
      "The LED lighting completely changed the vibe of our office space. Highly recommended!",
    author: "Rahul Desai",
    role: "Interior Designer",
    avatar: "/image2vector.svg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { quote, author, role, avatar } = testimonials[currentIndex];

  return (
    <section
      className="relative bg-[#dcd8c7] py-28 px-6 overflow-hidden fade-in"
      aria-label="Customer Testimonials"
    >
      {/* Background pattern */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-left bg-no-repeat bg-cover mix-blend-multiply opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/Bg-img.png')" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div
          className="w-full lg:w-1/2 fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-orange-500 mb-2 text-lg">— Testimonials</p>
          <h2 className="text-black text-4xl lg:text-5xl font-bold leading-snug mb-6">
            What our customers are <br /> saying about us
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            From cozy homes to luxurious hotels, our clients choose LTG not just
            for lighting —
            <br className="hidden sm:block" />
            but for the experience, expertise, and lasting impression we leave.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-md relative overflow-hidden min-h-[450px] fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
            <Image
              src={avatar}
              alt={`${author} photo`}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
          </div>

          {/* Quote */}
          <p className="text-gray-800 text-lg mb-6 text-center italic relative z-10">
            “{quote}”
          </p>

          {/* Author */}
          <div className="text-center mt-4 relative z-10">
            <p className="font-semibold text-black">{author}</p>
            <p className="font-medium text-gray-500">{role}</p>
          </div>

          {/* Decorative image bottom-right */}
          <Image
            src="/Test.png"
            alt=""
            width={130}
            height={130}
            className="absolute bottom-4 right-4 opacity-40 pointer-events-none"
            aria-hidden="true"
          />

          {/* Large quote symbol */}
          <div className="absolute bottom-0 right-0 opacity-10 text-[180px] leading-none pr-4 pb-2 select-none font-serif z-0">
            ”
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-10 space-x-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
            aria-label={`View testimonial ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}
