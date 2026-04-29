export default function TournamentCard() {
  return (
    <div className="bg-[#001208] rounded-xl overflow-hidden relative border border-[#0f3d2b] shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
      {/* IMAGE */}
      <div className="relative">
        <img src="/tournament.png" className="w-full h-44 object-cover" />

        {/* Registration */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-sm">
          Registration Open
        </div>

        {/* Players */}
        <div className="absolute top-3 right-3 bg-black/60 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
          <img src="/group-icon.png" className="w-3 h-3" />
          670/800
        </div>

        {/* Prize Strip (thin + elegant) */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 flex items-center gap-2">
          <img src="/trophy.png" className="w-5 h-5" />
          Prize Pool - 1000
          <img src="/coin-two.png" className="w-3 h-3" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-3 pt-3 pb-4 lg:px-4 lg:pt-4 lg:pb-5 text-white relative">
        <h3 className="font-semibold text-sm lg:text-base">Crown Conquest</h3>

        {/* Tags (more subtle) */}
        <div className="flex gap-2 mt-2 text-[11px] lg:text-xs">
          <span className="bg-[#0f3d2b] px-2 py-1 rounded-md text-white">
            BGMI
          </span>

          <span className="bg-[#0f3d2b] px-2 py-1 rounded-md text-white">
            Solo
          </span>

          <span className="bg-[#0f3d2b] px-2 py-1 rounded-md text-white flex items-center gap-1">
            Entry-Free
            <img src="/coin-two.png" className="w-3 h-3 lg:w-4 lg:h-4" />
          </span>
        </div>

        {/* Floating Logo */}
        <div className="absolute -top-6 right-3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.4)] border border-white/10">
          <img src="/gs.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}
