import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

export default function ProgressSidebar({ project, currentStep, onStepClick }) {
  const steps = project?.steps || [];
  const progress = Math.round((currentStep / steps.length) * 100);

  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">Project Progress</h2>
        <p className="mt-1 text-sm text-slate-500">{project?.title}</p>
      </div>

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">Overall Progress</span>
          <span className="font-bold text-indigo-600">{progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((step) => {
          const status =
            step.id < currentStep ? "completed" : step.id === currentStep ? "current" : "pending";
          return (
            <button
              key={step.id}
              onClick={() => onStepClick(step.id)}
              className="flex w-full items-start gap-3 rounded-xl p-2 text-left hover:bg-slate-50"
            >
              {status === "completed" && <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-green-600" />}
              {status === "current" && <PlayCircle size={22} className="mt-0.5 shrink-0 text-indigo-600" />}
              {status === "pending" && <Circle size={22} className="mt-0.5 shrink-0 text-slate-300" />}
              <div>
                <p className="font-medium text-slate-800">Step {step.id}</p>
                <p className="text-sm text-slate-500">{step.title}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-indigo-50 p-4">
        <h3 className="font-semibold text-indigo-700">🎯 Keep Going!</h3>
        <p className="mt-1 text-sm text-slate-600">
          Complete all steps to finish this project and earn your certificate.
        </p>
      </div>
    </aside>
  );
}
