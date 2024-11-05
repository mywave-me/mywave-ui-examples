import { validateEnv} from './utils'

export const env = validateEnv(import.meta.env)

export const config = {
  apiUrl: env.VITE_MYWAVE_API_URL,
  loginUrl: env.VITE_MYWAVE_LOGIN_URL ?? '',
  signupUrl: env.VITE_MYWAVE_SIGNUP_URL ?? '',
  llmIntentRecogniseEndpoint: env.VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  llmIntentRecogniseApiKey: env.VITE_LLM_INTENT_RECOGNISE_API_KEY,
}
