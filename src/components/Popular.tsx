"use client";
import { Button } from "@/components/ui/button";
import React from "react";

type GameCard = {
  title: string;
  img: string;
  alt: string;
};

const games: GameCard[] = [
  { title: "STACKS SWITCH", img: "/Stackswitch.png", alt: "Stacks Switch cover" },
  { title: "WORD SEARCH", img: "/Wordsearch.png", alt: "Word Search cover" },
  { title: "GAME 2", img: "/gameplaceholder.png", alt: "Game 2 cover" },
];

const Popular: React.FC = () => {
  return (
    <section className="py-1 flex flex-col items-center justify-center min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-primary text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          POPULAR THIS WEEK
        </h2>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 m-8">
          {games.map((g) => (
            <article
              key={g.title}
              className="group rounded-2xl border border-secondary bg-card p-4 shadow-md transition hover:shadow-xl focus-within:shadow-xl"
            >
              {/* Image box keeps all cards same height */}
              <div className="aspect-[5/5] w-full overflow-hidden rounded-3xl border-2 border-secondary bg-muted/10 flex items-center justify-center">
                <img
                  src={g.img}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => ((e.currentTarget.src = "/gameplaceholder.png"))}
                />
              </div>

              <h3 className="mt-4 text-center text-foreground text-lg sm:text-xl lg:text-2xl font-bold">
                {g.title}
              </h3>

              {/* Optional: CTA per card */}
              <Button className="mt-3 w-full text-lg cursor-pointer">
                Play
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;