import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Dashboard", path: "/dashboard" },
];

const categories = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Generative AI",
  "RAG",
  "AI Agents",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
            AG
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">AlgorithmGuru</h2>
            <p className="-mt-1 text-[11px] text-slate-500">Learn AI by Building</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-slate-700 transition hover:text-indigo-600"
            >
              {item.name}
            </Link>
          ))}

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-indigo-600">
              Categories
              <ChevronDown size={16} />
            </button>

            {showDropdown && (
              <div className="absolute left-0 mt-4 w-64 rounded-2xl border bg-white p-3 shadow-xl">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => { setShowDropdown(false); navigate("/projects"); }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-slate-700 hover:bg-slate-100"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase text-slate-400">Categories</p>
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => { setMobileOpen(false); navigate("/projects"); }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border px-4 py-2 text-center text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
