import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

        {/* LEFT IMAGE (WIDER) */}
        <div className="lg:col-span-2 h-full">
          <div className="rounded-3xl overflow-hidden shadow-lg h-full">
            <img
              src="/images/about-image.jpg"
              alt="About Company"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-between h-full">

          {/* TOP CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gray-400 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              ABOUT COMPANY
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Driving Business Growth <br />
              Through Technology
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed">
              DMG Infotech provides end-to-end IT solutions designed to support
              business performance, scalability, and digital transformation.
              We focus on practical technology that delivers measurable results.
            </p>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">

            {/* Vision Card */}
            <div className="bg-[#7fd3c7] rounded-2xl p-6">
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
            </div>

            {/* Mission Card */}
            <div className="bg-[#7fd3c7] rounded-2xl p-6">
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
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
