import {
  pipe,
  object,
  string,
  minLength,
  url,
  safeParse,
  optional,
} from "valibot";

const v = {
  string: (fieldName: string, min = 0) =>
    pipe(
      string(`${fieldName} must be string.`),
      minLength(min, `${fieldName} must not be empty.`),
    ),
  url: (fieldName: string) =>
    pipe(
      string(`${fieldName} must be string.`),
      url(`${fieldName} should be a url.`),
    ),
};

const ConfigSchema = object({
  VITE_OIDC_AUTHORITY: v.url("VITE_OIDC_AUTHORITY"),
  VITE_OIDC_CLIENT_ID: v.string("VITE_CLIENT_ID"),
  VITE_OIDC_CLIENT_SECRET: optional(v.string("VITE_OIDC_CLIENT_SECRET")),

  VITE_API_URL: v.url("VITE_API_URL"),
  VITE_LOGIN_URL: v.url("VITE_LOGIN_URL"),

  VITE_LLM_INTENT_RECOGNISE_ENDPOINT: v.url(
    "VITE_LLM_INTENT_RECOGNISE_ENDPOINT",
  ),
  VITE_LLM_INTENT_RECOGNISE_API_KEY: optional(
    v.string("VITE_LLM_INTENT_RECOGNISE_API_KEY"),
  ),
});

const result = safeParse(ConfigSchema, import.meta.env);

if (!result.success) {
  console.error(
    "Environment variables (.env) not configured correctly, check the following issues:",
  );
  for (const issue of result.issues) {
    console.error(issue.message);
  }
  throw new Error("ENVIRONMENT_VARIABLES_INVALID");
}

export const config = result.output;
