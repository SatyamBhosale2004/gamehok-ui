'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

interface TournamentHeaderProps {
  title: string;
  organiserName: string;
  tags: string[];
  bannerImg: string;
  registeredCount: number;
  totalSpots: number;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = ['Overview', 'Participants', 'Lobbies', 'Leaderboard', 'Rules'];

export default function TournamentHeader({
  title,
  organiserName,
  tags,
  bannerImg,
  registeredCount,
  totalSpots,
  activeTab,
  onTabChange,
}: TournamentHeaderProps) {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowToast(true);
  };

  const handleBack = () => {
    if (activeTab !== 'Overview') {
      onTabChange('Overview');
    } else {
      router.back();
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Top Actions */}
      <div className="flex justify-between items-center py-4 lg:static absolute top-0 left-0 right-0 z-10 lg:px-0 px-4">
        <button
          className="flex items-center gap-2 text-white text-sm font-medium"
          onClick={handleBack}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="hidden lg:block">Back</span>
        </button>
        <div className="relative flex items-center justify-center">
          {showToast && (
            <div className="absolute right-0 top-full mt-2 z-[100] w-max bg-[var(--accent-green)] text-white px-5 py-3 rounded-lg shadow-xl flex items-center gap-4 transition-all duration-300">
              <span className="text-sm font-bold tracking-wide">Link copied to clipboard!</span>
              <button 
                onClick={() => setShowToast(false)} 
                className="text-white hover:opacity-75 transition-opacity flex items-center justify-center font-bold"
              >
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
          <button 
            className="w-8 h-8 rounded-full bg-[var(--bg-surface)] flex items-center justify-center"
            onClick={handleCopyLink}
          >
            <Image src="/share.svg" alt="Share" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full h-[220px] lg:h-[300px] lg:rounded-xl overflow-hidden mb-4 lg:mb-6">
        <Image src={bannerImg} alt="Tournament Banner" fill className="object-cover" priority />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-medium text-white">
            Registration open - 2nd mar-10th Apr
          </div>
          <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-medium text-white flex items-center gap-1.5">
            <Image src="/profile-2user.svg" alt="Users" width={16} height={16} />
            <span>{registeredCount}/{totalSpots}</span>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="mb-6 px-4 lg:px-0">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px] lg:text-[28px] font-bold leading-tight">{title}</h1>
            <div className="text-sm font-semibold text-[var(--text-secondary)]">BY {organiserName}</div>
            <div className="flex gap-3 mt-1">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-[var(--tag-bg)] text-[var(--tag-text)] px-3 py-1.5 rounded text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#2b1f4c] flex items-center justify-center overflow-hidden border-2 border-[var(--border-color)] flex-shrink-0">
            <Image src="/gs.svg" alt="Organiser Logo" width={48} height={48} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-[var(--border-color)] mb-6 overflow-x-auto px-4 lg:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((tab) => (
          <div
            key={tab}
            className={`py-3 text-[15px] font-medium cursor-pointer relative whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'text-[var(--accent-green)] after:content-[\'\'] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent-green)]'
                : 'text-[var(--text-secondary)]'
            }`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}
