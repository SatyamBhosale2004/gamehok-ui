export default function TopBar() {
  return (
    <div className="flex justify-between items-center w-full lg:justify-end lg:py-2">
      {/* LEFT - PROFILE (MOBILE ONLY) */}
      <div className="relative w-9 h-9 lg:hidden">
        {/* PROFILE */}
        <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex justify-center items-center">
          <img src="/user.png" className="w-7 h-7 object-cover" />
        </div>

        {/* STATUS BADGE */}
        <div className="absolute bottom-[-2] right-[-6] w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-[#001208]">
          <img src="/menu.svg" className="w-3 h-3" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3 lg:gap-5">
        {/* BADGES */}
        <div className="flex items-center rounded-full overflow-hidden bg-green-500 lg:bg-[#00D459] shadow-md lg:shadow-none">
          {/* ORANGE / FLAG COINS */}
          <div className="hidden lg:flex items-center gap-1.5 pl-4 pr-3 py-1.5">
            <img src="/Two Tickets.svg" className="w-4 h-4" />
            <span className="text-xs text-white font-medium">245</span>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block w-[1px] h-3.5 bg-white/40" />

          {/* COINS */}
          <div className="flex items-center gap-1.5 px-3 lg:px-4 py-1.5">
            <img src="/coins.png" className="w-4 h-4" />
            <span className="text-xs text-white font-medium">2456</span>
          </div>
        </div>

        {/* BELL */}
        <img src="/alert.png" className="w-7 h-7 lg:w-5 lg:h-5 opacity-90 cursor-pointer lg:ml-2" />
        
        {/* USER PROFILE (DESKTOP ONLY) */}
        <div className="hidden lg:flex items-center gap-3 cursor-pointer pl-5 border-l border-white/20">
          <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex justify-center items-center">
             <img src="/user.png" className="w-6 h-6 object-cover" />
          </div>
          <span className="text-sm text-gray-200">Satyam Bhosale</span>
        </div>
      </div>
    </div>
  );
}
