import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  BookOpen,
  User,
  Settings,
  Award,
} from "lucide-react";

const menuItems = [
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

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between border-b bg-white p-4 lg:hidden">
        <h2 className="text-xl font-bold text-indigo-600">
          AlgorithmGuru
        </h2>

        <button onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-2xl font-bold text-indigo-600">
            AlgorithmGuru
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={26} />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-700 transition hover:bg-indigo-600 hover:text-white"
              >
                <Icon size={20} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}