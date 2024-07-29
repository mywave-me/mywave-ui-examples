import { Link, Outlet } from "react-router-dom";
import css from "./RootLayout.module.scss";
import { mwSdk, userManager } from "../sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header className={css.header}>
          <div>
            <h1 className={css.title}>MyWave + OIDC Login</h1>
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
            <Link to="/sign-in/redirect" className={css.auth}>
              Sign In
            </Link>
            <button
              className={css.auth}
              onClick={async () => {
                await mwSdk.clearCurrentStoredAccount();
                await userManager.signoutRedirect();
              }}
            >
              Sign out
            </button>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </QueryClientProvider>
  );
}
