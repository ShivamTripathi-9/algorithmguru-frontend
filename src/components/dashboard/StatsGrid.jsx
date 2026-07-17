import {
  FolderOpen,
  Trophy,
  Clock3,
  Flame,
} from "lucide-react";

const stats = [
  {
    title: "Projects Started",
    value: "12",
    icon: FolderOpen,
  },
  {
    title: "Completed",
    value: "8",
    icon: Trophy,
  },
  {
    title: "Learning Hours",
    value: "126h",
    icon: Clock3,
  },
  {
    title: "Current Streak",
    value: "18 Days",
    icon: Flame,
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-sm">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-indigo-100 p-3">
                <Icon className="text-indigo-600" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}