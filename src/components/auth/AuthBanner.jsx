export default function AuthBanner() {
  return (
    <div className="relative hidden h-full min-h-[700px] lg:flex flex-col justify-center overflow-hidden  bg-[#16223A] px-10 py-12 text-white lg:px-14 lg:py-16">
      {/* Background Decoration */}
      <div className="absolute -right-24 -top-24 h-72 w-72 bg-[#119DA4]/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72  bg-[#119DA4]/10 blur-3xl" />

      <div className="relative z-10 max-w-md">
        {/* Badge */}
        <span className="inline-flex rounded-full bg-[#119DA4]/15 px-4 py-2 text-sm font-medium text-[#7DE3E7]">
          AI Learning Platform
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight">
          Learn AI by Building Projects 🚀
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Master Machine Learning, Deep Learning, NLP,
          Computer Vision, Generative AI and AI Agents.
        </p>

        {/* Features */}
        <div className="mt-12 space-y-6">
          {[
            "Real-world Projects",
            "AI Mentor",
            "Code Editor",
            "Progress Tracking",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#119DA4]/20">
                <svg
                  className="h-5 w-5 text-[#119DA4]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <span className="text-base font-medium text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}