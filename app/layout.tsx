import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/globals.scss";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0c1d",
};

export const metadata: Metadata = {
  title: "Umidjon Jumaqulov | Portfolio",
  description:
    "Umidjon Jumaqulov — Web & Android Developer. Portfolio showcasing skills, projects, and contact information.",
  authors: [{ name: "Umidjon Jumaqulov" }],
  keywords: [
    "Web Developer",
    "Android Developer",
    "React",
    "Next.js",
    "Jetpack Compose",
    "Portfolio",
    "Umidjon Jumaqulov",
  ],
  icons: {
    icon: "/u-only.svg",
  },
  openGraph: {
    type: "website",
    title: "Umidjon Jumaqulov — Web & Android Developer",
    description:
      "Portfolio of Umidjon Jumaqulov — Web & Android developer. Explore projects, skills, and contact.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
