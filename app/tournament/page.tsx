'use client';
import { useState } from 'react';
import SideBar from '@/components/SideBar';
import BottomNav from '@/components/BottomNav';
import TournamentHeader from '@/components/tournament/TournamentHeader';
import TournamentDetails from '@/components/tournament/TournamentDetails';
import RoundsSchedule from '@/components/tournament/RoundsSchedule';
import HowToJoin from '@/components/tournament/HowToJoin';
import PrizePool from '@/components/tournament/PrizePool';
import Organiser from '@/components/tournament/Organiser';
import MoreTournaments from '@/components/tournament/MoreTournaments';
import BottomCTA from '@/components/tournament/BottomCTA';
import LobbiesTab from '@/components/tournament/LobbiesTab';

const MOCK_DATA = {
  title: 'GS MONTHLY SHOWDOWN',
  organiserName: 'GS ESPORTS',
  organiserEmail: 'Support@gsesports.com',
  tags: ['BGMI', 'Entry-Free'],
  bannerImg: '/cod.png',
  registeredCount: 670,
  totalSpots: 800,
  details: {
    teamSize: 'Solo',
    format: 'Single Elimination',
    startDate: 'Tue 24th Jan 2024, 01:00 PM',
    checkInTime: '10 mins before the match starts',
  },
  rounds: [
    { title: 'Qualifiers (Round 1)', type: 'Single Elimination', date: '3rd Aug, 10:00 pm', description: 'Top 4 to next round' },
    { title: 'Qualifiers (Round 1)', type: 'Single Elimination', date: '3rd Aug, 10:00 pm', description: 'Top 4 to next round' },
    { title: 'Qualifiers (Round 1)', type: 'Single Elimination', date: '3rd Aug, 10:00 pm', description: 'Top 4 to next round' },
  ],
  joinInstructions: [
    'Have your game open already and on the latest version',
    'Once the match is configured you will receive an invite in-game to join the lobby.',
    'Join the match and wait for the game to start.',
    'When eliminated return to the match room page to be ready to join the next map in the round.',
  ],
  prizePool: {
    total: 2000,
    prizes: [
      { rank: '1st Prize', amount: 1000 },
      { rank: '2nd Prize', amount: 500 },
      { rank: '3rd Prize', amount: 200 },
    ],
  },
  moreTournaments: [
    {
      title: 'PUBG tournament',
      organiser: 'GS ESPORTS',
      tags: ['BGMI', 'Solo', 'Entry-Free'],
      date: '3rd Aug at 10:00 pm',
      prizePool: '1000',
      image: '/pubg.png',
      registeredCount: 670,
      totalSpots: 800,
    },
    {
      title: 'PUBG tournament',
      organiser: 'Red Bull',
      tags: ['BGMI', 'Solo'],
      date: 'Starts 3rd Aug',
      prizePool: '5000',
      image: '/pubg.png',
      registeredCount: 120,
      totalSpots: 500,
    },
  ],
};

export default function TournamentPage() {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleJoin = () => {
    alert('Joined Tournament!');
  };

  return (
    <main className="min-h-screen bg-[var(--bg-primary)] flex justify-center lg:justify-start pb-16 lg:pb-0">
      {/* Desktop Sidebar */}
      <SideBar activePage="tournament" />

      {/* Main Content */}
      <div className="w-full flex-1 lg:ml-[240px] flex flex-col max-w-[1440px]">
        
        {/* Page Content */}
        <div className="w-full flex-1 flex flex-col lg:flex-row">
          {/* Main Column */}
          <div className="flex-1 min-w-0 pb-24 lg:pb-28">
            <div className="w-full max-w-[400px] mx-auto lg:mx-0 lg:max-w-none px-0 lg:px-8 lg:pt-6">
              <TournamentHeader
                title={MOCK_DATA.title}
                organiserName={MOCK_DATA.organiserName}
                tags={MOCK_DATA.tags}
                bannerImg={MOCK_DATA.bannerImg}
                registeredCount={MOCK_DATA.registeredCount}
                totalSpots={MOCK_DATA.totalSpots}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />

              {activeTab === 'Lobbies' ? (
                <div className="px-4 lg:px-0">
                  <LobbiesTab />
                </div>
              ) : (
                <div className="flex gap-10 items-start">
                  {/* Left column */}
                  <div className="flex-1 min-w-0 px-4 lg:px-0">
                    <TournamentDetails {...MOCK_DATA.details} />

                    {/* Mobile: Prize pool between details and rounds */}
                    <div className="lg:hidden">
                      <PrizePool totalPrize={MOCK_DATA.prizePool.total} prizes={MOCK_DATA.prizePool.prizes} />
                    </div>

                    <RoundsSchedule rounds={MOCK_DATA.rounds} />
                    <HowToJoin instructions={MOCK_DATA.joinInstructions} />

                    {/* Mobile: Organiser */}
                    <div className="lg:hidden">
                      <Organiser name={MOCK_DATA.organiserName} email={MOCK_DATA.organiserEmail} />
                    </div>

                    {/* Mobile: More Tournaments */}
                    <div className="lg:hidden">
                      <MoreTournaments tournaments={MOCK_DATA.moreTournaments} />
                    </div>
                  </div>

                  {/* Right sidebar column - desktop only */}
                  <div className="hidden lg:flex flex-col w-[320px] flex-shrink-0 pt-0">
                    <PrizePool totalPrize={MOCK_DATA.prizePool.total} prizes={MOCK_DATA.prizePool.prizes} />
                    <Organiser name={MOCK_DATA.organiserName} email={MOCK_DATA.organiserEmail} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <BottomCTA onJoin={handleJoin} />

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </main>
  );
}
