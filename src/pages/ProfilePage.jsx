import DashboardLayout from "../components/layout/DashboardLayout";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-indigo-600 text-4xl font-bold text-white">
            S
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Shivam Tripathi
          </h1>

          <p className="mt-2 text-slate-500">
            AI Learner • Machine Learning Enthusiast
          </p>

          <button className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white">
            Edit Profile
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-100 p-6 text-center">
            <h3 className="text-3xl font-bold">12</h3>
            <p>Projects</p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-6 text-center">
            <h3 className="text-3xl font-bold">8</h3>
            <p>Completed</p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-6 text-center">
            <h3 className="text-3xl font-bold">18</h3>
            <p>Day Streak</p>
          </div>

          <div className="rounded-2xl bg-slate-100 p-6 text-center">
            <h3 className="text-3xl font-bold">5</h3>
            <p>Certificates</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}