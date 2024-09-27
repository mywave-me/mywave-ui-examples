import { MWSdk, MWSdkConfig } from '@mywave/sdk'
import { MyWaveUi } from '@mywave/ui-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import '@mywave/ui-react/dist/style.css'

const config = {
  // The apiUrl should point to the MyWave backend platform. The frontend will not work without this.
  apiUrl: '',
  // The loginUrl and signupUrl are optional. They can be empty strings if not being used.
  loginUrl: '',
  signupUrl: '',
}

const sdkConfig = new MWSdkConfig(
  config.apiUrl,
  config.loginUrl,
  config.signupUrl
).withStorageType('local')

const sdk = new MWSdk(sdkConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyWaveUi sdk={sdk} sdkConfig={sdkConfig} options={{}} />
  </StrictMode>
)