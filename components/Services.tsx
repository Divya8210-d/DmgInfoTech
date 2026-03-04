



"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ServiceBlock from "./Services/servicescomp";
import { useLanguage } from "@/context/LanguageContext";

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
// We removed the static export of `services` and moved it into the component so we can translate it


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
  const { t, language } = useLanguage();

  const servicesData = useMemo(() => [
    {
      sectionNumber: "01",
      title: language === "en" ? "IT Support" : "IT-Support",
      image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046718/d9fdb764efdf6e44cd94d8926547d1bbe0ce42e3_1_gajbpt.jpg",
      cards: [
        {
          title: language === "en" ? "Remote IT Monitoring" : "Microsoft Dynamics & Business Central",
          description: language === "en"
            ? "Systems and networks are continuously monitored to identify and fix problems before they affect operations."
            : "Systeme und Netzwerke werden kontinuierlich überwacht, um Probleme zu erkennen und zu beheben, bevor sie den Betrieb beeinträchtigen.",
        },
        {
          title: language === "en" ? "Technical Troubleshooting" : "ERP-Implementierung & Integration",
          description: language === "en"
            ? "Fast diagnosis and resolution of hardware, software, and network problems."
            : "Schnelle Diagnose und Behebung von Hard-, Software- und Netzwerkproblemen.",
        },
        {
          title: language === "en" ? "System Maintenance" : "Systemwartung",
          description: language === "en"
            ? "To keep systems operating effectively, perform performance checks, patch management, and routine updates."
            : "Um einen reibungslosen Betrieb der Systeme zu gewährleisten, führen wir Leistungsprüfungen, Patch-Management und routinemäßige Updates durch.",
        },
        {
          title: language === "en" ? "Global IT Assistance" : "Global IT Assistance",
          description: language === "en"
            ? "Technical assistance for offices and ships in various locations, both on-site and remotely."
            : "Technische Unterstützung für Büros und Schiffe an verschiedenen Standorten, sowohl vor Ort als auch remote.",
        },
      ],
    },
    {
      sectionNumber: "02",
      title: language === "en" ? "Digital & Innovation Solutions" : "Digitale & Innovationslösungen",
      image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046719/c307e063912c051138833af50b1c3117701619ec_k7x2hd.jpg",
      cards: [
        {
          title: language === "en" ? "Website & Digital Platform Development" : "Website- & Digitale Plattformentwicklung",
          description: language === "en"
            ? "We design modern web solutions to enhance your online presence and grow your business."
            : "Wir entwerfen moderne Weblösungen, um Ihre Online-Präsenz zu verbessern und Ihr Geschäft auszubauen.",
        },
        {
          title: language === "en" ? "UI/UX Experience Design" : "UI/UX-Experience-Design",
          description: language === "en"
            ? "We create user-focused designs that improve usability, engagement, and customer experience."
            : "Wir erstellen nutzerorientierte Designs, die Benutzerfreundlichkeit, Engagement und Kundenerlebnis verbessern.",
        },
        {
          title: language === "en" ? "Automation & AI Solutions" : "Automatisierungs- & KI-Lösungen",
          description: language === "en"
            ? "We offer smart automation and AI tools to boost business efficiency and decision-making."
            : "Wir bieten intelligente Automatisierungs- und KI-Tools, um Geschäftseffizienz und Entscheidungsfindung zu steigern.",
        },
        {
          title: language === "en" ? "Digital Strategy & Consulting" : "Digitale Strategie & Beratung",
          description: language === "en"
            ? "We provide technology consulting to connect digital transformation with your business goals."
            : "Wir bieten Technologieberatung, um die digitale Transformation mit Ihren Geschäftszielen zu verbinden.",
        },
      ],
    },
    {
      sectionNumber: "03",
      title: language === "en" ? "ISO Compliance & Security Services " : "ISO Compliance & Security Services ",
      image: "https://res.cloudinary.com/dad2siqxd/image/upload/v1772046722/3da0bc5668552fa545a4006c0309162b611efd25_1_r4qdno.jpg",
      cards: [
        {
          title: language === "en" ? "ISO 27001 Implementation" : "ISO 27001 Implementierung",
          description: language === "en"
            ? "Comprehensive instructions for implementing ISO/IEC 27001, risk assessments, certification preparation, and ISMS framework design."
            : "Umfassende Anleitungen zur Implementierung von ISO/IEC 27001, Risikobewertungen, Zertifizierungsvorbereitung und Gestaltung des ISMS-Frameworks.",
        },
        {
          title: language === "en" ? "Compliance Gap Analysis & Readiness" : "Compliance-Lückenanalyse und Bereitschaftsbewertung",
          description: language === "en"
            ? "To find compliance gaps and create a structured roadmap for regulatory readiness, conduct a thorough evaluation of your current systems."
            : "Um Compliance-Lücken zu identifizieren und einen strukturierten Fahrplan für die regulatorische Bereitschaft zu erstellen, führen wir eine gründliche Bewertung Ihrer aktuellen Systeme durch.",
        },
        {
          title: language === "en" ? "Information Security Framework Setup (Security)" : "Einrichtung des Informationssicherheits-Frameworks (Sicherheit)",
          description: language === "en"
            ? "We assess risks, manage vulnerabilities, and implement security measures."
            : "Wir bewerten Risiken, verwalten Schwachstellen und implementieren Sicherheitsmaßnahmen.",
        },
        {
          title: language === "en" ? "Audit Preparation & Governance" : "Audit-Vorbereitung & Governance",
          description: language === "en"
            ? "Internal audit simulations, documentation support, and policy development make sure certification and regulatory approvals go smoothly."
            : "Interne Auditsimulationen, Dokumentationsunterstützung und Richtlinienentwicklung sorgen für reibungslose Zertifizierungs- und behördliche Genehmigungsverfahren.",
        },
      ],
    }
    
  ], [language]);

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
            {t.services.badge}
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.2}
            viewport={{ once: true }}
          >
            {t.services.heading}
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.3}
            viewport={{ once: true }}
          >
            {language === "en"
              ? "From infrastructure and security to digital development, we deliver technology services that solve real business challenges."
              : "Von Infrastruktur und Sicherheit bis hin zur digitalen Entwicklung bieten wir Technologiedienstleistungen, die echte geschäftliche Herausforderungen lösen."}
          </motion.p>
        </div>

        {/* SERVICE CARDS */}
        <div className="flex flex-wrap justify-center gap-8">

          {[
            {
              title: language === "en" ? "IT Support" : "IT-Support",
              desc: language === "en"
                ? "Reliable IT support services designed to keep your systems secure, stable, and running smoothly across vessels and business operations worldwide."
                : "Zuverlässige IT-Supportdienste, die sicherstellen, dass Ihre Systeme sicher, stabil und reibungslos über Schiffe und Geschäftsbetriebe weltweit laufen.",
              color: "bg-pink-200 text-pink-600",
            },
            {
              title: language === "en" ? "Complimentary Services" : "Komplementäre Dienstleistungen",
              desc: language === "en"
                ? "Supporting services that enhance business operations through reliable infrastructure, enterprise systems, and cloud solutions."
                : "Unterstützende Dienstleistungen, die Geschäftsabläufe durch zuverlässige Infrastruktur, Unternehmenssysteme und Cloud-Lösungen verbessern.",
              color: "bg-green-200 text-green-600",
            },
            {
              title: language === "en" ? "Digital & Innovation Solutions" : "Digitale & Innovationslösungen",
              desc: language === "en"
                ? "Our modern digital solutions improve user experience, simplify workflows, and drive long-term business growth."
                : "Unsere modernen digitalen Lösungen verbessern das Benutzererlebnis, vereinfachen Arbeitsabläufe und fördern langfristiges Geschäftswachstum.",
              color: "bg-indigo-200 text-indigo-600",
            },
            {
              title: language === "en" ? "ISO Compliance & Security Services" : "ISO-Konformität & Sicherheitsdienste",
              desc: language === "en"
                ? "Compliance and security solutions that protect systems, manage risks, and ensure adherence to industry standards."
                : "Konformitäts- und Sicherheitslösungen, die Systeme schützen, Risiken managen und die Einhaltung von Industriestandards gewährleisten.",
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


            </motion.div>
          ))}

        </div>
      </div>

      {/* DYNAMIC SERVICE BLOCKS */}
      {servicesData.map((service, idx) => (
        <ServiceBlock
          key={idx}
          sectionNumber={service.sectionNumber}
          title={service.title}
          image={service.image}
          cards={service.cards}
          reverse={idx % 2 !== 0}
        />
      ))}


     <div className="max-w-8xl p-10 mx-auto">

        {/* TOP CONTENT */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0.2}
            viewport={{ once: true }}
          >
            {language === "en" ? "Complimentary Services" : "Komplementäre Dienstleistungen"}
          </motion.h2>

         
        </div>

        {/* SERVICE CARDS */}
        <div className="flex flex-wrap justify-center gap-8">

          {[
            {
              title: language === "en" ? "ERP Implementation & Integration" : "ERP-Implementierung & Integration",
              desc: language === "en"
                ? "Deployment and integration of enterprise systems such as Microsoft Dynamics and Business Central to streamline finance and operational workflows."
                : "Einsatz und Integration von Unternehmenssystemen wie Microsoft Dynamics und Business Central zur Optimierung von Finanz- und Betriebsabläufen.",
              color: "bg-pink-200 text-pink-600",
            },
            {
              title: language === "en" ? "Managed ERP Support & Optimization" : "Verwalteter ERP-Support & Optimierung",
              desc: language === "en"
                ? "Ongoing monitoring, upgrades, and performance improvements to keep ERP platforms stable and efficient."
                : "Laufende Überwachung, Upgrades und Leistungsverbesserungen, um ERP-Plattformen stabil und effizient zu halten.",
              color: "bg-green-200 text-green-600",
            },
            {
              title: language === "en" ? "IT Infrastructure & Network Solutions" : "IT-Infrastruktur & Netzwerklösungen",
              desc: language === "en"
                ? "Design and deployment of secure infrastructure, networking systems, and onboard vessel IT environments."
                : "Entwurf und Bereitstellung sicherer Infrastruktur, Netzwerksysteme und IT-Umgebungen an Bord von Schiffen.",
              color: "bg-indigo-200 text-indigo-600",
            },
            {
              title: language === "en" ? "Cloud & Connectivity Services" : "Cloud- & Konnektivitätsdienste",
              desc: language === "en"
                ? "Scalable cloud environments, remote monitoring, and connectivity solutions supporting reliable global operations."
                : "Skalierbare Cloud-Umgebungen, Fernüberwachung und Konnektivitätslösungen zur Unterstützung zuverlässiger globaler Abläufe.",
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


            </motion.div>
          ))}

        </div>
      </div>
      



    </section>
  );
};

export default ServicesSection;