import { Bell, Search } from "lucide-react";

export default function AppTopbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:border-indigo-500"
        />
      </div>

      <div className="ml-6 flex items-center gap-4">
        <button className="rounded-xl bg-slate-100 p-3 hover:bg-slate-200">
          <Bell size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
          S
        </div>
      </div>
    </header>
  );
}