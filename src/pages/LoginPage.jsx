import AuthBanner from "../components/auth/AuthBanner";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4  pt-0 pb-6 sm:px-6 lg:px-8">
        <div className="grid items-center lg:grid-cols-2">
          <AuthBanner />
          <LoginForm />
        </div>
      </div>
    </main>
  );
}