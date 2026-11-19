"use client";

import { useState, type DragEvent } from "react";
import { UploadIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CONTENT_KINDS, KIND_LABELS, LEVELS } from "@/lib/content";

const labelClass = "mb-3 block text-xs font-medium text-ink-subtle";

export function MaterialForm() {
  const [kind, setKind] = useState<(typeof CONTENT_KINDS)[number]>("video");
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <form
      className="panel p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <Eyebrow>New item / 01</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em]">
            Give it a clear home.
          </h2>
        </div>
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-surface-raised text-ink">
          <UploadIcon className="size-5" />
        </span>
      </div>

      <div className="mt-10 space-y-7">
        <div>
          <label htmlFor="material-title" className={labelClass}>
            Title
          </label>
          <input
            id="material-title"
            name="title"
            required
            maxLength={120}
            placeholder="What should we call it?"
            className="field"
          />
        </div>

        <div>
          <label htmlFor="material-summary" className={labelClass}>
            Summary
          </label>
          <textarea
            id="material-summary"
            name="summary"
            required
            rows={4}
            maxLength={400}
            placeholder="What will someone take away from this?"
            className="field"
          />
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor="material-kind" className={labelClass}>
              Format
            </label>
            <select
              id="material-kind"
              name="kind"
              value={kind}
              onChange={(event) =>
                setKind(event.target.value as (typeof CONTENT_KINDS)[number])
              }
              className="field"
            >
              {CONTENT_KINDS.map((option) => (
                <option key={option} value={option}>
                  {KIND_LABELS[option]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="material-level" className={labelClass}>
              Level
            </label>
            <select id="material-level" name="level" className="field">
              {LEVELS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="material-file"
            className={`flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl px-6 py-10 text-center transition-colors ${
              dragging ? "bg-[#e2e2e7]" : "bg-surface-raised hover:bg-[#e8e8ed]"
            }`}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
          >
            <input
              id="material-file"
              name="file"
              type="file"
              className="sr-only"
              onChange={(event) =>
                setFileName(event.target.files?.[0]?.name ?? null)
              }
            />
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white text-ink shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
              <UploadIcon className="size-5" />
            </span>
            <span className="mt-4 text-sm font-medium">
              {fileName ?? "Drop a file here or browse"}
            </span>
            <span className="mt-2 text-xs tracking-[0.04em] text-ink-subtle">
              Video, PDF, audio or image
            </span>
          </label>
        </div>

        {kind === "link" ? (
          <div>
            <label htmlFor="material-url" className={labelClass}>
              Resource URL
            </label>
            <input
              id="material-url"
              name="url"
              type="url"
              placeholder="https://"
              className="field"
            />
          </div>
        ) : null}

        <div className="grid gap-7 sm:grid-cols-2">
          <div>
            <label htmlFor="material-length" className={labelClass}>
              Length or pages
            </label>
            <input
              id="material-length"
              name="duration"
              placeholder="e.g. 18 min or 12 pages"
              className="field"
            />
          </div>
          <div>
            <label htmlFor="material-tags" className={labelClass}>
              Tags
            </label>
            <input
              id="material-tags"
              name="tags"
              placeholder="Timing, Basics"
              className="field"
            />
          </div>
        </div>

        <div>
          <label htmlFor="material-visibility" className={labelClass}>
            Visibility
          </label>
          <select
            id="material-visibility"
            name="visibility"
            className="field"
          >
            <option value="public">Public</option>
            <option value="members">Members</option>
            <option value="unlisted">Unlisted</option>
          </select>
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-5 rounded-2xl bg-surface-raised p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-5 text-ink-subtle">
          This is the posting interface. File storage still needs connecting
          before anything goes live.
        </p>
        <Button type="submit">
          <UploadIcon className="size-4" />
          Add to materials
        </Button>
      </div>

      {submitted ? (
        <p
          role="status"
          className="mt-6 rounded-2xl bg-[#e8e8ed] px-4 py-4 text-sm leading-6 text-ink-muted"
        >
          Noted. The form works, but nothing has been stored or published yet.
          Connect a server action and file storage to finish this.
        </p>
      ) : null}
    </form>
  );
}
