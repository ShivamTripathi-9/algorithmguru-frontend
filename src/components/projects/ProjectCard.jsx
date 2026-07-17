import { useNavigate } from "react-router-dom";
import { Clock3, ArrowRight, BarChart3 } from "lucide-react";

const difficultyColors = {
  Beginner: "bg-[#119DA4]/10 text-[#119DA4]",
  Intermediate: "bg-amber-100 text-amber-700",
  Advanced: "bg-rose-100 text-rose-700",
};

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(22,34,58,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
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
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium ${
            difficultyColors[project.difficulty]
          }`}
        >
          {project.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-medium text-[#119DA4]">{project.category}</p>

        <h3 className="mt-2 text-xl font-semibold text-[#16223A]">{project.title}</h3>

        <p className="mt-3 line-clamp-2 text-sm text-[#5B6E8C]">{project.description}</p>

        {/* Meta */}
        <div className="mt-5 flex items-center justify-between text-sm text-[#5B6E8C]">
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
        <div className="mt-4 h-1.5 rounded-full bg-[#16223A]/10">
          <div
            className="h-1.5 rounded-full bg-[#119DA4]"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        {/* Button */}
        <button
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#16223A] py-3 font-medium text-white transition-colors hover:bg-[#119DA4]"
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