import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold">
                AG
              </div>

              <div>
                <h2 className="text-2xl font-bold">AlgorithmGuru</h2>
                <p className="text-sm text-slate-400">
                  Learn AI by Building Real Projects
                </p>
              </div>
            </div>

            <p className="max-w-md text-slate-400">
              Build real-world AI applications in Machine Learning, Deep
              Learning, Computer Vision, NLP, Generative AI, RAG and AI Agents
              with guided, step-by-step learning.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-indigo-600"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-indigo-600"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-indigo-600"
              >
                <FaTwitter size={18} />
              </a>

              <a
                href="#"
                className="rounded-lg bg-slate-800 p-3 transition hover:bg-indigo-600"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Platform</h3>

            <div className="space-y-3 text-slate-400">
              <Link to="/projects" className="block hover:text-white">
                Projects
              </Link>

              <Link to="/dashboard" className="block hover:text-white">
                Dashboard
              </Link>

              <Link to="/login" className="block hover:text-white">
                Login
              </Link>

              <Link to="/signup" className="block hover:text-white">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Learning</h3>

            <div className="space-y-3 text-slate-400">
              <p>Machine Learning</p>
              <p>Deep Learning</p>
              <p>Computer Vision</p>
              <p>NLP</p>
              <p>Generative AI</p>
              <p>AI Agents</p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">Company</h3>

            <div className="space-y-3 text-slate-400">
              <p>About</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Support</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AlgorithmGuru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}