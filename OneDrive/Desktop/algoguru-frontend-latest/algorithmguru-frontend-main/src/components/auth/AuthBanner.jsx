export default function AuthBanner() {
  return (
    <div className="hidden lg:flex flex-col justify-center bg-indigo-600 text-white p-12">
      <h1 className="text-5xl font-bold">
        Learn AI by Building Projects 🚀
      </h1>

      <p className="mt-6 text-lg text-indigo-100">
        Master Machine Learning, Deep Learning, NLP,
        Computer Vision, Generative AI and AI Agents.
      </p>

      <div className="mt-10 space-y-3 text-indigo-100">
        <p>✓ Real-world Projects</p>
        <p>✓ AI Mentor</p>
        <p>✓ Code Editor</p>
        <p>✓ Progress Tracking</p>
      </div>
    </div>
  );
}