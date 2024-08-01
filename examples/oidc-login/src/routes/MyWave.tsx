import "@mywave/ui/dist/style.css";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { User } from "oidc-client-ts";

import myWaveRender from "@mywave/ui";
import { mwSdk, mwSdkConfig, userManager } from "../sdk";
import { format } from "date-fns";
import { config } from "../config";

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
    getRecognisedIntent,
  });
}

async function getRecognisedIntent(input: string) {
  // this format is required by the LLM API
  const formattedDateTime = format(
    new Date(),
    "yyyy-MM-dd'T'HH:mm:ss.SSSSSSXXX",
  );

  const res = await fetch(config.VITE_LLM_INTENT_RECOGNISE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: input,
      current_date_time: formattedDateTime,
      api_key: config.VITE_LLM_INTENT_RECOGNISE_API_KEY,
    }),
  });

  type RecognisedIntent = {
    intent: string;
    recognised_intent: {
      type: string;
      extracted_values: Record<string, string>;
    };
  };

  const data: RecognisedIntent = await res.json();

  return data;
}
