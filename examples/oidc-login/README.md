# MyWave with OIDC login example

This application demonstrates how to do OAuth2 login with an OIDC provider.

## Setup

To install all dependencies, run the following command:

```bash
pnpm install
```

## Local development

To run the example app locally for development purposes, run the following command:

```bash
pnpm dev
```

### Environment varialbes

This example requires some environment variables to be configured before it can be built or run. Please ensure you have created a `.env.local` or change `.env` file in the root directory with the following variables configured:

```
VITE_OIDC_AUTHORITY=<URL of the OIDC/OAuth2 provider>
VITE_OIDC_CLIENT_ID=<Your client application's identifier as registered with the OIDC/OAuth2>
VITE_OIDC_CLIENT_SECRET=<Your client application's secret as registered with the OIDC/OAuth2>
VITE_API_URL=<Your MyWave platform url>
VITE_LOGIN_URL=<Your MyWave login url>
VITE_LLM_INTENT_RECOGNISE_ENDPOINT=<Your LLM intent recognition endpoint>
VITE_LLM_INTENT_RECOGNISE_API_KEY=<Your LLM intent recognition api key>
```

### for SAP B1

To run the application against B1 as the OIDC provider, you should set the following environment variables

```
VITE_OIDC_AUTHORITY=<Authentication Server Address>/auth/realms/sapb1/
VITE_OIDC_CLIENT_ID=<OIDC Client ID>
VITE_OIDC_CLIENT_SECRET=
VITE_API_URL=<MyWave LB address>/mywave
VITE_LOGIN_URL=<MyWave LB address>/integration/api/sso/login
VITE_LLM_INTENT_RECOGNISE_ENDPOINT=<MyWave LB address>/integation/api/llm/intent
```

For example, if the "Authentication Server Address", "OIDC Client ID", and "MyWave LB address" for B1 are "https://sapb1.cloudiax.com:40020", "b1-ext-X", and "https://sapb1.app.mywave.me" respectively, the configuration in the `.env.local` file should be:

```
VITE_OIDC_AUTHORITY=https://sapb1.cloudiax.com:40020/auth/realms/sapb1/
VITE_OIDC_CLIENT_ID=b1-ext-X
VITE_OIDC_CLIENT_SECRET=
VITE_API_URL=https://sapb1.app.mywave.me/mywave
VITE_LOGIN_URL=https://sapb1.app.mywave.me/integation/api/sso/login
VITE_LLM_INTENT_RECOGNISE_ENDPOINT=https://sapb1.app.mywave.me/integation/api/llm/intent
```

B1 does not ask for OIDC client secret, so you should leave `VITE_OIDC_CLIENT_SECRET` empty.

### Instructions to get <Authentication Server Address> and <Client ID> on SAP B1.

TBD

## Build the example app

Build the example app for deployment by running the following command:

```bash
pnpm build
```
