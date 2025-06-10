import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white">
      {/* Left background pattern image */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1/2 bg-left bg-no-repeat bg-cover mix-blend-multiply opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/Bg-img.png')" }}
      />

      {/* Optional bottom-right decorative image */}
      <Image
        src="/Test.png"
        alt="Decorative"
        width={130}
        height={130}
        className="absolute bottom-4 right-4 opacity-30 pointer-events-none z-0"
      />

      <div
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16 transition-all duration-1000 delay-200">
          <p className="text-orange-500 mb-2 text-lg">— Our Team</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Meet Our Team
          </h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Passionate professionals bringing light and warmth to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 ease-out transform ${
                fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover w-24 h-24"
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
