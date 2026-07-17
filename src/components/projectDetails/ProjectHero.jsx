import { Clock3, BarChart3, BookOpen } from "lucide-react";

export default function ProjectHero({ project }) {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
          {project.category}
        </span>

        <h1 className="mt-4 text-5xl font-bold">{project.title}</h1>

        <p className="mt-5 max-w-3xl text-lg text-indigo-100">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <BarChart3 size={18} />
            {project.difficulty}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {project.time}
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            {project.steps.length} Learning Steps
          </div>
        </div>
      </div>
    </section>
  );
}
