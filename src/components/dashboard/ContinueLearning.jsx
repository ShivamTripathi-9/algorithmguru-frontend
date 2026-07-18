import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../lib/api";

export default function ContinueLearning() {
  const navigate = useNavigate();

  const [activeProjects, setActiveProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActiveProjects();
  }, []);

  const fetchActiveProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getDashboard();
      const list = Array.isArray(data?.projects) ? data.projects : [];

      setActiveProjects(list);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <p className="text-center text-sm text-[#5B6E8C]">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <p className="text-center text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
      <div className="flex items-center justify-between  ">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
            Continue learning
          </h2>
          <p className="mt-1 text-sm text-[#5B6E8C]">Resume where you left off.</p>
        </div>
        <button
          onClick={() => navigate("/projects")}
          className="text-sm font-medium text-[#119DA4] hover:text-[#0C7E83]"
        >
          View all
        </button>
      </div>

      {activeProjects.length === 0 ? (
        <p className="mt-8 text-sm text-[#5B6E8C]">
          You haven't started any project yet.
        </p>
      ) : (
        <div className="mt-8 space-y-5">
          {activeProjects.map((item) => {
            const { enrollment, project, stats } = item;
            return (
              <div
                key={enrollment.id}
                className="rounded-xl border border-[#16223A]/8 p-5 transition hover:border-[#119DA4]/40"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#119DA4]">
                      {project.category?.replace(/-/g, " ")}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[#16223A]">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowRight className="text-[#5B6E8C]" size={20} />
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-[#5B6E8C]">Progress</span>
                    <span className="font-medium text-[#16223A]">
                      {stats?.progress || 0}%
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#16223A]/8">
                    <div
                      className="h-full rounded-full bg-[#119DA4]"
                      style={{ width: `${stats?.progress || 0}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/learn/${project.slug}/1`)}
                  className="mt-5 rounded-lg bg-[#16223A] px-5 py-2 font-medium text-white transition hover:bg-[#119DA4]"
                >
                  Continue project
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}