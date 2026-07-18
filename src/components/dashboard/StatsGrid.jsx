import { useEffect, useState } from "react";
import { FolderOpen, Trophy, Clock3, Flame } from "lucide-react";
import { dashboardAPI } from "../../services/api"; // path apne hisab se set kar lena

const statsConfig = [
  {
    key: "projectsStarted",
    title: "Projects Started",
    icon: FolderOpen,
  },
  {
    key: "completed",
    title: "Completed",
    icon: Trophy,
  },
  {
    key: "learningHours",
    title: "Learning Hours",
    icon: Clock3,
    suffix: "h",
  },
  {
    key: "currentStreak",
    title: "Current Streak",
    icon: Flame,
    suffix: " Days",
  },
];

export default function StatsGrid() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await dashboardAPI.get();

      // Assumption: backend response mein flat keys hongi, jaise
      // { projectsStarted: 12, completed: 8, learningHours: 126, currentStreak: 18 }
      // Agar backend "stats" ke andar nested bhejta hai ya "data.stats" mein,
      // to neeche wale fallback try honge. Agar field names alag hain
      // (jaise total_projects, hours_spent, streak_days) to yahan replace kar dena.
      const data =
        res.data?.stats || res.data?.data?.stats || res.data?.data || res.data || {};

      setStats({
        projectsStarted: data.projectsStarted ?? data.projects_started ?? 0,
        completed: data.completed ?? data.completed_projects ?? 0,
        learningHours: data.learningHours ?? data.learning_hours ?? 0,
        currentStreak: data.currentStreak ?? data.current_streak ?? 0,
      });
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 mx-auto max-w-6xl px-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-[104px] animate-pulse rounded-2xl border border-[#16223A]/8 bg-white"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4  mx-auto max-w-6xl px-4 ">
      {statsConfig.map((item) => {
        const Icon = item.icon;
        const rawValue = stats[item.key];
        const value = item.suffix ? `${rawValue}${item.suffix}` : rawValue;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-[#16223A]/8 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5B6E8C]">{item.title}</p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#16223A]">
                  {value}
                </h2>
              </div>

              <div className="rounded-xl bg-[#119DA4]/10 p-3">
                <Icon className="text-[#119DA4]" size={20} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}