import { UserManager } from "oidc-client-ts";
import { MWSdk, MWSdkConfig } from "@mywave/ui";

const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  loginUrl: import.meta.env.VITE_LOGIN_URL,
  signupUrl: import.meta.env.VITE_SIGNUP_URL,
  oidcClientId: import.meta.env.VITE_OIDC_CLIENT_ID,
  oidcClientSecret: import.meta.env.VITE_OIDC_CLIENT_SECRET,
  oidcAuthority: import.meta.env.VITE_OIDC_AUTHORITY,
};

export const userManager = new UserManager({
  authority: config.oidcAuthority,
  client_id: config.oidcClientId,
  client_secret: config.oidcClientSecret,
  redirect_uri: "http://localhost:5173/sign-in/callback",
  post_logout_redirect_uri: "http://localhost:5173/",
  scope: "openid offline_access",
});

export const mwSdkConfig = new MWSdkConfig(
  config.apiUrl,
  config.loginUrl,
  config.signupUrl,
);
mwSdkConfig.setLocale(window.navigator.language);

export const mwSdk = new MWSdk(mwSdkConfig);
