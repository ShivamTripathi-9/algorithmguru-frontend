import AuthBanner from "../components/auth/AuthBanner";
import SignupForm from "../components/auth/SignupForm";


export default function SignupPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2  ">
      <AuthBanner />
      <SignupForm />
    </div>
  );
}