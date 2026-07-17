import { useNavigate } from "react-router-dom";

export default function StartLearningCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-24 rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">Ready to Start?</h2>

      <p className="mt-3 text-slate-500">
        Complete this project step by step and track your learning progress.
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span>Project Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-indigo-600"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={() => navigate(`/learn/${project.id}/1`)}
        className="mt-8 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        🚀 Start Learning
      </button>
    </div>
  );
}
