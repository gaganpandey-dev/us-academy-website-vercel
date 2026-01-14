import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3 text-sm">
        
        {/* ABOUT */}
        <div className="footer-col">
          <h3 className="font-bold text-lg mb-4">US Academy</h3>
          <p className="text-blue-100 leading-relaxed">
            US Academy is a K–12 institution dedicated to nurturing young
            minds through quality education, strong values, discipline,
            and a supportive learning environment. We strive to prepare
            students not only for academic success, but for life.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faculty" className="hover:text-white transition">
                Our Faculty
              </Link>
            </li>
            <li>
              <Link href="/management" className="hover:text-white transition">
                Management Team
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/enquiry" className="hover:text-white transition">
                Admission Enquiry
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <div className="text-blue-100 space-y-2">
            <p>📍 Address will be updated soon</p>

            <p>📞 9415382424</p>
            <p>📞 87870 23932</p>
            <p>📞 63064 71744</p>

            <p className="pt-2">✉️ Email will be updated soon</p>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="bg-blue-900 text-center py-4 text-xs text-blue-100">
        © 2026 US Academy. All Rights Reserved. <br />
        Developed by{" "}
        <span className="font-semibold tracking-wide text-white">
          GAGAN
        </span>
      </div>
    </footer>
  );
}
