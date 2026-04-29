import TopBar from "@/components/TopBar";
import SocialCard from "@/components/SocialCard";
import FeaturedSection from "@/components/FeaturedSection";
import BouncyBanner from "@/components/BouncyBird";
import GamesSection from "@/components/GameSection";
import BattleSection from "@/components/BattleSection";
import HighlightsSection from "@/components/HighlightsSection";
import BottomNav from "@/components/BottomNav";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center bg-black pb-16">
      <div className="w-full max-w-[400px] min-h-screen bg-[#001208] flex flex-col gap-4 p-4 shadow-xl">
        <TopBar />
        <SocialCard />
        <FeaturedSection />
        <BouncyBanner />
        <GamesSection />
        <BattleSection />
        <HighlightsSection />
      </div>
      <BottomNav />
    </main>
  );
}