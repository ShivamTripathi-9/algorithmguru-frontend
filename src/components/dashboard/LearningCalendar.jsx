const generateCalendar = () => {
  return Array.from({ length: 84 }, (_, index) => {
    // Mock intensity (0-4)
    const level = Math.floor(Math.random() * 5);

    return {
      id: index,
      level,
    };
  });
};

const colors = [
  "bg-slate-200",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

export default function LearningCalendar() {
  const days = generateCalendar();

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Learning Calendar
          </h2>

          <p className="text-sm text-slate-500">
            Track your daily coding and learning consistency.
          </p>
        </div>

        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
          🔥 18 Day Streak
        </span>
      </div>

      {/* Calendar */}
      <div className="mt-8 overflow-x-auto">
        <div className="grid min-w-[700px] grid-cols-12 gap-2">
          {days.map((day) => (
            <div
              key={day.id}
              className={`h-5 w-5 rounded-sm ${colors[day.level]} transition hover:scale-125`}
              title={`Activity Level: ${day.level}`}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-end gap-2 text-xs text-slate-500">
        <span>Less</span>

        {colors.map((color, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded ${color}`}
          />
        ))}

        <span>More</span>
      </div>
    </section>
  );
}