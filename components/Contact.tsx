"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
        setFormData({ name: "", email: "", company: "", service: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="bg-[#f5f7f6] py-20 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-4 py-1 text-sm border rounded-full bg-white text-black shadow-sm">
            ● {t.contact.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          {t.contact.heading}
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          {t.contact.subtitle}
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
                <h3 className="font-semibold text-gray-800">{t.contact.info.phone}</h3>
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
                <h3 className="font-semibold text-gray-800">{t.contact.info.email}</h3>
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
                <h3 className="font-semibold text-gray-800">{t.contact.info.address}</h3>
              </div>
              <p className="text-green-600 font-medium">
                {t.footer.addressVal}
              </p>
            </div>

          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-black">
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-800">
                    {t.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-800">
                    {t.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Company Name */}
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-800">
                    {t.contact.form.companyLabel}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t.contact.form.companyPlaceholder}
                    className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                {/* Service Interested */}
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-gray-800">
                    {t.contact.form.serviceLabel}
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option value="">{t.contact.form.serviceInitial}</option>
                    <option value="Managed IT Services">{t.contact.form.service1}</option>
                    <option value="Cybersecurity">{t.contact.form.service2}</option>
                    <option value="Cloud Solutions">{t.contact.form.service3}</option>
                    <option value="Network Infrastructure">{t.contact.form.service4}</option>
                    <option value="Data Backup & Recovery">{t.contact.form.service5}</option>
                    <option value="Help Desk Support">{t.contact.form.service6}</option>
                    <option value="Social Media Management">{t.contact.form.service7}</option>
                    <option value="Others">{t.contact.form.service8}</option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-gray-800">
                  {t.contact.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full bg-teal-100 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                ></textarea>
              </div>

              {/* Status Message */}
              {status && (
                <p className={`text-sm ${status.includes("successfully") ? "text-green-600" : "text-blue-600"}`}>
                  {status}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              >
                {isSubmitting ? t.contact.form.btnSending : t.contact.form.btnSend}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}