import { SearchX } from "lucide-react";

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display right now.",
  buttonText,
  onClick,
  icon: Icon = SearchX,
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100">
        <Icon className="h-10 w-10 text-indigo-600" />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>

      {buttonText && (
        <button
          onClick={onClick}
          className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}