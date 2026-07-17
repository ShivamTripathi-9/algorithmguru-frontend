export default function SkillsLearned({ project }) {
  return (
    <section className="rounded-2xl border border-[#16223A]/8 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Skills you&apos;ll learn
      </h2>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#119DA4]/10 px-4 py-2 text-sm font-medium text-[#0C7E83]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}