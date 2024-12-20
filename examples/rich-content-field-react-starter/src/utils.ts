import { pipe, object, string, minLength, url, parse, optional } from 'valibot'

export function validateEnv(env: Record<string, unknown>) {
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
  }

  const ConfigSchema = object({
    VITE_MYWAVE_API_URL: v.url('VITE_MYWAVE_API_URL'),
    VITE_MYWAVE_LOGIN_URL: optional(v.url('VITE_MYWAVE_LOGIN_URL')),
    VITE_MYWAVE_SIGNUP_URL: optional(v.url('VITE_MYWAVE_SIGNUP_URL')),
    VITE_LLM_INTENT_RECOGNISE_ENDPOINT: v.url(
      'VITE_LLM_INTENT_RECOGNISE_ENDPOINT'
    ),
    VITE_LLM_INTENT_RECOGNISE_API_KEY: optional(
      v.string('VITE_LLM_INTENT_RECOGNISE_API_KEY')
    ),
  })

  return parse(ConfigSchema, env)
}
