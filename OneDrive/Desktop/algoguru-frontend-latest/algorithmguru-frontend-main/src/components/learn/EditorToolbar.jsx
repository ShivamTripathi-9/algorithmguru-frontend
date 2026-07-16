import { Play, RotateCcw, Upload, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function EditorToolbar({
  isBackendLinked,
  running,
  submitting,
  codeLoading,
  onRun,
  onSubmit,
  onReset,
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
    <div className="flex flex-wrap items-center justify-between rounded-2xl border bg-white p-4 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">Python Editor</h2>

      <div className="flex gap-3">
        <button
          onClick={handleRun}
          disabled={running || codeLoading}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {running ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />}
          {running ? "Running..." : "Run"}
        </button>

        <button
          onClick={handleSubmit}
          disabled={submitting || running || codeLoading}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
          {submitting ? "Submitting..." : "Submit"}
        </button>

        <button
          onClick={onReset}
          disabled={running || codeLoading}
          className="flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-white hover:bg-slate-800 disabled:opacity-60"
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>
    </div>
  );
}
