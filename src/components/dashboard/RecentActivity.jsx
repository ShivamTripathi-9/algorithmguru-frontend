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
    title: "Reached 7 day learning streak",
    time: "2 days ago",
  },
  {
    title: "Completed NLP Basics",
    time: "3 days ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Recent activity
      </h2>

      <div className="mt-8 space-y-5">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#119DA4]" />

            <div>
              <h3 className="font-medium text-[#16223A]">{activity.title}</h3>

              <p className="text-sm text-[#5B6E8C]">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}