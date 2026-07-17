import { useNavigate } from "react-router-dom";
import { Brain, Cpu, Eye, MessageSquareText, Sparkles, Bot } from "lucide-react";

const categories = [
  { icon: Brain, title: "Machine Learning", description: "Regression, Classification, Clustering, Model Evaluation", color: "from-blue-500 to-cyan-500", cat: "Machine Learning" },
  { icon: Cpu, title: "Deep Learning", description: "Neural Networks, CNNs, RNNs, Transformers", color: "from-violet-500 to-purple-500", cat: "Deep Learning" },
  { icon: MessageSquareText, title: "Natural Language Processing", description: "Text Classification, Chatbots, Sentiment Analysis", color: "from-emerald-500 to-green-500", cat: "NLP" },
  { icon: Eye, title: "Computer Vision", description: "Object Detection, OCR, Image Classification", color: "from-orange-500 to-red-500", cat: "Computer Vision" },
  { icon: Sparkles, title: "Generative AI & RAG", description: "LLMs, Prompt Engineering, Vector Search, RAG", color: "from-pink-500 to-rose-500", cat: "Generative AI" },
  { icon: Bot, title: "AI Agents", description: "Autonomous Workflows, Tools, Multi-Agent Systems", color: "from-indigo-500 to-blue-600", cat: "AI Agents" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-300">
            Learning Tracks
          </span>
          <h2 className="mt-5 text-4xl font-bold">Explore AI Specializations</h2>
          <p className="mt-4 text-lg text-slate-300">
            Master the most in-demand AI technologies through guided, project-based learning.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-2xl"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}>
                  <Icon size={30} className="text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
                <button
                  onClick={() => navigate(`/projects`)}
                  className="mt-6 rounded-xl border border-slate-700 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-slate-900"
                >
                  Explore Track →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
