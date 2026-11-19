import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Ebo Aggrey Drums — Lessons, materials and record sessions",
    template: "%s | Ebo Aggrey Drums",
  },
  description:
    "Drum lessons, practice notes, materials and record sessions from Ebo Aggrey. Videos, PDFs, audio studies and links, collected in one place.",
  openGraph: {
    title: "Ebo Aggrey Drums — Lessons, materials and record sessions",
    description:
      "Drum lessons, materials and record sessions from Ebo Aggrey, collected in one place.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
