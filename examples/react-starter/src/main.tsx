import { MWSdk, MWSdkConfig } from '@mywave/sdk'
import { MyWaveUi } from '@mywave/ui-react'
import { StrictMode } from 'react'
import { config } from './config'
import { createRoot } from 'react-dom/client'

import './index.css'
import '@mywave/ui-react/dist/style.css'

const sdkConfig = new MWSdkConfig(
  config.apiUrl,
  config.loginUrl,
  config.signupUrl
).withStorageType('local')

const sdk = new MWSdk(sdkConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyWaveUi
      sdk={sdk}
      sdkConfig={sdkConfig}
      options={{
        'history.enable': true,
      }}
    />
  </StrictMode>
)
