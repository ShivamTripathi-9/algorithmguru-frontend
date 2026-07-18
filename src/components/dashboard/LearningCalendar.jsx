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
  "bg-[#16223A]/8",
  "bg-[#119DA4]/25",
  "bg-[#119DA4]/50",
  "bg-[#119DA4]/75",
  "bg-[#119DA4]",
];

export default function LearningCalendar() {
  const days = generateCalendar();

  return (
    <section className="rounded-2xl  bg-white p-6 mx-auto max-w-6xl px-4">
      {/* Header */}
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
            Learning calendar
          </h2>

          <p className="text-sm text-[#5B6E8C]">
            Track your daily coding and learning consistency.
          </p>
        </div>

        <span className="rounded-full bg-[#119DA4]/10 px-4 py-2 text-sm font-medium text-[#119DA4]">
          18 day streak
        </span>
      </div>

      {/* Calendar */}
      <div className="mt-8 overflow-x-auto">
        <div className="grid min-w-[700px] grid-cols-12 gap-2">
          {days.map((day) => (
            <div
              key={day.id}
              className={`h-5 w-5 rounded-sm ${colors[day.level]} transition hover:scale-125`}
              title={`Activity level: ${day.level}`}
            />
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 flex items-center justify-end gap-2 text-xs text-[#5B6E8C]">
        <span>Less</span>

        {colors.map((color, index) => (
          <div key={index} className={`h-4 w-4 rounded ${color}`} />
        ))}

        <span>More</span>
      </div>
    </section>
  );
}