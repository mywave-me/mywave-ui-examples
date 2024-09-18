import { MyWaveUi, MyWaveUiOptions } from "@mywave/ui-react";
import { MWSdk, MWSdkConfig } from "@mywave/sdk";
import { getRecognisedIntent } from "./recognised-intent";
import "@mywave/ui-react/dist/style.css";
import "./App.css";

const sdkConfig = new MWSdkConfig(
  MyWaveEnv.apiUrl,
  MyWaveEnv.loginUrl,
  MyWaveEnv.signupUrl,
).withStorageType("local");

const sdk = new MWSdk(sdkConfig);

function App() {
  const appOptions: MyWaveUiOptions = {
    "history.enable": true,
    "login.enable": true,
    getRecognisedIntent,
  };

  return (
    <MyWaveUi sdk={sdk} sdkConfig={sdkConfig} options={{ ...appOptions }} />
  );
}

export default App;
