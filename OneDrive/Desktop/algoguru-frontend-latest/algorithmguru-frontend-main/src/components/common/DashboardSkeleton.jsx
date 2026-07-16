export default function LearningSkeleton() {
  return (
    <div className="animate-pulse grid gap-6 lg:grid-cols-12">
      <div className="space-y-4 lg:col-span-4">
        <div className="h-40 rounded-3xl bg-slate-200" />
        <div className="h-48 rounded-3xl bg-slate-200" />
        <div className="h-36 rounded-3xl bg-slate-200" />
      </div>

      <div className="space-y-4 lg:col-span-8">
        <div className="h-16 rounded-2xl bg-slate-200" />
        <div className="h-[500px] rounded-3xl bg-slate-200" />
        <div className="h-40 rounded-3xl bg-slate-200" />
      </div>
    </div>
  );
}