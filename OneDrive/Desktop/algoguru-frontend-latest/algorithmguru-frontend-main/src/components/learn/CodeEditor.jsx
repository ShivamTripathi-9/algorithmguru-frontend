import Editor from "@monaco-editor/react";

/**
 * Controlled Monaco editor. Parent (LearnPage) owns the `code` state so
 * Run/Reset/Submit can all read the latest value.
 */
export default function CodeEditor({ code, onChange, loading }) {
  if (loading) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-3xl border border-slate-200 bg-slate-900 text-sm text-slate-400">
        Loading starter code...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <Editor
        height="500px"
        defaultLanguage="python"
        theme="vs-dark"
        value={code}
        onChange={(value) => onChange?.(value || "")}
        options={{
          fontSize: 15,
          minimap: { enabled: false },
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
}
