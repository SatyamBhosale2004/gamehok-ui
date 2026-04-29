import TopBar from "@/components/TopBar";
import SocialCard from "@/components/SocialCard";
import TournamentCard from "@/components/TournamentCard";
import FeaturedSection from "@/components/FeaturedSection";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center bg-black">
      <div className="w-full max-w-[400px] min-h-screen bg-[#001208] flex flex-col gap-4 p-4 rounded-2xl shadow-xl  mt-4">
        <TopBar />
        <SocialCard/>
        <FeaturedSection/>
        <div className = "h-40 bg-green-800 rounded-xl" /> 
      </div>
    </main>
  );
}