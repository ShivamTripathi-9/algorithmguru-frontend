export default function AppearanceCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-xl">
            Appearance
          </h2>
          <p className="text-sm text-slate-500">
            Switch between light and dark mode.
          </p>
        </div>

        <button className="rounded-full bg-slate-200 px-5 py-2 text-sm">
          Light
        </button>
      </div>
    </div>
  );
}