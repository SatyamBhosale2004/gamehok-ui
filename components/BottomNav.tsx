import Link from "next/link";

export default function BottomNav() {
  const navItems = [
    { name: "Home", icon: "/homeactive.svg", active: true, href: "/" },
    { name: "My Tournament", icon: "/cup.svg", active: false, href: "/tournament" },
    { name: "Social", icon: "/social.svg", active: false, href: "#" },
    { name: "Chats", icon: "/chat.svg", active: false, href: "#" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center z-[200]">
      <div className="w-full max-w-[400px] bg-black border-t-3 border-gray-700 px-4 py-1.5 flex justify-between items-center">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex flex-col items-center justify-center flex-1 relative cursor-pointer"
          >
            {item.active && (
              <div className="absolute -top-1 w-8 h-[3px] rounded-full bg-green-400 shadow-[0_0_10px_rgba(0,255,150,0.8)]" />
            )}

            {item.active && (
              <div className="absolute -top-3 w-14 h-14 bg-green-500/30 blur-2xl rounded-full" />
            )}

            <div className="w-12 h-10 flex items-center justify-center">
              <img
                src={item.icon}
                className={`w-6 h-6 ${item.active ? "" : "opacity-60"}`}
              />
            </div>

            {/* LABEL */}
            <span
              className={`text-[10px] mt-0.5 ${
                item.active ? "text-white" : "text-gray-400"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
