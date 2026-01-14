import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery() {
  return (
   <section className="bg-[#F1F3F5]">
  <div className="max-w-7xl mx-auto py-16 px-6">
    
    <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
      Our Gallery
    </h1>

    <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
      A glimpse into life at US Academy  - our campus, classrooms,
      events, and student activities.
    </p>

    <GalleryGrid />
  </div>
</section>

  );
}
