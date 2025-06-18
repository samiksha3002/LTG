"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Head from "next/head";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaRegCommentDots,
} from "react-icons/fa";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <>
      {/* SEO Schema Markup */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lumitec Global",
              image: "https://yourdomain.com/logo.png",
              "@id": "https://www.lumi-tec.com",
              url: "https://www.lumi-tec.com",
              telephone: "+96566612349",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Othman center, Ibn Khaldoun Street, mezzanine floor, office No M15",
                addressLocality: "Hawalli",
                addressRegion: "Al ‘Āşimah",
                postalCode: "4261",
                addressCountry: "KW",
              },
              email: "info@lumi-tec.com",
              sameAs: [
                "https://www.instagram.com/lumitec_global",
                "https://facebook.com/yourpage",
                "https://twitter.com/yourhandle",
              ],
            }),
          }}
        />
      </Head>

      <footer className="bg-[#dcd8c7] text-black pt-10 pb-8 px-4 md:px-6 lg:px-8">
        {/* Inner white box */}
        <div className="bg-white rounded-2xl p-10 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div data-aos="fade-up" data-aos-delay="0">
            <img
              src="/logo.png"
              alt="Lumitec Global Logo - Lighting Solutions"
              className="h-10 mb-4"
            />
            <p className="text-sm mb-4">
              "Crafting lighting solutions that inspire and elevate every
              environment."
            </p>
            <div className="flex items-start gap-2 mt-4 text-orange-500 font-semibold">
              <span className="text-xl">📞</span>
              <div>
                <span className="text-sm">CALL US ON</span>
                <div className="text-black font-bold text-lg">
                  <a href="tel:+96566612349" className="hover:underline">
                    (965) 666 1234 9
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-orange-500 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/LED" className="hover:text-orange-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-orange-500 font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/LED" className="hover:text-black transition">
                  LED Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/Electrical"
                  className="hover:text-black transition"
                >
                  Electrical Works
                </Link>
              </li>
              <li>
                <Link
                  href="/Automation"
                  className="hover:text-black transition"
                >
                  Home Automation
                </Link>
              </li>
              <li>
                <Link href="/Mep" className="hover:text-black transition">
                  MEP Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Constructions"
                  className="hover:text-black transition"
                >
                  Fit Out Constructions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-orange-500 font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <p className="mb-2">
              <a href="tel:+96566612349" className="hover:underline">
                (965) 666 1234 9
              </a>{" "}
              : Phone No.
            </p>
            <p className="mb-2">
              <a href="mailto:info@lumi-tec.com" className="hover:underline">
                info@lumi-tec.com
              </a>{" "}
              : E-mail
            </p>
            <address className="not-italic mb-4 text-sm">
              Othman center, Ibn Khaldoun Street, mezzanine floor, office No
              M15, Hawalli, Kuwait, Hawalli, Al ‘Āşimah, Kuwait 4261
            </address>
            <Link href="/contact-us">
              <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
                Contact Us Today →
              </button>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm"
        >
          <p className="text-center md:text-left w-full md:w-auto">
            Copyright © 2025 Lumitec Global
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto text-xl">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
            >
              <FaFacebookF className="cursor-pointer hover:text-orange-500" />
            </a>
            <a
              href="https://www.instagram.com/lumitec_global"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Instagram"
            >
              <FaInstagram className="cursor-pointer hover:text-orange-500" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Twitter"
            >
              <FaTwitter className="cursor-pointer hover:text-orange-500" />
            </a>
            <a
              href="mailto:info@lumi-tec.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send us an Email"
            >
              <FaRegCommentDots className="cursor-pointer hover:text-orange-500" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
