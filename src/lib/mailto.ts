import { site } from "@/lib/site";

export function createMailto(subject: string, lines: string[]): string {
  const body = [...lines, "", "Sent from the Ebo Aggrey Drums site."].join("\n");
  return `mailto:${site.bookingEmail}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
