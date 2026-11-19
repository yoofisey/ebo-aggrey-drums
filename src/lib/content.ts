export const CONTENT_KINDS = ["video", "document", "audio", "link"] as const;
export type ContentKind = (typeof CONTENT_KINDS)[number];

export const LEVELS = ["Beginner", "Intermediate", "Advanced"] as const;
export type Level = (typeof LEVELS)[number];

export interface ContentItem {
  slug: string;
  title: string;
  summary: string;
  kind: ContentKind;
  level: Level;
  duration: string;
  publishedAt: string;
  author: string;
  image: string;
  tags: string[];
  includes: string[];
}

export const KIND_LABELS: Record<ContentKind, string> = {
  video: "Video",
  document: "PDF",
  audio: "Audio",
  link: "Link",
};

export const contentItems: ContentItem[] = [
  {
    slug: "groove-foundations",
    title: "Groove Foundations: Finding the Pocket",
    summary:
      "If your playing feels like it is always in a hurry, start here. We slow things down and find the place where the groove feels easy.",
    kind: "video",
    level: "Beginner",
    duration: "18 min",
    publishedAt: "2026-10-28",
    author: "Ebo Aggrey",
    image: "studio-kit.jpg",
    tags: ["Timing", "Basics", "Feel"],
    includes: [
      "A simple way of counting and subdividing",
      "Three exercises at increasing tempo",
      "A practice loop you can keep using",
    ],
  },
  {
    slug: "snare-technique-notes",
    title: "Snare Technique: Hands, Wrists, Rebound",
    summary:
      "Notes on stroke height, grip and rebound, written the way I explain them in a lesson, with diagrams you can keep beside the kit.",
    kind: "document",
    level: "Intermediate",
    duration: "12 pages",
    publishedAt: "2026-10-14",
    author: "Ebo Aggrey",
    image: "practice-kit.jpg",
    tags: ["Technique", "Snare"],
    includes: [
      "Stroke heights and what they are for",
      "Six graded rudiment studies",
      "A weekly technique checklist",
    ],
  },
  {
    slug: "rudiment-workbook",
    title: "Rudiment Workbook: Forty Essential Patterns",
    summary:
      "The patterns I put beginners through, collected in one place. Each has a tempo target and a short phrase so it does not stay on the page.",
    kind: "document",
    level: "Beginner",
    duration: "24 pages",
    publishedAt: "2026-09-30",
    author: "Ebo Aggrey",
    image: "rehearsal-kit.jpg",
    tags: ["Rudiments", "Vocabulary"],
    includes: [
      "Forty patterns grouped by difficulty",
      "Tempo targets and room to track progress",
      "Four short application phrases",
    ],
  },
  {
    slug: "filling-the-gaps",
    title: "Filling the Gaps Between Beats",
    summary:
      "How to place fills around the beat rather than on top of it, with examples that grow from a simple substitution to something more connected.",
    kind: "video",
    level: "Intermediate",
    duration: "14 min",
    publishedAt: "2026-09-18",
    author: "Ebo Aggrey",
    image: "live-drummer.jpg",
    tags: ["Fills", "Phrasing"],
    includes: [
      "Four ways to displace a fill",
      "Call-and-response playalongs",
      "A method for practising without a click",
    ],
  },
  {
    slug: "studio-session-breakdown",
    title: "Inside a Studio Session",
    summary:
      "An honest look at a recording session: how the kit was set up, where the microphones went, and the small changes that made the take work.",
    kind: "video",
    level: "Advanced",
    duration: "26 min",
    publishedAt: "2026-08-27",
    author: "Ebo Aggrey",
    image: "studio-mics.jpg",
    tags: ["Recording", "Studio"],
    includes: [
      "A repeatable tuning and setup routine",
      "Microphone placement walkthrough",
      "Before-and-after listening examples",
    ],
  },
  {
    slug: "live-groove-analysis",
    title: "Live Groove Analysis: Voice of Baceprot",
    summary:
      "A close listen to a live performance, looking at how dynamics and space carry a groove when everything around you is loud.",
    kind: "video",
    level: "Advanced",
    duration: "21 min",
    publishedAt: "2026-08-05",
    author: "Ebo Aggrey",
    image: "festival-drummer.jpg",
    tags: ["Analysis", "Dynamics"],
    includes: [
      "Section-by-section listening notes",
      "Transcription excerpts",
      "A dynamic practice study",
    ],
  },
  {
    slug: "jazz-comping-primer",
    title: "Jazz Comping: Behind the Soloist",
    summary:
      "Audio studies about response and restraint. Listen first, then play the same ideas over a steady swing pulse.",
    kind: "audio",
    level: "Advanced",
    duration: "32 min",
    publishedAt: "2026-07-19",
    author: "Ebo Aggrey",
    image: "jazz-drummer.jpg",
    tags: ["Jazz", "Comping", "Listening"],
    includes: [
      "Six call-and-response audio studies",
      "Slow and full-speed versions",
      "Listening prompts for each study",
    ],
  },
  {
    slug: "recommended-listening",
    title: "Records I Keep Coming Back To",
    summary:
      "Nine recordings chosen for one quality each: time, touch, economy, or the ability to make a song feel like it belongs.",
    kind: "link",
    level: "Intermediate",
    duration: "9 references",
    publishedAt: "2026-06-22",
    author: "Ebo Aggrey",
    image: "rehearsal-kit.jpg",
    tags: ["Listening", "Resources"],
    includes: [
      "Nine annotated listening references",
      "A short prompt for each recording",
      "Notes on what to listen for",
    ],
  },
];

export function getContentItem(slug: string): ContentItem | undefined {
  return contentItems.find((item) => item.slug === slug);
}

export function getRelatedItems(slug: string, limit = 2): ContentItem[] {
  const current = getContentItem(slug);
  if (!current) return [];

  return contentItems
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const aScore =
        Number(a.level === current.level) +
        a.tags.filter((tag) => current.tags.includes(tag)).length;
      const bScore =
        Number(b.level === current.level) +
        b.tags.filter((tag) => current.tags.includes(tag)).length;
      return bScore - aScore;
    })
    .slice(0, limit);
}
