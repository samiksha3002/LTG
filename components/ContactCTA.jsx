export default function ContactCTA() {
  return (
    <section className="bg-[#fcebe5] py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug">
          Let’s Brighten the Future Together
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Have a question, custom project, or partnership in mind? We’d love to
          hear from you. Reach out to our team of lighting experts and let’s
          make something brilliant.
        </p>
        <a
          href="/contact-us"
          className="inline-block bg-[#ff5722] hover:bg-[#e64a19] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 shadow-md"
        >
          Contact Us Today →
        </a>
      </div>
    </section>
  );
}
