export default function Contact() {
  return (
    <section className="bg-[#F5F6F8]">
      {/* light premium grey */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-12 text-center">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* CONTACT DETAILS CARD */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              US Academy
            </h2>

            <div className="space-y-3 text-gray-700">
              <p>📍 Address will be updated soon</p>

              <p>📞 9415382424</p>
              <p>📞 87870 23932</p>
              <p>📞 63064 71744</p>

              <p>✉️ Email will be updated soon</p>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              Feel free to contact us during school hours for admissions,
              academic queries, or general information.
            </p>
          </div>

          {/* MAP CARD */}
      <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 contact-card">

            <iframe
              title="US Academy Location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="w-full h-87.5 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
