import type { Metadata } from "next";
import { LessonsBrowser } from "@/components/lessons-browser";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
  title: "Lessons",
  description: "Drum lessons with Ebo Aggrey, from first grooves to studio work.",
};

export default function LessonsPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Lessons / Ebo Aggrey"
        title="Learn the part, not just the pattern."
        intro="Lessons start with what you can hear and what you can do today. Pick a level and have a look around."
      />
      <div className="mt-14">
        <LessonsBrowser />
      </div>
    </Section>
  );
}
