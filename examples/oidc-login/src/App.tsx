import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import IndexPage from "./routes/index";
import MyWavePage from "./routes/MyWave";
import SignInRedirect from "./routes/SignInRedirect";
import SignInCallback from "./routes/SignInCallback";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in/redirect", element: <SignInRedirect /> },
      { path: "/sign-in/callback", element: <SignInCallback /> },
      { path: "/mywave", element: <MyWavePage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
