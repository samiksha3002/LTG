import Image from "next/image";

export default function WhyChooseLumitec({
  top = {
    title: "Why Choose Lumitec?",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img1.jpg",
    reverse: false,
  },
  bottom = {
    title: "Commitment to Quality",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: "/img1.jpg",
    reverse: true,
  },
}) {
  const Section = ({ title, text, image, reverse }) => (
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
          className="w-full h-auto shadow-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white px-6 md:px-16 py-16 space-y-6">
      <Section {...top} />
      <Section {...bottom} />
    </div>
  );
}
