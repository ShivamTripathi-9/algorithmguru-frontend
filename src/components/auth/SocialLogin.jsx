import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>

        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-slate-500">
            Or continue with
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium transition hover:bg-slate-100"
        >
          <FaGoogle className="text-red-500" />
          Google
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium transition hover:bg-slate-100"
        >
          <FaGithub />
          GitHub
        </button>
      </div>
    </div>
  );
}