"use client";

import { useState } from "react";
import Image from "next/image";

const allImages = [
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

  { src: "/images/about/1.png", category: "Events" },
  { src: "/images/about/2.png", category: "Events" },
  { src: "/images/about/3.png", category: "Events" },
  { src: "/images/about/4.png", category: "Events" },
  { src: "/images/about/h3.png", category: "Events" },
  { src: "/images/about/5.png", category: "Events" },

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
      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
            ${
              filter === cat
                ? "bg-blue-700 text-white shadow"
                : "bg-white text-gray-700 border hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative w-full h-40 sm:h-48 md:h-52 rounded-xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={img.src}
              alt="Gallery"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* MODAL VIEW */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4">

          {/* CLOSE */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* PREV */}
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white text-4xl"
          >
            ‹
          </button>

          {/* IMAGE */}
          <Image
            src={images[activeIndex].src}
            alt="Gallery"
            width={900}
            height={600}
            className="rounded-xl max-h-[80vh] object-contain"
          />

          {/* NEXT */}
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
}