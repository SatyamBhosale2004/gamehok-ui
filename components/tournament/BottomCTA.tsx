interface BottomCTAProps {
  onJoin: () => void;
}

export default function BottomCTA({ onJoin }: BottomCTAProps) {
  return (
    <div className="fixed bottom-16 lg:bottom-0 left-0 lg:left-[240px] right-0 px-4 lg:px-6 py-4 bg-[var(--bg-primary)] border-t border-[var(--border-color)] flex justify-center lg:justify-end z-[100]">
      <button
        onClick={onJoin}
        className="bg-[var(--accent-green)] hover:bg-[var(--accent-green-hover)] text-black text-[15px] font-bold px-8 py-3.5 rounded-[var(--radius-md)] transition-colors tracking-wide w-full lg:w-auto"
      >
        JOIN TOURNAMENT
      </button>
    </div>
  );
}
