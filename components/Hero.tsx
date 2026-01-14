export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-blue-900">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shaping Tomorrow's Leaders
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          US Academy provides world-class K-12 education focused on
          excellence, discipline, and innovation.
        </p>
        <a
          href="/enquiry"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded transition"
        >
          Enquire Now
        </a>
      </div>
    </section>
  );
}
