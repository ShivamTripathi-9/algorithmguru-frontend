import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange, loading, readOnly = false }) {
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0B0B0A] text-sm text-white/30">
        Loading...
      </div>
    );
  }

  return (
    <Editor
      height="100%"
      language="python"
      value={code}
      onChange={(val) => onChange?.(val ?? "")}
      theme="vs-dark"
      options={{
        fontSize: 14,
        fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, Menlo, monospace",
        minimap: { enabled: false },
        lineNumbersMinChars: 3,
        padding: { top: 16 },
        scrollBeyondLastLine: false,
        smoothScrolling: true,
        automaticLayout: true,
        renderLineHighlight: readOnly ? "none" : "line",
        overviewRulerLanes: 0,
        hideCursorInOverviewRuler: true,
        readOnly,
        domReadOnly: readOnly,
        scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
      }}
      loading={
        <div className="w-full h-full flex items-center justify-center bg-[#0B0B0A] text-white/30 text-sm">
          Loading editor...
        </div>
      }
    />
  );
}