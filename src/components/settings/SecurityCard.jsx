export default function SecurityCard() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Security
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input
          type="password"
          placeholder="Current Password"
          className="rounded-xl border p-3 outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          className="rounded-xl border p-3 outline-none"
        />
      </div>

      <button className="mt-5 rounded-xl bg-indigo-600 px-6 py-3 text-white">
        Update Password
      </button>
    </div>
  );
}