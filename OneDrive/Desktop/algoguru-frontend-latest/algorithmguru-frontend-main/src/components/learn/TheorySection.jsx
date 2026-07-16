const theories = {
  1: "Before diving in, understand the problem you are solving and the dataset you will work with. A clear project scope helps you build efficiently.",
  2: "Before training any ML model, it's important to inspect and understand the dataset using functions like head(), info(), and describe().",
  3: "Data cleaning ensures your model trains on high-quality data. Handle nulls, fix inconsistencies, and standardize formats.",
  4: "Feature engineering transforms raw data into inputs that help your model learn patterns more effectively.",
  5: "Model training involves fitting an algorithm to your features. Choose the right model based on your problem type.",
  6: "Evaluation metrics tell you how well your model performs. Use accuracy for balanced datasets, F1-score for imbalanced ones.",
  7: "Testing validates your implementation works end-to-end. Deployment makes your solution accessible to real users.",
  8: "Final evaluation compares your results against the baseline and documents key learnings.",
};

export default function TheorySection({ step }) {
  const theory = theories[step?.id] || `Learn the key concepts behind Step ${step?.id}: ${step?.title}.`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">📖 Theory</h2>
      <p className="mt-4 leading-7 text-slate-600">{theory}</p>
    </div>
  );
}
