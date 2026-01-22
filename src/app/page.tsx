import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Abhisek Gupta - Product-Focused Software Engineer | Backend & API Design",
  description:
    "Software Engineer specializing in backend systems, API design, database architecture, authentication, and production-grade web platforms. Building reliable, secure systems with Node.js, PostgreSQL, and modern deployment pipelines.",
  keywords: [
    "Abhisek",
    "Abhishek",
    "Abhisek Gupta",
    "Abhishek Gupta",
    "Backend Engineer",
    "Software Engineer",
    "API Design",
    "Node.js",
    "PostgreSQL",
    "System Architecture",
    "Full-stack developer",
    "Database Design",
  ],
  authors: [{ name: "Abhisek Gupta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Abhisek Gupta - Backend & Systems Engineer",
    description:
      "Building reliable, secure backend systems and production-grade web platforms with strong API design and data modeling.",
    siteName: "Abhisek Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhisek Gupta - Backend & Systems Engineer",
    description:
      "Building reliable backend systems with API design, database architecture, and production deployment expertise.",
  },
};

import {
  ArrowRight,
  Download,
  FileUser,
  Github,
  Linkedin,
  Mail,
  MountainSnow,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechStack from "@/components/TechStack";

const techStack = [
  // Backend Engineering (Primary)
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/6cc24a" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/31648c" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2d3748" },
  {
    name: "Drizzle ORM",
    icon: "https://cdn.simpleicons.org/drizzle/C5F74F",
  },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178c6" },

  // Systems & Integrations
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/008CDD" },
  { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/6C47FF" },
  {
    name: "Neon DB",
    icon: "https://avatars.githubusercontent.com/u/77690634",
  },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/10aa50" },

  // Supporting Frontend
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61dafb" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
  },
  {
    name: "shadcn/ui",
    icon: "https://api.iconify.design/simple-icons:shadcnui.svg?color=white",
  },

  // DevOps & Deployment
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section id="about" className="relative py-16 md:py-28 px-4 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,_oklch(0.27_0.02_260/_0.5),_transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-small-white/[0.05] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <div className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-border bg-background/70 backdrop-blur">
                  Available for Opportunities
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  Abhisek
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground">
                <span className="text-foreground">
                  Product-Focused Software Engineer
                </span>
                <br className="hidden sm:block" />
                <span className="text-foreground">(Backend Leaning)</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-prose leading-relaxed">
                Building reliable, secure backend systems and production-grade
                web platforms with strong API design, data modeling,
                authentication, and real-world failure handling.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <Link
                  href="#projects"
                  className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition group flex items-center justify-center gap-2"
                >
                  Download CV
                  <Download className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-30"></div>
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture of Abhisek Gupta"
                  width={360}
                  height={360}
                  className="rounded-2xl ring-1 ring-border object-cover relative z-10 hover:scale-[1.02] transition-all duration-300 w-full"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-3 ring-1 ring-border z-20">
                  <MountainSnow className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStack techStack={techStack} />

      {/* Projects */}
      <section id="projects" className="relative px-4 md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,_oklch(0.27_0.02_260/_0.3),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl py-16 md:py-28 relative">
          <div className="mb-6 md:mb-10">
            <p className="text-xs md:text-sm text-primary font-medium mb-2">
              🚀 SELECTED WORK
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Recent Projects
              </h2>
              <span className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm border border-border text-xs md:text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Available for new projects</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              {
                title: "Everything",
                role: "Led backend architecture for authentication, payments, and transactional workflows",
                problem:
                  "Designed a system to support secure payments, multi-role access, and data integrity under concurrent use",
                description:
                  "Enterprise-grade full-stack system with production-ready backend infrastructure",
                image: "/everything.png",
                backendDetails: [
                  "Auth: JWT + role-based access control (RBAC)",
                  "Data: PostgreSQL schema with indexes for performance",
                  "Integrations: Stripe with idempotent webhook handling",
                  "APIs: REST endpoints with structured error responses",
                ],
                deployment:
                  "Production CI/CD with environment config and secure secrets management",
                outcome:
                  "Production-ready backend supporting secure user flows and trackable analytics",
                tags: [
                  "Next.js",
                  "Stripe",
                  "Neon DB",
                  "Drizzle ORM",
                  "Clerk Auth",
                  "PostgreSQL",
                ],
                link: "https://everything-eight-bice.vercel.app/",
              },
              {
                title: "Ecom",
                role: "Designed backend API and database architecture for product catalog and user transactions",
                problem:
                  "Built scalable e-commerce infrastructure handling product listings, inventory, and secure checkout flows",
                description:
                  "E-commerce platform with robust backend for merchants and seamless customer experience",
                image: "/ecom.png",
                backendDetails: [
                  "Data: Normalized PostgreSQL schema with relational integrity",
                  "APIs: RESTful endpoints for product CRUD and order management",
                  "Storage: ImageKit integration for optimized media delivery",
                  "Query optimization: Drizzle ORM with indexed lookups",
                ],
                deployment:
                  "Serverless deployment with edge caching and CDN integration",
                outcome:
                  "Scalable platform supporting merchant operations and high-traffic customer browsing",
                tags: [
                  "Next.js",
                  "Neon DB",
                  "Drizzle ORM",
                  "PostgreSQL",
                  "ImageKit",
                  "shadcn/ui",
                ],
                link: "https://ecommerce-eta-one-33.vercel.app/",
              },
              {
                title: "SaaSKit",
                role: "Built backend services for user management, analytics tracking, and subscription state handling",
                problem:
                  "Created a SaaS foundation with user lifecycle management and real-time analytics pipeline",
                description:
                  "Demo SaaS platform with analytics, user management, and subscription tracking backend",
                image: "/saas.png",
                backendDetails: [
                  "Auth: Session-based authentication with secure token handling",
                  "Data: MongoDB with aggregation pipelines for analytics",
                  "APIs: Subscription management with state transitions",
                  "Background jobs: Scheduled tasks for metrics aggregation",
                ],
                deployment:
                  "Full-stack deployment with environment-based configurations",
                outcome:
                  "Functional SaaS backend demonstrating subscription management and data analytics capabilities",
                tags: [
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "Express",
                  "Tailwind CSS",
                ],
                link: "https://saas-topaz-rho.vercel.app",
              },
            ].map((project, i) => (
              <article
                key={i}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 group-hover:from-transparent group-hover:to-background/95 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/5 to-background/20 opacity-60 group-hover:opacity-100 transition-opacity z-0"></div>

                {/* Glass card */}
                <div className="h-full backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-300 relative z-20 border border-border/40 rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 space-y-3 relative">
                    <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs md:text-sm font-medium text-foreground">
                      {project.description}
                    </p>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <p>
                        <span className="font-medium text-foreground">
                          Role:
                        </span>{" "}
                        {project.role}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          Problem:
                        </span>{" "}
                        {project.problem}
                      </p>

                      <div>
                        <p className="font-medium text-foreground mb-1">
                          Backend:
                        </p>
                        <ul className="list-disc list-inside space-y-0.5 ml-2">
                          {project.backendDetails.map((detail, j) => (
                            <li key={j}>{detail}</li>
                          ))}
                        </ul>
                      </div>

                      <p>
                        <span className="font-medium text-foreground">
                          Deployment:
                        </span>{" "}
                        {project.deployment}
                      </p>
                      <p>
                        <span className="font-medium text-foreground">
                          Outcome:
                        </span>{" "}
                        {project.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-background/70 border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline"
                      >
                        View Project
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-sm md:text-base text-muted-foreground p-4 md:p-6 rounded-xl border border-border/60 bg-background/40">
            <h3 className="font-semibold text-foreground mb-2">
              About My Engineering Work
            </h3>
            <p className="mb-3">
              I design and ship backend systems, APIs, and production-grade
              services used by real users. My expertise spans data modeling,
              authentication systems, integration flows, and deployment
              pipelines.
            </p>
            <p>
              Beyond these major projects, you can find additional work and
              open-source contributions on my GitHub profile in the contact
              section below. I focus on building reliable, maintainable systems
              that solve real business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 md:px-6 pb-16 md:pb-28"
      >
        <div className="relative">
          {/* Gradient decorations */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent blur-2xl opacity-30 rounded-[40px] -z-10"></div>
          <div className="pointer-events-none absolute -inset-px bg-[conic-gradient(from_120deg_at_50%_50%,_oklch(0.6_0.16_275/_0.15),_transparent_30%)] rounded-[32px] -z-10" />

          {/* Glass card */}
          <div className="relative rounded-2xl md:rounded-[32px] border border-border/60 backdrop-blur-sm bg-background/40 p-6 md:p-10 lg:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white/[0.02] pointer-events-none"></div>

            <div className="relative grid md:grid-cols-5 gap-6 md:gap-10 items-start md:items-center">
              <div className="md:col-span-3 space-y-6">
                <div>
                  <p className="text-xs md:text-sm text-primary font-medium mb-2">
                    GET IN TOUCH
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                    Let&apos;s talk about building reliable systems
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-prose">
                    I&apos;m actively interviewing for backend-leaning
                    full-stack and backend engineering roles. Let&apos;s discuss
                    building reliable APIs, scalable systems, and robust
                    engineering workflows.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5 pt-4">
                  <a
                    href="mailto:abhisekgupta.dev@gmail.com"
                    className="group flex flex-col space-y-2 rounded-lg md:rounded-xl border border-border/60 bg-background/50 p-4 md:p-5 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <h3 className="text-base md:text-lg font-medium">Email</h3>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors break-all">
                      abhisekgupta.dev@gmail.com
                    </p>
                  </a>

                  <a
                    href="https://wa.me/9811728625"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col space-y-2 rounded-lg md:rounded-xl border border-border/60 bg-background/50 p-4 md:p-5 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <h3 className="text-base md:text-lg font-medium">
                      WhatsApp
                    </h3>
                    <p className="text-sm md:text-base font-medium text-blue-500">
                      Active 24/7
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      +977 9811728625
                    </p>
                  </a>
                </div>
              </div>

              <div className="md:col-span-2">
                <div className="rounded-lg md:rounded-xl border border-border/60 bg-background/50 p-4 md:p-5 hover:bg-background/80 transition-all duration-300 space-y-3">
                  <h3 className="text-base md:text-lg font-medium">
                    Connect Elsewhere
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Find me on these platforms and let&apos;s connect.
                  </p>

                  <div className="grid grid-cols-2 gap-2 md:gap-3 pt-2">
                    <a
                      href="https://github.com/abhisekgupta7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abhisek-gupta-205793278"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>

                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm hover:bg-accent hover:text-accent-foreground transition-colors col-span-2"
                    >
                      <FileUser className="h-4 w-4" />
                      <span className="hidden sm:inline">
                        Download CV
                      </span>
                      <span className="sm:hidden">Download CV</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
