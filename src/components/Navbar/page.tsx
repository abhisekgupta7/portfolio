"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Only run after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const next = (resolvedTheme === 'dark' || theme === 'dark') ? 'light' : 'dark'
    setTheme(next)
  }

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/logo.jpg" alt="Abhisek Gupta" width={36} height={36} className="rounded-md object-cover ring-1 ring-border" />
            <span className="text-base font-semibold tracking-tight">Abhisek Gupta</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {mounted ? (
              resolvedTheme === 'dark' ? <Sun className="size-4" /> : <Moon className="size-4" />
            ) : (
              // Empty placeholder with same size to avoid layout shift
              <div className="size-4"></div>
            )}
          </button>
        </div>
      </div>

      {/* <div className="md:hidden border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-6 text-sm">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div> */}
    </nav>
  )
}

export default Navbar