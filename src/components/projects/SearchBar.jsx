import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative mb-6">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5B6E8C]"
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search AI projects..."
        className="w-full rounded-xl border border-[#16223A]/10 bg-white py-4 pl-12 pr-4 text-[#16223A] outline-none transition focus:border-[#119DA4]"
      />
    </div>
  );
}