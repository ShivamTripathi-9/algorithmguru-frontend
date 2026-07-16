import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "AI Engineering Student",
    review:
      "AlgorithmGuru helped me understand Machine Learning through real projects instead of boring theory. The step-by-step approach is amazing.",
  },
  {
    name: "Priya Verma",
    role: "Software Developer",
    review:
      "The AI Mentor and built-in code editor make learning so much easier. I completed my first NLP project in just a few days.",
  },
  {
    name: "Aman Singh",
    role: "Data Science Learner",
    review:
      "I love the structured roadmap and progress tracking. It feels like building a real portfolio while learning AI.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Loved by AI Learners
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Thousands of students are building practical AI skills with
            AlgorithmGuru.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Rating */}
              <div className="mb-5 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-slate-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl bg-indigo-600 p-8 text-center text-white md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="mt-1 text-indigo-100">Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-1 text-indigo-100">AI Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">95%</h3>
            <p className="mt-1 text-indigo-100">Completion Rate</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">4.9★</h3>
            <p className="mt-1 text-indigo-100">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}