import { SignIn, useAuth } from "@clerk/clerk-react";
import { Outlet } from "react-router-dom";
export default function MyWaveLayout() {
  const { userId } = useAuth();

  return userId ? (
    <Outlet />
  ) : (
    <div className="pageCenter">
      <SignIn path="/mywave" forceRedirectUrl="/mywave" />
    </div>
  );
}
