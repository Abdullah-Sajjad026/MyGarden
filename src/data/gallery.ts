/**
 * Photo gallery manifest — add a photo by dropping the file in /public/gallery
 * and appending one entry here. Rendered on /about.
 */
export type GalleryItem = {
  src: string; // path under /public
  caption: string;
  date: string; // e.g. "2026-03"
  tag: "conference" | "workspace" | "life";
};

export const gallery: GalleryItem[] = [
  // { src: "/gallery/conf-2026.jpg", caption: "…", date: "2026-03", tag: "conference" },
];
