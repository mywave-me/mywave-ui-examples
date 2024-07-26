import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
      <header>
        <div>
          <h1>MyWave + Clerk SSO</h1>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <SignedOut>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </SignedOut>

          <SignedIn>
            <li>
              <SignOutButton />
            </li>
          </SignedIn>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
