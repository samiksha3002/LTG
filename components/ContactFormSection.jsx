"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#fcfcfc] py-20 px-4 md:px-8">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Image with overlay */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="/img1.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end text-white">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-base mb-4">
              Let’s chat with our live experts to answer all your questions.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-md font-medium w-fit hover:bg-gray-200 transition">
              Call Us: (965) 666 1234 9
            </button>
          </div>
        </div>

        {/* Right: Contact form */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            Send Your Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Web3Forms Hidden Fields */}
            <input
              type="hidden"
              name="access_key"
              value="d2de120c-48fa-4ae9-b2ec-b83b45369115"
            />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission"
            />
            <input type="hidden" name="from_name" value="LED Website Contact" />
            <input type="hidden" name="captcha" value="false" />

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Write subject"
                required
                className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                required
                className="text-black w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
