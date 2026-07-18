import { useEffect, useState } from "react";
import { dashboardAPI } from "../../services/api"; // path apne hisab se set kar lena

export default function SkillProgress() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await dashboardAPI.get();

      // Assumption: response mein "skills" key hoga, jisme { name, progress } objects ho.
      // Agar backend "skill_progress" ya kuch aur naam se bhejta hai to
      // yahan wahi field name daal dena.
      const list =
        res.data?.skills ||
        res.data?.data?.skills ||
        res.data?.skill_progress ||
        [];

      setSkills(list);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <p className="text-center text-sm text-[#5B6E8C]">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
        <p className="text-center text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#16223A]/8 bg-white p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-[#16223A]">
        Skill progress
      </h2>

      <p className="mt-2 text-sm text-[#5B6E8C]">
        Track your learning across AI domains.
      </p>

      {skills.length === 0 ? (
        <p className="mt-8 text-sm text-[#5B6E8C]">Abhi koi skill data nahi hai.</p>
      ) : (
        <div className="mt-8 space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-[#16223A]">{skill.name}</span>

                <span className="text-sm font-medium text-[#5B6E8C]">
                  {skill.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#16223A]/8">
                <div
                  className="h-full rounded-full bg-[#119DA4]"
                  style={{ width: `${skill.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}