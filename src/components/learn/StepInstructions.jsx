const stepInstructions = {
  1: "Begin by setting up your project environment. Review the project overview and understand what you will build.",
  2: "Load the dataset using Pandas and display the first five rows to understand its structure.",
  3: "Clean the data by handling missing values, removing duplicates, and normalizing text fields.",
  4: "Apply feature engineering techniques to extract meaningful signals from raw data.",
  5: "Train your machine learning model using the prepared features and evaluate its performance.",
  6: "Evaluate the model using metrics like accuracy, precision, recall, and F1-score. Visualize results.",
  7: "Test your implementation end-to-end and deploy the solution.",
  8: "Perform a final evaluation and document your findings.",
};

export default function StepInstructions({ step }) {
  const instruction = stepInstructions[step?.id] || `Complete Step ${step?.id}: ${step?.title}.`;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">📋 Instructions</h2>
      <h3 className="mt-3 font-semibold text-indigo-600">{step?.title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{instruction}</p>
    </div>
  );
}
