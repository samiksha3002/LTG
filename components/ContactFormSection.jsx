export default function ContactFormSection() {
  return (
    <section className="bg-[#fcfcfc] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Image with overlay */}
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <img
            src="/img1.jpg" // Make sure the path is correct
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
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Subject
              </label>
              <input
                type="text"
                placeholder="Write subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-800">
                Your Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
