import { Grid2X2, List } from "lucide-react";

export default function ViewToggle({ view, onChange }) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-slate-300">
      <button
        onClick={() => onChange("grid")}
        className={`p-3 transition ${view === "grid" ? "bg-indigo-600 text-white" : "bg-white hover:bg-slate-100"}`}
      >
        <Grid2X2 size={18} />
      </button>

      <button
        onClick={() => onChange("list")}
        className={`p-3 transition ${view === "list" ? "bg-indigo-600 text-white" : "bg-white hover:bg-slate-100"}`}
      >
        <List size={18} />
      </button>
    </div>
  );
}
