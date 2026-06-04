/** Remote fallbacks (Unsplash) — replace by adding files under public/media/ */

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const HERO_MEDIA = {
  image: u("photo-1486406146926-c627a92ad1ab", 1920),
  video: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-building-4308-large.mp4",
  localImage: "/media/hero.jpg",
  localVideo: "/media/hero.mp4",
};

export const ABOUT_MEDIA = {
  studio: u("photo-1503387762-592deb58ef4e", 1200),
  process: u("photo-1503389152981-d550814ad2da", 1200),
  localStudio: "/media/about/studio.jpg",
  localProcess: "/media/about/process.jpg",
};

export const CONTACT_MEDIA = {
  office: u("photo-1497366216548-37526070297c", 1200),
  localOffice: "/media/contact/office.jpg",
};

/** Per-project remote architecture photography */
export const PROJECT_MEDIA: Record<string, string> = {
  "spa-wellness-interior": u("photo-1618221195710-e981b3be0ada", 1200),
  "sector-105-residence": u("photo-1600585154340-be6161a56a0c", 1200),
  "c11-tower-noida": u("photo-1545324418-cc68d1d55b38", 1200),
  "dholera-airport-terminal": u("photo-1518005020951-eccb5f86d587", 1200),
  "worldmark-2nd-floor": u("photo-1497366811353-6870734d13b0", 1200),
  "club-front-commercial": u("photo-1486406146926-c627a92ad1ab", 1200),
};

export function projectLocalPath(id: string) {
  return `/media/projects/${id}.jpg`;
}

export function projectLocalPaths(id: string) {
  return [
    `/media/projects/${id}.jpg`,
    `/media/projects/${id}.jpeg`,
    `/media/projects/${id}.png`,
    `/media/projects/${id}.webp`,
  ];
}
