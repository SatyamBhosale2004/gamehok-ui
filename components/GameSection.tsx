'use client';

import { useRef } from 'react';

export default function GamesSection() {
  const games = [
    { name: "PUBG PC", img: "/pubg.png" },
    { name: "FREE FIRE", img: "/freefire.png" },
    { name: "COD MOBILE", img: "/cod.png" },
    { name: "PUBG PC", img: "/pubg.png" },
    { name: "FREE FIRE", img: "/freefire.png" },
    { name: "COD MOBILE", img: "/cod.png" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll by the width of the container
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-4 lg:mt-6 px-1">
      {/* TITLE */}
      <h2 className="text-white text-sm lg:text-xl font-semibold mb-3 lg:mb-4">
        Play Tournaments by Games
      </h2>

      {/* CONTAINER */}
      <div className="relative group">
        {/* Left Arrow (Desktop Only) */}
        <div 
          onClick={() => scroll('left')}
          className="hidden lg:flex absolute -left-4 top-[40%] -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full items-center justify-center cursor-pointer z-10 shadow-lg"
        >
          <span className="text-white text-sm font-bold">&lt;</span>
        </div>

        {/* Scrollable / Grid Area */}
        <div 
          ref={scrollRef}
          className="grid grid-cols-3 gap-3 lg:flex lg:flex-nowrap lg:overflow-x-auto lg:gap-4 no-scrollbar pb-2 lg:snap-x lg:snap-mandatory"
        >
          {games.map((game, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center lg:w-[calc(33.333%-10.66px)] lg:flex-shrink-0 lg:snap-start"
            >
              {/* IMAGE CARD */}
              <div className="w-full h-20 lg:h-32 xl:h-40 rounded-xl overflow-hidden active:scale-95 transition cursor-pointer">
                <img src={game.img} className="w-full h-full object-cover" />
              </div>

              {/* LABEL */}
              <p className="text-[11px] lg:text-sm text-white mt-2 lg:mt-3 text-center font-bold tracking-wide uppercase">
                {game.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow (Desktop Only) */}
        <div 
          onClick={() => scroll('right')}
          className="hidden lg:flex absolute -right-4 top-[40%] -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full items-center justify-center cursor-pointer z-10 shadow-lg"
        >
          <span className="text-white text-sm font-bold">&gt;</span>
        </div>
      </div>
    </div>
  );
}
