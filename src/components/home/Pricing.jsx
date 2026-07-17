import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Start learning AI with basic projects.",
    features: ["Access to beginner projects", "Basic progress tracking", "Community support", "Project certificates"],
    button: "Get Started",
    highlighted: false,
    path: "/signup",
  },
  {
    name: "Pro",
    price: "₹999/mo",
    description: "Best for serious AI learners.",
    features: ["All beginner & advanced projects", "AI Mentor access", "Unlimited code submissions", "Detailed analytics", "Priority support"],
    button: "Start Pro",
    highlighted: true,
    path: "/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams, colleges, and organizations.",
    features: ["Team management", "Dedicated onboarding", "Custom learning paths", "Private workspaces", "Premium support"],
    button: "Contact Sales",
    highlighted: false,
    path: "/signup",
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            Pricing
          </span>
          <h2 className="mt-5 text-4xl font-bold text-slate-900">Choose the Plan That Fits You</h2>
          <p className="mt-4 text-lg text-slate-600">
            Start free and upgrade anytime as your AI learning journey grows.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.highlighted ? "border-indigo-600 bg-slate-900 text-white" : "border-slate-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-2 ${plan.highlighted ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
              <div className="mt-6 text-4xl font-extrabold">{plan.price}</div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={plan.highlighted ? "text-green-400" : "text-indigo-600"} size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(plan.path)}
                className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
