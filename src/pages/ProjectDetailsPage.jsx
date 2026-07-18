import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getProject, getProgress } from "../lib/api";
import { listSteps, isProjectLinked } from "../lib/executeApi";
import ProjectHero from "../components/projectDetails/ProjectHero";
import ProjectOverview from "../components/projectDetails/ProjectOverview";
import SkillsLearned from "../components/projectDetails/SkillsLearned";
import LearningOutcomes from "../components/projectDetails/LearningOutcomes";
import ProjectSteps from "../components/projectDetails/ProjectSteps";
import StartLearningCard from "../components/projectDetails/StartLearningCard";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getProject(id)
      .then(async (data) => {
        if (cancelled) return;
        const linked = isProjectLinked(data.slug);

        let steps = [{ id: 1, title: "Coming soon" }];
        if (linked) {
          try {
            const backendSteps = await listSteps(data.slug);
            const list = Array.isArray(backendSteps) ? backendSteps : backendSteps?.steps ?? [];
            steps = list.map((s, i) => ({
              id: i + 1,
              title: s.title ?? s.name ?? `Step ${i + 1}`,
            }));
          } catch {
            steps = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, title: `Step ${i + 1}` }));
          }
        }

        let progressPct = 0;
        try {
          const prog = await getProgress(id);
          progressPct = prog.progress ?? 0;
        } catch {
          // not started yet, stays 0%
        }

        setProject({
          id: data.id,
          title: data.title ?? data.name ?? "Untitled Project",
          description: data.description ?? "",
          category: data.category ?? "AI / ML",
          difficulty: data.difficulty ?? "Beginner",
          time: data.estimated_hours ? `${data.estimated_hours}h` : "Self-paced",
          progress: progressPct,
          overview: data.description ?? "No overview available yet.",
          skills: data.skills ?? ["Python", "Machine Learning"],
          outcomes: data.outcomes ?? ["Build a working end-to-end project", "Practice real-world ML workflow"],
          steps,
        });
      })
      .catch(() => {
        if (!cancelled) toast.error("Couldn't load project");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-[#5B6E8C]">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
          Project not found
        </h2>
        <button
          onClick={() => navigate("/projects")}
          className="rounded-lg bg-[#119DA4] px-6 py-3 font-medium text-white transition hover:bg-[#0C7E83]"
        >
          Back to projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7FAFB]">
      <ProjectHero project={project} />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-3">
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