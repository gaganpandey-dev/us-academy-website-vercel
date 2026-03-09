import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/School.jpeg"
        alt="US Academy School"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-yellow-400">US Academy</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
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
            <h3 className="text-xl md:text-3xl font-bold">1000+</h3>
            <p className="text-xs md:text-sm text-gray-200">Students</p>
          </div>

          <div>
            <h3 className="text-xl md:text-3xl font-bold">20</h3>
            <p className="text-xs md:text-sm text-gray-200">Teachers</p>
          </div>

          <div>
            <h3 className="text-xl md:text-3xl font-bold">98%</h3>
            <p className="text-xs md:text-sm text-gray-200">Results</p>
          </div>

          <div>
            <h3 className="text-xl md:text-3xl font-bold">2026</h3>
            <p className="text-xs md:text-sm text-gray-200">Established</p>
          </div>

        </div>

      </div>
    </section>
  );
}