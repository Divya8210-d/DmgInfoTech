"use client"

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const WhyChooseUs = () => {
  const { t, language } = useLanguage();

  return (
    <section className="w-full bg-[#0b1b33] py-24 px-6 scroll-mt-24">
      <div className="max-w-8xl p-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gray-500 rounded-full px-4 py-2 text-sm text-gray-300 mb-8">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            {t.whyChooseUs.badge}
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
            {language === 'en'
              ? "We combine technical expertise and a client-focused approach to deliver reliable solutions that drive real business results."
              : "Wir kombinieren technische Expertise mit einem kundenorientierten Ansatz, um zuverlässige Lösungen zu liefern, die echte Geschäftsergebnisse erzielen."}
          </h2>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#18c5a9] mb-10"></div>

          {/* Feature 01 */}
          <div className="mb-10">
            <h3 className="text-[#18c5a9] text-xl font-semibold mb-3">
              01 {t.whyChooseUs.expertsTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'en'
                ? "Experienced professionals with strong knowledge in IT infrastructure, ERP systems, and digital solutions."
                : "Erfahrene Fachleute mit fundierten Kenntnissen in IT-Infrastruktur, ERP-Systemen und digitalen Lösungen."}
            </p>
          </div>

          <div className="w-full h-[2px] bg-[#18c5a9] mb-10"></div>

          {/* Feature 02 */}
          <div className="mb-10">
            <h3 className="text-[#18c5a9] text-xl font-semibold mb-3">
              02 {t.whyChooseUs.supportTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'en'
                ? "From planning and implementation to training and ongoing support — we stay with you at every step."
                : "Von der Planung über die Implementierung bis hin zur Schulung und fortlaufenden Betreuung – wir begleiten Sie auf jedem Schritt."}
            </p>
          </div>

          <div className="w-full h-[2px] bg-[#18c5a9] mb-10"></div>

          {/* Feature 03 */}
          <div>
            <h3 className="text-[#18c5a9] text-xl font-semibold mb-3">
              03 {language === 'en' ? "Business-Focused Solutions" : "Geschäftsorientierte Lösungen"}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'en'
                ? "We design technology around your business goals, ensuring practical and measurable outcomes."
                : "Wir entwerfen Technologie rund um Ihre Geschäftsziele und gewährleisten praktische und messbare Ergebnisse."}
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT (Overlapping Blocks) */}
        <div className="relative w-full h-[500px]">

          {/* Top Right Block */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#d6b2b2]">
            <Image
              src="https://res.cloudinary.com/dad2siqxd/image/upload/v1772046718/997933bdad030be07f574c34f55fa59163548da0_eraxe3.jpg"
              alt="Why choose us 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Middle Left Block */}
          <div className="absolute top-[120px] left-[40px] w-[300px] h-[300px] bg-[#e6a1a1]">
            <Image
              src="https://res.cloudinary.com/dad2siqxd/image/upload/v1772046717/d5717155ed2421eae8d005dc2b0008e2c48ea2d5_qftsgs.jpg"
              alt="Why choose us 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom Right Block */}
          <div className="absolute bottom-0 right-[20px] w-[320px] h-[320px] bg-[#e99999]">    <Image
            src="https://res.cloudinary.com/dad2siqxd/image/upload/v1772046722/80b1872dc27ec80193c09b4f3edf4e6e224eea0b_tdjpyp.jpg"
            alt="Why choose us 1"
            fill
            className="object-cover"
          /></div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;