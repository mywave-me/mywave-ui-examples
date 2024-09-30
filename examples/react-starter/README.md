# MyWave UI React Starter

This template provides a minimal setup to get the MyWave UI working in a React application.

## Get started

Install the dependencies.

```bash
npm | yarn | pnpm install
```

Create your `.env` file at the root of the project (or simply rename the existing `.env.example` to `.env`) and add the required variables.

```bash
// ./.env

VITE_MYWAVE_API_URL=<MyWave backend platform URL>
VITE_LLM_INTENT_RECOGNISE_ENDPOINT=<LLM service endpoint>
VITE_LLM_INTENT_RECOGNISE_API_KEY=<LLM service API key>
VITE_MYWAVE_LOGIN_URL=<optional login service URL remove if not using>
VITE_MYWAVE_SIGNUP_URL=<optional signup service URL remove if not using>
```

Start the dev server.

```bash
npm run | yarn | pnpm dev
```
