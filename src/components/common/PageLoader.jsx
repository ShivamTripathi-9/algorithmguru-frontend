export default function ProjectCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="h-52 bg-slate-200" />

      <div className="space-y-4 p-6">
        <div className="h-4 w-24 rounded bg-slate-200" />

        <div className="h-7 w-3/4 rounded bg-slate-200" />

        <div className="h-4 w-full rounded bg-slate-200" />

        <div className="h-4 w-5/6 rounded bg-slate-200" />

        <div className="mt-6 h-2 rounded-full bg-slate-200" />

        <div className="h-12 rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}