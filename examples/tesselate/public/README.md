# MyWave Web Client

## Configure

The urls is configurable in `mywave-env.js`. Change the properties of `MyWaveEnv` to the urls that the client should connect to.

```javascript
const MyWaveEnv = {
  apiUrl: <your_mywave_platform_url>,
  loginUrl: <your_mywave_login_url>,
  signupUrl: <your_mywave_login_url>,
  llmIntentUrl: <your_llm_intent_recognition_endpoint>,
};
```