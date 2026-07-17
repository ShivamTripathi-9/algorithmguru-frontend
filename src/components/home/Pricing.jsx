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
    <section id="pricing" className="bg-[#F7FAFB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Choose the plan that fits you
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            Start free and upgrade anytime as your AI learning journey grows.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 ${
                plan.highlighted ? "bg-[#16223A] text-white" : "bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#119DA4] px-4 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-medium">{plan.name}</h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/60" : "text-[#5B6E8C]"}`}>
                {plan.description}
              </p>
              <div className="mt-6 text-3xl font-semibold">{plan.price}</div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className={plan.highlighted ? "text-[#119DA4]" : "text-[#119DA4]"} size={16} />
                    <span className={plan.highlighted ? "text-white/90" : "text-[#16223A]/80"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate(plan.path)}
                className={`mt-8 w-full rounded-lg py-3 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-[#119DA4] text-white hover:bg-[#0C7E83]"
                    : "bg-[#16223A]/5 text-[#16223A] hover:bg-[#16223A]/10"
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