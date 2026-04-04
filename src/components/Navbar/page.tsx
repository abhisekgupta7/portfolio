"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label="Abhisek Gupta - Home"
          >
            <Image
              src="/logo.jpg"
              alt="Abhisek Gupta Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover ring-1 ring-border"
              priority
            />
            <span className="text-sm md:text-base font-semibold tracking-tight">
              Abhisek Gupta
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2">
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
