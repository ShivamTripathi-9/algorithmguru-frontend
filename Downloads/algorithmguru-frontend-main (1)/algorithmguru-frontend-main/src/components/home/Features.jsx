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
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            Platform Features
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Everything You Need to Master AI
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Learn through practical projects, hands-on coding, and guided
            mentorship designed for aspiring AI engineers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 transition group-hover:bg-indigo-600">
                  <Icon className="h-7 w-7 text-indigo-600 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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