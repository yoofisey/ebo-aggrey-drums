"use client";

import { useState } from "react";
import { LessonCard } from "@/components/lesson-card";
import { LEVELS, type Level } from "@/lib/content";
import { lessons } from "@/lib/lessons";
import { FormNotice } from "@/components/ui/form-notice";

type LevelFilter = Level | "all";

export function LessonsBrowser() {
  const [level, setLevel] = useState<LevelFilter>("all");
  const visible = level === "all" ? lessons : lessons.filter((lesson) => lesson.level === level);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        {(["all", ...LEVELS] as LevelFilter[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setLevel(option)}
            aria-pressed={level === option}
            className="chip"
          >
            {option === "all" ? "All levels" : option}
          </button>
        ))}
        <span className="ml-auto text-[13px] text-ink-subtle">
          {visible.length} {visible.length === 1 ? "lesson" : "lessons"}
        </span>
      </div>

      <h2 className="sr-only">Lessons</h2>
      <div className="reveal-group mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>

      <div className="mt-8 max-w-2xl">
        <FormNotice>
          Lesson thumbnails and players are placeholders. Video links need to be
          supplied before anything can be watched.
        </FormNotice>
      </div>
    </div>
  );
}
