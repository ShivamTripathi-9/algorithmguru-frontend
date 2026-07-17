import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import useAuthStore from "../../store/authStore";

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
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  const { isAuthenticated, user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    setMobileOpen(false);
    navigate("/");
  };

  const initial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7FAFB]/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#16223A] text-sm font-semibold text-white">
            AG
          </div>
          <span className="text-base font-semibold text-[#16223A]">AlgorithmGuru</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-[#16223A]/70 transition-colors hover:text-[#119DA4]"
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
            <button className="flex items-center gap-1 text-sm font-medium text-[#16223A]/70 hover:text-[#119DA4]">
              Categories
              <ChevronDown size={15} />
            </button>

            {showDropdown && (
              <div className="absolute left-0 mt-3 w-60 rounded-xl bg-white p-2 shadow-lg shadow-[#16223A]/10">
                {categories.map((item) => (
                  <button
                    key={item}
                    onClick={() => { setShowDropdown(false); navigate("/projects"); }}
                    className="block w-full rounded-lg px-3 py-2 text-left text-sm text-[#16223A]/80 hover:bg-[#119DA4]/10 hover:text-[#119DA4]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-2 lg:flex">
          {isAuthenticated ? (
            <div
              className="relative"
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[#16223A]/5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#119DA4] text-sm font-semibold text-white">
                  {initial}
                </div>
                <span className="text-sm font-medium text-[#16223A]">
                  {user?.name || "Account"}
                </span>
                <ChevronDown size={14} className="text-[#16223A]/50" />
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-1 w-52 rounded-xl bg-white p-2 shadow-lg shadow-[#16223A]/10">
                  <Link
                    to="/dashboard"
                    onClick={() => setShowUserMenu(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#16223A]/80 hover:bg-[#119DA4]/10 hover:text-[#119DA4]"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setShowUserMenu(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#16223A]/80 hover:bg-[#119DA4]/10 hover:text-[#119DA4]"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setShowUserMenu(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-[#16223A]/80 hover:bg-[#119DA4]/10 hover:text-[#119DA4]"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="mt-1 flex w-full items-center gap-2 rounded-lg border-t border-[#16223A]/10 px-3 py-2 pt-3 text-left text-sm text-red-500 hover:bg-red-50"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-[#16223A]/70 hover:text-[#119DA4]"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-lg bg-[#16223A] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#119DA4]"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button className="lg:hidden text-[#16223A]" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="bg-[#F7FAFB] lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-3 text-[#16223A]/80 hover:bg-white"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#5B6E8C]">Categories</p>
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => { setMobileOpen(false); navigate("/projects"); }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-[#16223A]/80 hover:bg-white"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg bg-white px-4 py-2 text-center text-sm font-medium text-[#16223A]"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="rounded-lg px-4 py-2 text-center text-sm font-medium text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-2 text-center text-sm font-medium text-[#16223A] bg-white"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg bg-[#16223A] px-4 py-2 text-center text-sm font-medium text-white"
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}