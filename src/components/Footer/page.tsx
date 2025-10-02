import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Code, Terminal, Zap, ArrowRight, Calendar, ExternalLink } from 'lucide-react'

const Footer = () => {
    // Remove dynamic calculation as it was causing hydration errors
    
    return (
        <footer className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-small-white/[0.03] pointer-events-none" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_110%,_oklch(0.6_0.16_275/_0.25),_transparent_60%)]" />
            
            {/* Newsletter Section */}
            <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 relative z-10">
                {/* <div className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm p-8 md:p-10 relative overflow-hidden mb-16">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                    
                    <div className="relative grid md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-3 space-y-4">
                            <h3 className="text-2xl font-semibold tracking-tight">Stay updated with my latest projects</h3>
                            <p className="text-muted-foreground max-w-md">Subscribe to receive notifications about new projects, tech insights, and opportunities.</p>
                        </div>
                        <div className="md:col-span-2 w-full">
                            <form className="flex flex-col sm:flex-row gap-2 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex h-12 w-full rounded-md border border-input bg-background/80 px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                                <button 
                                    type="submit"
                                    className="h-12 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Subscribe
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div> */}
                
                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-8 border-b border-border/50">
                    {/* Branding Column */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/60 rounded-md blur opacity-30"></div>
                                <Image src="/logo.jpg" alt="AG" width={40} height={40} className="relative rounded-md object-cover ring-1 ring-border z-10" />
                            </div>
                            <div>
                                <h3 className="font-semibold tracking-tight">Abhisek Gupta</h3>
                                <p className="text-xs text-muted-foreground">Next.js Developer</p>
                            </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Crafting modern, performance-optimized web applications with Next.js and the latest frontend technologies.
                        </p>
                        
                        <div className="flex items-center gap-3 pt-1">
                            <Link 
                                href="https://github.com/ravana-asura" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <Github size={16} />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/abhisek-gupta-205793278" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <Linkedin size={16} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link 
                                href="mailto:rasura833@gmail.com" 
                                className="h-9 w-9 flex items-center justify-center rounded-md border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                <Mail size={16} />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>
                    
                    {/* Links Columns */}
                    <div className="md:col-span-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
                            {/* Navigation Links */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Navigation</h4>
                                <nav className="grid gap-2">
                                    <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Me</Link>
                                    <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
                                    <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
                                    <a href="/resume.pdf" download className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                                        Resume <ExternalLink className="ml-1 h-3 w-3" />
                                    </a>
                                </nav>
                            </div>
                            
                            {/* Skills */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Skills</h4>
                                <div className="grid gap-2">
                                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Code className="h-3.5 w-3.5 text-primary" /> Next.js Development
                                    </span>
                                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Terminal className="h-3.5 w-3.5 text-primary" /> Full-Stack Engineering
                                    </span>
                                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                                        <Zap className="h-3.5 w-3.5 text-primary" /> Performance Optimization
                                    </span>
                                </div>
                            </div>
                            
                            {/* Availability */}
                            <div className="space-y-4">
                                <h4 className="text-sm font-medium">Availability</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                                        <span>Available for work</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <span>Full-time, Contract</span>
                                    </div>
                                    <Link 
                                        href="#contact" 
                                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
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
                        © 2024–{new Date().getFullYear()} Abhisek Gupta. All rights reserved.
                    </div>
                    <div className="order-1 md:order-2 flex items-center gap-4">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer