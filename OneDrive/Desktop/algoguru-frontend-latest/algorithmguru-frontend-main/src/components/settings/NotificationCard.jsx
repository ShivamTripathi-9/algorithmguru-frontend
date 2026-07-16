export default function NotificationCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Notifications
      </h2>

      <div className="mt-5 space-y-4">
        <label className="flex items-center justify-between">
          <span>Email Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between">
          <span>Learning Reminders</span>
          <input type="checkbox" defaultChecked />
        </label>

        <label className="flex items-center justify-between">
          <span>Weekly Progress Report</span>
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
}