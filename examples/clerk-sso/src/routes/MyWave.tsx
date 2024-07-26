import { useUser } from "@clerk/clerk-react";
import myWaveRender, { MWSdk, MWSdkConfig } from "@mywave/ui";

import "@mywave/ui/dist/style.css";
import { useEffect } from "react";

const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  loginUrl: import.meta.env.VITE_LOGIN_URL,
  signupUrl: import.meta.env.VITE_SIGNUP_URL,
};

const sdkConfig = new MWSdkConfig(
  config.apiUrl,
  config.loginUrl,
  config.signupUrl,
);
const sdk = new MWSdk(sdkConfig);

sdkConfig.setLocale(window.navigator.language);

export default function MyWavePage() {
  const { user } = useUser();

  useEffect(() => {
    async function loginAndRender() {
      if (!user) return;

      await sdk.clearCurrentStoredAccount();
      await sdk.authenticate({
        username: user.id,
        password: "clerk-example",
      });

      myWaveRender("mywave", {
        sdk,
        sdkConfig,
        "history.enable": true,
      });
    }

    loginAndRender();
  }, [user]);

  return <div id="mywave" />;
}
