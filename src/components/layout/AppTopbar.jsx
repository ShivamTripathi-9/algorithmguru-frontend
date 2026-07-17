import { Bell, Search } from "lucide-react";

export default function AppTopbar() {
  return (
    <header className="flex items-center justify-between border-b border-[#16223A]/8 bg-white px-6 py-4">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5B6E8C]"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg border border-[#16223A]/10 py-2 pl-10 pr-4 text-[#16223A] outline-none focus:border-[#119DA4]"
        />
      </div>

      <div className="ml-6 flex items-center gap-4">
        <button className="rounded-lg bg-[#16223A]/5 p-3 transition hover:bg-[#16223A]/8">
          <Bell size={18} className="text-[#16223A]" />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#119DA4] font-semibold text-white">
          S
        </div>
      </div>
    </header>
  );
}