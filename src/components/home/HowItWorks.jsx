import { LogIn, FolderOpen, BookOpenCheck, Code2 } from "lucide-react";

const steps = [
  { id: "01", icon: LogIn, title: "Create account", description: "Sign up and access your personalized AI learning dashboard." },
  { id: "02", icon: FolderOpen, title: "Choose a project", description: "Select from Machine Learning, NLP, Computer Vision, GenAI, and more." },
  { id: "03", icon: BookOpenCheck, title: "Learn step by step", description: "Follow guided lessons with theory, hints, and practical exercises." },
  { id: "04", icon: Code2, title: "Build & track progress", description: "Submit code, validate solutions, and monitor your learning progress." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F7FAFB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Learn AI in 4 steps
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            A structured path from beginner to project-ready.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="relative">
                <span className="text-sm font-medium text-[#119DA4]">{step.id}</span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#16223A]/5">
                  <Icon size={20} strokeWidth={1.75} className="text-[#16223A]" />
                </div>
                <h3 className="mt-4 font-medium text-[#16223A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5B6E8C]">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}