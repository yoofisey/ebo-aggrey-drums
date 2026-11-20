export interface Lesson {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  length: string;
  summary: string;
  materialHref: string;
}

export const lessons: Lesson[] = [
  {
    slug: "finding-the-pocket",
    title: "Finding the pocket",
    level: "Beginner",
    length: "18 min",
    summary:
      "Slow the part down and find the place where the groove feels easy.",
    materialHref: "/materials/groove-foundations",
  },
  {
    slug: "hands-wrists-rebound",
    title: "Hands, wrists, rebound",
    level: "Intermediate",
    length: "24 min",
    summary:
      "A practical look at stroke height, grip and getting the stick to do the work.",
    materialHref: "/materials/snare-technique-notes",
  },
  {
    slug: "fills-that-belong",
    title: "Fills that belong",
    level: "Intermediate",
    length: "14 min",
    summary:
      "Place fills around the beat instead of on top of it, then make them say something.",
    materialHref: "/materials/filling-the-gaps",
  },
  {
    slug: "comping-behind-a-soloist",
    title: "Comping behind a soloist",
    level: "Advanced",
    length: "32 min",
    summary:
      "Response, restraint and listening in a jazz setting, with slow and full-speed studies.",
    materialHref: "/materials/jazz-comping-primer",
  },
  {
    slug: "inside-a-session",
    title: "Inside a studio session",
    level: "Advanced",
    length: "26 min",
    summary:
      "Setup, microphones and the small changes that make a recorded take work.",
    materialHref: "/materials/studio-session-breakdown",
  },
  {
    slug: "reading-a-live-groove",
    title: "Reading a live groove",
    level: "Advanced",
    length: "21 min",
    summary:
      "How dynamics and space carry a groove when everything around you is loud.",
    materialHref: "/materials/live-groove-analysis",
  },
];
