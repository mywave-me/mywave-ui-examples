import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="pageCenter">
      <SignIn path="/sign-in" />
    </div>
  );
}
