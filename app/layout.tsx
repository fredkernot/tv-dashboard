import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Kostic Roc Grotesk is Round's only typeface. Weights 400 and 500 — there is
// no bold. The Medium (500) file is not in the repo yet, so headings currently
// fall back to Regular; drop RocGrotesk-Medium.otf in and add it below.
const rocGrotesk = localFont({
  src: [
    { path: "./fonts/RocGrotesk-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/RocGrotesk-Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-roc-grotesk",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Round | Office dashboard",
  description: "Rotating office display for Round Treasury.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${rocGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-fg">
        {children}
      </body>
    </html>
  );
}
