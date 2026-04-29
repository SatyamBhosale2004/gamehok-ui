import TournamentCard from "./TournamentCard";
export default function FeaturedSection() {
  return (
    <div className="mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-sm font-semibold">
          Featured Tournaments
        </h2>

        <span className="text-green-400 text-xs font-medium cursor-pointer">View All</span>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth select-none snap-x snap-mandatory">
        <div className="min-w-[88%] flex-shrink-0 snap-start">
          <TournamentCard />
        </div>
        <div className="min-w-[88%] flex-shrink-0 snap-start">
          <TournamentCard />
        </div>
        <div className="min-w-[88%] flex-shrink-0 snap-start">
          <TournamentCard />
        </div>
      </div>
    </div>
  );
}
