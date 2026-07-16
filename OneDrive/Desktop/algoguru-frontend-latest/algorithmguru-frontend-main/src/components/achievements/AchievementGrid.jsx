const achievements = [
  {
    id: 1,
    icon: "🚀",
    title: "First Project",
    description: "Complete your first AI project.",
    unlocked: true,
  },
  {
    id: 2,
    icon: "🔥",
    title: "7 Day Streak",
    description: "Learn for 7 consecutive days.",
    unlocked: true,
  },
  {
    id: 3,
    icon: "🧠",
    title: "ML Explorer",
    description: "Finish 5 Machine Learning lessons.",
    unlocked: false,
  },
  {
    id: 4,
    icon: "🤖",
    title: "AI Agent Builder",
    description: "Complete your first AI Agent project.",
    unlocked: false,
  },
];

export default function AchievementGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {achievements.map((item) => (
        <div
          key={item.id}
          className={`rounded-3xl border p-6 shadow-sm ${
            item.unlocked
              ? "border-amber-200 bg-white"
              : "border-slate-200 bg-slate-50 opacity-70"
          }`}
        >
          <div className="text-5xl">{item.icon}</div>

          <h2 className="mt-4 text-xl font-bold">
            {item.title}
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            {item.description}
          </p>

          <div className="mt-5">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.unlocked
                  ? "bg-green-100 text-green-700"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {item.unlocked ? "Unlocked" : "Locked"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}