"use client";

import { useEffect } from "react";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactData = [
  {
    icon: <PhoneCall size={24} className="text-white" />,
    title: "Phone Number",
    value: "(965) 666 1234 9",
  },
  {
    icon: <Mail size={24} className="text-white" />,
    title: "Email Address",
    value: "info@lumi-tec.com",
  },
  {
    icon: <MapPin size={24} className="text-white" />,
    title: "Visit Us On",
    value: (
      <>
        Office M15, Othman <br />
        Center, Hawalli, Kuwait
      </>
    ),
  },
  {
    icon: <Clock size={24} className="text-white" />,
    title: "Visit Between",
    value: (
      <>
        Mon – Sat : 9.00 – 6.00 <br />
        Sunday : Closed
      </>
    ),
  },
];

export default function ContactCards() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bg-[#fcfcfc] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {contactData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="relative text-center bg-white border border-gray-100 shadow-xl rounded-2xl px-6 py-12 transition-transform hover:-translate-y-1.5 hover:shadow-2xl duration-300"
          >
            {/* Icon Container */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-tr from-black to-gray-800 p-4 rounded-full shadow-lg">
                {item.icon}
              </div>
            </div>

            {/* Card Content */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
