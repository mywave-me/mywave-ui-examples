import { pipe, object, string, url, safeParse, optional } from 'valibot'

const v = {
  url: (fieldName: string) =>
    pipe(
      string(`${fieldName} must be string.`),
      url(`${fieldName} should be a url.`)
    ),
}

const ConfigSchema = object({
  VITE_MYWAVE_API_URL: v.url('VITE_API_URL'),
  VITE_MYWAVE_LOGIN_URL: optional(v.url('VITE_LOGIN_URL')),
  VITE_MYWAVE_SIGNUP_URL: optional(v.url('VITE_SIGNUP_URL')),
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
}
