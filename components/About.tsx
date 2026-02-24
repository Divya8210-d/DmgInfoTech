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
    <section className="w-full bg-[#f3f3f3] py-16 px-6" id="about">
      <div className="max-w-8xl p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

        {/* LEFT IMAGE */}
        <motion.div
          className="lg:col-span-2 h-full"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
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
              className="inline-flex items-center gap-2 border text-black border-gray-400 rounded-full px-4 py-2 text-sm mb-6"
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
              className="text-4xl font-bold text-gray-900 leading-tight mb-6"
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
              className="text-gray-600 text-lg leading-relaxed"
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
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Vision Card */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              whileHover={{ y: -8 }}
              className="bg-[#7fd3c7] rounded-2xl py-4 px-6 cursor-pointer transition"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#18c5a9] mb-6">
                ↗
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
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
              className="bg-[#7fd3c7] rounded-2xl py-4 px-6 cursor-pointer transition"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#18c5a9] mb-6">
                ↗
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
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