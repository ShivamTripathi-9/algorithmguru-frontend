import AuthBanner from "../components/auth/AuthBanner";
import LoginForm from "../components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <AuthBanner />
      <LoginForm />
    </div>
  );
}