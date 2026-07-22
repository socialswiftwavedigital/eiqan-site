"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import type { GalleryImage } from "@/lib/gallery";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative aspect-square overflow-hidden rounded-2xl border border-black/8 text-left ${
              image.category === "Brand" ? "bg-dark" : "bg-offwhite"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`transition-transform duration-300 group-hover:scale-105 ${
                image.category === "Brand" ? "object-contain p-8" : "object-cover"
              }`}
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="flex w-full items-center justify-between p-3">
                <span className="text-xs font-semibold text-white">
                  {image.category}
                </span>
                <ZoomIn className="h-4 w-4 text-white" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative h-full max-h-[80vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
