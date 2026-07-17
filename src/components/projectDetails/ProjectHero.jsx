import { Clock3, BarChart3, BookOpen } from "lucide-react";

export default function ProjectHero({ project }) {
  return (
    <section className="bg-[#16223A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <span className="rounded-full bg-[#119DA4]/20 px-4 py-1 text-sm text-[#4FD3DA]">
          {project.category}
        </span>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">{project.title}</h1>

        <p className="mt-5 max-w-3xl text-lg text-white/70">{project.description}</p>

        <div className="mt-8 flex flex-wrap gap-6 text-white/80">
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
            {project.steps.length} Learning steps
          </div>
        </div>
      </div>
    </section>
  );
}