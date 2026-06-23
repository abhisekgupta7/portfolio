import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default:
      "Abhisek Gupta - Full-Stack Developer | AI-Native Systems Engineer",
    template: "%s | Abhisek Gupta Portfolio",
  },
  description:
    "Full-stack developer building AI-native production systems — multilingual AI tutoring, LangGraph agents, and open-source SDKs. Experienced with Next.js, FastAPI, LangChain, AWS, Docker, and modern AI infrastructure.",
  keywords: [
    "Abhisek",
    "Abhishek",
    "Abhisek Gupta",
    "Abhishek Gupta",
    "Abishek Gupta",
    "Abhisek Guppta",
    "Abhisek Gupta Next.js Developer",
    "Abhisek Gupta AI Engineer",
    "Abhisek Gupta Portfolio",
    "AI Engineer",
    "Full-Stack Developer",
    "Software Engineer",
    "LangChain",
    "LangGraph",
    "LangSmith",
    "RAG",
    "Agentic AI",
    "FastAPI",
    "Python",
    "AWS",
    "AWS EC2",
    "Docker",
    "Redis",
    "CI/CD",
    "System Architecture",
    "Database Design",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
    "Authentication Systems",
    "Drizzle ORM",
    "Stripe Integration",
    "Production Systems",
    "Open Source SDK",
    "npm package",
    "Web Application Development",
    "Server-Side Development",
    "Deployment Pipelines",
    "Payment Systems",
    "Next.js",
    "React",
    "Backend Development",
    "Scalable Systems",
  ],
  authors: [{ name: "Abhisek Gupta", url: "https://github.com/abhisekgupta7" }],
  creator: "Abhisek Gupta",
  applicationName: "Abhisek Gupta Portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrl(),
    title: "Abhisek Gupta - Full-Stack Developer | AI-Native Systems",
    description:
      "Building AI-native production systems — multilingual AI tutoring, LangGraph agents, and open-source SDKs. Next.js, FastAPI, AWS, and modern AI infrastructure.",
    siteName: "Abhisek Gupta Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhisek Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhisek Gupta - Full-Stack Developer | AI-Native Systems",
    description:
      "Building AI-native production systems with Next.js, FastAPI, LangGraph, and AWS.",
    creator: "@abhisekgupta7",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getSiteUrl(),
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
