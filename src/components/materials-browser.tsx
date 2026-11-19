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
import { cn } from "@/lib/utils";

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

  const reset = () => {
    setQuery("");
    setKind("all");
    setLevel("all");
  };

  const [featuredItem, ...otherItems] = filteredItems;

  return (
    <div>
      <div className="glass rounded-[20px] p-5 sm:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_220px] lg:items-end">
          <div>
            <label
              htmlFor="materials-search"
              className="mb-3 block text-xs font-medium text-ink-subtle"
            >
              What are you working on?
            </label>
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-subtle" />
              <input
                id="materials-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try timing, fills or snare"
                className="field pl-11 pr-4"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="materials-level"
              className="mb-3 block text-xs font-medium text-ink-subtle"
            >
              Level
            </label>
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
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {(["all", ...CONTENT_KINDS] as KindFilter[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setKind(option)}
              aria-pressed={kind === option}
              className="chip"
            >
              {option === "all" ? "All formats" : KIND_LABELS[option]}
            </button>
          ))}
          <span className="ml-auto text-xs tracking-[0.04em] text-ink-subtle">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>
      </div>

      <div className="mt-8">
        {featuredItem ? (
          <>
            <ContentCard item={featuredItem} featured />
            {otherItems.length > 0 ? (
              <div className="grid gap-5 pb-8 pt-6 md:grid-cols-2">
                {otherItems.map((item, index) => (
                  <div
                    key={item.slug}
                    className={cn(index % 2 === 1 && "md:translate-y-6")}
                  >
                    <ContentCard item={item} />
                  </div>
                ))}
              </div>
            ) : null}
          </>
        ) : (
          <div className="panel-sm px-6 py-24 text-center">
            <p className="text-lg font-semibold tracking-[-0.02em]">
              Nothing here yet.
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-ink-muted">
              Try a different word or clear the filters and have another look.
            </p>
            <button type="button" onClick={reset} className="chip mt-6">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
