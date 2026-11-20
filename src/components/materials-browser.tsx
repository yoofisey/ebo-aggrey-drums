"use client";

import { useMemo, useState } from "react";
import { ContentCard } from "@/components/content-card";
import { SearchIcon } from "@/components/icons";
import {
  CONTENT_KINDS,
  KIND_LABELS,
  LEVELS,
  type ContentItem,
  type ContentKind,
  type Level,
} from "@/lib/content";
import { Field } from "@/components/ui/field";

type KindFilter = ContentKind | "all";
type LevelFilter = Level | "all";

export function MaterialsBrowser({ items }: { items: ContentItem[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<KindFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("all");

  const filteredItems = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesKind = kind === "all" || item.kind === kind;
      const matchesLevel = level === "all" || item.level === level;
      const haystack = [item.title, item.summary, ...item.tags]
        .join(" ")
        .toLowerCase();
      const matchesQuery = needle.length === 0 || haystack.includes(needle);
      return matchesKind && matchesLevel && matchesQuery;
    });
  }, [items, query, kind, level]);

  return (
    <div>
      <div className="card p-6">
        <div className="grid gap-6 md:grid-cols-[1fr_240px]">
          <Field label="Search materials" htmlFor="materials-search">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-subtle" />
              <input
                id="materials-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try timing, fills or snare"
                className="field pl-12"
              />
            </div>
          </Field>

          <Field label="Level" htmlFor="materials-level">
            <select
              id="materials-level"
              value={level}
              onChange={(event) => setLevel(event.target.value as LevelFilter)}
              className="field"
            >
              <option value="all">All levels</option>
              {LEVELS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {(["all", ...CONTENT_KINDS] as KindFilter[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              aria-pressed={kind === option}
              className="chip"
            >
              {option === "all" ? "All types" : KIND_LABELS[option]}
            </button>
          ))}
          <span className="ml-auto text-[13px] text-ink-subtle">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      <h2 className="sr-only">Materials</h2>
      <div className="reveal-group mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <ContentCard key={item.slug} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="card px-6 py-20 text-center">
          <p className="text-[22px] font-bold tracking-[-0.03em]">
            Nothing here yet
          </p>
          <p className="mx-auto mt-3 max-w-sm text-[14px] leading-6 text-ink-muted">
            Try a different word or clear the filters and have another look.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setKind("all");
              setLevel("all");
            }}
            className="chip mt-6"
          >
            Clear filters
          </button>
        </div>
      ) : null}
    </div>
  );
}
