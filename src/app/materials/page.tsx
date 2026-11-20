import type { Metadata } from "next";
import { MaterialsBrowser } from "@/components/materials-browser";
import { UploadIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { contentItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Videos, PDFs, audio studies and links from Ebo Aggrey, collected in one place.",
};

export default function MaterialsPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Materials / the shelf"
        title="Notes, videos and things to listen to."
        intro="What I write for students, what I think is worth hearing, and anything else that helps you practise with purpose."
      >
        <ButtonLink href="/materials/add" variant="secondary" className="mt-6 w-fit">
          <UploadIcon className="size-4" />
          Add material
        </ButtonLink>
      </PageHeader>

      <div className="mt-14">
        <MaterialsBrowser items={contentItems} />
      </div>
    </Section>
  );
}
