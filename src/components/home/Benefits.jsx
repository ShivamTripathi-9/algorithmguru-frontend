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
    <section className="bg-[#F7FAFB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Learn faster, build better
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            Hum sirf courses nahi dete — hum tumhe real-world AI engineer
            banne ke liye practical experience dete hain.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index}>
                <Icon className="h-6 w-6 text-[#119DA4]" strokeWidth={1.75} />

                <h3 className="mt-4 text-lg font-medium text-[#16223A]">
                  {item.title}
                </h3>

                <p className="mt-2 leading-6 text-[#5B6E8C]">
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