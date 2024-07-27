import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import MyWaveLayout from "./layouts/MyWaveLayout";
import MyWavePage from "./routes/MyWave";
import IndexPage from "./routes";
import RootLayout from "./layouts/RootLayout";
import SignInPage from "./routes/SignIn";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <IndexPage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      {
        element: <MyWaveLayout />,
        path: "mywave",
        children: [{ path: "/mywave", element: <MyWavePage /> }],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
