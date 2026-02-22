import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#f3f3f3] py-12 px-6 min-h-screen pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SECTION (WIDER) */}
        <div
          className="lg:col-span-2 relative rounded-3xl overflow-hidden flex items-center"
          style={{
            backgroundImage: "url('./vercel.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0b1b2b]/90"></div>

          {/* Content */}
          <div className="relative z-10 text-white p-12 max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/40 rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              ENGINEERED FOR GROWTH
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              IT Solutions <br />
              for Maritime & <br />
              Retail Businesses
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-white/80 mb-8">
              We help maritime and retail companies scale through secure
              infrastructure, cloud systems, and modern digital solutions.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-4 mb-10">
              <button className="bg-[#18c5a9] text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
                TALK TO AN EXPERT
              </button>

              <div className="w-12 h-12 bg-[#18c5a9] rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                ↗
              </div>
            </div>

            {/* Customers */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-500"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-600"></div>
              </div>
              <p className="text-sm text-white/80">
                We Have <span className="text-[#18c5a9] font-semibold">500+</span> Customers Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div
          className="rounded-3xl overflow-hidden min-h-[500px]"
          style={{
            backgroundImage: "url('./vercel.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
