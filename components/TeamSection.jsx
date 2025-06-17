"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    name: "Ola Nordmann",
    role: "Customer Support",
    image: "/team1.png",
  },
  {
    name: "Tricceta",
    role: "Customer Support",
    image: "/team2.png",
  },
  {
    name: "John Carlo",
    role: "Customer Support",
    image: "/team1.png",
  },
  {
    name: "Nora Tasman",
    role: "Customer Support",
    image: "/team2.png",
  },
];

export default function TeamSection() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section
      className="relative w-full py-24 px-6 overflow-hidden bg-white"
      aria-label="Meet our team"
    >
      {/* Decorative Background */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-left bg-no-repeat bg-cover mix-blend-multiply opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/Bg-img.png')" }}
      />

      <Image
        src="/Test.png"
        alt=""
        width={130}
        height={130}
        className="absolute bottom-4 right-4 opacity-30 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-orange-500 mb-2 text-lg">— Our Team</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Meet Our Team
          </h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Passionate professionals bringing light and warmth to every project.
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name + index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200 + 200}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 p-6 text-center hover:scale-[1.03] transform"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={96}
                  height={96}
                  className="rounded-full object-cover w-24 h-24"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-black">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
