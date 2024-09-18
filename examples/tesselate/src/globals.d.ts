declare global {
  const MyWaveEnv: {
    apiUrl: string;
    loginUrl: string;
    signupUrl: string;
    llmIntentUrl: string;
  };
}

// This prevents TypeScript from treating this file as a module
export {};
