import TopBar from "@/components/TopBar";
import SocialCard from "@/components/SocialCard";
import FeaturedSection from "@/components/FeaturedSection";
import BouncyBanner from "@/components/BouncyBird";
import GamesSection from "@/components/GameSection";
import BattleSection from "@/components/BattleSection";
import HighlightsSection from "@/components/HighlightsSection";
import BottomNav from "@/components/BottomNav";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex justify-center lg:justify-start pb-16 lg:pb-0">
      {/* Desktop Sidebar */}
      <SideBar />

      {/* Main Content Area */}
      <div className="w-full flex-1 lg:ml-[240px] flex flex-col bg-[#001208] max-w-[1440px]">
        
        {/* Desktop TopBar */}
        <div className="hidden lg:flex items-center w-full px-6 h-[88px] border-b border-gray-800">
          <TopBar />
        </div>

        {/* Desktop Columns Wrapper */}
        <div className="w-full flex-1 flex flex-col lg:flex-row">
          
          {/* Left Column (Main Feed) */}
          <div className="flex-1 w-full max-w-[400px] mx-auto lg:mx-0 lg:max-w-none flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 lg:border-r border-gray-800 xl:pr-10 lg:pt-4">
            {/* Mobile TopBar */}
            <div className="lg:hidden">
              <TopBar />
            </div>

            <SocialCard />
            <FeaturedSection />
            <div className="lg:hidden">
              <BouncyBanner />
            </div>
            <GamesSection />
            <BattleSection />
            
            {/* Mobile Highlights */}
            <div className="lg:hidden">
              <HighlightsSection />
            </div>
          </div>

          {/* Right Column (Highlights - Desktop Only) */}
          <div className="hidden lg:flex flex-col w-[350px] xl:w-[400px] p-6 gap-6 pt-4 flex-shrink-0">
            <HighlightsSection />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="lg:hidden">
        <BottomNav />
      </div>
    </main>
  );
}