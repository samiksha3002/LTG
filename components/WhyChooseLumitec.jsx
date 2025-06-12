import Image from "next/image";

export default function WhyChooseLumitec({
  top = {
    title: "Why Choose Lumitec?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tagline: "Lighting excellence with purpose.",
    image: "/img1.jpg",
    reverse: false,
  },
  bottom = {
    title: "Commitment to Quality",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    tagline: "Designed for today. Ready for tomorrow.",
    image: "/img1.jpg",
    reverse: true,
  },
}) {
  const Section = ({ title, text, tagline, image, reverse }) => (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } gap-5 items-center`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={600}
          height={150}
          className="w-full h-auto shadow-md object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-lg mb-3">{text}</p>
        {tagline && (
          <p className="text-orange-600 text-lg italic font-medium border-l-4 border-orange-500 pl-4 mt-2">
            {tagline}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-white px-6 md:px-16 py-16 space-y-10">
      <Section {...top} />
      <Section {...bottom} />
    </div>
  );
}
