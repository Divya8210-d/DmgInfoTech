import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center">

        {/* LOGO (LEFT) */}
        <div className="flex items-center gap-3 z-10">
          <div className="w-10 h-10 bg-[#18c5a9] rounded-full flex items-center justify-center text-white font-bold text-lg">
            ↗
          </div>
          <span className="text-lg font-semibold text-[#18c5a9]">
            DMG Infotech
          </span>
        </div>

        {/* CENTERED MENU */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          <li className="cursor-pointer hover:text-black transition">HOME</li>
          <li className="cursor-pointer hover:text-black transition">ABOUT</li>
          <li className="cursor-pointer hover:text-black transition">SERVICES</li>
          <li className="cursor-pointer hover:text-black transition">TESTIMONIALS</li>
          <li className="cursor-pointer hover:text-black transition">CONTACT</li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
