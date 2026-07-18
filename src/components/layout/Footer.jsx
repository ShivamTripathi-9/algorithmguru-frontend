import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#16223A]/80 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#119DA4] text-sm font-semibold">
                AG
              </div>
              <span className="text-lg font-semibold">AlgorithmGuru</span>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/60">
              Build real-world AI applications in Machine Learning, Deep
              Learning, Computer Vision, NLP, Generative AI, RAG and AI Agents
              with guided, step-by-step learning.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-[#119DA4] hover:text-white"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-[#119DA4] hover:text-white"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-[#119DA4] hover:text-white"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="rounded-lg bg-white/5 p-2.5 text-white/70 transition-colors hover:bg-[#119DA4] hover:text-white"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-4 text-sm font-medium text-white/90">Platform</h3>
            <div className="space-y-3 text-sm text-white/60">
              <Link to="/projects" className="block hover:text-white">Projects</Link>
              <Link to="/dashboard" className="block hover:text-white">Dashboard</Link>
              <Link to="/login" className="block hover:text-white">Login</Link>
              <Link to="/signup" className="block hover:text-white">Sign Up</Link>
            </div>
          </div>

          {/* Learning */}
          <div>
            <h3 className="mb-4 text-sm font-medium text-white/90">Learning</h3>
            <div className="space-y-3 text-sm text-white/60">
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
            <h3 className="mb-4 text-sm font-medium text-white/90">Company</h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>About</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Support</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} AlgorithmGuru. All rights reserved.
        </div>
      </div>
    </footer>
  );
}