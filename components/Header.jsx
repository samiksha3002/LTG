"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f7f7f5] border-b border-gray-200 shadow-sm"
    >
      <div className="w-full  px-8 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="LTG Logo"
            width={180}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Nav */}
        <nav className="flex items-center space-x-12 text-base font-semibold text-gray-800">
          <a href="/" className="hover:text-black transition-all">
            HOME
          </a>

          <Link href="/about-us" legacyBehavior>
            <a className="hover:text-black transition-all">ABOUT US</a>
          </Link>

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-black transition-all"
            >
              OUR SERVICES <ChevronDown size={18} />
            </button>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-44 z-50 text-sm"
              >
                <Link href="/LED" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    LED Lighting
                  </a>
                </Link>

                <Link href="/Electrical" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Electrical Works
                  </a>
                </Link>
                <Link href="/Automation" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Home Automation
                  </a>
                </Link>

                <Link href="/Mep" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Mep Services
                  </a>
                </Link>
                <Link href="/Constructions" legacyBehavior>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Fit Out Constructions
                  </a>
                </Link>
              </motion.div>
            )}
          </div>

          <a href="/gallery" className="hover:text-black transition-all">
            GALLERY
          </a>
          <a href="/contact-us" className="hover:text-black transition-all">
            CONTACT US
          </a>

          {/* Call Section */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-md border-black hover:shadow-md transition">
            <Phone size={20} className="text-black" />
            <div className="text-sm leading-tight">
              <div className="text-[10px] tracking-wider">CALL US ON</div>
              <div className="text-base font-medium">(965) 666-12349</div>
            </div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
