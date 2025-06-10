"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaRegCommentDots,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f3c9aa] text-black pt-10 pb-8 px-4 md:px-6 lg:px-8">
      {/* Inner white box with padding and spacing */}
      <div className="bg-white rounded-2xl p-10 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo and Description */}
        <div>
          <img src="/logo.png" alt="LTG Logo" className="h-10 mb-4" />
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <div className="flex items-start gap-2 mt-4 text-orange-500 font-semibold">
            <span className="text-xl">📞</span>
            <div>
              <span className="text-sm">CALL US ON</span>
              <div className="text-black font-bold text-lg">
                (965) 666 1234 9
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">
            Quick links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">
            Services
          </h3>
          <ul className="space-y-2">
            <li>Led Lighting</li>
            <li>Electrical Works</li>
            <li>Home Automation</li>
            <li>Mep Services</li>
            <li>Fit Out Constructions</li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg mb-4">
            Contact Us
          </h3>
          <p className="mb-2">
            <strong>(965) 666 1234 9</strong> : Phone No.
          </p>
          <p className="mb-2">info@lumi-tec.com : E-mail</p>
          <p className="mb-4">
            Othman center, Ibn Khaldoun Street, mezzanine floor, office No M15,
            Hawalli, Kuwait, Hawalli, Al ‘Āşimah, Kuwait 4261
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition">
            Contact Us Today →
          </button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 text-sm">
        <p className="text-center md:text-left w-full md:w-auto">
          Copyright © 2025 Lumitec Global
        </p>
        <div className="flex justify-center md:justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto text-xl">
          <FaFacebookF className="cursor-pointer hover:text-orange-500" />
          <FaInstagram className="cursor-pointer hover:text-orange-500" />
          <FaTwitter className="cursor-pointer hover:text-orange-500" />
          <FaRegCommentDots className="cursor-pointer hover:text-orange-500" />
        </div>
      </div>
    </footer>
  );
}
