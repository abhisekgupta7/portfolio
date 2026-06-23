import React from "react";
import Image from "next/image";

interface Tech {
  name: string;
  icon: string;
}

interface TechCategory {
  label: string;
  items: Tech[];
}

interface TechStackProps {
  categories: TechCategory[];
}

export default function TechStack({ categories }: TechStackProps) {
  return (
    <section className="border-y border-border/60 bg-secondary/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14">
        <p className="text-xs md:text-sm text-primary font-medium mb-6 md:mb-8 text-center">
          TECHNOLOGIES I WORK WITH
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {categories.map((category) => (
            <div
              key={category.label}
              className="rounded-xl md:rounded-2xl border border-border/40 bg-background/40 backdrop-blur-sm p-4 md:p-5 hover:border-border/70 transition-colors duration-300"
            >
              <p className="text-[11px] md:text-xs font-medium uppercase tracking-wide text-muted-foreground/70 mb-3">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2 px-2.5 md:px-3 py-1.5 md:py-2 rounded-lg bg-background/60 border border-border/40 hover:border-border/80 hover:bg-background/90 transition-all duration-200 group"
                  >
                    <div className="relative h-4 w-4 md:h-5 md:w-5 flex-shrink-0">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-200"
                        sizes="20px"
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}