export default function ProjectSteps({ project }) {
  return (
    <section className="rounded-2xl border border-[#16223A]/8 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Project steps
      </h2>

      <div className="mt-8 space-y-4">
        {project.steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-4 rounded-xl border border-[#16223A]/8 p-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#119DA4] font-semibold text-white">
              {step.id}
            </div>

            <p className="font-medium text-[#16223A]">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}