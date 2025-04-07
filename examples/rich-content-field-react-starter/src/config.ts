import { validateEnv } from './utils'
import { shoppingSearchResult, shoppingSearchResultAnswer }  from './shoppingSearchResult'
import type { Data }  from './shoppingSearchResult'
import type { RCF, RCFAnswer } from './rcfTypes'

export const env = validateEnv(import.meta.env)

export const config = {
  apiUrl: env.VITE_MYWAVE_API_URL,
  loginUrl: env.VITE_MYWAVE_LOGIN_URL ?? '',
  signupUrl: env.VITE_MYWAVE_SIGNUP_URL ?? '',
}

export const mywaveUIOptions = {
  'history.enable': true,
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
