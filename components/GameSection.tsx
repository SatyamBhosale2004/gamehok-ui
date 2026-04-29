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
    <div className="mt-6 px-1">
      {/* TITLE */}
      <h2 className="text-white text-sm font-semibold mb-3">
        Play Tournaments by Games
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-3">
        {games.map((game, i) => (
          <div key={i} className="flex flex-col items-center">
            {/* IMAGE CARD */}
            <div className="w-full h-20 rounded-xl overflow-hidden active:scale-95 transition">
              <img src={game.img} className="w-full h-full object-cover" />
            </div>

            {/* LABEL */}
            <p className="text-[11px] text-white mt-2 text-center font-medium">
              {game.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
