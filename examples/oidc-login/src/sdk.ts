import { UserManager } from "oidc-client-ts";
import { MWSdk, MWSdkConfig } from "@mywave/ui";
import { config } from "./config";

export const userManager = new UserManager({
  authority: config.VITE_OIDC_AUTHORITY,
  client_id: config.VITE_OIDC_CLIENT_ID,
  client_secret: config.VITE_OIDC_CLIENT_SECRET,
  redirect_uri: "http://localhost:5173/sign-in/callback",
  post_logout_redirect_uri: "http://localhost:5173/",
  scope: "openid offline_access",
});

export const mwSdkConfig = new MWSdkConfig(
  config.VITE_MYWAVE_API_URL ?? '',
  config.VITE_MYWAVE_LOGIN_URL ?? '',
  '',
);
mwSdkConfig.setLocale(window.navigator.language);

export const mwSdk = new MWSdk(mwSdkConfig);
