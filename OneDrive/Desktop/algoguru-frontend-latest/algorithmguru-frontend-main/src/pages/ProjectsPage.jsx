import { useState, useMemo, useEffect } from "react";
import toast from "react-hot-toast";
import { PROJECTS as FALLBACK_PROJECTS } from "../data/projects";
import { listProjects } from "../lib/api";
import ProjectsHero from "../components/projects/ProjectsHero";
import SearchBar from "../components/projects/SearchBar";
import FilterBar from "../components/projects/FilterBar";
import SortDropdown from "../components/projects/SortDropdown";
import ViewToggle from "../components/projects/ViewToggle";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Pagination from "../components/projects/Pagination";

const PAGE_SIZE = 6;

// NestJS's /projects response shape doesn't guarantee display-only fields
// like image/difficulty/category/time/progress. Fill in sane defaults so
// the existing card UI never breaks, while keeping real id/title/description.
function normalizeProject(p) {
  return {
    id: p.id,
    title: p.title ?? p.name ?? "Untitled Project",
    description: p.description ?? "",
    category: p.category ?? "AI / ML",
    difficulty: p.difficulty ?? "Beginner",
    time: p.time ?? "Self-paced",
    progress: p.progress ?? 0,
    image:
      p.image ??
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
  };
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    listProjects()
      .then((data) => {
        if (cancelled) return;
        const list = Array.isArray(data) ? data : data?.projects ?? [];
        setProjects(list.length > 0 ? list.map(normalizeProject) : FALLBACK_PROJECTS);
      })
      .catch((err) => {
        if (cancelled) return;
        toast.error("Couldn't load projects from server, showing local data");
        setProjects(FALLBACK_PROJECTS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = useMemo(() => {
    let list = [...projects];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (difficulty !== "All") list = list.filter((p) => p.difficulty === difficulty);
    if (category !== "All") list = list.filter((p) => p.category === category);

    if (sort === "Beginner First") list.sort((a, b) => (a.difficulty === "Beginner" ? -1 : 1));
    else if (sort === "Advanced First") list.sort((a, b) => (a.difficulty === "Advanced" ? -1 : 1));
    else if (sort === "Shortest Duration")
      list.sort((a, b) => parseInt(a.time) - parseInt(b.time));
    else if (sort === "Most Popular") list.sort((a, b) => b.progress - a.progress);

    return list;
  }, [projects, search, difficulty, category, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (type, value) => {
    setPage(1);
    if (type === "difficulty") setDifficulty(value);
    if (type === "category") setCategory(value);
  };

  return (
    <>
      <ProjectsHero />

      <section className="bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-4">
          <SearchBar value={search} onChange={(v) => { setSearch(v); setPage(1); }} />

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <FilterBar
              difficulty={difficulty}
              category={category}
              onChange={handleFilterChange}
            />

            <div className="flex items-center gap-3">
              <SortDropdown value={sort} onChange={(v) => { setSort(v); setPage(1); }} />
              <ViewToggle view={view} onChange={setView} />
            </div>
          </div>

          <div className="mt-8">
            {loading ? (
              <div className="py-16 text-center text-slate-400">Loading projects...</div>
            ) : (
              <ProjectsGrid
                projects={paginated}
                view={view}
                onReset={() => {
                  setSearch("");
                  setDifficulty("All");
                  setCategory("All");
                  setSort("Newest");
                  setPage(1);
                }}
              />
            )}
          </div>

          {filtered.length > PAGE_SIZE && (
            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          )}
        </div>
      </section>
    </>
  );
}