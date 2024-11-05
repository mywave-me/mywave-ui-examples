import { validateEnv } from './utils'
import { getRecognisedIntent } from './api'
import { shoppingSearchResult, shoppingSearchResultAnswer }  from './shoppingSearchResult'
import type { Data }  from './shoppingSearchResult'
import type { RCF, RCFAnswer } from './rcf_types'

export const env = validateEnv(import.meta.env)

export const config = {
  apiUrl: env.VITE_MYWAVE_API_URL,
  loginUrl: env.VITE_MYWAVE_LOGIN_URL ?? '',
  signupUrl: env.VITE_MYWAVE_SIGNUP_URL ?? '',
  llmIntentRecogniseEndpoint: env.VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  llmIntentRecogniseApiKey: env.VITE_LLM_INTENT_RECOGNISE_API_KEY,
}

export const mywaveUIOptions = {
  'history.enable': true,
  getRecognisedIntent,
  renderRichContentFieldOption: ({ id, contentType, data, isSelected}: RCF<Data>) => { 
    switch (contentType) {
      case 'productPurchase': { 
        return shoppingSearchResult({ ...data, id, isSelected}) 
      }  
    } 
    return '' 
  }, 
  renderRichContentFieldAnswer: ({ contentType, data }: RCFAnswer<Data>) => { 
    if (data) { 
      switch (contentType) {
        case 'productPurchase': {
          return shoppingSearchResultAnswer(data) 
        } 
      } 
    } 
    return '' 
  }
}
