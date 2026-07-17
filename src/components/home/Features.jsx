import {
  Brain,
  Bot,
  Code2,
  BookOpen,
  Trophy,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Project-Based Learning",
    description:
      "Learn Artificial Intelligence by building real-world projects instead of watching passive tutorials.",
  },
  {
    icon: Code2,
    title: "Interactive Code Editor",
    description:
      "Write, test, and improve Python code directly in the learning workspace with instant feedback.",
  },
  {
    icon: Bot,
    title: "AI Mentor",
    description:
      "Get contextual hints, explanations, and guidance whenever you're stuck on a project step.",
  },
  {
    icon: BookOpen,
    title: "Step-by-Step Lessons",
    description:
      "Each project is broken into structured milestones with theory, tasks, and checkpoints.",
  },
  {
    icon: Trophy,
    title: "Track Achievements",
    description:
      "Monitor completed projects, maintain learning streaks, and celebrate milestones.",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description:
      "Visualize your growth across Machine Learning, NLP, Computer Vision, and Generative AI.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Everything you need to master AI
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            Practical projects, hands-on coding, and guided mentorship.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index}>
                <Icon className="h-6 w-6 text-[#119DA4]" strokeWidth={1.75} />

                <h3 className="mt-4 text-lg font-medium text-[#16223A]">
                  {feature.title}
                </h3>

                <p className="mt-2 leading-6 text-[#5B6E8C]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}