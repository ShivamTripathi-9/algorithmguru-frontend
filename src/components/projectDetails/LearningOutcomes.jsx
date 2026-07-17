export default function LearningOutcomes({ project }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border">
      <h2 className="text-2xl font-bold">Learning Outcomes</h2>

      <ul className="mt-6 space-y-3">
        {project.outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-green-600">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
