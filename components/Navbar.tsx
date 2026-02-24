"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-white/30"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 relative flex items-center">

        {/* LOGO */}
        <motion.div
          variants={itemVariants}
          className="z-10"
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-[#18c5a9] rounded-full flex items-center justify-center text-white font-bold text-lg"
              whileHover={{ rotate: 45, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ↗
            </motion.div>

            <motion.span
              className="text-lg font-semibold text-[#18c5a9]"
              whileHover={{ scale: 1.05 }}
            >
              DMG Infotech
            </motion.span>
          </Link>
        </motion.div>

        {/* CENTER MENU */}
        <motion.ul
          className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-10 text-sm font-medium text-gray-700"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {[
            { name: "HOME", link: "#hero" },
            { name: "ABOUT", link: "#about" },
            { name: "SERVICES", link: "#services" },
            { name: "TESTIMONIALS", link: "#testimonials" },
            { name: "CONTACT", link: "#contact" },
          ].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                href={item.link}
                className="relative group hover:text-black transition"
              >
                {item.name}

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </motion.nav>
  );
};

export default Navbar;