import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center">

        {/* LOGO (LEFT) */}
        <Link href="/" className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-[#18c5a9] rounded-full flex items-center justify-center text-white font-bold text-lg">
            ↗
          </div>
          <span className="text-lg font-semibold text-[#18c5a9]">
            DMG Infotech
          </span>
        </Link>

        {/* CENTERED MENU */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">

          <li>
            <Link href="#hero" className="hover:text-black transition">
              HOME
            </Link>
          </li>

          <li>
            <Link href="#about" className="hover:text-black transition">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="#services" className="hover:text-black transition">
              SERVICES
            </Link>
          </li>

          <li>
            <Link href="#testimonials" className="hover:text-black transition">
              TESTIMONIALS
            </Link>
          </li>

          <li>
            <Link href="#contact" className="hover:text-black transition">
              CONTACT
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
};

export default Navbar;