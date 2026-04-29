export default function SocialCard() {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1db36b] via-[#0b3d2b] to-[#041a12] rounded-xl p-4 shadow-md">
        {/* topsection */}
        <div className="absolute left-6 top-6 w-40 h-40 bg-green-400/20 blur-3xl rounded-full" />
        <div className="flex items-center gap-6 relative z-10">
          {/* left side */}
          <div className="relative w-28 h-28 flex-shrink-0">
            {/* star and glow */}
            <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full" />
            <img
              src="/star.png"
              alt="star"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-semibold leading-tight">
              Be the Gamehok's{" "}
              <div>
                <span className="text-[#FFCC4D]">Social Star</span>
              </div>
            </h2>

            <p className="text-white text-sm mt-2">
              Earn rewards by levelling up your social game
            </p>
            {/* stats */}
            <div className="flex gap-6 mt-3">
              <div className="flex flex-col items-center text-white text-xs">
                <div className="w-10 h-10 rounded-full border-1 border-[#2E9EEE] flex items-center justify-center shadow-[0_0-10px_rgba(59,130,246,0.5)] mb-1">
                  <img src="/post.png" className="w-5 h-5" />
                </div>
                Posts
              </div>
              <div className="flex flex-col items-center text-white text-xs">
                <div className="w-10 h-10 rounded-full border-1 border-[#FFC39B] flex items-center justify-center shadow-[0_0-10px_rgba(59,130,246,0.5)] mb-1">
                  <img src="/followers.png" className="w-5 h-5" />
                </div>
                Followers
              </div>
              <div className="flex flex-col items-center text-white text-xs">
                <div className="w-10 h-10  rounded-full border-1 border-[#B287FF] flex justify-center items-center shadow-[0_0-10px_rgba(59,130,246,0.5)] mb-1">
                  <img src="/likes.png" className="w-5 h-5" />
                </div>
                Likes
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}