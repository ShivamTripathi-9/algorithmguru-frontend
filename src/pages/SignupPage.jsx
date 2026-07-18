import AuthBanner from "../components/auth/AuthBanner";
import SignupForm from "../components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4  pt-0 pb-6 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2">
          <AuthBanner />
          <SignupForm />
        </div>
      </div>
    </main>
  );
}