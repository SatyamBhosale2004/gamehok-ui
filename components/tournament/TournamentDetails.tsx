import Image from 'next/image';

interface DetailsProps {
  teamSize: string;
  format: string;
  startDate: string;
  checkInTime: string;
}

export default function TournamentDetails({ teamSize, format, startDate, checkInTime }: DetailsProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">Details</h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        <div className="flex items-start gap-4">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <Image src="/profile-2user.svg" alt="Team Size" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">TEAM SIZE</span>
            <span className="text-[15px] font-semibold text-[var(--text-primary)]">{teamSize}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <Image src="/tmr.svg" alt="Tournament Starts" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">TOURNAMENT STARTS</span>
            <span className="text-[15px] font-semibold text-[var(--text-primary)]">{startDate}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <Image src="/tournament.png" alt="Format" width={24} height={24} style={{ width: 'auto', height: 'auto' }} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">FORMAT</span>
            <span className="text-[15px] font-semibold text-[var(--text-primary)]">{format}</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            <Image src="/openmoji_timer.svg" alt="Check In" width={24} height={24} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-semibold text-[var(--text-muted)] uppercase tracking-wide">CHECK-IN</span>
            <span className="text-[15px] font-semibold text-[var(--text-primary)]">{checkInTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
