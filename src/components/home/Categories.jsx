import { useNavigate } from "react-router-dom";
import { Brain, Cpu, Eye, MessageSquareText, Sparkles, Bot } from "lucide-react";

const categories = [
  { icon: Brain, title: "Machine Learning", description: "Regression, classification, clustering, model evaluation" },
  { icon: Cpu, title: "Deep Learning", description: "Neural networks, CNNs, RNNs, transformers" },
  { icon: MessageSquareText, title: "NLP", description: "Text classification, chatbots, sentiment analysis" },
  { icon: Eye, title: "Computer Vision", description: "Object detection, OCR, image classification" },
  { icon: Sparkles, title: "Generative AI & RAG", description: "LLMs, prompt engineering, vector search" },
  { icon: Bot, title: "AI Agents", description: "Autonomous workflows, tools, multi-agent systems" },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Explore AI specializations
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            The most in-demand AI tracks, taught through real projects.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(`/projects`)}
                className="group text-left"
              >
                <Icon size={22} strokeWidth={1.75} className="text-[#119DA4]" />
                <h3 className="mt-4 text-lg font-medium text-[#16223A] group-hover:text-[#119DA4]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5B6E8C]">{item.description}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}