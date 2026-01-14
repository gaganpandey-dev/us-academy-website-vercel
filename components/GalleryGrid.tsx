"use client";

import { useState } from "react";

const allImages = [
  // Existing gallery images
  { src: "/images/gallery/1.png", category: "All" },
  { src: "/images/gallery/2.png", category: "All" },
  { src: "/images/gallery/0.png", category: "All" },
  { src: "/images/gallery/3.png", category: "All" },

  { src: "/images/gallery/4.png", category: "Campus" },
    { src: "/images/gallery/h2.png", category: "Campus" },
  { src: "/images/gallery/5.png", category: "Campus" },
  { src: "/images/gallery/6.png", category: "Students" },
  { src: "/images/gallery/7.png", category: "Events" },
  { src: "/images/gallery/8.png", category: "Students" },

  // 🔥 ABOUT IMAGES → EVENTS
  { src: "/images/about/1.png", category: "Events" },
  { src: "/images/about/2.png", category: "Events" },
  { src: "/images/about/3.png", category: "Events" },
  { src: "/images/about/4.png", category: "Events" },
   { src: "/images/about/h3.png", category: "Events" },
  { src: "/images/about/5.png", category: "Events" },

  // Students
  { src: "/images/gallery/studentgrp2.png", category: "Students" },
  { src: "/images/gallery/studentgrp3.png", category: "Students" },
  { src: "/images/gallery/studentgrp4.png", category: "Students" },
  { src: "/images/gallery/studentgrp5.png", category: "Students" },
  { src: "/images/gallery/studentgrp6.png", category: "Students" },
];


const categories = ["All", "Campus", "Events", "Students"];

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const images = allImages.filter(
    (img) => filter === "All" || img.category === filter
  );

  const nextImage = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const prevImage = () => {
    if (activeIndex === null) return;
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  return (
    <>
      {/* CATEGORY FILTERS */}
     <div className="flex justify-center gap-4 mb-10">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-5 py-2 rounded-full text-sm font-semibold transition
        ${
          filter === cat
            ? "bg-blue-700 text-white shadow-md"
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200 hover:text-gray-900"
        }`}
    >
      {cat}
    </button>
  ))}
</div>


      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="w-full max-w-xs bg-white/90 rounded-2xl overflow-hidden transition-card"
          >
            <img
              src={img.src}
              alt="Gallery"
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </div>

      {/* MODAL SLIDER */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-3xl text-gray-700"
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 text-4xl text-gray-700"
          >
            ‹
          </button>

          <img
            src={images[activeIndex].src}
            className="max-w-4xl max-h-[80vh] rounded-2xl shadow-2xl"
          />

          <button
            onClick={nextImage}
            className="absolute right-6 text-4xl text-gray-700"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
