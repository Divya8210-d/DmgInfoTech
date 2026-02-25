"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", link: "#hero" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#services" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/30"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center justify-between">

        {/* LOGO LEFT */}
        <motion.div variants={itemVariants} className="z-10">
          <Link href="/" className="flex items-center gap-3">
        

            <motion.span
              className="text-lg font-semibold text-[#18c5a9]"
              whileHover={{ scale: 1.05 }}
            >
              DMG Infotech
            </motion.span>
          </Link>
        </motion.div>

        {/* DESKTOP MENU CENTER (unchanged animation logic) */}
        <motion.ul
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm font-medium text-gray-700"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {navItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                href={item.link}
                className="relative group hover:text-black transition"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* MOBILE HAMBURGER RIGHT */}
        <div className="md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)} >
            {isOpen ? <X size={28} /> : <Menu size={28}  className="text-black"/>}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;