"use client";

export default function About() {
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50/30 to-indigo-100 overflow-hidden">

      {/* Soft Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* HEADER */}
        <div className="text-center mb-24">
          <span className="inline-block px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-6">
            K–12 School • Excellence in Education
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            About <span className="text-blue-600">US Academy</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            US Academy is a K–12 institution committed to academic excellence,
            strong values, and holistic development in a disciplined and nurturing environment.
          </p>
        </div>

        {/* PHILOSOPHY + JOURNEY */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">

          {/* Philosophy */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Educational Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At US Academy, we believe education is not limited to textbooks.
              Our approach balances academics, discipline, creativity, and character building.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We aim to develop confident learners, responsible citizens,
              and future leaders prepared to succeed in a dynamic world.
            </p>
          </div>

          {/* Journey */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Our Journey
            </h3>

            <div className="space-y-5">
              {[
                ["Foundation", "Established with a vision for quality education"],
                ["Growth", "Expanded into a full K–12 academic institution"],
                ["Today", "Recognized for discipline, results, and holistic growth"],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-8 mb-24 text-center">
          {[
            ["K–12", "Complete Schooling"],
            ["Experienced", "Dedicated Faculty"],
            ["Safe", "Campus Environment"],
            ["Holistic", "Student Development"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {value}
              </div>
              <div className="text-gray-700 font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* FACILITIES */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-16 shadow-2xl mb-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Infrastructure & Facilities
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Modern facilities designed to support academic excellence and overall growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Smart Classrooms",
              "Science & Computer Labs",
              "Library & Learning Resources",
              "Sports & Physical Education",
              "Transport Facility",
              "Activity Rooms",
              "Safe & Secure Campus",
              "Green Environment",
            ].map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition shadow-sm text-center"
              >
                <p className="font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <div className="text-center max-w-4xl mx-auto">
          <blockquote className="text-2xl italic text-gray-800 mb-4">
            “Education is the most powerful weapon which you can use to change the world.”
          </blockquote>
          <p className="font-semibold text-gray-600">— Nelson Mandela</p>
        </div>

      </div>
    </section>
  );
}
