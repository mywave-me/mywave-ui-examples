# MyWave UI React Starter

This template provides a minimal setup to get the MyWave UI working in a React application.

## Get started

Install the dependencies.

```bash
npm | yarn | pnpm install
```

Add your `.env` file. You will need to create a `.env` file at the root of the project (or simply rename the existing `.env.example` to `.env`). The only required variable is the `VITE_MYWAVE_API_URL` one. This should be the URL of the MyWave backend platform you want to MyWave UI point to. However if you are using the `VITE_MYWAVE_LOGIN_URL` and `VITE_MYWAVE_SIGNUP_URL` you can add these as well (they are not required though so just remove them if you are not sure).

```bash
// ./.env

VITE_MYWAVE_API_URL=<MyWave backend platform URL>
VITE_MYWAVE_LOGIN_URL=<optional login service URL remove if not using>
VITE_MYWAVE_SIGNUP_URL=<optional signup service URL remove if not using>
```

Start the dev server.

```bash
npm run | yarn | pnpm dev
```
