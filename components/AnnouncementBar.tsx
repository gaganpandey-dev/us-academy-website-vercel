export default function AnnouncementBar() {
  return (
    <div className="w-full bg-indigo-900 text-white overflow-hidden">

      <div className="flex whitespace-nowrap animate-marquee py-2 font-medium">

        <span className="mx-10">
          📢 ADMISSIONS OPEN FOR THE SESSION 2026–27
        </span>

      

        <span className="mx-10">
          🏫 Welcome to US Academy Tenuhari
        </span>

        <span className="mx-10">
          📞 Contact for Admission Enquiry
        </span>

        {/* Duplicate for smooth loop */}
        <span className="mx-10">
          📢 ADMISSIONS OPEN FOR THE SESSION 2026–27
        </span>


      </div>

    </div>
  );
}