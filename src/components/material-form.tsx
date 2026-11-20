"use client";

import { useState, type DragEvent } from "react";
import { UploadIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { FormNotice } from "@/components/ui/form-notice";
import { CONTENT_KINDS, KIND_LABELS } from "@/lib/content";

const learningPaths = ["Foundations", "Groove and feel", "Recording and studio"];
const visibilityOptions = ["Public", "Members", "Unlisted"];

export function MaterialForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) setFileName(file.name);
  }

  return (
    <form
      className="card p-6 sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-[12px] font-semibold text-line">New item</p>
          <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.035em]">
            Post a material
          </h2>
        </div>
        <span className="control flex size-12 shrink-0 items-center justify-center text-line">
          <UploadIcon className="size-5" />
        </span>
      </div>

      <div className="mt-10 grid gap-6">
        <Field label="Title" htmlFor="material-title">
          <input
            id="material-title"
            name="title"
            required
            maxLength={120}
            placeholder="What should we call it?"
            className="field"
          />
        </Field>

        <div>
          <p className="mb-3 text-[13px] font-semibold text-line">File</p>
          <label
            htmlFor="material-file"
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`control relative flex min-h-[200px] cursor-pointer flex-col items-center justify-center gap-4 px-6 py-10 text-center transition-colors duration-200 focus-within:outline focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-white ${
              dragging ? "bg-raised" : "hover:bg-raised"
            }`}
          >
            <input
              id="material-file"
              name="file"
              type="file"
              className="absolute inset-0 size-full cursor-pointer opacity-0"
              onChange={(event) =>
                setFileName(event.target.files?.[0]?.name ?? null)
              }
            />
            <span className="flex size-12 items-center justify-center rounded-full bg-bright text-canvas">
              <UploadIcon className="size-5" />
            </span>
            <span className="text-[15px] font-semibold">
              {fileName ?? "Drop a file here or browse"}
            </span>
            <span className="text-[13px] text-ink-subtle">
              Video, PDF, audio or a link to either
            </span>
          </label>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <Field label="Type" htmlFor="material-type">
            <select id="material-type" name="type" className="field">
              {CONTENT_KINDS.map((kind) => (
                <option key={kind} value={kind}>
                  {KIND_LABELS[kind]}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Learning path" htmlFor="material-path">
            <select id="material-path" name="path" className="field">
              {learningPaths.map((path) => (
                <option key={path} value={path}>
                  {path}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Visibility" htmlFor="material-visibility">
            <select id="material-visibility" name="visibility" className="field">
              {visibilityOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      <div className="mt-8">
        <FormNotice>
          This is the posting interface. File storage still needs connecting
          before anything goes live.
        </FormNotice>
      </div>

      <Button type="submit" size="lg" className="mt-8">
        <UploadIcon className="size-4" />
        Publish
      </Button>

      {submitted ? (
        <p
          role="status"
          className="control mt-6 px-5 py-4 text-[13px] leading-6 text-ink-muted"
        >
          Noted. The form works, but nothing has been stored or published yet.
          Connect a server action and file storage to finish this.
        </p>
      ) : null}
    </form>
  );
}
