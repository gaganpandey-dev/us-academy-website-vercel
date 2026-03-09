"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.jpeg"
            alt="US Academy Logo"
            width={44}
            height={44}
            className="rounded-md"
            priority
          />
          <span className="text-xl md:text-2xl font-bold tracking-wide">
            US Academy
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
          <Link href="/management" className="hover:text-blue-200">Management</Link>
          <Link href="/gallery" className="hover:text-blue-200">Gallery</Link>
          <Link href="/contact" className="hover:text-blue-200">Contact</Link>
          <Link
            href="/enquiry"
            className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-blue-100"
          >
            Enquiry
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav> 
      

   {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden bg-blue-700 px-6 pb-4 space-y-3 text-sm font-medium">
    <Link href="/" className="block hover:text-blue-200" onClick={() => setMenuOpen(false)}>Home</Link>

    <Link href="/about" className="block hover:text-blue-200" onClick={() => setMenuOpen(false)}>About</Link>


    <Link href="/management" className="block hover:text-blue-200" onClick={() => setMenuOpen(false)}>Management</Link>

    <Link href="/gallery" className="block hover:text-blue-200" onClick={() => setMenuOpen(false)}>Gallery</Link>

    <Link href="/contact" className="block hover:text-blue-200" onClick={() => setMenuOpen(false)}>Contact</Link>

    <Link
      href="/enquiry"
      className="inline-block bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100"
      onClick={() => setMenuOpen(false)}
    >
      Enquiry
    </Link>
  </div>
)}
    </header>
  );
}
