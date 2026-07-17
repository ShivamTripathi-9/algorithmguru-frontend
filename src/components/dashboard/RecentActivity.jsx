const activities = [
  {
    title: "Completed Spam Email Classifier",
    time: "2 hours ago",
  },
  {
    title: "Started AI Chatbot Project",
    time: "Yesterday",
  },
  {
    title: "Reached 7 Day Learning Streak",
    time: "2 days ago",
  },
  {
    title: "Completed NLP Basics",
    time: "3 days ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Recent Activity
      </h2>

      <div className="mt-8 space-y-5">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-indigo-600" />

            <div>
              <h3 className="font-semibold text-slate-800">
                {activity.title}
              </h3>

              <p className="text-sm text-slate-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}