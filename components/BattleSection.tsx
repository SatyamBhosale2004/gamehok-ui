export default function BattleSection() {
  return (
    <div className="mt-6 px-1">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-sm font-semibold">Compete in Battles</h2>
        <span className="text-green-400 text-xs font-medium">View All</span>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-2 gap-3">
        {/* CARD 1 */}
        <div className="rounded-xl p-4 text-center bg-[linear-gradient(325deg,_#4D5A53_0%,_#2A3F36_40%,_#182920_100%)]">
          {/* LOGO */}
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black flex items-center justify-center">
            <img src="/gs.png" className="w-full object-contain" />
          </div>

          {/* TITLE */}
          <h3 className="text-white text-sm font-semibold">GS Daily Scrims</h3>

          {/* SUBTEXT */}
          <p className="text-xs text-white mt-1">By GS Esports</p>

          {/* DESC */}
          <p className="text-[11px] text-white mt-2 leading-tight">
            Play GS daily scrims and sharpen your skills for the bigger events
          </p>

          {/* CTA */}
          <div className="mt-3 text-[#0CF285] text-xs font-medium flex justify-center items-center gap-1">
            Explore scrims →
          </div>
        </div>

        {/* CARD 2 */}
        <div className="rounded-xl p-4 text-center bg-[linear-gradient(325deg,_#4D5A53_0%,_#2A3F36_40%,_#182920_100%)]">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-black flex items-center justify-center">
            <img src="/tmr.png" className="w-full object-contain" />
          </div>

          <h3 className="text-white text-sm font-semibold">TMR Daily Scrims</h3>

          <p className="text-xs text-white mt-1">By TMR Esports</p>

          <p className="text-[11px] text-white mt-2 leading-tight">
            Play TMR daily scrims and sharpen your skills for the bigger events
          </p>

          <div className="mt-3 text-[#0CF285] text-xs font-medium flex justify-center items-center gap-1">
            Explore scrims →
          </div>
        </div>
      </div>
    </div>
  );
}
