import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Terminal,
  Zap,
  ArrowRight,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-small-white/[0.03] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_110%,_oklch(0.6_0.16_275/_0.25),_transparent_60%)]" />

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 border-b border-border/50">
          {/* Branding Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-md blur opacity-30"></div>
                <Image
                  src="/logo.jpg"
                  alt="AG Logo"
                  width={40}
                  height={40}
                  className="relative rounded-md object-cover ring-1 ring-border z-10"
                />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight text-sm md:text-base">
                  Abhisek Gupta
                </h3>
                <p className="text-xs text-muted-foreground">
                  Software Developer
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Building innovative and scalable web solutions with modern
              technologies. Passionate about creating exceptional user
              experiences.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/abhisekgupta7"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhisek-gupta-205793278"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:rasura833@gmail.com"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {/* Navigation Links */}
              <div className="space-y-4">
                <h4 className="text-xs md:text-sm font-medium">Navigation</h4>
                <nav className="grid gap-2">
                  <Link
                    href="#about"
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About Me
                  </Link>
                  <Link
                    href="#projects"
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                  <a
                    href="/resume.pdf"
                    download
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                  >
                    Resume <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </nav>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <h4 className="text-xs md:text-sm font-medium">Expertise</h4>
                <div className="grid gap-2">
                  <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                    <Code className="h-3.5 w-3.5 text-primary flex-shrink-0" />{" "}
                    Web Development
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                    <Terminal className="h-3.5 w-3.5 text-primary flex-shrink-0" />{" "}
                    Full-Stack Solutions
                  </span>
                  <span className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-primary flex-shrink-0" />{" "}
                    UI/UX Design
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-4">
                <h4 className="text-xs md:text-sm font-medium">Availability</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0"></div>
                    <span>Available for work</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>Part-time, Full-time, Contract</span>
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-xs md:text-sm font-medium text-primary hover:underline"
                  >
                    Get in touch
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-xs text-muted-foreground">
          <div className="order-2 md:order-1">
            © 2024–{new Date().getFullYear()} Abhisek Gupta. All rights
            reserved.
          </div>
          <div className="order-1 md:order-2 flex items-center gap-4 text-xs">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
