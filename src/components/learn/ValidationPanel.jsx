import { ChevronRight } from "lucide-react";

export default function ValidationPanel({ currentStep, totalSteps, onNext }) {
  const isLast = currentStep >= totalSteps;
  const progress = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-6 shadow-sm">
      <h2 className="text-xl font-bold text-green-700">✅ Step {currentStep} of {totalSteps}</h2>
      <p className="mt-3 text-green-600">
        {isLast ? "🎉 You've completed all steps! Great work." : "Great job! Continue to the next step."}
      </p>

      <div className="mt-5 h-3 rounded-full bg-green-200">
        <div className="h-3 rounded-full bg-green-600 transition-all" style={{ width: `${progress}%` }} />
      </div>

      <p className="mt-2 text-sm text-green-700">{progress}% of this project completed.</p>

      {!isLast && (
        <button
          onClick={onNext}
          className="mt-5 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Next Step <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}
