import { MyWaveUi, MyWaveUiOptions } from "@mywave/ui-react";
import { MWSdk, MWSdkConfig } from "@mywave/sdk";
import "@mywave/ui-react/dist/style.css";
import "./App.css";

const apiUrl = "https://api.tesselate.dev.app.mywave.me";
const authUrl =
  "https://australia-southeast1-steam-house-272702.cloudfunctions.net/demo-auth-server";
const loginUrl = `${authUrl}/login`;
const signupUrl = `${authUrl}/signup`;

const sdkConfig = new MWSdkConfig(apiUrl, loginUrl, signupUrl).withStorageType(
  "local",
);

const sdk = new MWSdk(sdkConfig);

function App() {
  const appOptions: MyWaveUiOptions = {
    "history.enable": true,
    "login.enable": true,
  };

  return (
    <MyWaveUi sdk={sdk} sdkConfig={sdkConfig} options={{ ...appOptions }} />
  );
}

export default App;
