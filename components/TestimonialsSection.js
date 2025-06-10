import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const { quote, author, role, avatar } = testimonials[currentIndex];

  return (
    <section className="relative bg-[#f6e7e1] py-28 px-6 overflow-hidden fade-in">
      {/* Left geometric background pattern */}
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
            What our customers are
            <br />
            saying about us
          </h2>
          <p className="text-base text-gray-700">
            From cozy homes to luxurious hotels, our clients choose LTG not just
            for lighting —<br />
            but for the experience, the expertise, and the lasting impression
            we leave behind.
          </p>
        </div>

        {/* Right Testimonial Card */}
        <div
          className="w-full max-w-md bg-white p-8 shadow-lg rounded-md relative overflow-hidden min-h-[450px] fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-12 h-12 rounded-full bg-gray-300 mx-auto mb-4">
            <Image
              src={avatar}
              alt={author}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>

          <p className="text-gray-800 text-lg mb-2 text-center italic">
            “{quote}”
            <br />— {author}
          </p>

          <div className="text-center">
            <p className="font-semibold">{author}</p>
            <p className="font-bold">{role}</p>
          </div>

          {/* Bottom-right decorative PNG image */}
          <Image
            src="/Test.png"
            alt="Decorative"
            width={130}
            height={130}
            className="absolute bottom-4 right-4 opacity-50"
          />

          {/* Decorative quote symbol */}
          <div className="absolute bottom-0 right-0 opacity-10 text-[180px] leading-none pr-4 pb-2 select-none">
            <span className="font-serif">”</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .writing-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
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
