interface Round {
  title: string;
  type: string;
  date: string;
  description: string;
}

interface RoundsScheduleProps {
  rounds: Round[];
}

export default function RoundsSchedule({ rounds }: RoundsScheduleProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">Rounds and Schedule</h2>
      <div className="flex flex-col gap-6">
        {rounds.map((round, index) => (
          <div key={index} className={`flex flex-col gap-3 pb-6 ${index < rounds.length - 1 ? 'border-b border-[var(--border-color)]' : ''}`}>
            <div className="flex justify-between items-center">
              <div className="text-[16px] font-semibold">
                <span className="text-[var(--text-primary)]">{round.title.split(' ')[0]}</span>
                <span className="text-[var(--text-secondary)]"> ({round.title.split(' ').slice(1).join(' ')})</span>
              </div>
              <div className="bg-[#2a1b41] text-[#b091f0] px-2.5 py-1 rounded text-[11px] font-semibold">
                {round.type}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[14px] text-[var(--text-secondary)]">{round.description}</div>
              <div className="text-[14px] text-[var(--text-primary)] font-medium">{round.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
