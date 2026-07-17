import { Check } from "lucide-react";

export default function LearningOutcomes({ project }) {
  return (
    <section className="rounded-2xl border border-[#16223A]/8 bg-white p-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Learning outcomes
      </h2>

      <ul className="mt-6 space-y-3">
        {project.outcomes.map((item) => (
          <li key={item} className="flex gap-3">
            <Check size={18} className="mt-0.5 shrink-0 text-[#119DA4]" />
            <span className="text-[#16223A]">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}