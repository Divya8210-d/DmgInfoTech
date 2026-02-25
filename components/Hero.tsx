"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
    },
  }),
};

const HeroSection = () => {
  const avatarColors = ["bg-gray-400", "bg-gray-500", "bg-gray-600"];

  return (
    <section
      className="w-full bg-[#f3f3f3] py-16 sm:py-16 px-4 sm:px-6 h-fit scroll-mt-24"
      id="hero"
    >
      <div className="max-w-8xl p-4 sm:p-6 lg:p-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden flex items-center min-h-[500px] sm:min-h-[600px]">

          <Image
            src="https://res.cloudinary.com/dad2siqxd/image/upload/v1771151286/DGMS_uufehb.jpg"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#0b1b2b]/90 z-10"></div>

          <div className="relative z-20 text-white p-6 sm:p-8 lg:p-12 max-w-2xl">

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 border border-white/40 rounded-full px-4 py-2 text-xs sm:text-sm mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className="w-2 h-2 bg-[#18c5a9] rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              ENGINEERED FOR GROWTH
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.15}
            >
              IT Solutions <br />
              for Maritime &amp; <br />
              Retail Businesses
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              className="text-base sm:text-lg text-white mb-8 font-sans font-medium"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.3}
            >
              We help maritime and retail companies scale through secure
              infrastructure, cloud systems, and modern digital solutions.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-10"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.45}
            >
              <Link
                href="#contact"
                className="bg-[#18c5a9] text-black font-semibold px-5 sm:px-6 py-3 rounded-full hover:opacity-90 transition text-sm sm:text-base"
              >
                TALK TO AN EXPERT
              </Link>

              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#18c5a9] rounded-full flex items-center justify-center font-extrabold cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
              >
                ↗
              </motion.div>
            </motion.div>

            {/* Customers */}
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.6}
            >
              <div className="flex -space-x-3 justify-start">
                {avatarColors.map((color, i) => (
                  <motion.div
                    key={i}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white ${color}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 + i * 0.1 }}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-white/80">
                We Have{" "}
                <span className="text-[#18c5a9] font-semibold">500+</span>{" "}
                Customers Worldwide
              </p>
            </motion.div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <motion.div
          className="relative rounded-3xl overflow-hidden min-h-[350px] sm:min-h-[500px]"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://res.cloudinary.com/dad2siqxd/image/upload/v1771967741/c0ca6c05aeae9bb12f6c5c25795d24d29421d574_nu6dfd.jpg"
            alt="Hero Side Image"
            fill
            className="object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;