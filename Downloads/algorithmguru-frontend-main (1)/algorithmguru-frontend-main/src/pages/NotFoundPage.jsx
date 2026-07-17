import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-indigo-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}