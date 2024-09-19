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

## Hosting

The MyWave Web Client is designed as a single-page application (SPA) and can be hosted using a static file server. It is intended to be deployed at the root directory of a domain. All incoming requests to the server should be redirected to the index.html file, which serves as the entry point for the application. This configuration allows the client-side routing to handle navigation within the app.

For hosting on major cloud platforms:

- Google Cloud Platform (GCP):

  1. Use Google Cloud Storage (GCS) to host the static files.
  2. Upload your application files to a GCS bucket.
  3. In the bucket's website configuration:
    - Set the index page suffix to "index.html"
    - Set the error page to "index.html"

- Amazon Web Services (AWS):

  1. Use Amazon S3 to store the static files.
  2. Upload your application files to an S3 bucket.
  3. Enable static website hosting on the bucket:
    - Set both the Index document and Error document to "index.html"

