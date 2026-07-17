import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
            🚀 Learn AI by Building Real Projects
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-7xl">
            Master AI
            <span className="block text-indigo-400">Step by Step</span>
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Build Machine Learning, Deep Learning, NLP, Computer Vision,
            Generative AI, RAG, and AI Agent projects with guided lessons.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-700"
            >
              Start Learning
            </Link>
            <Link
              to="/projects"
              className="rounded-xl border border-slate-600 px-6 py-3 hover:bg-slate-800"
            >
              Explore Projects
            </Link>
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-slate-400">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">10K+</h3>
              <p className="text-slate-400">Students</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">95%</h3>
              <p className="text-slate-400">Completion</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-lg rounded-3xl bg-white/10 p-8 backdrop-blur-md">
          <div className="rounded-2xl bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="overflow-x-auto text-sm text-green-400">
{`from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

accuracy = 98.4%
print("AI Model Ready 🚀")`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
