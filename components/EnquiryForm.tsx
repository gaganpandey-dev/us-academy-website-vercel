"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    class: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = `
Hello US Academy,

Parent Name: ${formData.name}
Phone: ${formData.phone}
Class: ${formData.class}

Message: ${formData.message}
`;

    const whatsappURL =
      "https://wa.me/919415382424?text=" + encodeURIComponent(text);

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto w-full">

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Parent / Guardian Name
          </label>

          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Contact Number
          </label>

          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Class */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Student Class
          </label>

          <select
            name="class"
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-900"
          >
            <option value="">Select Class</option>
            <option>Nursery</option>
            <option>KG</option>
            <option>Class I – V</option>
            <option>Class VI – VIII</option>
            <option>Class IX – X</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message
          </label>

          <textarea
            rows={4}
            name="message"
            onChange={handleChange}
            placeholder="Any specific query?"
            className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 text-gray-900"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition shadow-lg"
        >
          Send Enquiry on WhatsApp
        </button>

      </form>
    </div>
  );
}