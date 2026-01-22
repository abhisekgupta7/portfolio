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
    default:
      "Abhisek Gupta - Backend-Leaning Software Engineer | Full-Stack Developer",
    template: "%s | Abhisek Gupta Portfolio",
  },
  description:
    "Software Engineer with backend focus, building scalable systems with database architecture, authentication, payment integrations, and production-grade infrastructure. Experienced with Node.js, PostgreSQL, Express, and modern full-stack development.",
  keywords: [
    "Abhisek",
    "Abhishek",
    "Abhisek Gupta",
    "Abhishek Gupta",
    "Backend Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "Backend Developer",
    "System Architecture",
    "Database Design",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "TypeScript",
    "Authentication Systems",
    "Prisma",
    "Drizzle ORM",
    "Stripe Integration",
    "Production Systems",
    "Web Application Development",
    "Server-Side Development",
    "Database Optimization",
    "CI/CD",
    "Deployment Pipelines",
    "Payment Systems",
    "Next.js",
    "React",
    "Backend Development",
    "Scalable Systems",
  ],
  authors: [{ name: "Abhisek Gupta", url: "https://github.com/abhisekgupta7" }],
  creator: "Abhisek Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhisekgupta.me",
    title: "Abhisek Gupta - Backend-Leaning Software Engineer",
    description:
      "Software Engineer building reliable, scalable backend systems with database architecture, authentication, payment integrations, and production deployment expertise.",
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
    title: "Abhisek Gupta - Backend-Leaning Software Engineer",
    description:
      "Building scalable backend systems and production infrastructure with Node.js, PostgreSQL, authentication, and payment integrations.",
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
          content="Software Engineer with backend focus, building scalable systems with database architecture, authentication, and production-grade infrastructure."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhisek Gupta",
              alternateName: "Abhishek Gupta",
              url: "https://www.abhisekgupta.me",
              image: "https://www.abhisekgupta.me/profile.jpg",
              jobTitle: "Backend-Leaning Software Engineer",
              description:
                "Software Engineer specializing in backend systems, database architecture, authentication, and production-grade web development.",
              knowsAbout: [
                "Backend Development",
                "Node.js",
                "PostgreSQL",
                "Database Architecture",
                "API Development",
                "Authentication Systems",
                "Payment Integration",
                "Express.js",
                "TypeScript",
                "Next.js",
                "Full-Stack Development",
                "System Architecture",
                "Prisma",
                "Drizzle ORM",
                "Stripe Integration",
              ],
              sameAs: [
                "https://github.com/abhisekgupta7",
                "https://www.linkedin.com/in/abhisek-gupta-205793278",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Independent Developer",
              },
            }),
          }}
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
