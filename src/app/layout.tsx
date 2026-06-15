import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlowEffect from "@/components/GlowEffect";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siva Sathwikaa P | Agentic AI Engineer",
  description: "Personal portfolio of Siva Sathwikaa P, an Agentic AI Engineer specializing in building autonomous agentic systems, computer vision, and software quality frameworks.",
  keywords: ["Agentic AI", "AI Engineer", "Software Engineering", "Next.js", "Tailwind CSS", "Gemini API", "YOLOv8", "Computer Vision"],
  authors: [{ name: "Siva Sathwikaa P" }],
  openGraph: {
    title: "Siva Sathwikaa P | Agentic AI Engineer",
    description: "Siva Sathwikaa P's personal developer portfolio showcasing projects, live logs, skills, and an interactive AI chatbot.",
    url: "https://sivasathwikaa.dev", // Placeholder custom domain
    siteName: "Siva Sathwikaa P Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Sathwikaa P | Agentic AI Engineer",
    description: "Siva Sathwikaa P's personal developer portfolio showcasing projects, live logs, skills, and an interactive AI chatbot.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-charcoal-dark text-cream font-sans antialiased min-h-screen relative selection:bg-sage/30 selection:text-cream">
        <GlowEffect />
        {children}
      </body>
    </html>
  );
}
