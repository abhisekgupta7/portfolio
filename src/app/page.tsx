import { Metadata } from "next";
import { getSiteUrl } from "@/lib/seo";

const SITE_URL = getSiteUrl();

export const metadata: Metadata = {
  title:
    "Abhisek Gupta — Full-Stack Developer | AI-Native Systems & Backend Engineering",
  description:
    "Full-stack developer building AI-native production systems — multilingual AI tutoring, LangGraph agents, and open-source SDKs. Next.js, FastAPI, AWS, Docker, and modern AI infrastructure.",
  keywords: [
    "Abhisek",
    "Abhishek",
    "Abhisek Gupta",
    "Abhishek Gupta",
    "Abishek Gupta",
    "Abhisek Guppta",
    "Abhisek Gupta Next.js Developer",
    "Abhisek Gupta Portfolio",
    "AI Engineer",
    "Full-Stack Developer",
    "LangGraph",
    "LangChain",
    "FastAPI",
    "Next.js",
    "AWS",
    "Backend Engineer",
    "System Architecture",
    "Open Source SDK",
  ],
  authors: [{ name: "Abhisek Gupta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Abhisek Gupta — Full-Stack Developer | AI-Native Systems",
    description:
      "Building AI-native production systems — multilingual AI tutoring, LangGraph agents, and open-source SDKs.",
    siteName: "Abhisek Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhisek Gupta — Full-Stack Developer | AI-Native Systems",
    description:
      "Building AI-native production systems with Next.js, FastAPI, LangGraph, and AWS.",
  },
  alternates: {
    canonical: SITE_URL,
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

const techCategories = [
  {
    label: "AI & Agents",
    items: [
      {
        name: "LangChain",
        icon: "https://cdn.simpleicons.org/langchain/1C3C3C",
      },
      { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/ffffff" },
      {
        name: "Gemini",
        icon: "https://cdn.simpleicons.org/googlegemini/8E75B2",
      },
      { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776ab" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/ffffff" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ed" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/dc382d" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/ffffff" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/6cc24a" },
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql/31648c",
      },
      {
        name: "Drizzle ORM",
        icon: "https://cdn.simpleicons.org/drizzle/C5F74F",
      },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/008CDD" },
      { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/6C47FF" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61dafb" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/3178c6",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8",
      },
    ],
  },
];

const projects = [
  {
    title: "Cognora",
    eyebrow: "Flagship — AI-Native System",
    role: "Owned the full stack end to end — product, AI pipeline, backend, frontend, infrastructure, and deployment",
    problem:
      "LMS platforms needed more than a chatbot — students needed tutoring, assessment, and reporting in their own language, without blocking the app while AI processes long-running tasks",
    description:
      "A multilingual AI tutor for LMS platforms — supporting English, Hindi, and Nepali — that teaches, quizzes, and evaluates students automatically",
    image: "/cognora.jpg",
    detailsLabel: "Architecture:",
    details: [
      "4-service system: Next.js frontend, FastAPI backend, dedicated worker, and Redis as the job queue",
      "Async pipeline: long-running AI tasks (transcript processing, quiz generation) run on the worker so the API never blocks",
      "Multilingual tutoring with streaming responses across English, Hindi, and Nepali",
      "Automated evaluation and personalized performance reports delivered by email",
    ],
    deployment:
      "Containerized with Docker, deployed on AWS EC2 with a CI/CD pipeline for automated releases",
    outcome:
      "An AI-native product designed around the AI workflow from day one — not a feature bolted onto an existing app",
    tags: [
      "Next.js",
      "FastAPI",
      "Docker",
      "Redis",
      "AWS EC2",
      "CI/CD",
      "LangChain",
    ],
    link: "https://cognora-frontend.abhisekgupta7.com.np/",
  },
  {
    title: "OpScale",
    eyebrow: "AI Agent Integration",
    role: "Designed the data model and integrated a LangGraph AI agent into an existing operations platform",
    problem:
      "Wholesale dealers track payments manually across notebooks and spreadsheets — they needed a way to ask questions about their own business and get real answers",
    description:
      "An AI-powered wholesale operations platform — dealers query overdue payments, revenue, and sales trends in plain English",
    image: "/opscale.png",
    detailsLabel: "AI Agent:",
    details: [
      "LangGraph agent with 5 business intelligence tools, scoped per organization (org_id isolation)",
      "FastAPI backend on Railway streams agent responses to the Next.js dashboard via SSE",
      "Credit ledger (khata) system tracking deferred and partial payments per buyer",
      "Write operations stay in the validated Next.js layer — the agent reads and drafts, humans confirm",
    ],
    deployment:
      "FastAPI deployed on Railway, Next.js on Vercel, PostgreSQL on Neon",
    outcome:
      "A working example of adding an AI layer to existing business logic without compromising data integrity",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "LangGraph",
      "FastAPI",
      "Railway",
    ],
    link: "https://opscale-roan.vercel.app/",
  },
  {
    title: "PayBridge",
    eyebrow: "Open Source · Published on npm",
    role: "Designed and published a TypeScript SDK from scratch — API design, documentation, and developer experience",
    problem:
      "Every developer integrating Nepali payment gateways hits the same wall — no npm package, contradictory docs, inconsistent parameter names across providers",
    description:
      "A production-ready, framework-agnostic TypeScript SDK unifying Nepali payment gateway integration",
    image: "/paybridge.png",
    detailsLabel: "SDK Design:",
    details: [
      "Published @paybridgejs/khalti on npm — a 2-function API (initiate / verify) with full type safety",
      "Framework-agnostic: works identically in Next.js, Express, and vanilla Node.js",
      "Turborepo + pnpm monorepo with working examples for every supported framework",
      "eSewa SDK in active development, following the same unified interface",
    ],
    deployment:
      "Documentation site built with Next.js, deployed on Vercel; package published and versioned on npm",
    outcome:
      "A real install-and-ship developer tool — the Stripe-style developer experience Nepal's payment ecosystem was missing",
    tags: ["TypeScript", "npm", "Turborepo", "Next.js", "Open Source"],
    link: "https://paybridge-docs.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section id="about" className="relative pt-6 pb-8 md:pt-8 md:pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,_oklch(0.27_0.02_260/_0.5),_transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-small-white/[0.05] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 relative">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-xs md:text-sm font-medium px-3 py-1 rounded-full border border-border bg-background/70 backdrop-blur">
                  Available for Opportunities
                </p>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                  Abhisek
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-2xl font-medium tracking-tight text-muted-foreground">
                <span className="text-foreground">Full-Stack Developer</span>
                <br className="hidden sm:block" />
                <span className="text-foreground">
                  Building AI-Native Systems
                </span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-prose leading-relaxed">
                I build production systems where AI is the foundation, not a
                feature bolted on at the end — from a multilingual AI tutor with
                async worker pipelines to LangGraph agents that query live
                business data, deployed on AWS, Docker, and modern CI/CD.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 pt-1">
                <Link
                  href="#projects"
                  className="px-5 py-2.5 rounded-md bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-center text-sm font-medium"
                >
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-5 py-2.5 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition group flex items-center justify-center gap-2 text-sm font-medium"
                >
                  Download CV
                  <Download className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative w-64 sm:w-72 md:w-80">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-xl blur opacity-25"></div>
                <Image
                  src="/profile.jpg"
                  alt="Profile Picture of Abhisek Gupta"
                  width={320}
                  height={320}
                  className="rounded-xl ring-1 ring-border object-cover relative z-10 hover:scale-[1.02] transition-all duration-300 w-full shadow-xl"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 288px, 256px"
                  priority
                />
                <div className="absolute -bottom-3 -right-3 bg-background rounded-full p-2.5 ring-1 ring-border shadow-lg z-20">
                  <MountainSnow className="h-5 w-5 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStack categories={techCategories} />

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,_oklch(0.27_0.02_260/_0.3),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-28 relative">
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
            {projects.map((project, i) => (
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
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 md:p-6 space-y-3 relative">
                    <p className="text-[11px] md:text-xs font-medium uppercase tracking-wide text-primary">
                      {project.eyebrow}
                    </p>
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
                          {project.detailsLabel}
                        </p>
                        <ul className="list-disc list-inside space-y-0.5 ml-2">
                          {project.details.map((detail, j) => (
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
              I design AI-native systems end to end — architecture, backend,
              frontend, infrastructure, and deployment. That means treating AI
              as the foundation of the system from day one: async job pipelines,
              agent tool design, and the infrastructure that keeps them reliable
              in production, not just in a demo.
            </p>
            <p>
              Beyond these three, you can find additional work and open-source
              contributions on my GitHub profile in the contact section below. I
              focus on building reliable systems that solve real problems — for
              real users, not just for a portfolio.
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
                    Let&apos;s talk about building AI-native systems
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground max-w-prose">
                    I&apos;m actively interviewing for full-stack and AI
                    engineering roles. Let&apos;s discuss building reliable AI
                    pipelines, scalable APIs, and production-grade
                    infrastructure.
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
                      <span className="hidden sm:inline">Download CV</span>
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
