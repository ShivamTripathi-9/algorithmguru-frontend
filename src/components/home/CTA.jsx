import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-extrabold md:text-5xl">
          Ready to Build Your First AI Project?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
          Join thousands of learners mastering Machine Learning, NLP, Computer Vision, Generative AI,
          RAG, and AI Agents through hands-on projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-xl bg-white px-8 py-3 font-semibold text-indigo-700 hover:bg-slate-100"
          >
            Start Learning Free
          </Link>

          <Link
            to="/projects"
            className="rounded-xl border border-white px-8 py-3 font-semibold hover:bg-white hover:text-indigo-700"
          >
            Browse Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
