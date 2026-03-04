"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

// Dynamic navLinks and services will be defined inside the component to use translations

const socialIcons = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Footer = () => {
    const { t, language } = useLanguage();

    const navLinks = useMemo(() => [
        { href: "#hero", label: t.nav.home },
        { href: "#about", label: t.nav.about },
        { href: "#services", label: t.nav.services },
        { href: "#contact", label: t.nav.contact },
    ], [t.nav]);

    const translatedServices = useMemo(() => [
        language === "en" ? "Business Systems & ERP" : "Geschäftssysteme & ERP",
        language === "en" ? "Infrastructure & Cloud" : "Infrastruktur & Cloud",
        language === "en" ? "Network Security" : "Netzwerksicherheit",
        language === "en" ? "Digital Solutions" : "Digitale Lösungen",
        language === "en" ? "IT Support" : "IT-Support",
        language === "en" ? "Custom Software" : "Maßgeschneiderte Software",
    ], [language]);

    return (
        <footer className="w-full bg-[#060f1e] text-white pt-20 pb-8 px-6 relative overflow-hidden scroll-mt-24">

            {/* Animated top border */}
            <motion.div
                className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#18c5a9] via-[#6ee7da] to-[#18c5a9]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                style={{ originX: 0, width: "100%" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
            />

            {/* Glowing background blob */}
            <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#18c5a9]/5 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 right-0 w-[300px] h-[300px] rounded-full bg-[#18c5a9]/5 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto">

                {/* TOP GRID */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* Brand Column */}
                    <motion.div className="lg:col-span-1" variants={itemVariants}>
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <motion.div
                                className="w-11 h-11 bg-[#18c5a9] rounded-full flex items-center justify-center text-white font-bold text-lg"
                                whileHover={{ scale: 1.15, rotate: 20 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                ↗
                            </motion.div>
                            <span className="text-xl font-bold text-[#18c5a9]">DMG Infotech</span>
                        </Link>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {t.footer.companyDesc}
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            {socialIcons.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-[#18c5a9] hover:text-white transition-colors duration-300"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold text-lg mb-6 relative">
                            {t.footer.quickLinks}
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[2px] bg-[#18c5a9] rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "2.5rem" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            />
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-center gap-2 text-gray-400 hover:text-[#18c5a9] transition-colors duration-200 text-sm"
                                    >
                                        <motion.span
                                            className="text-[#18c5a9] opacity-0 group-hover:opacity-100 transition-opacity"
                                            whileHover={{ x: 3 }}
                                        >
                                            →
                                        </motion.span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold text-lg mb-6 relative">
                            {t.services.badge}
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[2px] bg-[#18c5a9] rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "2.5rem" }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            />
                        </h4>
                        <ul className="space-y-3">
                            {translatedServices.map((svc) => (
                                <li key={svc}>
                                    <span className="group flex items-center gap-2 text-gray-400 hover:text-[#18c5a9] transition-colors duration-200 text-sm cursor-pointer">
                                        <motion.span
                                            className="text-[#18c5a9] opacity-0 group-hover:opacity-100 transition-opacity"
                                            whileHover={{ x: 3 }}
                                        >
                                            →
                                        </motion.span>
                                        {svc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-white font-semibold text-lg mb-6 relative">
                            {t.footer.contactUs}
                            <motion.span
                                className="absolute -bottom-2 left-0 h-[2px] bg-[#18c5a9] rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "2.5rem" }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                            />
                        </h4>

                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="mt-0.5 text-[#18c5a9]">📍</span>
                                <span> {t.footer.addressVal}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#18c5a9]">✉️</span>
                                <a
                                    href="mailto:operations@dmgits.com"
                                    className="hover:text-[#18c5a9] transition-colors"
                                >
                                    operations@dmgits.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#18c5a9]">📞</span>
                                <a
                                    href="tel:+4915511367753"
                                    className="hover:text-[#18c5a9] transition-colors"
                                >
                                    +4915511367753
                                </a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-2 mt-8 bg-[#18c5a9] text-black text-sm font-semibold px-5 py-3 rounded-full"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(24,197,169,0.5)" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {language === 'en' ? 'Get In Touch' : 'Kontakt aufnehmen'} ↗
                        </motion.a>
                    </motion.div>

                </motion.div>

                {/* DIVIDER */}
                <motion.div
                    className="h-[1px] bg-white/10 mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />

                {/* BOTTOM BAR */}
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p>{t.footer.copyright}</p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-[#18c5a9] transition-colors">
                            {language === 'en' ? 'Privacy Policy' : 'Datenschutzrichtlinie'}
                        </a>
                        <a href="#" className="hover:text-[#18c5a9] transition-colors">
                            {language === 'en' ? 'Terms of Service' : 'Nutzungsbedingungen'}
                        </a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
};

export default Footer;
