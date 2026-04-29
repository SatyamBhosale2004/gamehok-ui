export default function HighlightsSection() {
  const highlights = [
    { name: "Call of Duty", img: "/highlight-1.png" },
    { name: "BGMI Tournaments", img: "/highlight-2.png" },
  ];

  return (
    <div className="mt-6 px-1">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-sm font-semibold">Game Highlights</h2>
        <span className="text-green-400 text-xs font-medium">View All</span>
      </div>

      {/* SCROLL */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth select-none">
        {highlights.map((item, i) => (
          <div key={i} className="min-w-[220px]">
            {/* IMAGE */}
            <div className="h-32 rounded-xl overflow-hidden">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>

            {/* TITLE */}
            <p className="text-white text-xs mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
