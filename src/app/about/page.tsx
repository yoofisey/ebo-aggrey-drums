import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import { imageCredits } from "@/lib/image-credits";

export const metadata: Metadata = {
  title: "About and credits",
  description:
    "About Ebo Aggrey and the photographs used in this prototype.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="About / Ebo Aggrey"
          title="Listening comes first."
          intro="I play drums and I teach them. Whether it is a lesson or a record session, we start with what you can hear and what you can do today."
        />

        <div className="reveal-group mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Listen properly",
              copy: "The record, the click and your own playing. I'll ask what you heard before I tell you what I heard.",
            },
            {
              title: "Work in small pieces",
              copy: "One bar, one beat, one hand. We make it feel easy before we make it fast.",
            },
            {
              title: "Keep it human",
              copy: "A calm room, clear references and no ego in the way of the song.",
            },
          ].map((item) => (
            <div key={item.title} data-reveal className="card p-7">
              <h2 className="text-[20px] font-bold tracking-[-0.03em]">
                {item.title}
              </h2>
              <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="credits">
        <Eyebrow>Photograph credits</Eyebrow>
        <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]">
          Where the images came from.
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-8 text-ink-muted">
          The photographs in this prototype are borrowed from Wikimedia Commons.
          Details and licences are below.
        </p>
        <ul className="reveal-group mt-12 grid gap-4 md:grid-cols-2">
          {imageCredits.map((credit) => (
            <li key={credit.file} data-reveal className="card p-6">
              <p className="text-[15px] font-semibold">{credit.title}</p>
              <p className="mt-2 text-[13px] text-ink-muted">
                {credit.artist} · {credit.license}
              </p>
              <div className="mt-4 flex flex-wrap gap-5 text-[13px] font-semibold text-line">
                <a
                  href={credit.source}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Source
                </a>
                <a
                  href={credit.licenseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink"
                >
                  Licence
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
