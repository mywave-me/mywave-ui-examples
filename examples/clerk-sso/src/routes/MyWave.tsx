import "@mywave/ui/dist/style.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { User } from "oidc-client-ts";

import myWaveRender from "@mywave/ui";
import { mwSdk, mwSdkConfig, userManager } from "../sdk";

export default function MyWavePage() {
  const { data: user, error } = useQuery({
    queryKey: ["user"],
    queryFn: () => userManager.getUser(),
  });

  useEffect(() => {
    if (user) {
      loginAndRender(user);
    }
  }, [user]);

  if (error) {
    return (
      <div className="pageCenter">
        {error?.message ?? "Failed to render MyWave"}
      </div>
    );
  }
  if (!user) {
    return <div className="pageCenter">Sign in to use MyWave</div>;
  }

  return <div id="mywave" />;
}

async function loginAndRender(user: User) {
  await mwSdk.clearCurrentStoredAccount();
  await mwSdk.authenticate({
    accessToken: user.access_token,
    refreshToken: user.refresh_token,
  });

  myWaveRender("mywave", {
    sdk: mwSdk,
    sdkConfig: mwSdkConfig,
    "history.enable": true,
  });
}
