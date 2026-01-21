"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Tech {
  name: string;
  icon: string;
}

interface TechStackProps {
  techStack: Tech[];
}

export default function TechStack({ techStack }: TechStackProps) {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = () => {
      if (!isDragging) {
        setIsAnimating(!isAnimating);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      const scrollDiv = scrollRef.current;
      if (!scrollDiv) return;
      setIsDragging(true);
      startXRef.current = e.pageX - scrollDiv.offsetLeft;
      scrollLeftRef.current = scrollDiv.scrollLeft;
      setIsAnimating(false);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const scrollDiv = scrollRef.current;
      if (!scrollDiv) return;

      e.preventDefault();
      const x = e.pageX - scrollDiv.offsetLeft;
      const walk = (x - startXRef.current) * 2;
      scrollDiv.scrollLeft = scrollLeftRef.current - walk;
    };

    container.addEventListener("click", handleClick);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("click", handleClick);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDragging]);

  return (
    <section className="border-y border-border/60 bg-secondary/30 backdrop-blur-sm">
      <div className="py-2">
        <div className="flex justify-center mb-3">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/40 backdrop-blur text-xs font-medium cursor-pointer hover:bg-background/60 transition-colors"
            title="Click to pause/resume animation"
          >
            Technologies I work with {isAnimating ? "▶" : "⏸"}
          </div>
        </div>
        <div
          className={`overflow-x-auto md:overflow-hidden cursor-${isDragging ? "grabbing" : "grab"} group`}
          ref={containerRef}
          role="region"
          aria-label="Tech stack carousel"
        >
          <div
            ref={scrollRef}
            className={`flex items-center gap-4 md:gap-6 py-6 px-4 md:py-6 md:px-4 ${
              isAnimating ? "animate-[marquee_15s_linear_infinite]" : ""
            }`}
            style={{
              animationPlayState: isAnimating ? "running" : "paused",
              scrollBehavior: "smooth",
            }}
          >
            {[...techStack, ...techStack, ...techStack].map((t, i) => (
              <div
                key={i}
                className="inline-flex flex-shrink-0 flex-col items-center justify-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl bg-background/40 border border-border/40 hover:border-border/80 hover:bg-background/60 transition-all duration-300 group select-none"
              >
                <div className="relative h-6 w-6 md:h-8 md:w-8">
                  <Image
                    src={t.icon}
                    alt={t.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    draggable="false"
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
