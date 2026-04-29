'use client';
import Image from 'next/image';
import { useState } from 'react';

interface Lobby {
  id: string;
  name: string;
  status: string;
}

const MOCK_LOBBIES: Lobby[] = Array.from({ length: 12 }, (_, i) => ({
  id: `lobby-${i + 1}`,
  name: `Lobby ${i + 1}`,
  status: 'Yet to be scheduled',
}));

const ROUNDS = ['Round 3', 'Round 2', 'Round 1'];

export default function LobbiesTab() {
  const [activeRound, setActiveRound] = useState('Round 3');

  return (
    <div className="flex flex-col w-full">
      {/* Rounds Filter */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {ROUNDS.map((round) => (
          <button
            key={round}
            onClick={() => setActiveRound(round)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap border transition-all ${
              activeRound === round
                ? 'bg-transparent text-[var(--accent-green)] border-[var(--accent-green)]'
                : 'bg-[var(--bg-surface-light)] text-[var(--text-secondary)] border-transparent'
            }`}
          >
            {round}
          </button>
        ))}
      </div>

      {/* Lobbies Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {MOCK_LOBBIES.map((lobby) => (
          <div key={lobby.id} className="bg-[var(--bg-surface)] border border-[#1a2f23] rounded-[var(--radius-md)] p-4 flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] font-semibold text-[var(--text-primary)]">{lobby.name}</h3>
              <button className="text-[11px] font-bold text-[var(--accent-green)] tracking-wide">
                View Participants
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/openmoji_timer.svg" alt="Timer" width={16} height={16} />
              <span className="text-[13px] font-medium text-[var(--text-primary)]">{lobby.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
