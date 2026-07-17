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
    <aside className="hidden h-screen w-72 flex-col border-r border-[#16223A]/8 bg-white lg:flex">
      <div className="border-b border-[#16223A]/8 p-6">
        <h2 className="text-xl font-semibold tracking-tight text-[#16223A]">
          AlgorithmGuru
        </h2>

        <p className="mt-1 text-sm text-[#5B6E8C]">AI Learning Platform</p>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#119DA4] text-white"
                    : "text-[#5B6E8C] hover:bg-[#16223A]/5 hover:text-[#16223A]"
                }`
              }
            >
              <Icon size={18} />
              {item.title}
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-[#16223A]/8 p-4">
        <div className="rounded-xl bg-[#119DA4]/8 p-4">
          <p className="text-sm font-medium text-[#0C7E83]">Current streak</p>

          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#16223A]">
            18 Days
          </h3>
        </div>
      </div>
    </aside>
  );
}