import { Clock3, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  { id: 1, title: "Spam Email Classifier", category: "Machine Learning", difficulty: "Beginner", duration: "3 Hours", progress: 0, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
  { id: 2, title: "AI Chatbot", category: "Natural Language Processing", difficulty: "Intermediate", duration: "5 Hours", progress: 25, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" },
  { id: 3, title: "Image Classifier", category: "Computer Vision", difficulty: "Beginner", duration: "4 Hours", progress: 60, image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80" },
];

const badgeColor = {
  Beginner: "bg-green-50 text-green-700",
  Intermediate: "bg-amber-50 text-amber-700",
  Advanced: "bg-red-50 text-red-700",
};

export default function RecommendedProjects() {
  const navigate = useNavigate();

  return (
    <section className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
            Recommended projects
          </h2>
          <p className="mt-1 text-sm text-[#5B6E8C]">
            Start building practical AI applications.
          </p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="text-sm font-medium text-[#119DA4] hover:text-[#0C7E83]"
        >
          View all
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="cursor-pointer overflow-hidden rounded-2xl border border-[#16223A]/8 bg-white transition hover:border-[#119DA4]/40"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />

            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-[#119DA4]">{project.category}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeColor[project.difficulty]}`}>
                  {project.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#16223A]">{project.title}</h3>

              <div className="mt-3 flex items-center gap-2 text-sm text-[#5B6E8C]">
                <Clock3 size={16} />
                {project.duration}
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#5B6E8C]">Progress</span>
                  <span className="text-[#16223A]">{project.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#16223A]/8">
                  <div className="h-full rounded-full bg-[#119DA4]" style={{ width: `${project.progress}%` }} />
                </div>
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`); }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#119DA4] py-3 font-medium text-white transition hover:bg-[#0C7E83]"
              >
                Start project <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}