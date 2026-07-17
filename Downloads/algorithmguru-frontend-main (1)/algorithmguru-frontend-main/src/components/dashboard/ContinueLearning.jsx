import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const activeProjects = [
  { id: 1, title: "Spam Email Detection", category: "Machine Learning", progress: 72 },
  { id: 2, title: "AI Chatbot", category: "Natural Language Processing", progress: 45 },
];

export default function ContinueLearning() {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Continue Learning</h2>
          <p className="mt-1 text-sm text-slate-500">Resume where you left off.</p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="text-indigo-600 hover:underline"
        >
          View All
        </button>
      </div>

      <div className="mt-8 space-y-5">
        {activeProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-500 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium uppercase text-indigo-600">{project.category}</p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900">{project.title}</h3>
              </div>
              <ArrowRight className="text-slate-400" size={20} />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-slate-500">Progress</span>
                <span className="font-semibold">{project.progress}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-indigo-600"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => navigate(`/learn/${project.id}/1`)}
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2 text-white transition hover:bg-indigo-700"
            >
              Continue Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
