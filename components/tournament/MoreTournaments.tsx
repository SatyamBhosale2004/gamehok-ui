import Image from 'next/image';

interface TournamentCardData {
  title: string;
  organiser: string;
  tags: string[];
  date: string;
  prizePool: string;
  image: string;
  registeredCount: number;
  totalSpots: number;
}

interface MoreTournamentsProps {
  tournaments: TournamentCardData[];
}

export default function MoreTournaments({ tournaments }: MoreTournamentsProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">More tournaments for you</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {tournaments.map((tournament, index) => (
          <div key={index} className="min-w-[280px] w-[280px] bg-[var(--bg-surface-light)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-color)] flex-shrink-0">
            <div className="relative w-full h-[140px]">
              <Image src={tournament.image} alt={tournament.title} fill className="object-cover" />
              <div className="absolute top-3 left-3 right-3 flex justify-between">
                <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-white">
                  Registration Open
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-white flex items-center gap-1">
                  <Image src="/profile-2user.svg" alt="Users" width={12} height={12} />
                  <span>{tournament.registeredCount}/{tournament.totalSpots}</span>
                </div>
              </div>
              <div className="absolute bottom-[-16px] right-4 w-10 h-10 rounded-full bg-[#2b1f4c] flex items-center justify-center border-2 border-[var(--bg-surface-light)] z-10">
                <Image src="/gs.svg" alt="Organiser" width={24} height={24} />
              </div>
            </div>

            <div className="pt-6 px-4 pb-4">
              <h3 className="text-[16px] font-bold mb-1">{tournament.title}</h3>
              <div className="text-[11px] font-semibold text-[var(--text-secondary)] mb-3">BY {tournament.organiser}</div>
              <div className="flex gap-2 mb-4">
                {tournament.tags.map((tag, i) => (
                  <span key={i} className="bg-[var(--tag-bg)] text-[var(--tag-text)] px-2 py-1 rounded text-[10px] font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-medium text-[var(--text-primary)] mb-3">
                <Image src="/tmr.svg" alt="Time" width={14} height={14} />
                <span>Starts {tournament.date}</span>
              </div>
              <div className="flex justify-between items-center text-[12px] font-semibold">
                <div className="flex items-center gap-1.5">
                  <Image src="/gray-icons_trophy.svg" alt="Trophy" width={14} height={14} />
                  <span>Prize Pool- {tournament.prizePool}</span>
                  <Image src="/coin-two.svg" alt="Coin" width={14} height={14} />
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="#00D65A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
