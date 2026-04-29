export default function TopBar() {
    return (
        <div className = "flex justify-between items-center">

            <div className = "flex items-center gap-2">
                <div className = "w-8 h-8 rounded-full bg-gray-500" />
            </div>
            {/* profile */}
            <div className = "flex items-center gap-3">
                {/* right part */}
                <div className = "bg-green-500 shadow-md px-3 py-1 rounded-full text-xs text-white">
                    2456
                </div>
                {/* coins */}
                <div className = "text-white text-lg">
                    🔔
                </div>
                {/* bell */}

            </div>
        </div>
    );
}