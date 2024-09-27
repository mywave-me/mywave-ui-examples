# MyWave UI React Starter

This template provides a minimal setup to get the MyWave UI working in a React application.

## Get started

Install the dependencies.

```bash
npm | yarn | pnpm install
```

Update the MyWave `config`. All that is required is the `apiUrl` for the `config` in the `main.tsx`. This should be the URL of the MyWave backend platform you want to MyWave UI point to. However if you are using the `loginUrl` and `signupUrl` you can add these as well (they are not required though so just leave if you are not sure).

```tsx
// ./src/main.tsx

const config = {
  // The apiUrl should point to the MyWave backend platform. The frontend will not work without this.
  apiUrl: '<MyWave backend platform URL>',
  // The loginUrl and signupUrl are optional. They can be empty strings if not being used.
  loginUrl: '',
  signupUrl: '',
}
```

Start the dev server.

```bash
npm run | yarn | pnpm dev
```
