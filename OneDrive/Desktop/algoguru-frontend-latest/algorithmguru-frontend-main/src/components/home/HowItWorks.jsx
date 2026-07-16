import { LogIn, FolderOpen, BookOpenCheck, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { id: "01", icon: LogIn, title: "Create Account", description: "Sign up and access your personalized AI learning dashboard." },
  { id: "02", icon: FolderOpen, title: "Choose a Project", description: "Select projects from Machine Learning, NLP, Computer Vision, GenAI, and more." },
  { id: "03", icon: BookOpenCheck, title: "Learn Step by Step", description: "Follow guided lessons with theory, hints, and practical coding exercises." },
  { id: "04", icon: Code2, title: "Build & Track Progress", description: "Submit code, validate solutions, and monitor your learning progress." },
];

const flow = [
  { label: "Login", path: "/login" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Projects", path: "/projects" },
  { label: "Learn Step-by-Step", path: "/learn/1/1" },
  { label: "Track Progress", path: "/dashboard" },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            How It Works
          </span>
          <h2 className="mt-5 text-4xl font-bold text-slate-900">Learn AI in 4 Simple Steps</h2>
          <p className="mt-4 text-lg text-slate-600">
            Our structured learning path helps you go from beginner to project-ready by building real AI applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
                    <Icon size={28} />
                  </div>
                  <span className="text-4xl font-extrabold text-slate-200">{step.id}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
          <h3 className="text-center text-2xl font-bold">Your Learning Journey</h3>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center text-sm font-semibold">
            {flow.map((item, i) => (
              <>
                <Link
                  key={item.label}
                  to={item.path}
                  className="rounded-full bg-white/20 px-5 py-3 hover:bg-white/30 transition"
                >
                  {item.label}
                </Link>
                {i < flow.length - 1 && <span key={`arrow-${i}`}>→</span>}
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
