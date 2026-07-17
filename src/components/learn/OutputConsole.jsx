import { CheckCircle2, XCircle, Terminal } from "lucide-react";

export default function OutputConsole({ output, runResult }) {
  return (
    <div className="h-full flex flex-col bg-[#F3F8FC] dark:bg-[#0E0E0D]">
      
      {/* Header bar to match the rest of the panes */}
      <div className="shrink-0 px-4 pt-3 pb-2 flex items-center gap-1.5 border-b border-[#16223A]/5 dark:border-white/5">
        <Terminal size={14} className="text-[#5B6E8C]/70 dark:text-white/40" />
        <p className="text-[#5B6E8C]/70 dark:text-white/40 text-xs uppercase tracking-wide font-medium">
          Console Output
        </p>
      </div>

      {/* Validation / Execution Result Banner */}
      {runResult && (
        <div
          className={`shrink-0 mx-4 mt-3 rounded-lg px-3 py-2.5 text-xs flex items-start gap-2 border ${
            runResult.success
              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
              : "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400"
          }`}
        >
          {runResult.success ? (
            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
          ) : (
            <XCircle size={15} className="mt-0.5 shrink-0 text-red-500" />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold">{runResult.message}</p>
            {runResult.errors?.length > 0 && (
              <ul className="mt-1.5 list-disc list-inside space-y-1 opacity-90 font-mono text-[11px]">
                {runResult.errors.map((e, i) => (
                  <li key={i} className="leading-relaxed break-words">{e}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Actual Output Area */}
      <div className="flex-1 min-h-0 overflow-auto p-4">
        <pre className="text-[#16223A] dark:text-white/80 text-xs md:text-sm whitespace-pre-wrap font-mono leading-relaxed">
          {output || (
            <span className="text-[#5B6E8C]/50 dark:text-white/30 italic font-sans">
              Run your code to see the output here...
            </span>
          )}
        </pre>
      </div>
    </div>
  );
}