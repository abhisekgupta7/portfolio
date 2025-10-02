import Image from "next/image";
import Link from "next/link";

const techStack = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61dafb" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178c6" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38bdf8" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/6cc24a" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/10aa50" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/31648c" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2d3748" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  { name: "shadcn/ui", icon: "https://api.iconify.design/simple-icons:shadcnui.svg?color=white" },
  { name: "Clerk", icon: "https://cdn.simpleicons.org/clerk/6C47FF" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section id="about" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,_oklch(0.27_0.02_260/_0.5),_transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-small-white/[0.05] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-sm font-medium px-3 py-1 rounded-full border border-border bg-background/70 backdrop-blur">Available for Opportunities</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Abhisek</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground">
                <span className="text-foreground">Full-Stack Developer</span> | SaaS Builder | AI Enthusiast
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-prose leading-relaxed">
                I craft modern web applications with Next.js, Prisma, and Neon DB. 
                Specialized in building seamless user experiences with shadcn/ui and Clerk authentication.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  href="#projects" 
                  className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                >
                  View Projects
                </Link>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="px-6 py-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition group flex items-center gap-2"
                >
                  Download Resume
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-0.5">
                    <path d="M12 17V3"></path>
                    <path d="m6 11 6 6 6-6"></path>
                    <path d="M19 21H5"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur opacity-30"></div>
                <Image 
                  src="/profile.jpg" 
                  alt="Profile" 
                  width={360} 
                  height={360} 
                  className="rounded-2xl ring-1 ring-border object-cover relative z-10 hover:scale-[1.02] transition-all duration-300" 
                />
                <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-3 ring-1 ring-border z-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About Me</h2>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl"></div>
              <Image 
                src="/window.svg" 
                alt="Code Editor" 
                fill
                className="object-cover" 
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-6">
            <p className="text-base md:text-lg">
              I'm a <span className="text-primary font-medium">Next.js developer</span> specializing in building modern web applications 
              with the latest tech stack. My expertise includes Prisma ORM with Neon DB, Clerk authentication, 
              and creating beautiful interfaces with shadcn/ui components and Tailwind CSS.
            </p>
            <p className="text-base md:text-lg">
              My development approach focuses on performance-optimized applications with server components, 
              edge functions, and efficient data fetching. I'm currently exploring AI integration with tools 
              like Vercel AI SDK and LangChain to build the next generation of intelligent web applications.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Next.js App Router", icon: "�" },
                  { name: "shadcn/ui & Tailwind", icon: "🎨" },
                  { name: "Prisma & Neon DB", icon: "🗃️" },
                  { name: "Clerk Authentication", icon: "�" },
                  { name: "tRPC & API Routes", icon: "🔄" },
                  { name: "AI Integration", icon: "🤖" },
                ].map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md border border-border p-3 bg-card/50 hover:bg-card transition">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Tech Stack Marquee */}
      <section className="border-y border-border/60 bg-secondary/30 backdrop-blur-sm">
        <div className="py-2">
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/40 backdrop-blur text-xs font-medium">
              Technologies I work with
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex items-center gap-16 animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] py-6">
              {[...techStack, ...techStack].map((t, i) => (
                <div 
                  key={i} 
                  className="inline-flex flex-col items-center justify-center gap-3 px-4 py-3 rounded-xl bg-background/40 border border-border/40 hover:border-border/80 hover:bg-background/60 transition-all duration-300 group"
                >
                  <Image 
                    src={t.icon} 
                    alt={t.name} 
                    width={32}
                    height={32}
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,_oklch(0.27_0.02_260/_0.3),_transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-sm text-primary font-medium mb-2">SELECTED WORK</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Recent Projects</h2>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/70 backdrop-blur-sm border border-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm">Available for new projects</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "SaaSKit",
                description: "A demo saaskit for SaaS businesses with  analytics, user management and subscription tracking.",
                image: "/saas.png",
                tags: ["Next.js", "js", "mongodb", "Tailwind CSS"],
                link: "https://saas-topaz-rho.vercel.app"
              },
              {
                title: "Get me a chai",
                description: "A patrian website to collect fund from people/subscriber for creator",
                image: "/chai.png",
                tags: ["React", "Node.js", "MongoDB"],
                link: "https://get-me-chai-psi.vercel.app"
              },
              {
                title: "Job Portal",
                description: "A job portal where users can search and apply for jobs, and employers can post job listings.",
                image: "/job.png",
                tags: ["Next.js", "neon",  "PostgreSQL","next auth"],
                link: "https://jobportal-seven-iota.vercel.app"
              }
            ].map((project, i) => (
              <article key={i} className="group relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 group-hover:from-transparent group-hover:to-background/95 transition-all duration-300 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/5 to-background/20 opacity-60 group-hover:opacity-100 transition-opacity z-0"></div>
                
                {/* Glass card */}
                <div className="h-full backdrop-blur-[2px] group-hover:backdrop-blur-sm transition-all duration-300 relative z-20 border border-border/40 rounded-2xl overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                    />
                  </div>
                  <div className="p-6 space-y-3 relative">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs bg-background/70 border border-border">{tag}</span>
                      ))}
                    </div>
                    <div className="pt-2">
                      <a 
                        href={project.link} 
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-28">
        <div className="relative">
          {/* Gradient decorations */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent blur-2xl opacity-30 rounded-[40px] -z-10"></div>
          <div className="pointer-events-none absolute -inset-px bg-[conic-gradient(from_120deg_at_50%_50%,_oklch(0.6_0.16_275/_0.15),_transparent_30%)] rounded-[32px] -z-10" />
          
          {/* Glass card */}
          <div className="relative rounded-[32px] border border-border/60 backdrop-blur-sm bg-background/40 p-10 md:p-14 overflow-hidden">
            <div className="absolute inset-0 bg-grid-small-white/[0.02] pointer-events-none"></div>
            
            <div className="relative grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3 space-y-6">
                <div>
                  <p className="text-sm text-primary font-medium mb-2">GET IN TOUCH</p>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Let&apos;s build something amazing together</h2>
                  <p className="text-muted-foreground max-w-prose">Available for freelance projects, full-time opportunities, and collaborative ventures. Let&apos;s create impactful digital experiences.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                  <a 
                    href="mailto:rasura833@gmail.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex flex-col space-y-2 rounded-xl border border-border/60 bg-background/50 p-5 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">rasura833@gmail.com</p>
                  </a>
                  
                  <a 
                    href="https://wa.me/9811728625" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex flex-col space-y-2 rounded-xl border border-border/60 bg-background/50 p-5 hover:bg-background/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">+977 9811728625</p>
                  </a>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="rounded-xl border border-border/60 bg-background/50 p-5 hover:bg-background/80 transition-all duration-300 space-y-3">
                  <h3 className="text-lg font-medium">Connect Elsewhere</h3>
                  <p className="text-sm text-muted-foreground">Find me on these platforms and let&apos;s connect.</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <a 
                      href="https://github.com/ravana-asura" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                      GitHub
                    </a>
                    
                    <a 
                      href="https://www.linkedin.com/in/abhisek-gupta-205793278" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground transition-colors col-span-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 9h8"></path>
                        <path d="M8 13h6"></path>
                        <path d="M18 16.5a2.5 2.5 0 1 1-5 0v-1.5h5"></path>
                        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      </svg>
                      View Resume
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
