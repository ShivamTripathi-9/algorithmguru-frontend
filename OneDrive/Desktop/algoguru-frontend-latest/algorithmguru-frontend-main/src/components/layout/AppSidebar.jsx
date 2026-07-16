import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  BookOpen,
  User,
  Settings,
  Award,
} from "lucide-react";

const menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Learning",
    path: "/learn/1/1",
    icon: BookOpen,
  },
  {
    title: "Certificates",
    path: "/certificates",
    icon: Award,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  return (
    <aside className="hidden lg:flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold text-indigo-600">
          AlgorithmGuru
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          AI Learning Platform
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="rounded-2xl bg-indigo-50 p-4">
          <p className="text-sm font-semibold text-indigo-700">
            🔥 Current Streak
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            18 Days
          </h3>
        </div>
      </div>
    </aside>
  );
}