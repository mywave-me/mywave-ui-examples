import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/clerk-react";
import css from "./RootLayout.module.scss";

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
      <header className={css.header}>
        <div>
          <h1 className={css.title}>MyWave + Clerk SSO</h1>
        </div>
        <ul className={css.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mywave">MyWave</Link>
          </li>
        </ul>
        <div>
          <SignedOut>
            <Link to="/sign-in" className={css.auth}>
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <button className={css.auth}>Sign out</button>
            </SignOutButton>
          </SignedIn>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </ClerkProvider>
  );
}
