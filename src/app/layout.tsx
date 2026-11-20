import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ebo Aggrey Drums — drum lessons and record sessions",
    template: "%s | Ebo Aggrey Drums",
  },
  description:
    "Drum lessons, practice materials and record sessions with Ebo Aggrey. Learn the drums or bring him your track.",
  openGraph: {
    title: "Ebo Aggrey Drums — drum lessons and record sessions",
    description: "Drum lessons, materials and session drums with Ebo Aggrey.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${openSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
