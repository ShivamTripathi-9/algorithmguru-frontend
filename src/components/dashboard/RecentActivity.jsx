import { useEffect, useState } from "react";
import { getDashboard } from "../../lib/api";

function timeAgo(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);
  const seconds = Math.floor((new Date() - date) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;

  const years = Math.floor(days / 365);
  return `${years} year${years > 1 ? "s" : ""} ago`;
}

export default function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getDashboard();
      const list =
        data?.recentActivity || data?.recent_activity || data?.activities || [];

      setActivities(list);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
          Recent activity
        </h2>
        <div className="mt-8 space-y-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 animate-pulse rounded-lg bg-[#16223A]/5" />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
          Recent activity
        </h2>
        <p className="mt-4 text-sm text-red-500">{error}</p>
      </section>
    );
  }

  return (
    <section className="rounded-2xl  bg-white p-6 mx-auto max-w-6xl px-8">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A  ]">
        Recent activity
      </h2>

      {activities.length === 0 ? (
        <p className="mt-8 text-sm text-[#5B6E8C]">No activity yet.</p>
      ) : (
        <div className="mt-8 space-y-5">
          {activities.map((activity, index) => (
            <div key={activity.id || index} className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#119DA4]" />
              <div>
                <h3 className="font-medium text-[#16223A]">{activity.title}</h3>
                <p className="text-sm text-[#5B6E8C]">
                  {activity.time || timeAgo(activity.created_at)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}