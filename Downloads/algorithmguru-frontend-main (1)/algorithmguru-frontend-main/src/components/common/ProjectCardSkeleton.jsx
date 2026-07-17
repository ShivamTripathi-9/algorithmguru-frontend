export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-40 rounded-3xl bg-slate-200" />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-32 rounded-2xl bg-slate-200"
          />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="h-80 rounded-3xl bg-slate-200 lg:col-span-2" />
        <div className="h-80 rounded-3xl bg-slate-200" />
      </div>
    </div>
  );
}