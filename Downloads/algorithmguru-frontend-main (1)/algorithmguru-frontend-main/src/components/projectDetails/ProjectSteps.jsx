export default function ProjectSteps({ project }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border">
      <h2 className="text-2xl font-bold">Project Steps</h2>

      <div className="mt-8 space-y-4">
        {project.steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4 rounded-xl border p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              {step.id}
            </div>

            <p className="font-medium">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
