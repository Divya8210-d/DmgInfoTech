"use client";

import Image from "next/image";
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

const AboutSection = () => {
  return (
    <section
      className="w-full bg-[#f3f3f3] py-10 sm:py-14 lg:py-16 px-4 sm:px-6 scroll-mt-24"
      id="about"
    >
      <div className="max-w-8xl p-4 sm:p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">

        {/* LEFT IMAGE */}
        <motion.div
          className="lg:col-span-2 h-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[300px] sm:h-[400px] lg:h-full min-h-[300px] sm:min-h-[400px]">
            <Image
              src="https://res.cloudinary.com/dad2siqxd/image/upload/v1771967741/7030c8dcdec9471196d767d789707392a936600a_u0cjcq.jpg"
              alt="About Company"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between w-full h-full">

          {/* TOP CONTENT */}
          <div>
            <motion.div
              className="inline-flex items-center  gap-2 border text-black border-black rounded-full px-4 py-2 text-xs sm:text-sm mb-6 "
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.1}
              viewport={{ once: true }}
            >
              <span className="w-2 h-2 bg-black rounded-full"></span>
              ABOUT COMPANY
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.2}
              viewport={{ once: true }}
            >
              Driving Business Growth
              Through Technology
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans font-medium"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={0.3}
              viewport={{ once: true }}
            >
              DMG Infotech provides end-to-end IT solutions designed to support
              business performance, scalability, and digital transformation.
              We focus on practical technology that delivers measurable results.
            </motion.p>
          </div>

          {/* BOTTOM CARDS */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              whileHover={{ y: -8 }}
              className="bg-[#92FFF4] rounded-2xl py-4 px-5 sm:px-6 cursor-pointer transition group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mb-2">
                <Image
                  src="https://res.cloudinary.com/dad2siqxd/image/upload/v1772048973/Frame_3_1_wqjweu.png"
                  alt="Vision Icon"
                  width={18}
                  height={18}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                Our Vision
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                To empower businesses with future-ready technology and
                digital innovation.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              variants={fadeUp}
              custom={0.5}
              whileHover={{ y: -8 }}
              className="bg-[#92FFF4] rounded-2xl py-4 px-5 sm:px-6 cursor-pointer transition group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center mb-2">
                <Image
                  src="https://res.cloudinary.com/dad2siqxd/image/upload/v1772048974/Frame_3_d1qnyg.png"
                  alt="Mission Icon"
                  width={18}
                  height={18}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">
                Our Mission
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                To deliver secure, scalable, and reliable IT solutions built
                for long-term growth.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;