import { useEffect, useState } from "react";
import { Clock3, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projectsAPI } from "../../services/api";

const badgeColor = {
  beginner: "bg-green-50 text-green-700",
  intermediate: "bg-amber-50 text-amber-700",
  advanced: "bg-red-50 text-red-700",
};

const CARDS_PER_VIEW = 3;

export default function RecommendedProjects() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await projectsAPI.getAll();

      // backend response ke dono shapes handle kar liye:
      // 1) directly array
      // 2) { success, data: [] }
      const list = Array.isArray(res.data) ? res.data : res.data?.data || [];
      setProjects(list);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.max(1, Math.ceil(projects.length / CARDS_PER_VIEW));

  const goPrev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  if (loading) {
    return (
      <section className="p-6 max-w-6xl mx-auto">
        <p className="text-center">Loading Projects...</p>
      </section>
    );
  }

  return (
    <section className="p-6 mx-auto max-w-6xl px-4">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
            Recommended Projects
          </h2>
          <p className="mt-1 text-sm text-[#5B6E8C]">
            Start building practical AI applications.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/projects")}
            className="text-sm font-medium text-[#119DA4] hover:text-[#0C7E83]"
          >
            View All
          </button>

          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                className="rounded-full border border-[#16223A]/10 p-2 text-[#16223A] transition hover:border-[#119DA4]/40 hover:text-[#119DA4]"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="rounded-full border border-[#16223A]/10 p-2 text-[#16223A] transition hover:border-[#119DA4]/40 hover:text-[#119DA4]"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Slider viewport */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full flex-shrink-0 gap-6 md:grid-cols-2 xl:grid-cols-3"
            >
              {projects
                .slice(
                  pageIndex * CARDS_PER_VIEW,
                  pageIndex * CARDS_PER_VIEW + CARDS_PER_VIEW
                )
                .map((project) => (
                  <div
                    key={project.id}
                    className="cursor-pointer overflow-hidden rounded-2xl border border-[#16223A]/8 bg-white transition hover:border-[#119DA4]/40"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <img
                      src={
                        project.thumbnail_url ||
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
                      }
                      alt={project.title}
                      className="h-44 w-full object-cover"
                    />

                    <div className="p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-[#119DA4] capitalize">
                          {project.category?.replace(/-/g, " ")}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
                            badgeColor[project.difficulty] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {project.difficulty}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#16223A]">
                        {project.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-2 text-sm text-[#5B6E8C]">
                        <Clock3 size={16} />
                        {project.estimated_hours
                          ? `${project.estimated_hours} hrs`
                          : "—"}
                      </div>

                      <div className="mt-5">
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-[#5B6E8C]">Progress</span>
                          <span className="text-[#16223A]">
                            {project.progress || 0}%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-[#16223A]/8">
                          <div
                            className="h-full rounded-full bg-[#119DA4]"
                            style={{ width: `${project.progress || 0}%` }}
                          />
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/projects/${project.id}`);
                        }}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#119DA4] py-3 font-medium text-white transition hover:bg-[#0C7E83]"
                      >
                        Start Project
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                i === page ? "w-6 bg-[#119DA4]" : "w-2 bg-[#16223A]/15"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}