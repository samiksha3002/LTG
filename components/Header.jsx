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
    <header
      className="bg-[#f7f7f5] border-b border-gray-200 shadow-sm fixed top-0 w-full z-50"
      role="banner"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between py-2 px-4 md:px-6">
        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            aria-label="Open Mobile Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} className="text-black" />
          </button>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex-1 flex justify-center md:justify-start"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.png"
            alt="Lumitec Global Logo"
            width={160}
            height={100}
            priority
            className="object-contain cursor-pointer md:w-[160px] md:h-[100px] w-[100px] h-[60px]"
          />
        </Link>

        {/* Phone Icon (Mobile) */}
        <div className="md:hidden">
          <a href="tel:96566612349" aria-label="Call Lumitec Global">
            <Phone size={24} className="text-black" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          className="hidden md:flex flex-1 justify-end items-center"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-8 text-sm font-semibold text-gray-800">
            <li>
              <Link href="/" className="hover:text-black transition-all">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-black transition-all whitespace-nowrap"
              >
                ABOUT US
              </Link>
            </li>
            {/* Dropdown Services */}
            <li className="relative group">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 hover:text-black transition-all"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-label="Toggle Services Menu"
              >
                OUR SERVICES <ChevronDown size={18} />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white border shadow-md rounded-md w-44 z-50 text-sm"
                  >
                    {[
                      ["LED Lighting", "/LED"],
                      ["Electrical Works", "/Electrical"],
                      ["Home Automation", "/Automation"],
                      ["MEP Services", "/Mep"],
                      ["Fit Out Constructions", "/Constructions"],
                    ].map(([title, href], i) => (
                      <li key={i}>
                        <Link
                          href={href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-black transition-all">
                GALLERY
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-black transition-all whitespace-nowrap"
              >
                CONTACT US
              </Link>
            </li>
            {/* Call Button */}
            <li>
              <a
                href="tel:96566612349"
                className="ml-6 flex items-center gap-2 border px-4 py-2 rounded-md border-black hover:shadow-md transition"
                title="Call Lumitec Global"
              >
                <Phone size={20} className="text-black" />
                <div className="text-sm leading-tight">
                  <div className="text-[10px] tracking-wider">CALL US ON</div>
                  <div className="text-base font-medium">(965) 666-12349</div>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col text-white text-lg font-semibold"
            aria-modal="true"
            role="dialog"
          >
            <button
              className="absolute top-4 left-4"
              aria-label="Close Mobile Menu"
              onClick={() => {
                setMobileMenuOpen(false);
                setShowServicesSubmenu(false);
              }}
            >
              <X size={28} className="text-white" />
            </button>

            <nav className="flex flex-col items-center justify-center h-full gap-6 text-center">
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
                    className="flex items-center gap-2 text-base font-medium"
                    aria-label="Show Services Submenu"
                  >
                    OUR SERVICES <ChevronDown size={16} />
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
                  {[
                    ["LED Lighting", "/LED"],
                    ["Electrical Works", "/Electrical"],
                    ["Home Automation", "/Automation"],
                    ["MEP Services", "/Mep"],
                    ["Fit Out Constructions", "/Constructions"],
                  ].map(([title, href], i) => (
                    <Link
                      href={href}
                      key={i}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {title}
                    </Link>
                  ))}
                </>
              )}
              {!showServicesSubmenu && (
                <a
                  href="tel:96566612349"
                  className="mt-4 border border-white px-4 py-2 rounded-md"
                  aria-label="Call Lumitec Global"
                >
                  Call Us: (965) 666-12349
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
