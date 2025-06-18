"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const albums = {
  Commercial: [
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183754/Commercial6_boas4c.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183131/Commercial22_xzuney.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183115/Commercial21_lz380z.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182805/Interior76_n8rpxn.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183764/Commercial1_jtdoh8.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182688/Commercial48_vntpzu.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182554/Commercial50_r0pomi.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182553/Commercial51_zg8guj.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182397/Commercial106_dwekki.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182393/Comercial58_xmnaur.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182390/Comercial59_vxadxm.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182380/Commercial112_mpffxl.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182379/Comercial62_j6ejre.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182377/Comercial63_rfvd3i.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182374/Commercial105_szipas.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182374/Commercial121_aqf5ed.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182371/Commercial118_hkkecn.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183800/Commercial8_k06cyx.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183791/Commercial9_ynxc1d.jpg",
  ],
  Residential: [
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183970/Pank3_jasd5b.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183900/Interior65_pyck8i.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183880/Interior71_ig0lay.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183864/Interior81_p67juw.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183832/Interior77_dpjvyu.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183755/Pank9_dlkszv.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183729/Pank4_cb3s7e.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183720/Pank10_gtzzsm.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183710/Pank13_wohvhk.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183696/Pank12_drqomo.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183665/Pank15_srba0r.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183233/Interior2_x4y8ya.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183630/Light2_qeq4ru.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183219/Interior1_axgzlh.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183218/Interior3_lrfzif.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183201/Interior4_gtfa67.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183020/Interior59_hw5vtj.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183034/Interior55_gyf5k0.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183004/Interior56_trcqij.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750182888/Interior61_ebhlxl.jpg",
  ],
  Exterior: [
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750184185/Exterior22_yirfyg.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750184167/Exterior28_y1hqfn.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183986/exterior31_inx4mc.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183969/exterior24_hydtgl.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183724/Exterior2_qqzoh8.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183633/Exterior4_svigxx.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183624/Exterior5_cwwq6z.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183605/Exterior6_hyqoi9.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183598/Exterior7_ek7wrs.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183584/Exterior9_pvz2uy.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183516/Exterior10_o9svte.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183397/Exterior16_jmnbxj.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183395/Exterior17_d3o4u5.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183339/Exterior21_pgtlil.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183356/Exterior20_cjcgbl.jpg",
    "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750183322/Exterior23_keqzfo.jpg",
  ],
};

export default function ImageGallery() {
  const [selectedAlbum, setSelectedAlbum] = useState("Commercial");
  const [visibleCount, setVisibleCount] = useState(10);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
    setVisibleCount(10); // Reset count when album changes
    const timeout = setTimeout(() => setFade(true), 200);
    return () => clearTimeout(timeout);
  }, [selectedAlbum]);

  const optimizeUrl = (src, string) =>
    src.includes("res.cloudinary.com")
      ? src.replace("/upload/", "/upload/f_auto,q_auto,w_800/")
      : src;

  const currentImages = albums[selectedAlbum].slice(0, visibleCount);
  const canLoadMore = visibleCount < albums[selectedAlbum].length;

  return (
    <section className="bg-[#fcfcfc] py-12 px-4 sm:px-6 lg:px-12">
      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
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

      {/* Grid */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 transition-opacity duration-500 ${
          fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {currentImages.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-60 md:h-72 overflow-hidden rounded-md shadow-md"
          >
            <Image
              src={optimizeUrl(src)}
              alt={`${selectedAlbum} image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 20vw"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
            />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {canLoadMore && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 10)}
            className="px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
