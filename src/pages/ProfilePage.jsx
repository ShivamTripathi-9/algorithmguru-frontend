import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../components/layout/DashboardLayout";
import useAuthStore from "../store/authStore";
import * as api from "../lib/api";

export default function ProfilePage() {
  const user = useAuthStore((s) => s.user);
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    api
      .getDashboard()
      .then((data) => {
        if (!cancelled) setDashboard(data);
      })
      .catch(() => {
        if (!cancelled) setDashboard(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const initial = user?.name ? user.name.trim()[0].toUpperCase() : "?";

  // Best-guess field names based on the old hardcoded stat cards
  // (projects started / completed / streak / certificates). Confirm the
  // actual /dashboard response shape and adjust these keys if they differ.
  const stats = [
    { label: "Projects", value: dashboard?.projectsStarted },
    { label: "Completed", value: dashboard?.completedProjects },
    { label: "Day streak", value: dashboard?.streak },
    { label: "Certificates", value: dashboard?.certificates },
  ];

  return (
    <DashboardLayout>
      <div className="rounded-2xl border border-[#16223A]/8 bg-white p-8">
        <div className="flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#119DA4] text-4xl font-semibold text-white">
            {initial}
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#16223A]">
            {user?.name || "Your name"}
          </h1>

          <p className="mt-2 text-[#5B6E8C]">{user?.email || "—"}</p>

          <button
            onClick={() => navigate("/settings")}
            className="mt-6 rounded-lg bg-[#119DA4] px-6 py-3 font-medium text-white transition hover:bg-[#0C7E83]"
          >
            Edit profile
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-[#F7FAFB] p-6 text-center">
              <h3 className="text-3xl font-semibold tracking-tight text-[#16223A]">
                {loading ? "—" : stat.value ?? "—"}
              </h3>
              <p className="mt-1 text-sm text-[#5B6E8C]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}