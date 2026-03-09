import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">

        {/* ABOUT */}
        <div>
          <h3 className="font-bold text-lg mb-4">US Academy</h3>
          <p className="text-blue-100 leading-relaxed">
            US Academy is a K–10 institution dedicated to nurturing young
            minds through quality education, discipline, and strong values.
            We aim to provide affordable and holistic education that helps
            students grow academically and morally.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/management" className="hover:text-white transition">
                Management
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
            <p>📍 Village Tenuhari (Shukla), Sahjanwa, Gorakhpur</p>

            <p>📞 9415382424</p>
            <p>📞 6306471744</p>
            <p>📞 8787023932</p>

            <p className="pt-2">✉️ usacademytenuhari504@gmail.com</p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>

          <p className="text-blue-100 mb-4">
            Stay connected with US Academy for school updates,
            events, and student activities.
          </p>

          <div className="flex gap-4 text-sm">

            <a
              href="http://www.youtube.com/@u.s.academytenuhari3882"
              target="_blank"
              className="bg-red-600 px-3 py-2 rounded hover:bg-red-700 transition"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/tenuhari?igsh=OHRzcjAzdnNyajBw"
              target="_blank"
              className="bg-pink-500 px-3 py-2 rounded hover:bg-pink-600 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/share/1Aiuy7jAHk/"
              target="_blank"
              className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Facebook
            </a>

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