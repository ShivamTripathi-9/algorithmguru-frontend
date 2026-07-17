import { useNavigate } from "react-router-dom";

export default function StartLearningCard({ project }) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-24 rounded-2xl border border-[#16223A]/8 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Ready to start?
      </h2>

      <p className="mt-3 text-[#5B6E8C]">
        Complete this project step by step and track your learning progress.
      </p>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-[#5B6E8C]">Project progress</span>
          <span className="font-medium text-[#16223A]">{project.progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-[#16223A]/8">
          <div
            className="h-2 rounded-full bg-[#119DA4]"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={() => navigate(`/learn/${project.id}/1`)}
        className="mt-8 w-full rounded-lg bg-[#119DA4] py-3 font-medium text-white transition hover:bg-[#0C7E83]"
      >
        Start learning
      </button>
    </div>
  );
}