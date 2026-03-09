export default function Contact() {
  return (
    <section className="bg-[#F5F6F8]">
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
              <p>📍 Village- Tenuhari (Shukla), Sahjanwa, Gorakhpur</p>

              <p>📞 9415382424</p>
              <p>📞 6306471744</p>
              <p>📞 8787023932</p>
            

              <p>✉️ usacademytenuhari504@gmail.com</p>
            </div>

            <p className="text-sm text-gray-500 pt-4">
              Feel free to contact us during school hours for admissions,
              academic queries, or general information.
            </p>

            {/* GOOGLE MAP BUTTON */}
            <a
              href="https://maps.app.goo.gl/tbhHKD94xry5mzDF9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* MAP CARD */}
          <div className="bg-white rounded-2xl shadow-md p-6">

            <iframe
              title="US Academy Location"
              src="https://www.google.com/maps?q=US%20Academy%20Tenuhari%20Sahjanwa%20Gorakhpur&output=embed"
              className="w-full h-[350px] border-0 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
}