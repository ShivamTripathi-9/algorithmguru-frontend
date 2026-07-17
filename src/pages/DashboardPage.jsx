import DashboardHero from "../components/dashboard/DashboardHero";
import StatsGrid from "../components/dashboard/StatsGrid";
import SkillProgress from "../components/dashboard/SkillProgress";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import RecommendedProjects from "../components/dashboard/RecommendedProjects";
import RecentActivity from "../components/dashboard/RecentActivity";
import LearningCalendar from "../components/dashboard/LearningCalendar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFB]">
      <DashboardHero />

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <StatsGrid />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContinueLearning />
          </div>
          <div>
            <SkillProgress />
          </div>
        </div>

        <RecommendedProjects />
        <RecentActivity />
        <LearningCalendar />
      </div>
    </div>
  );
}