import { useNavigate } from "react-router-dom";
import { Clock3, ArrowRight, BarChart3 } from "lucide-react";

const difficultyColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onClick={() => navigate(`/projects/${project.id}`)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
            difficultyColors[project.difficulty]
          }`}
        >
          {project.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-medium text-indigo-600">{project.category}</p>

        <h3 className="mt-2 text-xl font-bold text-slate-900">{project.title}</h3>

        <p className="mt-3 line-clamp-2 text-sm text-slate-600">{project.description}</p>

        {/* Meta */}
        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            {project.time}
          </div>

          <div className="flex items-center gap-2">
            <BarChart3 size={16} />
            {project.progress}%
          </div>
        </div>

        {/* Progress */}
        <div className="mt-4 h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-indigo-600"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        {/* Button */}
        <button
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/projects/${project.id}`);
          }}
        >
          Start Project
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
