import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 text-center px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Let’s Brighten the Future Together
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-black mb-8">
        Have a question or a custom project in mind? We’d love to hear from you.
        Reach out to our team of lighting experts — and let’s create something
        brilliant, together.
      </p>

      <Link
        href="/contact-us"
        className="inline-flex items-center px-6 py-3 bg-[#f1481f] text-white font-semibold rounded shadow hover:bg-[#d93f1b] transition"
      >
        Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </section>
  );
}
