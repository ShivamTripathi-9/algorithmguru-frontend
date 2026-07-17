import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LearningHeader({ project, step, currentStep, totalSteps, onNext, onPrev }) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <div>
          <p className="text-sm text-indigo-600">
            <Link to={`/projects/${project?.id}`} className="hover:underline">
              {project?.title}
            </Link>
            {" • "} Step {currentStep} of {totalSteps}
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            Step {currentStep}: {step?.title}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            disabled={currentStep <= 1}
            className="flex items-center gap-1 rounded-xl border px-4 py-2 text-sm font-medium disabled:opacity-40 hover:bg-slate-50"
          >
            <ChevronLeft size={16} /> Prev
          </button>
          <button
            onClick={onNext}
            disabled={currentStep >= totalSteps}
            className="flex items-center gap-1 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-40"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
