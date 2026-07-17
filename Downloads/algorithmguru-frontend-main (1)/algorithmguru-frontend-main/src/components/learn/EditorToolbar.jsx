import { Play, RotateCcw, Upload, Loader2, Code2 } from "lucide-react";
import toast from "react-hot-toast";

export default function EditorToolbar({
  isBackendLinked,
  running,
  submitting,
  codeLoading,
  onRun,
  onSubmit,
  onReset,
  accent = "#4f46e5", // Default accent color agar pass na ho
}) {
  const handleRun = () => {
    if (!isBackendLinked) {
      toast("This project isn't wired to a backend yet.", { icon: "🚧" });
      return;
    }
    onRun();
  };

  const handleSubmit = () => {
    if (!isBackendLinked) {
      toast("This project isn't wired to a backend yet.", { icon: "🚧" });
      return;
    }
    onSubmit();
  };

  return (
    <div className="shrink-0 flex items-center justify-between px-3 py-2 border-b border-[#16223A]/10 dark:border-white/10 bg-[#F3F8FC] dark:bg-[#0E0E0D]">
      
      {/* Left side: Label/Icon */}
      <div className="flex items-center gap-2 px-1">
        <Code2 size={15} className="text-[#5B6E8C]/70 dark:text-white/40" />
        <span className="text-[#5B6E8C] dark:text-white/50 text-xs uppercase tracking-wide font-medium">
          Python Editor
        </span>
      </div>

      {/* Right side: Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={onReset}
          disabled={running || submitting || codeLoading}
          className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-[#5B6E8C] dark:text-white/70 bg-[#16223A]/[0.06] dark:bg-white/[0.06] hover:bg-[#16223A]/[0.1] dark:hover:bg-white/[0.1] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          title="Reset Code"
        >
          <RotateCcw size={14} />
          <span className="hidden sm:inline">Reset</span>
        </button>

        <button
          onClick={handleRun}
          disabled={running || submitting || codeLoading}
          className="cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-[#16223A] dark:text-white border border-[#16223A]/10 dark:border-white/10 hover:bg-[#16223A]/[0.04] dark:hover:bg-white/[0.04] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {running ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />}
          Run
        </button>

        <button
          onClick={handleSubmit}
          disabled={submitting || running || codeLoading}
          className="cursor-pointer flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium text-white shadow-sm transition-transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: accent }}
        >
          {submitting ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
          Submit
        </button>
      </div>
    </div>
  );
}