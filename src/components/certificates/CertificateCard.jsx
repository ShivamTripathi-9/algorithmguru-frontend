import { Download, Eye } from "lucide-react";

export default function CertificateCard({ certificate }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 text-3xl">
        🏆
      </div>

      <h2 className="text-xl font-bold text-slate-900">
        {certificate.title}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Completed on {certificate.date}
      </p>

      <div className="mt-6 flex gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 hover:bg-slate-50">
          <Eye size={18} />
          Preview
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-white hover:bg-indigo-700">
          <Download size={18} />
          Download
        </button>
      </div>
    </div>
  );
}