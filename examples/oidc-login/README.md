# MyWave OIDC login example

This application is en example of intergrate MyWave with OIDC login 

## Setup

To install all dependencies, run the following command:

```bash
pnpm install
```

## Local development

This example requires some environment variables to be configured before it can be built and run. Please ensure you have created a `.env.local` or change `.env` file in the root directory with the following variables configured:

```
VITE_OIDC_AUTHORITY=<URL of the OIDC/OAuth2 provider>
VITE_OIDC_CLIENT_ID=<Your client application's identifier as registered with the OIDC/OAuth2>
VITE_OIDC_CLIENT_SECRET=<Your client application's secret as registered with the OIDC/OAuth2>
VITE_API_URL=<Your MyWave platform url>
VITE_LOGIN_URL=<Your MyWave login url>
VITE_LLM_INTENT_RECOGNISE_ENDPOINT=<Your LLM intent recognition endpoint>
VITE_LLM_INTENT_RECOGNISE_API_KEY=<Your LLM intent recognition api key>
```

To run the example app locally for development purposes, run the following command:

```bash
pnpm dev
```

## Build the example app

Build the example app for deployment by running the following command:

```bash
pnpm build
```
