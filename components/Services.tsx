



"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceBlock from "./Services/servicescomp";

type CardItem = {
  title: string;
  description: string;
};

type ServiceItem = {
  sectionNumber: string;
  title: string;
  image: string;
  cards: CardItem[];
};


export const services: ServiceItem[] = [
  {
    sectionNumber: "01",
    title: "Business Systems & ERP Solutions",
    image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046718/d9fdb764efdf6e44cd94d8926547d1bbe0ce42e3_1_gajbpt.jpg",
    cards: [
      {
        title: "Microsoft Dynamics & Business Central ",
        description:
          "We specialize in setting up, customizing, and improving Microsoft Dynamics enterprise solutions.",
      },
      {
        title: "ERP Implementation & Integration",
        description:
          "We handle the entire process of deployment, configuration, and system integration to fit your business needs.",
      },
      {
        title: "ERP Support & Optimization",
        description:
          "We provide ongoing monitoring, maintenance, and performance improvements for stable ERP systems.",
      },
      {
        title: "Industry-Specific ERP Solutions",
        description:
          "We create custom workflows and solutions for maritime, industrial, and enterprise settings.",
      },
    ],
  },

  {
    sectionNumber: "02",
    title: "Infrastructure & Cloud Services",
    image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046722/3da0bc5668552fa545a4006c0309162b611efd25_1_r4qdno.jpg",
    cards: [
      {
        title: "Vessel IT Infrastructure",
        description:
          "We provide complete onboard IT setup, including servers, networking, and secure system commissioning",
      },
      {
        title: "Network & Communication Solutions",
        description:
          "We create secure network designs and satellite connections for reliable global operations.",
      },
      {
        title: "Cloud & Remote Monitoring",
        description:
          "We offer cloud environments with real-time monitoring for better visibility and control. ",
      },
      {
        title: "Global Deployment & IT Support",
        description:
          "We manage worldwide rollouts, hardware installations, and ongoing technical support.",
      },
    ],
  },

  {
    sectionNumber: "03",
    title: "Security & Compliance",
    image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046717/3cdff7299f9c84f55e0280b627f91b3dbfa1b7d3_lzynfc.jpg",
    cards: [
      {
        title: "Cybersecurity & Threat Protection",
        description:
          "We conduct risk assessments, manage vulnerabilities, and deploy advanced security measures.",
      },
      {
        title: "Compliance & Certification Services",
        description:
          "We help with ISO 27001 implementation, governance, and certification preparation.",
      },
      {
        title: "Audit & Regulatory Readiness",
        description:
          "We perform internal audits, gap analysis, and prepare for compliance with global standards. ",
      },
      {
        title: "Business Continuity & Incident Response",
        description:
          "We plan for resilience, disaster recovery, and create incident response frameworks.",
      },
    ],
  },

  {
    sectionNumber: "04",
    title: "Digital & Innovation Solutions",
    image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046719/c307e063912c051138833af50b1c3117701619ec_k7x2hd.jpg",
    cards: [
      {
        title: "Website & Digital Platform Development",
        description:
          "We design modern web solutions to enhance your online presence and grow your business.",
      },
      {
        title: "UI/UX Experience Design",
        description:
          "We create user-focused designs that improve usability, engagement, and customer experience.",
      },
      {
        title: "Automation & AI Solutions",
        description:
          "We offer smart automation and AI tools to boost business efficiency and decision-making.",
      },
      {
        title: "Digital Strategy & Consulting",
        description:
          "We provide technology consulting to connect digital transformation with your business goals.",
      },
    ],
  },
];


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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-10 px-6 scroll-mt-24" id="services">
      <div className="max-w-8xl p-10 mx-auto">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.div
            className="inline-flex items-center gap-2 border text-black border-gray-400 rounded-full px-4 py-2 text-sm mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.1}
            viewport={{ once: true }}
          >
            <span className="w-2 h-2 bg-black rounded-full"></span>
            OUR SERVICES
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.2}
            viewport={{ once: true }}
          >
            Technology Solutions That Work
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.3}
            viewport={{ once: true }}
          >
            From infrastructure and security to digital development, we deliver
            technology services that solve real business challenges.
          </motion.p>
        </div>

        {/* SERVICE CARDS */}
        <div className="flex flex-wrap justify-center gap-8">

          {[
            {
              title: "Business Systems & ERP Solutions",
              desc: "End-to-end ERP implementation, upgrades, and support designed to streamline operations and improve business efficiency.",
              color: "bg-pink-200 text-pink-600",
            },
            {
              title: "Network Security & Protection",
              desc: "Advanced security services focused on protecting your systems, data, and digital operations from modern threats.",
              color: "bg-green-200 text-green-600",
            },
            {
              title: "Infrastructure & Cloud Services",
              desc: "Reliable infrastructure and cloud solutions that ensure performance, scalability, and seamless business continuity.",
              color: "bg-indigo-200 text-indigo-600",
            },
            {
              title: "Digital & Innovation Solutions",
              desc: "Modern digital solutions that enhance user experience, automate workflows, and drive long-term business growth.",
              color: "bg-orange-200 text-orange-600",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-[#92FFF4] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px] flex flex-col cursor-pointer"
            >
              <div className={`absolute -top-5 left-6 w-12 h-12 rounded-full flex items-center justify-center font-bold shadow ${card.color}`}>
                ↗
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {card.desc}
              </p>

              <button className="text-sm font-semibold text-gray-900 flex items-center gap-2 mt-auto">
                LEARN MORE →
              </button>
            </motion.div>
          ))}

        </div>
      </div>

      {/* DYNAMIC SERVICE BLOCKS */}
      {services.map((service, idx) => (
        <ServiceBlock
          key={idx}
          sectionNumber={service.sectionNumber}
          title={service.title}
          image={service.image}
          cards={service.cards}
          reverse={idx % 2 !== 0}
        />
      ))}
    </section>
  );
};

export default ServicesSection;