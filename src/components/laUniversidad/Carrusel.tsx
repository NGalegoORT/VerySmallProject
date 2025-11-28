"use client";

import { useEffect } from "react";
import "flowbite"; // REQUIRED for carousel to work

const styles = {
  backgroundImage: "absolute inset-0 object-cover w-full h-full",
};

interface CarruselClientProps {
  images: string[];
}

export function CarruselClient({ images }: CarruselClientProps) {
  useEffect(() => {
    // Reinitialize Flowbite components when images change
    if (typeof window !== "undefined" && (window as any).initFlowbite) {
      // Use a small timeout to ensure DOM is fully updated
      const timer = setTimeout(() => {
        (window as any).initFlowbite();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [images]); // Reinitialize when images array changes

  //console.log("CarruselClient received images:", images, "length:", images?.length);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (

    
    <>
      <div className="max-w-2xl mx-auto">
        <div id="default-carousel" className="relative" data-carousel="static">

          {/* SMALLER HEIGHT */}
          <div className="overflow-hidden relative h-40 sm:h-48 xl:h-56 2xl:h-64 rounded-lg">

            {/* RENDER SLIDES DYNAMICALLY */}
            {images.map((src, index) => (
              <div
                key={index}
                className={`duration-700 ease-in-out ${index === 0 ? "" : "hidden"}`}
                data-carousel-item={index === 0 ? "active" : undefined}
              >
                <img
                  alt={`Slide ${index + 1}`}
                  className={styles.backgroundImage}
                  src={src}
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}

          </div>

          {/* INDICATORS */}
          <div className="flex absolute bottom-4 left-1/2 z-30 space-x-3 -translate-x-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full"
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>



          {/* PREV */}
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group"
            data-carousel-prev
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </button>

          {/* NEXT */}
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group"
            data-carousel-next
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full bg-white/30 group-hover:bg-white/50">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </>
  );
}
