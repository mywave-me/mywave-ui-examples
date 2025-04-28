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
VITE_MYWAVE_LOGIN_URL=<optional login service URL. Remove if not using>
VITE_MYWAVE_SIGNUP_URL=<optional signup service URL. Remove if not using>
```

Start the dev server.

```bash
npm run | yarn | pnpm dev
```

## Customization

In the `public` folder find `theme.css` file. This is the file where all styling customization can be done.
Simply add css variables into the class `.MyWaveUI`.
Some of them, most commonly used, are already there. We also commented the purpose of those variables.

The whole list of variables used in the app can be found at the end of the file.
Simply move any of them into `.MyWaveUI` and redefine the value.

### Logo(s)

Logo is set in the same `theme.css` file:

- `--mw-landing-page-logo` this variable is responsible for the logo on the landing page
- `--mw-sidebar-logo` this variable is responsible for the logo on the left hand side panel

### Favicon

Update `favicon.svg` file in the `public` folder and the app will use your updated favicon.

## Building the app

When you are ready to build the app, run

```bash
npm run | yarn | pnpm build
```
