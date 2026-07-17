export default function SkillsLearned({ project }) {
  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm border">
      <h2 className="text-2xl font-bold">Skills You'll Learn</h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.skills.map((skill) => (
          <span key={skill} className="rounded-full bg-indigo-100 px-4 py-2 text-indigo-700">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
