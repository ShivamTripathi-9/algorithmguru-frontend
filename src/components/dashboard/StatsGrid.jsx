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
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-[#16223A]/8 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#5B6E8C]">{item.title}</p>

                <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#16223A]">
                  {item.value}
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