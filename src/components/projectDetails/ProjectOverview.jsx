export default function ProjectOverview({ project }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border">
      <h2 className="text-2xl font-bold">Project Overview</h2>

      <p className="mt-4 leading-8 text-slate-600">{project.overview}</p>
    </section>
  );
}
