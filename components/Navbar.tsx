"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white shadow">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo1.jpeg"
            alt="US Academy Logo"
            width={40}
            height={40}
            className="rounded-md"
            priority
          />
          <span className="text-lg md:text-2xl font-bold tracking-wide">
            US Academy
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
          <Link href="/management" className="hover:text-blue-200">Management</Link>
          <Link href="/gallery" className="hover:text-blue-200">Gallery</Link>
          <Link href="/contact" className="hover:text-blue-200">Contact</Link>

          <Link
            href="/enquiry"
            className="bg-white text-blue-700 px-4 py-1.5 rounded-md hover:bg-blue-100 transition"
          >
            Enquiry
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 border-t border-blue-600">

          <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">

            <Link
              href="/"
              className="hover:text-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="hover:text-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/management"
              className="hover:text-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              Management
            </Link>

            <Link
              href="/gallery"
              className="hover:text-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/enquiry"
              className="bg-white text-blue-700 px-4 py-2 rounded-md text-center hover:bg-blue-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Admission Enquiry
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}