import { validateEnv } from './utils'
import { getRecognisedIntent } from './api'
import { shoppingSearchResult, shoppingSearchResultAnswer }  from './shoppingSearchResult'
import type { Data }  from './shoppingSearchResult'

export const env = validateEnv(import.meta.env)

export const config = {
  apiUrl: env.VITE_MYWAVE_API_URL,
  loginUrl: env.VITE_MYWAVE_LOGIN_URL ?? '',
  signupUrl: env.VITE_MYWAVE_SIGNUP_URL ?? '',
  llmIntentRecogniseEndpoint: env.VITE_LLM_INTENT_RECOGNISE_ENDPOINT,
  llmIntentRecogniseApiKey: env.VITE_LLM_INTENT_RECOGNISE_API_KEY,
}

type RCF = {
  id: string
  contentType: string
  data: Data
  isSelected: boolean
}

type RCFAnswer = {
  contentType: string
  data: Data
}

export const mywaveUIOptions = {
  'history.enable': true,
  getRecognisedIntent,
  renderRichContentFieldOption: ({ id, contentType, data, isSelected}: RCF) => { 
    switch (contentType) {
      case 'productPurchase': { 
        return shoppingSearchResult({ ...data, id, isSelected}) 
      }  
    } 
    return '' 
  }, 
  renderRichContentFieldAnswer: ({ contentType, data }: RCFAnswer) => { 
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
