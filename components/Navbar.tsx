import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-blue-700 text-white shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}

<div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="US Academy Logo"
    width={44}
    height={44}
    className="rounded-md"
    priority
  />
  <span className="text-2xl font-bold text-white tracking-wide">
    US Academy
  </span>
</div>


        {/* Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
          <Link href="/faculty" className="hover:text-blue-200">Faculty</Link>
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
      </nav>
    </header>
  );
}
