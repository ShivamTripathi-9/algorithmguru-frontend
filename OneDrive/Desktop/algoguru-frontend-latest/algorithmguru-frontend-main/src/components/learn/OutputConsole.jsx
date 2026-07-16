import { CheckCircle2, XCircle } from "lucide-react";

export default function OutputConsole({ output, runResult }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-green-400 shadow-sm">
      <h2 className="mb-4 text-lg font-bold text-white">Output Console</h2>

      {runResult && (
        <div
          className={`mb-4 flex items-start gap-2 rounded-lg px-3 py-2 text-xs ${
            runResult.success
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {runResult.success ? (
            <CheckCircle2 size={14} className="mt-0.5 shrink-0" />
          ) : (
            <XCircle size={14} className="mt-0.5 shrink-0" />
          )}
          <div>
            <p className="font-medium">{runResult.message}</p>
            {runResult.errors?.length > 0 && (
              <ul className="mt-1 list-inside list-disc space-y-0.5 opacity-90">
                {runResult.errors.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <pre className="overflow-x-auto whitespace-pre-wrap text-sm">
        {output || "Run your code to see output here."}
      </pre>
    </div>
  );
}
