import TopBar from "@/components/TopBar";
import SocialCard from "@/components/SocialCard";
export default function Home() {
  return (
    <main className="min-h-screen flex justify-center bg-black">
      <div className="w-full max-w-[400px] min-h-screen bg-[#001208] flex flex-col gap-4 p-4 rounded-2xl shadow-xl overflow-hidden mt-4">
        <TopBar />
        <SocialCard/>
        <div className = "h-40 bg-green-800 rounded-xl" /> 
      </div>
    </main>
  );
}