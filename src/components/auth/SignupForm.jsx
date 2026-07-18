import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import useAuthStore from "../../store/authStore";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const signup = useAuthStore((s) => s.signup);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    if (!agreed) {
      toast.error("Please accept the Terms of Service");
      return;
    }

    setSubmitting(true);

    try {
      await signup({ name, email, password });
      toast.success("Account created!");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.message || "Signup failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="flex w-full items-center justify-center px-0  pt-0 pb-6 lg:px-10">
      <div className="w-full max-w-md  bg-white p-6 sm:p-8 mx-auto">

 


        {/* Heading */}
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
            Create Your Account 
          </h2>

          <p className="mt-3 text-[15px] leading-6 text-[#5B6E8C]">
            Join AlgorithmGuru and start building real AI projects.
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#16223A]">
              Full Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#16223A] placeholder:text-[#94A3B8] outline-none transition-all duration-200 focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#16223A]">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#16223A] placeholder:text-[#94A3B8] outline-none transition-all duration-200 focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
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
              placeholder="Create a password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#16223A] placeholder:text-[#94A3B8] outline-none transition-all duration-200 focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="mt-3 text-sm font-medium text-[#119DA4] transition hover:text-[#0E858A]"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#16223A]">
              Confirm Password
            </label>

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-[#16223A] placeholder:text-[#94A3B8] outline-none transition-all duration-200 focus:border-[#119DA4] focus:ring-4 focus:ring-[#119DA4]/10"
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 text-sm leading-6 text-[#5B6E8C]">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#119DA4]"
            />

            <span>
              I agree to the Terms of Service and Privacy Policy.
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[#16223A] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#1E2E4A] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Creating account..." : "Create Account"}
          </button>

          {/* Social Login */}
          <SocialLogin />
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-[#5B6E8C]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-[#119DA4] transition hover:text-[#0E858A]"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}