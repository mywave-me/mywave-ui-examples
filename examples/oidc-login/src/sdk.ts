import { UserManager } from "oidc-client-ts";
import { MWSdk, MWSdkConfig } from "@mywave/ui";

const {
  VITE_API_URL,
  VITE_LOGIN_URL,
  VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  VITE_LLM_INTENT_RECOGNISE_API_KEY,
  VITE_OIDC_CLIENT_ID,
  VITE_OIDC_CLIENT_SECRET,
  VITE_OIDC_AUTHORITY,
} = import.meta.env;

export const config = {
  apiUrl: VITE_API_URL,
  loginUrl: VITE_LOGIN_URL,
  signupUrl: "",
  llmIntentRecogniseEndpoint: VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  llmIntentRecogniseApiKey: VITE_LLM_INTENT_RECOGNISE_API_KEY,
  oidcClientId: VITE_OIDC_CLIENT_ID,
  oidcClientSecret: VITE_OIDC_CLIENT_SECRET,
  oidcAuthority: VITE_OIDC_AUTHORITY,
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
