import React, { useState, useEffect } from "react";

const albums = {
  Commercial: [
    "/G1.jpg",
    "/G2.jpg",
    "/G3.jpg",
    "/G4.jpg",
    "/G5.jpg",
    "/G6.jpg",
    "/G7.jpg",
    "/G8.jpg",
    "/G9.jpg",
    "/G10.jpg",
  ],
  Residential: ["/G6.jpg", "/G7.jpg", "/G8.jpg", "/G9.jpg", "/G10.jpg"],
  "Album name 3": [
    "/G2.jpg",
    "/G3.jpg",
    "/G4.jpg",
    "/G5.jpg",
    "/G6.jpg",
  "/G7.jpg",
  ],
};

export default function ImageGallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("Commercial");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false); // start fade out
    const timeout = setTimeout(() => setFade(true), 200); // fade in after 200ms
    return () => clearTimeout(timeout);
  }, [selectedAlbum]);

  return (
    <section className="bg-[#fcfcfc] py-12 px-0">
      {/* Album Tabs */}
      <div className="flex justify-center gap-4 mb-10 px-4">
        {Object.keys(albums).map((album) => (
          <button
            key={album}
            onClick={() => setSelectedAlbum(album)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              selectedAlbum === album
                ? "bg-black text-white"
                : "bg-white text-black border-black"
            }`}
          >
            {album}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-8 transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {albums[selectedAlbum].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`img-${index}`}
            className="object-cover w-full h-60 shadow-md"
          />
        ))}
      </div>
    </section>
  );
}
