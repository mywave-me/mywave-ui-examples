import {
  pipe,
  object,
  string,
  url,
  safeParse,
  optional,
  minLength,
} from 'valibot'

const v = {
  string: (fieldName: string, min = 0) =>
    pipe(
      string(`${fieldName} must be string.`),
      minLength(min, `${fieldName} must not be empty.`)
    ),
  url: (fieldName: string) =>
    pipe(
      string(`${fieldName} must be string.`),
      url(`${fieldName} should be a url.`)
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

const result = safeParse(ConfigSchema, import.meta.env)

if (!result.success) {
  console.error(
    'Environment variables (.env) not configured correctly, check the following issues:'
  )
  for (const issue of result.issues) {
    console.error(issue.message)
  }
  throw new Error('ENVIRONMENT_VARIABLES_INVALID')
}

export const config = {
  apiUrl: result.output.VITE_MYWAVE_API_URL,
  loginUrl: result.output.VITE_MYWAVE_LOGIN_URL ?? '',
  signupUrl: result.output.VITE_MYWAVE_SIGNUP_URL ?? '',
  llmIntentRecogniseEndpoint: result.output.VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  llmIntentRecogniseApiKey: result.output.VITE_LLM_INTENT_RECOGNISE_API_KEY,
}
