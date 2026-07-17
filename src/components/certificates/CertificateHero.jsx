import { Award } from "lucide-react";

export default function CertificateHero() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-white/20 p-4">
          <Award size={36} />
        </div>

        <div>
          <h1 className="text-3xl font-bold">
            Your Certificates
          </h1>

          <p className="mt-2 text-indigo-100">
            Showcase your completed AI projects and achievements.
          </p>
        </div>
      </div>
    </div>
  );
}