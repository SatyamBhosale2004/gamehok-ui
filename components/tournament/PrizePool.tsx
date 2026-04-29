import Image from 'next/image';

interface PrizePoolProps {
  totalPrize: number;
  prizes: { rank: string; amount: number }[];
}

export default function PrizePool({ totalPrize, prizes }: PrizePoolProps) {
  return (
    <div className="mb-10">
      <h2 className="text-[20px] font-semibold mb-6">Prize pool</h2>
      <div className="bg-[var(--bg-surface-light)] rounded-[var(--radius-md)] overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-white/5 border-b border-[var(--border-color)]">
          <span className="text-[16px] font-semibold text-[var(--text-primary)]">Total Tournament Prize</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[16px] font-bold">{totalPrize}</span>
            <Image src="/coin-two.svg" alt="Coins" width={18} height={18} />
          </div>
        </div>
        <div className="flex flex-col">
          {prizes.map((prize, index) => (
            <div key={index} className={`flex justify-between items-center p-4 ${index < prizes.length - 1 ? 'border-b border-[var(--border-color)]' : ''}`}>
              <div className="flex items-center gap-3">
                <Image src="/gray-icons_trophy.svg" alt="Trophy" width={16} height={16} />
                <span className="text-[14px] text-[var(--text-primary)]">{prize.rank}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[14px] font-semibold">{prize.amount}</span>
                <Image src="/coin-two.svg" alt="Coins" width={16} height={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
