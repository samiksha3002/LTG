"use client";

import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#f7f7f5] border-b border-gray-200 shadow-sm fixed top-0 w-full z-50"
    >
      <div className="flex items-center justify-between py-2 px-4">
        {/* Logo on far left */}
        <Link href="/" className="pl-2">
          <Image
            src="/logo.png"
            alt="LTG Logo"
            width={160}
            height={100}
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation aligned to the right */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <div className="flex items-center space-x-10 text-sm font-semibold text-gray-800 pr-4">
            <Link href="/" className="hover:text-black transition-all">
              HOME
            </Link>
            <Link href="/about-us" className="hover:text-black transition-all">
              ABOUT US
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-black transition-all"
              >
                OUR SERVICES <ChevronDown size={18} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-44 z-50 text-sm"
                  >
                    <Link
                      href="/LED"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LED Lighting
                    </Link>
                    <Link
                      href="/Electrical"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Electrical Works
                    </Link>
                    <Link
                      href="/Automation"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Home Automation
                    </Link>
                    <Link
                      href="/Mep"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      MEP Services
                    </Link>
                    <Link
                      href="/Constructions"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Fit Out Constructions
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/gallery" className="hover:text-black transition-all">
              GALLERY
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-black transition-all"
            >
              CONTACT US
            </Link>

            {/* Call Button */}
            <div className="flex items-center gap-2 border px-4 py-2 rounded-md border-black hover:shadow-md transition">
              <Phone size={20} className="text-black" />
              <div className="text-sm leading-tight">
                <div className="text-[10px] tracking-wider">CALL US ON</div>
                <div className="text-base font-medium">(965) 666-12349</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden pr-2">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white text-black w-full px-6 py-4 space-y-4 border-t"
          >
            <Link href="/" className="block">
              HOME
            </Link>
            <Link href="/about-us" className="block">
              ABOUT US
            </Link>
            <Link href="/LED" className="block">
              LED Lighting
            </Link>
            <Link href="/Electrical" className="block">
              Electrical Works
            </Link>
            <Link href="/Automation" className="block">
              Home Automation
            </Link>
            <Link href="/Mep" className="block">
              MEP Services
            </Link>
            <Link href="/Constructions" className="block">
              Fit Out Constructions
            </Link>
            <Link href="/gallery" className="block">
              GALLERY
            </Link>
            <Link href="/contact-us" className="block">
              CONTACT US
            </Link>
            <div className="pt-4 border-t mt-4">
              <div className="text-xs text-gray-500 mb-1">CALL US ON</div>
              <div className="text-base font-semibold">(965) 666-12349</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
