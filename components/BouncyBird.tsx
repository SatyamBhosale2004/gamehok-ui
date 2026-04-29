"use client";

import { useRouter } from "next/navigation";

export default function BouncyBanner() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/bouncy")}
      className="relative mt-4 rounded-xl overflow-hidden cursor-pointer active:scale-[0.98] transition"
    >
      {/* BACKGROUND */}
      <img src="/bouncybird.png" className="w-full h-[120px] object-cover" />

      {/* CONTENT */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* TOP TEXT */}
        <div className="leading-tight">
          {/* Introducing */}
          <p
            className="text-[15px] font-bold"
            style={{
              background: "linear-gradient(90deg, #311A61, #1C192E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Introducing
          </p>

          {/* BOUNCY BIRD */}
          <h2
            className="py-1 text-[18px] leading-none font-bold "
            style={{
              fontFamily: "Irish Grover",
              color: "#8F4216",
            }}
          >
            BOUNCY BIRD
          </h2>

          {/* Subtext */}
          <p
            className="text-[12px] font-semibold mt-[1px]"
            style={{ color: "#6B1DF8" }}
          >
            A game for everyone
          </p>
        </div>

        {/* BOTTOM ROW */}
        <div className="flex justify-between items-end">
          {/* Left text */}
          <div className="flex items-center gap-1 text-[12px] text-black font-semibold">
            Play daily, win weekly
            <img src="/coins.png" className="w-5 h-5" />
          </div>

          {/* Play Button IMAGE */}
          <img
            src="/btn.png"
            className="absolute bottom-4 right-4 w-20"
            onClick={(e) => {
              e.stopPropagation();
              router.push("/bouncy");
            }}
          />
        </div>
      </div>

      {/* BIRD (positioned exactly) */}
      <img
        src="/bird.png"
        className="absolute right-3 top-1 w-24 object-contain"
      />
    </div>
  );
}
