import { SearchX } from "lucide-react";

export default function EmptyState({
  title = "No Data Found",
  description = "There is nothing to display right now.",
  buttonText,
  onClick,
  icon: Icon = SearchX,
}) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#16223A]/15 bg-white p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#119DA4]/10">
        <Icon className="h-8 w-8 text-[#119DA4]" />
      </div>

      <h2 className="mt-6 text-xl font-semibold text-[#16223A]">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-[#5B6E8C]">
        {description}
      </p>

      {buttonText && (
        <button
          onClick={onClick}
          className="mt-8 rounded-xl bg-[#16223A] px-6 py-3 font-medium text-white transition-colors hover:bg-[#119DA4]"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}