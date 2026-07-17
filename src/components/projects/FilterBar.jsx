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
                ? "border-[#119DA4] bg-[#119DA4] text-white"
                : "border-[#16223A]/10 bg-white text-[#16223A]/70 hover:border-[#119DA4] hover:text-[#119DA4]"
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
                ? "bg-[#16223A] text-white"
                : "bg-[#16223A]/5 text-[#16223A]/70 hover:bg-[#16223A] hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}