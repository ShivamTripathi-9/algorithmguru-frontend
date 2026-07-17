import { Link } from "react-router-dom";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative bg-[#F7FAFB] text-[#16223A]">
      <AnimatedBackground />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <span className="text-sm font-medium tracking-wide text-[#119DA4]">
          Learn AI by building real projects
        </span>

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight lg:text-6xl">
          Master AI,
          <span className="text-[#119DA4]"> one project at a time</span>
        </h1>

        <p className="max-w-xl text-lg text-[#5B6E8C]">
          Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI
          and Agents — guided, hands-on, no fluff.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/signup"
            className="rounded-lg bg-[#16223A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#119DA4]"
          >
            Start learning
          </Link>
          <Link
            to="/projects"
            className="rounded-lg px-6 py-3 font-medium text-[#16223A] transition-colors hover:text-[#119DA4]"
          >
            Explore projects →
          </Link>
        </div>

        <div className="mt-6 w-full max-w-2xl rounded-xl bg-white/80 p-5 text-left shadow-[0_1px_0_rgba(22,34,58,0.06)] backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#16223A]/15"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#16223A]/15"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-[#16223A]/15"></div>
          </div>
          <pre className="overflow-x-auto font-mono text-sm text-[#16223A]/80">
{`from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)`}
          </pre>
        </div>
      </div>
    </section>
  );
}