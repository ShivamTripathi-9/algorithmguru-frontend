import { useState } from "react";
import { Bot, Send } from "lucide-react";

export default function MentorPanel() {
  const [question, setQuestion] = useState("");

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-indigo-100 p-2">
          <Bot className="text-indigo-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            AI Mentor
          </h2>
          <p className="text-sm text-slate-500">
            Ask for hints and guidance
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
        💡 Hint: Start by importing <strong>pandas</strong> and loading the
        dataset using <code>pd.read_csv()</code>.
      </div>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        placeholder="Ask the AI mentor..."
        className="mt-4 w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-indigo-500"
      />

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
        <Send size={18} />
        Ask Mentor
      </button>
    </div>
  );
}