import { create } from "zustand";
import { listProjects } from "../lib/api";

const CATEGORY_MAP = {
  "machine-learning": "Machine Learning",
  "deep-learning": "Deep Learning",
  nlp: "NLP",
  "computer-vision": "Computer Vision",
  "generative-ai": "Generative AI",
  "ai-agents": "AI Agents",
};

const DIFFICULTY_MAP = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function normalizeProject(p) {
  return {
    ...p,
    id: p._id || p.id,
    time: p.time ?? (p.estimated_hours != null ? `${p.estimated_hours} Hours` : "N/A"),
    difficulty: DIFFICULTY_MAP[p.difficulty?.toLowerCase()] ?? p.difficulty ?? "Beginner",
    category: CATEGORY_MAP[p.category?.toLowerCase()] ?? p.category ?? "Machine Learning",
    progress: p.progress ?? 0,
    image: p.image || "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=900&q=80",
    description: p.description || "",
  };
}

const useProjectsStore = create((set) => ({
  projects: [],
  loading: false,
  error: null,

  fetchProjects: async () => {
    set({ loading: true, error: null });
    try {
      const data = await listProjects();

      const list = Array.isArray(data)
        ? data
        : Array.isArray(data?.projects)
        ? data.projects
        : [];

      if (list.length === 0) {
        set({
          projects: [],
          loading: false,
          error: "No projects available in the database yet. Please check back later.",
        });
        return;
      }

      set({ projects: list.map(normalizeProject), loading: false });
    } catch (err) {
      set({
        loading: false,
        error: err.message || "There was a problem loading projects. Please try again.",
      });
    }
  },
}));

export default useProjectsStore;