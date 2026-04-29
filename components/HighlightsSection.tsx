export default function HighlightsSection() {
  const highlights = [
    { name: "Call of Duty", img: "/highlight-1.png" },
    { name: "BGMI Tournaments", img: "/highlight-2.png" },
  ];

  return (
    <div className="mt-4 lg:mt-0 px-1 lg:px-0">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3 lg:mb-6">
        <h2 className="text-white text-sm lg:text-lg font-semibold">Game Highlights</h2>
        <span className="text-green-400 text-xs lg:text-sm font-medium cursor-pointer">View All</span>
      </div>

      {/* SCROLL / STACK */}
      <div className="flex lg:flex-col gap-3 lg:gap-6 overflow-x-auto lg:overflow-visible scrollbar-hide scroll-smooth select-none">
        {/* On desktop, maybe we map more items or repeat */}
        {[...highlights, ...highlights, ...highlights].map((item, i) => (
          <div key={i} className={`min-w-[220px] lg:w-full lg:min-w-0 ${i >= 2 ? 'hidden lg:block' : ''}`}>
            {/* IMAGE */}
            <div className="relative h-32 lg:h-44 rounded-xl overflow-hidden cursor-pointer group">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {/* Optional Play Button for first item */}
              {i === 0 && (
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-10 h-10 lg:w-12 lg:h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/30 backdrop-blur-sm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                      </svg>
                   </div>
                </div>
              )}
            </div>

            {/* TITLE */}
            <p className="text-white text-xs lg:text-sm font-medium mt-2 lg:mt-3">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
