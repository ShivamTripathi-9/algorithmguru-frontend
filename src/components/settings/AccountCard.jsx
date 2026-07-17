import { useNavigate } from "react-router-dom";

export default function AccountCard() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <h2 className="text-xl font-semibold text-red-700">Account</h2>
      <p className="mt-2 text-sm text-red-600">Manage account actions.</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          onClick={() => navigate("/login")}
          className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-700"
        >
          Logout
        </button>

        <button className="rounded-xl bg-red-600 px-5 py-3 text-white hover:bg-red-700">
          Delete Account
        </button>
      </div>
    </div>
  );
}
