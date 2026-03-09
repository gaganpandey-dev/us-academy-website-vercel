import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
        <Image
        src="public/images/School.jpeg"
        alt="US Academy School"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-700/70 to-blue-900/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-yellow-400">US Academy</span>
        </h1>

        <p className="text-base sm:text-lg mb-8 text-gray-200">
          Where education meets discipline, innovation, and holistic
          development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">

          <Link
            href="/about"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Explore More
          </Link>

          <Link
            href="/enquiry"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
          >
            Admission Enquiry
          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">1000+</h3>
            <p className="text-sm text-gray-200">Students</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">20</h3>
            <p className="text-sm text-gray-200">Teachers</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">98%</h3>
            <p className="text-sm text-gray-200">Results</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold">2026</h3>
            <p className="text-sm text-gray-200">Established</p>
          </div>

        </div>

      </div>
    </section>
  );
}