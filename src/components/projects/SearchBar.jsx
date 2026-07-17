import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-6">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search AI projects..."
        className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-indigo-500"
      />
    </div>
  );
}
