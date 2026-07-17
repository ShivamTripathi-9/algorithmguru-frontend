const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

const categories = [
  "All",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Generative AI",
  "AI Agents",
];

export default function FilterBar({ difficulty, category, onChange }) {
  return (
    <div className="mb-8 space-y-4">
      {/* Difficulty */}
      <div className="flex flex-wrap gap-3">
        {difficulties.map((item) => (
          <button
            key={item}
            onClick={() => onChange("difficulty", item)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              difficulty === item
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-slate-300 bg-white hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => onChange("category", item)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              category === item
                ? "bg-slate-900 text-white"
                : "bg-slate-200 hover:bg-slate-900 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
