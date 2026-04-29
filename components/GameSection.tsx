export default function GamesSection() {
  const games = [
    { name: "PUBG PC", img: "/pubg.png" },
    { name: "FREE FIRE", img: "/freefire.png" },
    { name: "COD MOBILE", img: "/cod.png" },
    { name: "PUBG PC", img: "/pubg.png" },
    { name: "FREE FIRE", img: "/freefire.png" },
    { name: "COD MOBILE", img: "/cod.png" },
  ];

  return (
    <div className="mt-4 lg:mt-6 px-1">
      {/* TITLE */}
      <h2 className="text-white text-sm lg:text-xl font-semibold mb-3 lg:mb-4">
        Play Tournaments by Games
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-3 lg:gap-4 relative">
        {/* Optional Left Arrow for desktop (visual only for now) */}
        <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full items-center justify-center cursor-pointer z-10 shadow-lg">
          <span className="text-white">&lt;</span>
        </div>

        {games.slice(0, 3).map((game, i) => (
          <div key={i} className="flex flex-col items-center">
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
        {/* Mobile remaining games */}
        {games.slice(3).map((game, i) => (
          <div key={`mob-${i}`} className="flex lg:hidden flex-col items-center">
            {/* IMAGE CARD */}
            <div className="w-full h-20 rounded-xl overflow-hidden active:scale-95 transition cursor-pointer">
              <img src={game.img} className="w-full h-full object-cover" />
            </div>

            {/* LABEL */}
            <p className="text-[11px] text-white mt-2 text-center font-medium">
              {game.name}
            </p>
          </div>
        ))}

        {/* Optional Right Arrow for desktop (visual only for now) */}
        <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full items-center justify-center cursor-pointer z-10 shadow-lg">
          <span className="text-white">&gt;</span>
        </div>
      </div>
    </div>
  );
}
