"use client";

import { useEffect } from "react";
import "flowbite"; // REQUIRED for carousel to work
import { getCaruselData } from "@/src/app/lib/strapi";

const styles = {
  backgroundImage: "absolute inset-0 object-cover w-full h-full",
};

export default function Carrusel() {
  useEffect(() => {
    // Reinitialize Flowbite components when component mounts
    if (typeof window !== "undefined" && (window as any).initFlowbite) {
      (window as any).initFlowbite();
    }
  }, []);

  return (

    
    <>
      <div className="max-w-2xl mx-auto">
        <div id="default-carousel" className="relative" data-carousel="static">

          {/* SMALLER HEIGHT */}
          <div className="overflow-hidden relative h-40 sm:h-48 xl:h-56 2xl:h-64 rounded-lg">

            {/* SLIDE 1 */}
            <div
              className="duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                alt="Slide 1"
                className={styles.backgroundImage}
                src="https://media.istockphoto.com/id/1739024655/photo/asphalt-road-and-city-skyline-at-sunset.jpg?s=1024x1024&w=is&k=20&c=PyB3vH4nRXAaAZ0VCebm2zdDs8rEyYPNXZY0zWB4n7w="
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* SLIDE 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                alt="Slide 2"
                className={styles.backgroundImage}
                src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* SLIDE 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                alt="Slide 3"
                className={styles.backgroundImage}
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>

          {/* INDICATORS */}
          <div className="flex absolute bottom-4 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button className="w-3 h-3 rounded-full" data-carousel-slide-to="0"></button>
            <button className="w-3 h-3 rounded-full" data-carousel-slide-to="1"></button>
            <button className="w-3 h-3 rounded-full" data-carousel-slide-to="2"></button>
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
