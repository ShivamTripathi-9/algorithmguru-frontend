import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#16223A] py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Ready to build your first AI project?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
          Join thousands of learners mastering Machine Learning, NLP, Computer
          Vision, Generative AI, RAG, and AI Agents through hands-on projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-lg bg-[#119DA4] px-7 py-3 font-medium text-white transition-colors hover:bg-[#0C7E83]"
          >
            Start learning free
          </Link>

          <Link
            to="/projects"
            className="rounded-lg px-7 py-3 font-medium text-white/80 transition-colors hover:text-white"
          >
            Browse projects →
          </Link>
        </div>
      </div>
    </section>
  );
}