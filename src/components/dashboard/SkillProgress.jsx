const skills = [
  { name: "Machine Learning", progress: 85 },
  { name: "Deep Learning", progress: 70 },
  { name: "Computer Vision", progress: 60 },
  { name: "Natural Language Processing", progress: 75 },
  { name: "Generative AI", progress: 90 },
  { name: "AI Agents", progress: 45 },
];

export default function SkillProgress() {
  return (
    <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Skill progress
      </h2>

      <p className="mt-2 text-sm text-[#5B6E8C]">
        Track your learning across AI domains.
      </p>

      <div className="mt-8 space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-[#16223A]">{skill.name}</span>

              <span className="text-sm font-medium text-[#5B6E8C]">
                {skill.progress}%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[#16223A]/8">
              <div
                className="h-full rounded-full bg-[#119DA4]"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}