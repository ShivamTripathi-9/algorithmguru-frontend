import DashboardLayout from "../components/layout/DashboardLayout";
import AppearanceCard from "../components/settings/AppearanceCard";
import NotificationCard from "../components/settings/NotificationCard";
import SecurityCard from "../components/settings/SecurityCard";
import AccountCard from "../components/settings/AccountCard";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Settings
          </h1>
          <p className="mt-1 text-slate-500">
            Manage your account preferences.
          </p>
        </div>

        <AppearanceCard />
        <NotificationCard />
        <SecurityCard />
        <AccountCard />
      </div>
    </DashboardLayout>
  );
}