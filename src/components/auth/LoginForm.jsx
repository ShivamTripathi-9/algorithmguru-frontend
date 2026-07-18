import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import useAuthStore from "../../store/authStore";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await login({ email, password });
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

 return (
 <section className="w-full px-0 lg:px-10">
    <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 sm:p-8">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-[#16223A]">
          Welcome Back
        </h2>

        <p className="mt-3 text-[15px] leading-7 text-[#5B6E8C]">
          Login to continue your AI learning journey.
        </p>
      </div>

      {/* Form */}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16223A]">
            Email
          </label>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[#16223A] outline-none transition focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-2 block text-sm font-medium text-[#16223A]">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="h-12 w-full rounded-xl border border-slate-300 px-4 text-[#16223A] outline-none transition focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mt-3 text-sm font-medium text-[#119DA4]"
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="h-12 w-full rounded-xl bg-[#16223A] font-semibold text-white transition hover:bg-[#1E2E4A]"
        >
          {submitting ? "Logging in..." : "Login"}
        </button>

        <SocialLogin />
      </form>

      <p className="mt-8 text-center text-sm text-[#5B6E8C]">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-[#119DA4] hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  </section>
);
}