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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
            Loved by AI learners
          </h2>
          <p className="mt-3 text-[#5B6E8C]">
            Thousands of students are building practical AI skills with
            AlgorithmGuru.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="rounded-xl bg-[#F7FAFB] p-7">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={15}
                    className="fill-[#119DA4] text-[#119DA4]"
                  />
                ))}
              </div>

              <p className="leading-6 text-[#5B6E8C]">"{item.review}"</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16223A] text-sm font-semibold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-[#16223A]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#5B6E8C]">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 rounded-xl bg-[#16223A] p-8 text-center text-white md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-semibold">10K+</h3>
            <p className="mt-1 text-sm text-white/60">Students</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">50+</h3>
            <p className="mt-1 text-sm text-white/60">AI Projects</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">95%</h3>
            <p className="mt-1 text-sm text-white/60">Completion Rate</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">4.9★</h3>
            <p className="mt-1 text-sm text-white/60">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}