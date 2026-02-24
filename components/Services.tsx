



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
    image: "/images/erp.jpg",
    cards: [
      {
        title: "Microsoft Dynamics Implementation",
        description:
          "Seamless setup and deployment of Microsoft Dynamics solutions tailored to your business processes.",
      },
      {
        title: "LS Retail Solutions",
        description:
          "Integrated retail management systems designed to improve operations, POS performance, and customer experience.",
      },
      {
        title: "ERP Upgrade Services",
        description:
          "Smooth system upgrades that enhance performance, features, and long-term scalability.",
      },
      {
        title: "Support & Troubleshooting",
        description:
          "Reliable technical support to resolve issues quickly and keep your systems running efficiently.",
      },
    ],
  },

  {
    sectionNumber: "02",
    title: "Infrastructure & Cloud Services",
    image: "/images/infrastructure.jpg",
    cards: [
      {
        title: "IT Infrastructure",
        description:
          "Robust infrastructure solutions built for stability, performance, and business continuity.",
      },
      {
        title: "Cloud Services",
        description:
          "Scalable cloud environments that improve flexibility, collaboration, and data accessibility.",
      },
      {
        title: "Backup & Recovery",
        description:
          "Secure backup systems and fast recovery solutions to protect critical business data.",
      },
      {
        title: "IT Support",
        description:
          "Ongoing monitoring and technical assistance to ensure smooth day-to-day operations.",
      },
    ],
  },

  {
    sectionNumber: "03",
    title: "Security & Protection",
    image: "/images/security.jpg",
    cards: [
      {
        title: "Network Security",
        description:
          "Advanced security solutions to safeguard networks from cyber threats and vulnerabilities.",
      },
      {
        title: "Endpoint Protection",
        description:
          "Comprehensive endpoint security to defend devices across your organization.",
      },
      {
        title: "Firewall & Monitoring",
        description:
          "Real-time monitoring and firewall management to prevent unauthorized access.",
      },
      {
        title: "Risk Assessment",
        description:
          "Security audits and assessments to identify and mitigate potential risks.",
      },
    ],
  },

  {
    sectionNumber: "04",
    title: "Digital & Innovation Solutions",
    image: "/images/digital.jpg",
    cards: [
      {
        title: "Custom Software Development",
        description:
          "Tailored software solutions designed to meet your business objectives.",
      },
      {
        title: "Cloud Application Development",
        description:
          "Modern scalable applications built for cloud-native environments.",
      },
      {
        title: "Automation Solutions",
        description:
          "Workflow automation systems to increase efficiency and reduce manual processes.",
      },
      {
        title: "UI/UX & Experience Design",
        description:
          "User-focused digital experiences that improve engagement and usability.",
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
    <section className="w-full bg-[#f3f3f3] py-10 px-6" id="services">
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
              className="relative bg-[#86d4c8] rounded-3xl p-8 w-full sm:w-[45%] lg:w-[22%] min-h-[320px] flex flex-col cursor-pointer"
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