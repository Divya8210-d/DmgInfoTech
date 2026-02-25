"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f5f7f6] py-20 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm border rounded-full bg-white text-black shadow-sm">
            ● OUR SERVICES
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Let’s Talk About Your Project
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Have a project in mind or need expert guidance? 
          Our team is ready to help you find the right technology solution.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-pink-100 rounded-full">
                  <Phone className="text-pink-500" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">Phone No.</h3>
              </div>
              <p className="text-green-600 font-medium">
                +49 15511367753
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-indigo-100 rounded-full">
                  <Mail className="text-indigo-500" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">E-mail</h3>
              </div>
              <p className="text-green-600 font-medium">
                operations@dmgits.com
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <MapPin className="text-green-500" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">Our Address</h3>
              </div>
              <p className="text-green-600 font-medium">
             Germany
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-black">
  <form className="space-y-6">

    {/* Row 1 */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Name */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Name
        </label>
        <input
          type="text"
          placeholder="Eg:- John Smith"
          className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Email
        </label>
        <input
          type="email"
          placeholder="Eg:- xyz@gmail.com"
          className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

    </div>

    {/* Row 2 */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Company Name */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Company Name
        </label>
        <input
          type="text"
          placeholder="Eg:- Stark Industries"
          className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>

      {/* Service Interested */}
      <div className="flex flex-col space-y-2">
        <label className="font-medium text-gray-800">
          Service Interested
        </label>
        <select
          className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
        >
          <option>Select a Service</option>
          <option>Web Development</option>
          <option>Mobile App</option>
          <option>UI/UX Design</option>
        </select>
      </div>

    </div>

    {/* Message */}
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-800">
        How Can We Help?
      </label>
      <textarea
        rows={4}
        placeholder="Tell us about your project"
        className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
      ></textarea>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
    >
      Send Message
    </button>

  </form>
</div>
        </div>
      </div>
    </section>
  );
}