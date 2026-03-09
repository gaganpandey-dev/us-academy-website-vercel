"use client";

import { FaYoutube, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function SocialFloat() {
  return (
    <div className="fixed right-3 sm:right-4 bottom-20 flex flex-col items-end gap-3 z-50">



      {/* YouTube */}
      <a
        href="http://www.youtube.com/@u.s.academytenuhari3882"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaYoutube size={18} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/tenuhari"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaInstagram size={18} />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1Aiuy7jAHk/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaFacebookF size={16} />
      </a>

    </div>
  );
}