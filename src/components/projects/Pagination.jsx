export default function Pagination({ page, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="rounded-lg border border-[#16223A]/10 px-4 py-2 text-[#16223A]/70 hover:bg-[#16223A]/5 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`rounded-lg px-4 py-2 ${
            p === page
              ? "bg-[#119DA4] text-white"
              : "border border-[#16223A]/10 text-[#16223A]/70 hover:bg-[#16223A]/5"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="rounded-lg border border-[#16223A]/10 px-4 py-2 text-[#16223A]/70 hover:bg-[#16223A]/5 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}