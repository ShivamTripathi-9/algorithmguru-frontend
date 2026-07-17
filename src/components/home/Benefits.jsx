import {
  Rocket,
  GraduationCap,
  Clock3,
  Briefcase,
  Award,
  Users,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description:
      "Theory se zyada practical. Har concept ko real AI project ke through seekho.",
  },
  {
    icon: GraduationCap,
    title: "Beginner Friendly",
    description:
      "Zero se shuruaat karo aur step-by-step advanced AI skills build karo.",
  },
  {
    icon: Clock3,
    title: "Learn at Your Pace",
    description:
      "Kabhi bhi aur kahin bhi padhai karo. Apni progress automatically save hoti rahegi.",
  },
  {
    icon: Briefcase,
    title: "Industry Ready Skills",
    description:
      "Portfolio-worthy projects banao jo interviews aur freelancing me help karein.",
  },
  {
    icon: Award,
    title: "Track Your Progress",
    description:
      "Projects complete karo, milestones unlock karo aur learning streak maintain karo.",
  },
  {
    icon: Users,
    title: "AI Mentor Support",
    description:
      "Jab bhi atko, AI Mentor se hints aur guidance lekar aage badho.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            Why Choose AlgorithmGuru
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Learn Faster, Build Better
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Hum sirf courses nahi dete — hum tumhe real-world AI engineer
            banne ke liye practical experience dete hain.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}