"use client";

import { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesSubmenu, setShowServicesSubmenu] = useState(false);

  return (
    <header className="bg-[#f7f7f5] border-b border-gray-200 shadow-sm fixed top-0 w-full z-50">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between py-2 px-4 md:px-6">
        {/* Left: Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} className="text-black" />
          </button>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex-1 flex justify-center md:justify-start">
          <Image
            src="/logo.png"
            alt="LTG Logo"
            width={160}
            height={100}
            className="object-contain cursor-pointer md:w-[160px] md:h-[100px] w-[100px] h-[60px]"
          />
        </Link>

        {/* Right: Phone Icon */}
        <div className="md:hidden">
          <a href="tel:96566612349">
            <Phone size={24} className="text-black" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <nav className="flex items-center gap-8 text-sm font-semibold text-gray-800">
            <Link href="/" className="hover:text-black transition-all">
              HOME
            </Link>
            <Link
              href="/about-us"
              className="hover:text-black transition-all whitespace-nowrap"
            >
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
              className="hover:text-black transition-all whitespace-nowrap"
            >
              CONTACT US
            </Link>

            {/* Call Button */}
            <div className="ml-6 flex items-center gap-2 border px-4 py-2 rounded-md border-black hover:shadow-md transition">
              <Phone size={20} className="text-black" />
              <div className="text-sm leading-tight">
                <div className="text-[10px] tracking-wider">CALL US ON</div>
                <div className="text-base font-medium">(965) 666-12349</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col text-white text-lg font-semibold"
          >
            {/* Close Icon */}
            <div className="absolute top-4 left-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowServicesSubmenu(false);
                }}
              >
                <X size={28} className="text-white" />
              </button>
            </div>

            {/* Navigation Options */}
            <div className="flex flex-col items-center justify-center h-full gap-6 transition-all duration-300 ease-in-out">
              {!showServicesSubmenu ? (
                <>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    HOME
                  </Link>
                  <Link
                    href="/about-us"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT US
                  </Link>
                  <button
                    onClick={() => setShowServicesSubmenu(true)}
                    className="underline underline-offset-4"
                  >
                    OUR SERVICES
                  </button>
                  <Link
                    href="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GALLERY
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CONTACT US
                  </Link>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setShowServicesSubmenu(false)}
                    className="text-sm text-gray-300 mb-4"
                  >
                    ← Back to Main Menu
                  </button>
                  <Link href="/LED" onClick={() => setMobileMenuOpen(false)}>
                    LED Lighting
                  </Link>
                  <Link
                    href="/Electrical"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Electrical Works
                  </Link>
                  <Link
                    href="/Automation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home Automation
                  </Link>
                  <Link href="/Mep" onClick={() => setMobileMenuOpen(false)}>
                    MEP Services
                  </Link>
                  <Link
                    href="/Constructions"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Fit Out Constructions
                  </Link>
                </>
              )}

              {!showServicesSubmenu && (
                <a
                  href="tel:96566612349"
                  className="mt-4 border border-white px-4 py-2 rounded-md"
                >
                  Call Us: (965) 666-12349
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
