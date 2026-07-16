const skills = [
  { name: "Machine Learning", progress: 85, color: "bg-blue-500" },
  { name: "Deep Learning", progress: 70, color: "bg-violet-500" },
  { name: "Computer Vision", progress: 60, color: "bg-emerald-500" },
  { name: "Natural Language Processing", progress: 75, color: "bg-orange-500" },
  { name: "Generative AI", progress: 90, color: "bg-pink-500" },
  { name: "AI Agents", progress: 45, color: "bg-indigo-500" },
];

export default function SkillProgress() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Skill Progress
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Track your learning across AI domains.
      </p>

      <div className="mt-8 space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-medium text-slate-700">
                {skill.name}
              </span>

              <span className="text-sm font-semibold text-slate-500">
                {skill.progress}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full ${skill.color}`}
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}