import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import ProjectHero from "../components/projectDetails/ProjectHero";
import ProjectOverview from "../components/projectDetails/ProjectOverview";
import SkillsLearned from "../components/projectDetails/SkillsLearned";
import LearningOutcomes from "../components/projectDetails/LearningOutcomes";
import ProjectSteps from "../components/projectDetails/ProjectSteps";
import StartLearningCard from "../components/projectDetails/StartLearningCard";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-slate-800">Project Not Found</h2>
        <button
          onClick={() => navigate("/projects")}
          className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ProjectHero project={project} />

      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <ProjectOverview project={project} />
          <SkillsLearned project={project} />
          <LearningOutcomes project={project} />
          <ProjectSteps project={project} />
        </div>

        <div>
          <StartLearningCard project={project} />
        </div>
      </div>
    </div>
  );
}
