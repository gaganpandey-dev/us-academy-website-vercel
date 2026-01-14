export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#F8FAFC] via-white to-[#E2E8F0]">

      {/* TOP INFO BAR */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 text-sm hidden md:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span>🎓 US Academy – K–12 School</span>
          <span>📞 9415382424 | 8787023932 | 6306471744</span>
        </div>
        <span className="font-semibold">Admissions Open 2026–27</span>
      </div>

      {/* HERO SECTION (SINGLE, MERGED) */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* 1️⃣ LOGO WATERMARK (BACKGROUND) */}
  <div
    className="absolute inset-0 bg-center bg-no-repeat bg-contain pointer-events-none"
    style={{
      backgroundImage: "url('/images/logo.png')",
      opacity: 0.8,
      backgroundSize: "70%",
      filter: "grayscale(100%) contrast(120%)",
    }}
  />

  {/* 2️⃣ COLOR GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-linear-to-r from-blue-600/80 via-indigo-600/75 to-blue-700/85" />

  {/* 3️⃣ HERO CONTENT */}
  <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
      Welcome to <span className="text-yellow-300">US Academy</span>
    </h1>

    <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed text-blue-100">
      Where education meets discipline, innovation, and holistic development.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/about"
        className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition shadow-xl"
      >
        Explore More
      </a>

      <a
        href="/enquiry"
        className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition shadow-xl"
      >
        Admission Enquiry
      </a>
    </div>
  </div>

</section>


      {/* QUICK STATS */}
      <section className="py-24 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            ["K–12", "Complete Schooling", "text-blue-600"],
            ["Experienced", "Faculty", "text-indigo-600"],
            ["Safe", "Campus", "text-green-600"],
            ["Holistic", "Development", "text-purple-600"],
          ].map(([title, subtitle, color]) => (
            <div key={title}>
              <div className={`text-5xl font-bold mb-4 ${color}`}>{title}</div>
              <h3 className="text-xl font-semibold text-gray-800">{subtitle}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose US Academy?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A balanced approach to academics, values, and future readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            ["📚", "Academic Excellence"],
            ["⚽", "Sports & Activities"],
            ["👨‍🏫", "Expert Teachers"],
          ].map(([icon, title]) => (
            <div
              key={title}
              className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600">
                Focused on overall growth and lifelong learning.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
