export default function TopBar() {
  return (
    <div className="flex justify-between items-center">
      {/* LEFT - PROFILE */}
      <div className="relative w-9 h-9">
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
      <div className="flex items-center gap-3">
        {/* COINS */}
        <div className="flex items-center gap-1 bg-green-500 px-3 py-[6px] rounded-full shadow-md">
          <img src="/coins.png" className="w-4 h-4" />
          <span className="text-xs text-white font-medium">2456</span>
        </div>

        {/* BELL */}
        <img src="/alert.png" className="w-7 h-7 opacity-90" />
      </div>
    </div>
  );
}
