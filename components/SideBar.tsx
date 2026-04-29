import Image from "next/image";
import Link from "next/link";

export default function SideBar() {
  const navItems = [
    { name: "Home", icon: "/homeactive.svg", active: true },
    { name: "My Tournament", icon: "/cup.svg" },
    { name: "Social", icon: "/social.svg" },
    { name: "Chat", icon: "/chat.svg" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-[240px] bg-[#001208] h-screen fixed left-0 top-0 border-r border-gray-800">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 h-[88px] border-b border-gray-800">
        <div className="w-9 h-9 rounded-full flex justify-center items-center bg-gradient-to-br from-green-400 to-green-600">
           {/* Simulate the G logo */}
           <div className="w-5 h-5 bg-white rounded-[4px] relative" style={{ maskImage: "radial-gradient(circle at 100% 0%, transparent 6px, black 7px)", maskSize: "100% 100%", maskRepeat: "no-repeat" }}>
              <div className="absolute right-0 bottom-0 w-3 h-3 bg-[#001208] rounded-tl-full" />
           </div>
        </div>
        <span className="text-xl font-bold text-white tracking-widest mt-0.5">GAMEHOK</span>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-2 px-3 mt-6 flex-1">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href="#"
            className={`flex items-center gap-4 px-3 py-3 rounded-lg transition-colors relative ${
              item.active ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-500 rounded-r-md" />
            )}
            <div className="relative flex justify-center items-center w-6 h-6 ml-1">
              <img
                src={item.icon}
                alt={item.name}
                className={`w-5 h-5 ${item.active ? "" : "opacity-60"}`}
              />
            </div>
            <span
              className={`text-sm font-medium ${
                item.active ? "text-white" : "text-gray-400"
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="p-6">
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
