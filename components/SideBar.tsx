import Link from "next/link";

interface SideBarProps {
  activePage?: string;
}

export default function SideBar({ activePage = "home" }: SideBarProps) {
  const navItems = [
    { name: "Home", icon: "/homeactive.svg", page: "home", href: "/" },
    { name: "My Tournament", icon: "/cup.svg", page: "tournament", href: "/tournament" },
    { name: "Social", icon: "/social.svg", page: "social", href: "#" },
    { name: "Chat", icon: "/chat.svg", page: "chat", href: "#" },
  ];

  return (
    <div className="hidden lg:flex flex-col w-[240px] bg-[#001208] h-screen fixed left-0 top-0 border-r border-gray-800">
      {/* Logo */}
      <div className="flex items-center px-6 h-[88px] border-b border-gray-800">
        <img src="/logo.svg" alt="GAMEHOK" className="h-9 w-auto" />
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-2 px-3 mt-6 flex-1">
        {navItems.map((item, i) => {
          const isActive = activePage === item.page;
          return (
            <Link
              key={i}
              href={item.href}
              className={`flex items-center gap-4 px-3 py-3 rounded-lg transition-colors relative ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-500 rounded-r-md" />
              )}
              <div className="relative flex justify-center items-center w-6 h-6 ml-1">
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`w-5 h-5 ${isActive ? "" : "opacity-60"}`}
                />
              </div>
              <span
                className={`text-sm font-medium ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-6">
        <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors">
          <img src="/logout.svg" alt="Logout" className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
