export default function SocialCard() {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1db36b] via-[#0b3d2b] to-[#041a12] rounded-xl p-4 shadow-md">
        {/* topsection */}
        <div className="absolute left-6 top-6 w-40 h-40 bg-green-400/20 blur-3xl rounded-full" />
        <div className="flex items-center justify-between gap-4 lg:gap-6 relative z-10 lg:pl-6 lg:py-2">
          {/* text side */}
          <div className="flex flex-col flex-1 order-2 lg:order-1">
            <h2 className="text-white text-lg lg:text-2xl font-bold leading-tight">
              Be the Gamehok's <span className="text-[#FFCC4D]">Social Star</span>
            </h2>

            <p className="text-white text-xs lg:text-sm mt-1 lg:mt-2 opacity-90">
              Earn rewards by levelling up your social game
            </p>
            {/* stats */}
            <div className="flex gap-6 lg:gap-8 mt-5 lg:mt-6 pl-1">
              <div className="flex flex-col items-center text-white text-[11px] lg:text-sm font-medium">
                <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full border-[1.5px] border-[#2E9EEE] flex items-center justify-center shadow-[0_0_15px_rgba(46,158,238,0.35)] mb-2">
                  <img src="/post.png" className="w-6 h-6 lg:w-[28px] lg:h-[28px]" />
                </div>
                Posts
              </div>
              <div className="flex flex-col items-center text-white text-[11px] lg:text-sm font-medium">
                <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full border-[1.5px] border-[#FFC39B] flex items-center justify-center shadow-[0_0_15px_rgba(255,195,155,0.35)] mb-2">
                  <img src="/followers.png" className="w-6 h-6 lg:w-[28px] lg:h-[28px]" />
                </div>
                Followers
              </div>
              <div className="flex flex-col items-center text-white text-[11px] lg:text-sm font-medium">
                <div className="w-[48px] h-[48px] lg:w-[56px] lg:h-[56px] rounded-full border-[1.5px] border-[#B287FF] flex justify-center items-center shadow-[0_0_15px_rgba(178,135,255,0.35)] mb-2">
                  <img src="/likes.png" className="w-6 h-6 lg:w-[28px] lg:h-[28px]" />
                </div>
                Likes
              </div>
            </div>
          </div>

          {/* star side */}
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 order-1 lg:order-2">
            {/* star and glow */}
            <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full" />
            <img
              src="/star.png"
              alt="star"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,100,0.5)]"
            />
          </div>
        </div>
      </div>
    );
}