"use client";

import { useState } from "react";

export default function EnquiryForm() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl mx-auto form-card">
      <form className="space-y-6">
        
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Parent / Guardian Name
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Contact Number
          </label>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Student Class (Applying For)
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          >
            <option>Nursery</option>
            <option>KG</option>
            <option>Class I – V</option>
            <option>Class VI – VIII</option>
            <option>Class IX – XII</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Any specific query?"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
            focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-xl 
          hover:bg-blue-800 transition-all duration-300 shadow-lg"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
