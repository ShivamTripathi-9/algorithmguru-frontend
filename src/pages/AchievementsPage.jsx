import DashboardLayout from "../components/layout/DashboardLayout";
import AchievementGrid from "../components/achievements/AchievementGrid";

export default function AchievementsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white">
          <h1 className="text-3xl font-bold">Achievements</h1>
          <p className="mt-2 text-orange-100">
            Unlock badges as you complete projects and maintain your learning streak.
          </p>
        </div>

        <AchievementGrid />
      </div>
    </DashboardLayout>
  );
}