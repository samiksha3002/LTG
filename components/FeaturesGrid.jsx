import {
  Droplets,
  Share2,
  BadgeDollarSign,
  CandlestickChart,
} from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Droplets size={36} className="text-white" />,
      title: "Eco-friendly Efficiency",
      desc: "Our lighting systems consume less energy while delivering superior brightness and ambiance.",
    },
    {
      icon: <Share2 size={36} className="text-white" />,
      title: "Smart Integration",
      desc: "Seamlessly connect your lighting with smart home devices for automation and control.",
    },
    {
      icon: <BadgeDollarSign size={36} className="text-white" />,
      title: "Cost Effective",
      desc: "Enjoy high-end lighting solutions that save you money in the long run.",
    },
    {
      icon: <CandlestickChart size={36} className="text-white" />,
      title: "Performance Focused",
      desc: "Engineered to deliver consistent performance across diverse environments and projects.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Bright Ideas, Brilliant Execution
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Discover how our cutting-edge lighting solutions transform ordinary
          spaces into extraordinary experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black mb-4 group-hover:scale-110 transform transition">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
