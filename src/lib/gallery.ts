export type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

// eiqan.com reuses the same underlying photos for its hero slides and
// "who we serve" cards (slide-1 === serve-schools, slide-2 === serve-corporate,
// slide-4 === serve-fleet, confirmed by file hash), so only the unique set is
// listed here to avoid showing the same photo twice.
export const galleryImages: GalleryImage[] = [
  {
    src: "/images/serve-schools.jpg",
    alt: "Student transportation for schools and universities",
    category: "Student Transportation",
  },
  {
    src: "/images/serve-corporate.jpg",
    alt: "Corporate employee shuttle service",
    category: "Corporate Shuttle",
  },
  {
    src: "/images/slide-3.jpg",
    alt: "EIQAN transportation fleet in operation",
    category: "Fleet",
  },
  {
    src: "/images/serve-fleet.jpg",
    alt: "Fleet management for bus operators",
    category: "Fleet Management",
  },
  {
    src: "/images/slide-5.jpg",
    alt: "EIQAN transportation service on route",
    category: "Bus Rental",
  },
];
