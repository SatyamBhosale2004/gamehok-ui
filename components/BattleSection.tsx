export default function BattleSection() {
  return (
    <div className="mt-6 px-1">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-sm font-semibold">Compete in Battles</h2>
        <span className="text-green-400 text-xs font-medium">View All</span>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-3 lg:gap-6">
        {/* CARD 1 */}
        <div className="rounded-xl p-4 lg:p-6 text-center bg-[linear-gradient(325deg,_#4D5A53_0%,_#2A3F36_40%,_#182920_100%)]">
          {/* LOGO */}
          <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 rounded-full bg-black flex items-center justify-center border-2 border-green-500/20">
            <img src="/gs.png" className="w-full object-contain" />
          </div>

          {/* TITLE */}
          <h3 className="text-white text-sm lg:text-lg font-bold">GS Daily Scrims</h3>

          {/* SUBTEXT */}
          <p className="text-xs lg:text-sm text-gray-300 mt-1">By GS Esports</p>

          {/* DESC */}
          <p className="text-[11px] lg:text-xs text-gray-400 mt-2 lg:mt-4 leading-relaxed">
            Play GS daily scrims and sharpen your skills for the bigger events
          </p>

          {/* CTA */}
          <div className="mt-4 text-[#0CF285] text-xs lg:text-sm font-medium flex justify-center items-center gap-1 cursor-pointer hover:text-green-400 transition-colors">
            Explore scrims →
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded-xl p-4 lg:p-6 text-center bg-[linear-gradient(325deg,_#4D5A53_0%,_#2A3F36_40%,_#182920_100%)]">
          <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 rounded-full bg-black flex items-center justify-center border-2 border-green-500/20">
            <img src="/tmr.png" className="w-full object-contain" />
          </div>

          <h3 className="text-white text-sm lg:text-lg font-bold">TMR Daily Scrims</h3>

          <p className="text-xs lg:text-sm text-gray-300 mt-1">By TMR Esports</p>

          <p className="text-[11px] lg:text-xs text-gray-400 mt-2 lg:mt-4 leading-relaxed">
            Play TMR daily scrims and sharpen your skills for the bigger events
          </p>

          <div className="mt-4 text-[#0CF285] text-xs lg:text-sm font-medium flex justify-center items-center gap-1 cursor-pointer hover:text-green-400 transition-colors">
            Explore scrims →
          </div>
        </div>
      </div>
    </div>
  );
}
