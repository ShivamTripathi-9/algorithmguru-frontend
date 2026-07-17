import { Grid2X2, List } from "lucide-react";

export default function ViewToggle({ view, onChange }) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-[#16223A]/10">
      <button
        onClick={() => onChange("grid")}
        className={`p-3 transition ${view === "grid" ? "bg-[#119DA4] text-white" : "bg-white text-[#16223A]/60 hover:bg-[#16223A]/5"}`}
      >
        <Grid2X2 size={18} />
      </button>

      <button
        onClick={() => onChange("list")}
        className={`p-3 transition ${view === "list" ? "bg-[#119DA4] text-white" : "bg-white text-[#16223A]/60 hover:bg-[#16223A]/5"}`}
      >
        <List size={18} />
      </button>
    </div>
  );
}