import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import { ThemeProvider } from "@/components/theme-provider";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://www.abhisekgupta.me",
  ),
  title: {
    default: "Abhisek Gupta - Full-Stack Next.js Developer | SaaS Builder",
    template: "%s | Abhisek Gupta Portfolio",
  },
  description:
    "Full-Stack Developer specializing in Next.js, React, and TypeScript. Building modern web applications, SaaS products, and AI-powered solutions.",
  keywords: [
    "Abhisek",
    "Abhishek",
    "Abhisek Gupta",
    "Abhishek Gupta",
    "Next.js",
    "React",
    "TypeScript",
    "Full-Stack Developer",
    "SaaS",
    "Web Development",
    "Freelance",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "Drizzle ORM",
    "Web Design",
    "Performance Optimization",
    "API Development",
    "Database Design",
    "Software Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "Web Application Development",
    "Tailwind CSS",
    "shadcn/ui",
    "Clerk Authentication",
    "Stripe Integration",
  ],
  authors: [{ name: "Abhisek Gupta", url: "https://github.com/abhisekgupta7" }],
  creator: "Abhisek Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhisekgupta.me",
    title: "Abhisek Gupta - Full-Stack Next.js Developer",
    description:
      "Full-Stack Developer specializing in modern web applications with Next.js, React, TypeScript.",
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
    title: "Abhisek Gupta - Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js and modern web technologies.",
    creator: "@abhisekgupta7",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "https://www.abhisekgupta.me",
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Full-Stack Developer specializing in Next.js, React, and TypeScript."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
