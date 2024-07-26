import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "./routes/Dashboard";
import IndexPage from "./routes";
import RootLayout from "./layouts/RootLayout";
import SignInPage from "./routes/SignIn";
import SignUpPage from "./routes/SignUp";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [{ path: "/dashboard", element: <DashboardPage /> }],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
