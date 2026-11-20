import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "@/components/icons";
import type { Lesson } from "@/lib/lessons";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={lesson.materialHref}
      data-reveal
      className="card card-hover group flex flex-col overflow-hidden"
      aria-label={`Watch lesson: ${lesson.title}`}
    >
      <div className="control relative flex aspect-video items-center justify-center overflow-hidden rounded-none">
        <div className="absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_40%,#3a3a44_0%,#24242b_70%)]" />
        <span className="relative flex size-14 items-center justify-center rounded-full bg-bright text-canvas transition-transform duration-200 group-hover:scale-105">
          <PlayIcon className="size-6" />
        </span>
        <span className="placeholder absolute bottom-4 left-4 text-[12px] font-semibold">
          [VIDEO]
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] font-semibold text-line">
          {lesson.level} · {lesson.length}
        </p>
        <h3 className="mt-3 text-balance text-[22px] font-bold leading-snug tracking-[-0.03em]">
          {lesson.title}
        </h3>
        <p className="mt-3 text-[14px] leading-6 text-ink-muted">
          {lesson.summary}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[14px] font-semibold text-line transition-colors group-hover:text-ink">
          Watch lesson
          <ArrowRightIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}
